import { Resend } from 'resend'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const supportReasonOptions = new Set([
  'Anxiety',
  'Depression',
  'Relationships',
  'Life transitions',
  'Immigration & adjustment',
  'Self-esteem',
  'Anger management',
  'Faith-based',
  'Trauma',
  'Career development',
  'Other',
])
const contactMethodOptions = new Set(['Email', 'Text', 'Phone', 'Not provided'])
const stateLocationOptions = new Set(['NJ', 'NY', 'Other', 'Not provided'])

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function cleanSupportReasons(value: unknown) {
  if (!Array.isArray(value)) return []

  return [...new Set(
    value
      .map((reason) => clean(reason, 80))
      .filter((reason) => supportReasonOptions.has(reason)),
  )]
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character] || character)
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get('origin')
  const host = request.headers.get('host')
  if (!origin || !host) return true

  try {
    return new URL(origin).host === host
  } catch {
    return false
  }
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return Response.json({ error: 'Invalid request origin.' }, { status: 403 })
  }

  const contentLength = Number(request.headers.get('content-length') || 0)
  if (contentLength > 12_000) {
    return Response.json({ error: 'Request is too large.' }, { status: 413 })
  }

  let payload: Record<string, unknown>
  try {
    payload = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 })
  }

  if (clean(payload.website, 200)) {
    return Response.json({ ok: true })
  }

  const name = clean(payload.name, 100)
  const email = clean(payload.email, 200).toLowerCase()
  const phone = clean(payload.phone, 30)
  const contactMethod = clean(payload.contactMethod, 20) || 'Not provided'
  const stateLocation = clean(payload.stateLocation, 20) || 'Not provided'
  const sessionPreference = clean(payload.sessionPreference, 80)
  const supportReasons = cleanSupportReasons(payload.supportReasons)
  const message = clean(payload.message, 2000)
  const consent = payload.consent === true
  const submittedRequestId = clean(payload.requestId, 80)

  if (
    !name
    || !emailPattern.test(email)
    || !contactMethodOptions.has(contactMethod)
    || !stateLocationOptions.has(stateLocation)
    || !sessionPreference
    || !consent
  ) {
    return Response.json({ error: 'Please complete the required fields.' }, { status: 422 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const senderDomain = process.env.RESEND_EMAIL_DOMAIN
  const recipient = process.env.SESSION_REQUEST_TO_EMAIL

  if (!apiKey || !senderDomain || !recipient || !emailPattern.test(recipient)) {
    console.error('Session request email is not fully configured.')
    return Response.json({ error: 'Email service is not configured.' }, { status: 503 })
  }

  const safeRequestId = /^[a-z0-9-]{16,80}$/i.test(submittedRequestId)
    ? submittedRequestId
    : crypto.randomUUID()
  const resend = new Resend(apiKey)
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(phone || 'Not provided')
  const safeContactMethod = escapeHtml(contactMethod)
  const safeStateLocation = escapeHtml(stateLocation)
  const safePreference = escapeHtml(sessionPreference)
  const safeSupportReasons = escapeHtml(supportReasons.join(', ') || 'Not provided')
  const safeMessage = escapeHtml(message || 'No message provided').replace(/\n/g, '<br />')

  const { error } = await resend.emails.send(
    {
      from: `Journey 2 Grow Therapy <inquiries@${senderDomain}>`,
      to: [recipient],
      replyTo: email,
      subject: `New session request from ${name}`,
      html: `
        <h1>New session request</h1>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Preferred contact method:</strong> ${safeContactMethod}</p>
        <p><strong>State / location:</strong> ${safeStateLocation}</p>
        <p><strong>Session preference:</strong> ${safePreference}</p>
        <p><strong>Main reasons for seeking support:</strong> ${safeSupportReasons}</p>
        <p><strong>Message:</strong><br />${safeMessage}</p>
      `,
      text: [
        'New session request',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Preferred contact method: ${contactMethod}`,
        `State / location: ${stateLocation}`,
        `Session preference: ${sessionPreference}`,
        `Main reasons for seeking support: ${supportReasons.join(', ') || 'Not provided'}`,
        `Message: ${message || 'No message provided'}`,
      ].join('\n\n'),
      tags: [{ name: 'email_type', value: 'session_request' }],
    },
    { idempotencyKey: `session-request/${safeRequestId}` },
  )

  if (error) {
    console.error('Resend session request failed.', { name: error.name })
    return Response.json({ error: 'Email could not be sent.' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
