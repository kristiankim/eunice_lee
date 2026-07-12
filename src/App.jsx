import { useEffect, useLayoutEffect, useState } from 'react'
import {
  ArrowRight,
  CalendarBlank,
  Check,
  GlobeHemisphereWest,
  List,
  MapPin,
  SealCheck,
  Translate,
  X,
} from '@phosphor-icons/react'

const supportAreas = [
  ['01', 'Anxiety', 'Make space around worry and build steadier ways to respond.'],
  ['02', 'Depression', 'Reconnect with energy, meaning, and a more workable daily rhythm.'],
  ['03', 'Relationships', 'Understand patterns and practice clearer, healthier connection.'],
  ['04', 'Life transitions', 'Find footing through change, uncertainty, and new chapters.'],
  ['05', 'Immigration & adjustment', 'Process belonging, identity, and the strain of adaptation.'],
  ['06', 'Self-esteem', 'Develop a kinder and more grounded relationship with yourself.'],
  ['07', 'Anger management', 'Recognize triggers and build choices before reactions take over.'],
]

const approaches = ['CBT', 'ACT', 'DBT', 'IFS', 'Attachment-based', 'Solution-focused', 'Person-centered', 'Trauma-focused']

function ScrollReveal({ path }) {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const selector = [
      '.about-grid > *',
      '.section-heading > *',
      '.support-item',
      '.expect-grid > *',
      '.session-steps > article',
      '.approach-cloud',
      '.fees-grid > *',
      '.logistics-top > *',
      '.logistics-grid > *',
      '.booking-hero-grid > *',
      '.booking-grid > *',
      '.blog-page .page-shell > *',
      '.footer-main > *',
      '.footer-bottom > *',
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

function usePathname() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  return [path, setPath]
}

function RouteLink({ href, onNavigate, className = '', children }) {
  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
        event.preventDefault()
        window.history.pushState({}, '', href)
        onNavigate(href)
        window.scrollTo({ top: 0, behavior: 'instant' })
      }}
    >
      {children}
    </a>
  )
}

