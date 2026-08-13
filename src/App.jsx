import { useEffect, useLayoutEffect, useState } from 'react'
import Lenis from 'lenis'
import { PortableText } from '@portabletext/react'
import logoUrl from '../assets/Journey2grow_Logo 3.svg?url'
import HomeConcept from './HomeConcept.jsx'
import { urlForImage } from './sanity/image'
import {
  ArrowRightIcon as ArrowRight,
  CaretDownIcon as CaretDown,
  CheckIcon as Check,
  GlobeHemisphereWestIcon as GlobeHemisphereWest,
  ListIcon as List,
  MapPinIcon as MapPin,
  SealCheckIcon as SealCheck,
  TranslateIcon as Translate,
  XIcon as X,
} from '@phosphor-icons/react'

const supportAreas = [
  ['Anxiety', 'Make space around worry and build steadier ways to respond.', '/images/support/anxiety.png', '/images/support/anxiety@2x.png'],
  ['Depression', 'Reconnect with energy, meaning, and a more workable daily rhythm.', '/images/support/depression.png', '/images/support/depression@2x.png'],
  ['Relationships', 'Understand patterns and practice clearer, healthier connection.', '/images/support/relationships.png', '/images/support/relationships@2x.png'],
  ['Life transitions', 'Find footing through change, uncertainty, and new chapters.', '/images/support/life-transitions.png', '/images/support/life-transitions@2x.png'],
  ['Immigration & adjustment', 'Process belonging, identity, and the strain of adaptation.', '/images/support/immigration-adjustment.png', '/images/support/immigration-adjustment@2x.png'],
  ['Self-esteem', 'Develop a kinder and more grounded relationship with yourself.', '/images/support/self-esteem.png', '/images/support/self-esteem@2x.png'],
  ['Anger management', 'Recognize triggers and build choices before reactions take over.', '/images/support/anger-management.png', '/images/support/anger-management@2x.png'],
  ['Faith-based', 'Navigate your quest based on your faith. You shouldn’t have to choose between faith and therapy.', '/images/support/faith-based-illustration.png', '/images/support/faith-based-illustration@2x.png'],
  ['Trauma', 'Process painful events, reduce distress, and build healthy coping skills.', '/images/support/Area - Trauma.png', '/images/support/Area - Trauma@2x.png'],
  ['Career development', 'It helps you clarify your personal values, remove mental blocks, and build a sustainable professional path.', '/images/support/Area - Career development.png', '/images/support/Area - Career development@2x.png'],
]

const approaches = ['Psychodynamic', 'Psychoanalytic', 'CBT', 'ACT', 'DBT', 'IFS', 'Attachment-based', 'Solution-focused', 'Person-centered', 'Trauma-focused']

const acceptedInsurances = [
  'Aetna',
  'Allied Benefit Systems – Aetna',
  'AllSavers UHC',
  'Harvard Pilgrim',
  'Health Plans Inc.',
  'Horizon Blue Cross and Blue Shield',
  'Medicare',
  'Meritain Health',
  'Nippon',
  'Optum',
  'Oscar Health',
  'Oxford',
  'Surest',
  'Trustmark Health Benefits',
  'UHC Student Resources',
  'UnitedHealthcare Shared Services',
  'United Medical Resources (UMR)',
  'UnitedHealthcare UHC | UBH',
  'Out of Network',
]

const faqs = [
  {
    question: 'What kind of therapy do you offer?',
    answer: 'I tailor therapy to each person and their needs, drawing from psychodynamic, CBT, and other evidence-based approaches. We’ll address what is happening in your life today while also exploring the patterns, experiences, and relationships that may be shaping how you feel and respond.',
  },
  {
    question: 'Is your approach brief or long-term?',
    answer: 'Therapy can be short- or long-term depending on your needs and goals. It may focus on addressing an immediate concern, finding practical solutions, and gaining perspective in the present, or it can offer more space to explore deeper patterns in your thoughts, relationships, and life. For some, therapy is focused support during a difficult time, while for others it becomes an ongoing process of self-understanding, reflection, and personal growth.',
  },
  {
    question: 'How often would we meet?',
    answer: 'Individual therapy sessions are typically scheduled weekly at the beginning. As we progress, we may transition to biweekly sessions depending on your needs and goals. Some clients choose to continue with monthly sessions as a way to check in, reflect on their progress, or reconnect with what they have learned and experienced in therapy. There is no one-size-fits-all approach to frequency, and I’m always happy to discuss what feels most helpful and appropriate for you.',
  },
  {
    question: 'How long are sessions?',
    answer: 'The initial intake session is 75 minutes, offering additional time to talk about what brings you to therapy and what you hope might change. Regular individual therapy sessions are 55 minutes.',
  },
  {
    question: 'Can I bring someone to my sessions?',
    answer: 'My primary focus is individual therapy. However, depending on your needs and treatment goals, it may sometimes be helpful to invite someone important in your life to participate in a session. If we feel that a couples or family session would be beneficial, we will discuss it together and plan in advance so that everyone is prepared and the session remains focused on your therapeutic goals. We will also talk through how confidentiality may be affected when another person is involved, so you can make an informed and comfortable decision.',
  },
  {
    question: 'What hours do you offer?',
    answer: 'My regular hours are Monday through Friday during the daytime. I understand that standard business hours do not work for everyone, so I can occasionally arrange an evening session when scheduling requires it. We can discuss your scheduling needs during our initial consultation.',
  },
]