function Header({ onNavigate }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="nav-shell">
        <RouteLink href="/" onNavigate={onNavigate} className="wordmark" aria-label="Journey 2 Grow Therapy home">
          <span className="wordmark-mark">J<span>2</span>G</span>
          <span className="wordmark-copy"><strong>Journey 2 Grow</strong><small>Therapy</small></span>
        </RouteLink>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <RouteLink href="/booking" onNavigate={onNavigate} className="nav-cta">Book a consultation <ArrowRight size={16} weight="bold" /></RouteLink>
        </nav>
        <button className="menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <List size={23} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <RouteLink href="/" onNavigate={(href) => { onNavigate(href); setOpen(false) }}>Home</RouteLink>
          <RouteLink href="/booking" onNavigate={(href) => { onNavigate(href); setOpen(false) }}>Book a consultation</RouteLink>
        </nav>
      )}
    </header>
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
        <div className="hero-grid page-shell">
          <div className="hero-copy reveal">
            <p className="eyebrow">Individual therapy for adults</p>
            <h1>Professional therapy for anxiety, relationships, and life transitions.</h1>
            <p className="hero-intro">I'm Eunice Lee, an LCSW licensed in New York and New Jersey. I offer individual therapy online and in person in Basking Ridge, NJ, with support available in English and Korean.</p>
            <ButtonLink onNavigate={onNavigate}>Request a free 15-minute consultation</ButtonLink>
          </div>
          <div className="portrait-composition reveal reveal-delay">
            <div className="portrait-frame">
              <img src="/images/eunice-lee.png" width="320" height="400" alt="Eunice Lee, licensed clinical social worker" />
            </div>
            <div className="portrait-note">
              <span className="portrait-note-line" />
              <p>Care that begins with listening.</p>
            </div>
          </div>
        </div>
        <div className="page-shell hero-trust"><TrustRow /></div>
      </section>

      <section className="about section-pad" id="about">
        <div className="page-shell about-grid">
          <div>
            <h2><span className="no-break">A collaborative</span> space to understand what you’re carrying.</h2>
          </div>
          <div className="about-body">
            <p className="lead">Therapy with Eunice is collaborative and client-centered. She helps clients better understand what they are experiencing, build practical coping skills, and work toward clarity, resilience, and healthier relationships.</p>
            <div className="credentials">
              <div><strong>10 years</strong><span>in practice</span></div>
              <div><strong>Columbia</strong><span>MSW, 2016</span></div>
              <div><strong>CCTP</strong><span>certified, 2022</span></div>
            </div>
            <p className="license-note">LCSW licensed in New Jersey (44SC05929300) and New York (096779).</p>
          </div>
        </div>
      </section>

      <section className="support section-pad" id="support">
        <div className="page-shell">
          <div className="section-heading section-heading-direct"><h2>Areas of support</h2></div>
          <ul className="support-list">
            {supportAreas.map(([number, title, copy]) => (
              <li className="support-item" key={title}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="expect section-pad" id="approach">
        <div className="page-shell expect-grid">
          <div className="expect-sticky">
            <h2>What to expect</h2>
            <p>Therapy is paced collaboratively, with room for practical tools, reflection, and the context that has shaped you.</p>
          </div>
          <div className="session-steps">
            <article><span>01</span><div><h3>Begin with an intake</h3><p>Your first 75-minute session offers time to share what brings you in and what you hope might change.</p></div></article>
            <article><span>02</span><div><h3>Build a plan together</h3><p>The first two to three sessions focus on getting to know you and creating a treatment plan grounded in your goals.</p></div></article>
            <article><span>03</span><div><h3>Continue with steady support</h3><p>Regular 55-minute, one-to-one sessions are available online or in person in Basking Ridge.</p></div></article>
            <div className="approach-cloud" aria-label="Therapy approaches used">
              {approaches.map((approach) => <span key={approach}>{approach}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="fees section-pad">
        <div className="page-shell fees-grid">
          <div className="fees-title"><h2>Fees & insurance</h2></div>
          <div className="fees-copy">
            <p>Insurance participation and out-of-pocket costs vary by plan. When you inquire, share your insurer and plan name so Eunice can let you know whether it is currently accepted. Your insurer can confirm your copay, deductible, and other benefit details.</p>
            <ul><li><Check size={18} weight="bold" /> Free 15-minute consultation</li><li><Check size={18} weight="bold" /> Ask whether your plan is currently accepted</li><li><Check size={18} weight="bold" /> Confirm your expected cost before scheduling</li></ul>
            <ButtonLink onNavigate={onNavigate}>Ask about insurance</ButtonLink>
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

function Booking({ onNavigate }) {
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
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT
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
          <aside className="booking-aside">
            <div className="aside-block"><CalendarBlank size={25} /><div><h2>What happens next</h2><p>Eunice will review your inquiry and follow up to arrange a free 15-minute consultation.</p></div></div>
            <div className="aside-block"><Translate size={25} /><div><h2>Contact preference</h2><p>Email or text is best. Phone calls can be difficult to answer while Eunice is in session.</p></div></div>
            <div className="aside-block"><MapPin size={25} /><div><h2>In-person location</h2><address>233 Mt. Airy Rd.<br />Suite 100 – Room 103<br />Basking Ridge, NJ 07920</address></div></div>
            <div className="crisis-note"><strong>Need immediate help?</strong><p>This form is not monitored for emergencies. Call or text <a href="tel:988">988</a> for the Suicide & Crisis Lifeline, or call 911 if there is immediate danger.</p></div>
          </aside>
          <div className="form-wrap">
            {status === 'success' ? (
              <div className="success-state" role="status"><div className="success-icon"><Check size={28} weight="bold" /></div><p className="eyebrow">Inquiry received</p><h2>Thank you for reaching out.</h2><p>Eunice will follow up using your preferred contact method. If your needs are urgent, please call or text 988 rather than waiting for a reply.</p><button className="text-button" onClick={() => setStatus('idle')}>Send another inquiry</button></div>
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
                <fieldset className="support-choices"><legend>Main reason for seeking support</legend><div>{supportAreas.map(([, title]) => <label key={title}><input type="checkbox" name="support" value={title} /> {title}</label>)}<label><input type="checkbox" name="support" value="Other" /> Other</label></div></fieldset>
                <label className="message-field"><span>Short message</span><textarea name="message" rows="5" placeholder="Briefly tell me what you’re hoping to get support with." /><small>Please avoid urgent, crisis, or highly sensitive medical details in this form.</small></label>
                <label className="consent"><input type="checkbox" name="consent" /><span>I understand this form is for consultation inquiries and is not for emergencies. *</span></label>
                <FieldError>{errors.consent}</FieldError>
                {status === 'error' && <div className="submit-error" role="alert">Your inquiry couldn’t be sent. Please try again in a moment.</div>}
                <button className="button submit-button" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Send inquiry'}{status !== 'loading' && <ArrowRight size={17} weight="bold" />}</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function Blog() {
  return <main className="blog-page"><div className="page-shell"><p className="eyebrow">Journal</p><h1>Thoughtful resources, coming soon.</h1><p>Eunice is preparing practical notes about therapy, anxiety, relationships, and navigating change.</p></div></main>
}

function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-image" aria-hidden="true" />
      <div className="footer-overlay" />
      <div className="page-shell footer-content">
        <div className="footer-main">
          <h2>If you’re considering therapy but not sure where to begin, start with a brief conversation.</h2>
          <p>Share a little about what you’re looking for, and Eunice will follow up by email or text.</p>
          <ButtonLink onNavigate={onNavigate} light>Send an inquiry</ButtonLink>
        </div>
        <div className="footer-bottom">
          <div className="footer-detail"><strong>Practice</strong><span>Eunice Lee, LCSW</span><span>Licensed in New York &amp; New Jersey</span></div>
          <div className="footer-detail"><strong>Office</strong><address>233 Mt. Airy Rd., Suite 100 – Room 103<br />Basking Ridge, NJ 07920</address></div>
          <nav className="footer-detail footer-links" aria-label="Footer navigation"><strong>Explore</strong><div><RouteLink href="/" onNavigate={onNavigate}>Home</RouteLink><RouteLink href="/booking" onNavigate={onNavigate}>Booking</RouteLink></div></nav>
          <p>© {new Date().getFullYear()} Journey 2 Grow Therapy<br />All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [path, setPath] = usePathname()
  useEffect(() => {
    const titles = {
      '/': 'Eunice Lee, LCSW | Journey 2 Grow Therapy',
      '/booking': 'Request a Consultation | Eunice Lee, LCSW',
      '/blog': 'Journal | Journey 2 Grow Therapy',
    }
    document.title = titles[path] || titles['/']
    let robots = document.querySelector('meta[name="robots"]')
    if (!robots) {
      robots = document.createElement('meta')
      robots.name = 'robots'
      document.head.appendChild(robots)
    }
    robots.content = path === '/blog' ? 'noindex, nofollow' : 'index, follow'
  }, [path])
  const page = path === '/booking' ? <Booking onNavigate={setPath} /> : path === '/blog' ? <Blog /> : <Home onNavigate={setPath} />
  return <><ScrollReveal path={path} /><Header onNavigate={setPath} />{page}<Footer onNavigate={setPath} /></>
}