function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let lenis

    const configure = () => {
      lenis?.destroy()
      lenis = undefined
      if (reduceMotion.matches) return

      lenis = new Lenis({
        autoRaf: true,
        lerp: 0.085,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.9,
      })
    }

    configure()
    reduceMotion.addEventListener('change', configure)

    return () => {
      reduceMotion.removeEventListener('change', configure)
      lenis?.destroy()
    }
  }, [])

  return null
}

function ScrollReveal({ path }) {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const selector = [
      '.about-grid > *',
      '.meet-grid > *',
      '.meet-trust',
      '.section-heading > *',
      '.support-card',
      '.expect-grid > *',
      '.session-steps > article',
      '.approach-cloud',
      '.fees-grid > *',
      '.logistics-top > *',
      '.logistics-grid > *',
      '.faq-intro > *',
      '.faq-item',
      '.booking-hero-grid > *',
      '.booking-grid > *',
      '.blog-page .page-shell > *',
      '.blog-card',
      '.post-content > *',
      '.footer-main > *',
      '.footer-detail',
      '.footer-copyright',
    ].join(',')
    const elements = [...document.querySelectorAll(selector)]

    elements.forEach((element) => {
      const siblings = [...element.parentElement.children]
      const position = Math.min(siblings.indexOf(element), 4)
      element.classList.add('scroll-reveal')
      element.style.setProperty('--reveal-delay', `${position * 65}ms`)
    })

    document.documentElement.classList.add('motion-ready')

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return () => document.documentElement.classList.remove('motion-ready')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [path])

  return null
}

function RouteLink({ href, className = '', children, onNavigate: _onNavigate, ...props }) {
  return <a href={href} className={className} {...props}>{children}</a>
}

function Header({ onNavigate }) {
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const sentinel = document.querySelector('.header-sentinel')
    if (!sentinel || !('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setCompact(!entry.isIntersecting),
      { rootMargin: '24px 0px 0px 0px', threshold: 0 },
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <span className="header-sentinel" aria-hidden="true" />
      <header className={`site-header ${compact ? 'is-compact' : ''}`}>
        <div className="nav-shell">
          <RouteLink href="/" onNavigate={onNavigate} className="wordmark" aria-label="Journey 2 Grow Therapy home">
            <img
              className="wordmark-logo"
              src={logoUrl}
              alt=""
              width="548"
              height="269"
            />
          </RouteLink>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <RouteLink href="/blog" className="nav-link">Journal</RouteLink>
            <RouteLink href="/booking" onNavigate={onNavigate} className="nav-cta">Book a consultation <ArrowRight size={16} weight="bold" /></RouteLink>
          </nav>
          <button className="menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={23} /> : <List size={23} />}
          </button>
        </div>
        {open && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <RouteLink href="/" onNavigate={(href) => { onNavigate(href); setOpen(false) }}>Home</RouteLink>
            <RouteLink href="/blog">Journal</RouteLink>
            <RouteLink href="/booking" onNavigate={(href) => { onNavigate(href); setOpen(false) }}>Book a consultation</RouteLink>
          </nav>
        )}
      </header>
    </>
  )
}

function ButtonLink({ href = '/booking', onNavigate, children, light = false }) {
  return <RouteLink href={href} onNavigate={onNavigate} className={`button ${light ? 'button-light' : ''}`}>{children}<ArrowRight size={17} weight="bold" /></RouteLink>
}

function TrustRow({ compact = false }) {
  const facts = [
    [SealCheck, 'NY & NJ licensed'],
    [GlobeHemisphereWest, 'Online & in person'],
    [Translate, 'English & Korean'],
    [Check, 'Insurance varies by plan'],
  ]
  return (
    <div className={`trust-row ${compact ? 'compact' : ''}`}>
      {facts.map(([Icon, label]) => <div key={label}><Icon size={19} weight="regular" /><span>{label}</span></div>)}
    </div>
  )
}

function Home({ onNavigate }) {
  return (
    <main>
      <section className="hero section-pad">
        <div className="page-shell hero-copy reveal">
          <h1>Welcome. I’m glad you’re here.</h1>
          <div className="hero-intro">
            <p>Sometimes, we find ourselves carrying questions, feelings, or struggles that are difficult to put into words—or difficult to share with anyone else.</p>
            <p>Therapy can be a supportive place to slow down, feel heard, and explore what matters to you. It can be a space not only to work through life’s challenges, but also to better understand yourself, your relationships, and the questions you may have been quietly carrying on your own.</p>
            <p>You don’t have to have everything figured out before you begin.</p>
            <p>Perhaps therapy can be a place to begin exploring.</p>
          </div>
          <ButtonLink onNavigate={onNavigate}>Request a free 15-minute consultation</ButtonLink>
        </div>
      </section>

      <section className="meet section-pad" id="about">
        <div className="page-shell meet-grid">
          <div className="portrait-composition">
            <div className="portrait-frame">
              <img src="/images/eunice-lee.png" width="320" height="400" alt="Eunice Lee, licensed clinical social worker" />
            </div>
          </div>
          <div className="meet-copy">
            <h2>Meet Eunice</h2>
            <p className="meet-lead">I believe therapy is a place where you can feel supported, understood, and curious about yourself.</p>
            <p>I’m Eunice Lee, a Licensed Clinical Social Worker licensed in New York and New Jersey.</p>
            <p>My approach is warm, thoughtful, and collaborative. I draw from psychodynamic, cognitive-behavioral, and other evidence-based approaches, adapting therapy to each person and their unique needs.</p>
            <p>I’m not the kind of therapist who simply sits quietly and nods. I listen carefully, but I also ask questions, offer observations, and gently challenge you when it may help. Together, we can explore the patterns that show up within you, in your relationships, and throughout your life—and understand how your past experiences may be shaping your present.</p>
            <p>Therapy can also be a place to explore the private questions that matter deeply to you: who you are, what you want, and what gives your life meaning.</p>
            <p>My goal is not only to help you feel better, but to help you understand yourself more deeply and find a way forward that feels meaningful to you.</p>
            <aside className="how-i-work">
              <h3>How I Work</h3>
              <p>I listen closely. I ask questions. I help you notice patterns. And I walk alongside you as you discover what matters and what you want to change.</p>
            </aside>
          </div>
        </div>
        <div className="page-shell meet-trust"><TrustRow /></div>
      </section>

      <section className="about section-pad">
        <div className="page-shell about-grid">
          <div>
            <h2><span className="no-break">A collaborative</span> space to understand what you’re carrying.</h2>
          </div>
          <div className="about-body">
            <p className="lead">My approach to therapy is collaborative and client-centered. I help you better understand what you are experiencing, build practical coping skills, and work toward clarity, resilience, and healthier relationships.</p>
            <div className="credentials">
              <div><strong>10 years</strong><span>in practice</span></div>
              <div><strong>Columbia</strong><span>MSW, 2016</span></div>
              <div><strong>CCTP</strong><span>certified, 2022</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="support section-pad" id="support">
        <div className="page-shell">
          <div className="section-heading section-heading-direct support-heading">
            <h2>Areas of support</h2>
            <span aria-hidden="true" />
          </div>
          <ul className="support-grid">
            {supportAreas.map(([title, copy, image, retinaImage]) => (
              <li className="support-card" key={title}>
                <div className="support-card-image">
                  <img src={image} srcSet={`${image} 1x, ${retinaImage} 2x`} alt="" width="410" height="261" />
                </div>
                <div className="support-card-content">
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="expect section-pad" id="approach">
        <div className="page-shell expect-grid">
          <div className="expect-sticky">
            <h2>What to expect</h2>
            <p className="expect-lead">Warmth. Curiosity. Honest conversation.</p>
            <p>A space where you can feel heard while also being gently encouraged to look deeper, discover patterns, and understand yourself in new ways.</p>
          </div>
          <div className="session-steps">
            <article><span>01</span><div><h3>Begin with an intake</h3><p>Your first 75-minute session offers time to share what brings you in and what you hope might change.</p></div></article>
            <article><span>02</span><div><h3>Build a plan together</h3><p>The first two to three sessions focus on getting to know you and creating a treatment plan grounded in your goals.</p></div></article>
            <article><span>03</span><div><h3>Continue with steady support</h3><p>Regular 55-minute, one-to-one sessions are available online or in person in Basking Ridge.</p></div></article>
            <div className="approach-cloud" aria-label="Therapy approaches used">
              {approaches.map((approach) => <span key={approach}>{approach}</span>)}
            </div>
            <p className="approach-note">These modalities reflect the approaches I draw from in sessions, tailored to each client’s needs and style.</p>
          </div>
        </div>
      </section>

      <section className="fees section-pad">
        <div className="page-shell fees-grid">
          <div className="fees-title"><h2>Fees & insurance</h2></div>
          <div className="fees-copy">
            <p>I currently work with the insurance plans listed below. Coverage and out-of-pocket costs vary by plan, so your insurer can confirm your copay, deductible, and other benefit details.</p>
            <h3 className="insurance-heading">Accepted insurance</h3>
            <ul className="insurance-list">
              {acceptedInsurances.map((insurance) => <li key={insurance}>{insurance}</li>)}
            </ul>
            <p className="fees-note">If you’re not sure whether your plan is included, please reach out and we can figure it out together.</p>
            <ButtonLink onNavigate={onNavigate}>Ask about insurance</ButtonLink>
          </div>
        </div>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="page-shell faq-grid">
          <div className="faq-intro">
            <h2>FAQ</h2>
            <p>Therapy can feel unfamiliar at first. These answers offer a starting point, and you can always ask about what working together might look like for you.</p>
          </div>
          <div className="faq-list">
            {faqs.map(({ question, answer }, index) => (
              <details className="faq-item" key={question} open={index === 0}>
                <summary>
                  <span>{question}</span>
                  <span className="faq-icon" aria-hidden="true"><CaretDown size={20} weight="regular" /></span>
                </summary>
                <div className="faq-answer"><p>{answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="logistics section-pad">
        <div className="page-shell">
          <div className="logistics-top"><h2>Online and in-person sessions</h2></div>
          <div className="logistics-grid">
            <article className="online-card"><GlobeHemisphereWest size={30} /><div><p className="card-kicker">Online</p><h3>Meet from a private space that feels comfortable.</h3><p>Secure video sessions are available to clients located in New York or New Jersey at the time of their appointment.</p></div></article>
            <article className="office-card"><MapPin size={30} /><div><p className="card-kicker">In person</p><h3>Journey 2 Grow Therapy</h3><address>233 Mt. Airy Rd.<br />Suite 100 – Room 103<br />Basking Ridge, NJ 07920</address></div></article>
          </div>
        </div>
      </section>

    </main>
  )
}

function FieldError({ children }) { return children ? <span className="field-error">{children}</span> : null }

function Booking() {
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  async function submitForm(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const nextErrors = {}
    if (!data.get('name')?.trim()) nextErrors.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(data.get('email') || '')) nextErrors.email = 'Please enter a valid email address.'
    if (!data.get('contact')) nextErrors.contact = 'Choose a preferred contact method.'
    if (!data.get('state')) nextErrors.state = 'Choose your current state or location.'
    if (!data.get('session')) nextErrors.session = 'Choose a session preference.'
    if (!data.get('consent')) nextErrors.consent = 'Please confirm that you understand this form is not for emergencies.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setStatus('loading')
    const endpoint = import.meta.env.PUBLIC_FORM_ENDPOINT
    try {
      if (endpoint) {
        const response = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        if (!response.ok) throw new Error('Unable to send')
      } else {
        await new Promise((resolve) => setTimeout(resolve, 700))
      }
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="booking-page">
      <section className="booking-hero section-pad">
        <div className="page-shell booking-hero-grid">
          <div><p className="eyebrow">Free 15-minute consultation</p><h1>Let’s see if working together feels like a good fit.</h1></div>
          <p>This brief form is simply a starting point. Share what you’re looking for and how you prefer to be contacted. You don’t need to tell your whole story here.</p>
        </div>
      </section>
      <section className="booking-content section-pad">
        <div className="page-shell booking-grid">
          <div className="form-wrap">
            {status === 'success' ? (
              <div className="success-state" role="status"><div className="success-icon"><Check size={28} weight="bold" /></div><p className="eyebrow">Inquiry received</p><h2>Thank you for reaching out.</h2><p>I will follow up using your preferred contact method. If your needs are urgent, please call or text 988 rather than waiting for a reply.</p><button className="text-button" onClick={() => setStatus('idle')}>Send another inquiry</button></div>
            ) : (
              <form onSubmit={submitForm} noValidate>
                <div className="form-heading"><h2>Consultation inquiry</h2><p>Fields marked with an asterisk are required.</p></div>
                <div className="field-grid two">
                  <label><span>Name *</span><input name="name" autoComplete="name" aria-invalid={!!errors.name} /><FieldError>{errors.name}</FieldError></label>
                  <label><span>Email *</span><input name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} /><FieldError>{errors.email}</FieldError></label>
                </div>
                <div className="field-grid two">
                  <label><span>Phone <small>Optional</small></span><input name="phone" type="tel" autoComplete="tel" /></label>
                  <fieldset><legend>Preferred contact method *</legend><div className="choice-row"><label><input type="radio" name="contact" value="Email" /> Email</label><label><input type="radio" name="contact" value="Text" /> Text</label><label><input type="radio" name="contact" value="Phone" /> Phone</label></div><FieldError>{errors.contact}</FieldError></fieldset>
                </div>
                <div className="field-grid two">
                  <fieldset><legend>State / location *</legend><div className="choice-row"><label><input type="radio" name="state" value="NJ" /> NJ</label><label><input type="radio" name="state" value="NY" /> NY</label><label><input type="radio" name="state" value="Other" /> Other</label></div><FieldError>{errors.state}</FieldError></fieldset>
                  <fieldset><legend>Session preference *</legend><div className="choice-stack"><label><input type="radio" name="session" value="Online" /> Online</label><label><input type="radio" name="session" value="In person" /> In person in Basking Ridge</label><label><input type="radio" name="session" value="Not sure" /> Not sure</label></div><FieldError>{errors.session}</FieldError></fieldset>
                </div>
                <fieldset className="support-choices"><legend>Main reason for seeking support</legend><div>{supportAreas.map(([title]) => <label key={title}><input type="checkbox" name="support" value={title} /> {title}</label>)}<label><input type="checkbox" name="support" value="Other" /> Other</label></div></fieldset>
                <label className="message-field"><span>Short message</span><textarea name="message" rows="5" placeholder="Briefly tell me what you’re hoping to get support with." /><small>Please avoid urgent, crisis, or highly sensitive medical details in this form.</small></label>
                <label className="consent"><input type="checkbox" name="consent" /><span>I understand this form is for consultation inquiries and is not for emergencies. *</span></label>
                <FieldError>{errors.consent}</FieldError>
                {status === 'error' && <div className="submit-error" role="alert">Your inquiry couldn’t be sent. Please try again in a moment.</div>}
                <button className="button submit-button" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Submit'}{status !== 'loading' && <ArrowRight size={17} weight="bold" />}</button>
              </form>
            )}
          </div>
          <aside className="booking-aside">
            <div className="crisis-note"><strong>Need immediate help?</strong><p>This form is not monitored for emergencies. Call or text <a href="tel:988">988</a> for the Suicide & Crisis Lifeline, or call 911 if there is immediate danger.</p></div>
          </aside>
        </div>
      </section>
    </main>
  )
}

function formatPostDate(value) {
  if (!value) return ''
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value))
}

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      const imageUrl = urlForImage(value)?.width(1280).fit('max').url()
      if (!imageUrl) return null
      return (
        <figure className="post-body-image">
          <img src={imageUrl} alt={value.alt || ''} loading="lazy" />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      )
    },
  },
  marks: {
    link: ({ value, children }) => {
      const external = value?.openInNewTab || value?.href?.startsWith('http')
      return <a href={value?.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{children}</a>
    },
  },
}

/**
 * @param {{
 *   posts?: import('./sanity/queries').BlogPostSummary[],
 *   configured?: boolean
 * }} props
 */
function Blog({ posts = [], configured = false }) {
  const hasPosts = posts.length > 0

  return (
    <main className="blog-page blog-index-page">
      <section className="blog-hero section-pad">
        <div className="page-shell blog-intro">
          <h1>Journal</h1>
          <p>Practical reflections on therapy, anxiety, relationships, identity, and navigating change.</p>
        </div>
      </section>
      <section className="blog-feed section-pad">
        <div className="page-shell">
          {hasPosts ? (
            <div className="blog-grid">
              {posts.map((post) => (
                <article className="blog-card" key={post._id}>
                  <a href={`/blog/${post.slug}`} className="blog-card-link">
                    <div className="blog-card-image">
                      {post.mainImage?.asset?.url ? (
                        <img src={post.mainImage.asset.url} alt={post.mainImage.alt || ''} loading="lazy" />
                      ) : (
                        <span aria-hidden="true" />
                      )}
                    </div>
                    <div className="blog-card-copy">
                      <div className="blog-meta">
                        {post.categories?.[0]?.title && <span>{post.categories[0].title}</span>}
                        <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                      </div>
                      <h2>{post.title}</h2>
                      {post.excerpt && <p>{post.excerpt}</p>}
                      <span className="blog-read-more">Read article <ArrowRight size={16} weight="bold" /></span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <h2>Thoughtful resources, coming soon.</h2>
              <p>{configured ? 'I’m preparing the first articles for publication.' : 'I’m preparing practical notes about therapy, anxiety, relationships, and navigating change.'}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

/** @param {{post?: import('./sanity/queries').BlogPost | null}} props */
function BlogPost({ post }) {
  if (!post) return <Blog />

  return (
    <main className="blog-page post-page">
      <article>
        <header className="post-hero section-pad">
          <div className="page-shell post-hero-inner">
            <a className="post-back" href="/blog">← Back to journal</a>
            <div className="blog-meta">
              {post.categories?.[0]?.title && <span>{post.categories[0].title}</span>}
              <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            </div>
            <h1>{post.title}</h1>
            {post.excerpt && <p className="post-deck">{post.excerpt}</p>}
            {post.author?.name && <p className="post-author">By {post.author.name}</p>}
          </div>
        </header>
        {post.mainImage?.asset?.url && (
          <div className="page-shell post-main-image">
            <img src={post.mainImage.asset.url} alt={post.mainImage.alt || ''} />
          </div>
        )}
        <div className="page-shell post-content section-pad">
          {post.body?.length ? (
            <PortableText value={post.body} components={portableTextComponents} />
          ) : (
            <p>{post.excerpt}</p>
          )}
        </div>
      </article>
    </main>
  )
}

function Footer({ onNavigate, concept = false }) {
  return (
    <footer className={`site-footer ${concept ? 'concept-footer' : ''}`}>
      <div className="footer-image" aria-hidden="true" />
      <div className="footer-overlay" />
      <div className="page-shell footer-content">
        <div className="footer-main">
          <h2><span className="footer-heading-context">If you’re considering therapy but not sure where to begin,</span>{' '}<span className="footer-heading-action">start with a brief conversation.</span></h2>
          <ButtonLink onNavigate={onNavigate} light>Book a consultation</ButtonLink>
        </div>
        <div className="footer-detail"><strong>Practice</strong><span>Eunice Lee, LCSW</span><span>Licensed in New York &amp; New Jersey</span></div>
        <div className="footer-detail"><strong>Office</strong><address>233 Mt. Airy Rd., Suite 100 – Room 103<br />Basking Ridge, NJ 07920</address></div>
        <nav className="footer-detail footer-links" aria-label="Footer navigation"><strong>Explore</strong><div><RouteLink href="/" onNavigate={onNavigate}>Home</RouteLink><RouteLink href="/blog">Journal</RouteLink><RouteLink href="/booking" onNavigate={onNavigate}>Booking</RouteLink></div></nav>
        <p className="footer-copyright">© {new Date().getFullYear()} Journey 2 Grow Therapy. All rights reserved.</p>
      </div>
    </footer>
  )
}

/**
 * @param {{
 *   path?: string,
 *   posts?: import('./sanity/queries').BlogPostSummary[],
 *   configured?: boolean,
 *   post?: import('./sanity/queries').BlogPost | null
 * }} props
 */
export default function App({ path = '/', posts = [], configured = false, post = null }) {
  const isApprovedHome = path === '/' || path === '/home-concept'
  const page = path === '/booking'
    ? <Booking />
    : isApprovedHome
      ? <HomeConcept />
    : path.startsWith('/blog/')
      ? <BlogPost post={post} />
      : path === '/blog'
        ? <Blog posts={posts} configured={configured} />
        : <Home />
  return <><SmoothScroll /><ScrollReveal path={path} /><Header />{page}<Footer concept={isApprovedHome} /></>
}
