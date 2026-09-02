import { useEffect, useLayoutEffect, useState } from 'react'
import Lenis from 'lenis'
import { PortableText } from '@portabletext/react'
import logoUrl from '../assets/Journey2grow_Logo 4.svg?url'
import { urlForImage } from './sanity/image'
import { getLocaleFromPath, localizePath, siteContent } from './i18n/site-content'
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

function Header({ path, locale }) {
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const copy = siteContent[locale]
  const homePath = localizePath('/', locale)
  const bookingPath = localizePath('/booking', locale)
  const alternateLocale = locale === 'ko' ? 'en' : 'ko'
  const alternatePath = localizePath(path.startsWith('/blog') ? '/' : path, alternateLocale)

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
          <RouteLink href={homePath} className="wordmark" aria-label={`Journey 2 Grow Therapy ${copy.nav.home}`}>
            <img className="wordmark-logo" src={logoUrl} alt="" width="1813" height="416" />
          </RouteLink>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <RouteLink href={alternatePath} className="language-link" lang={alternateLocale}>{copy.nav.switchLanguage}</RouteLink>
            <RouteLink href={bookingPath} className="nav-cta">{copy.nav.booking} <ArrowRight size={16} weight="bold" /></RouteLink>
          </nav>
          <button className="menu-button" aria-label={locale === 'ko' ? '메뉴 열기 또는 닫기' : 'Toggle menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={23} /> : <List size={23} />}
          </button>
        </div>
        {open && (
          <nav className="mobile-nav" aria-label={locale === 'ko' ? '모바일 내비게이션' : 'Mobile navigation'}>
            <RouteLink href={homePath}>{copy.nav.home}</RouteLink>
            <RouteLink href={bookingPath}>{copy.nav.booking}</RouteLink>
            <RouteLink href={alternatePath} className="mobile-language-link" lang={alternateLocale}>{copy.nav.switchLanguage}</RouteLink>
          </nav>
        )}
      </header>
    </>
  )
}

function ButtonLink({ href, locale = 'en', children, light = false }) {
  const destination = href || localizePath('/booking', locale)
  return <RouteLink href={destination} className={`button ${light ? 'button-light' : ''}`}>{children}<ArrowRight size={17} weight="bold" /></RouteLink>
}

function TrustRow({ locale, compact = false }) {
  const labels = siteContent[locale].trust
  const facts = [
    [SealCheck, labels[0]],
    [GlobeHemisphereWest, labels[1]],
    [Translate, labels[2]],
    [Check, labels[3]],
  ]
  return (
    <div className={`trust-row ${compact ? 'compact' : ''}`}>
      {facts.map(([Icon, label]) => <div key={label}><Icon size={19} weight="regular" /><span>{label}</span></div>)}
    </div>
  )
}

function Home({ locale }) {
  const copy = siteContent[locale]
  return (
    <main className={`home-concept-root ${locale === 'ko' ? 'locale-ko' : ''}`}>
      <section className="hero section-pad concept-hero">
        <div className="concept-hero-media" aria-hidden="true">
          <video autoPlay loop muted playsInline poster="/images/home-concept/hero/olivegree-hero-bg-poster.png" preload="metadata">
            <source src="/images/home-concept/hero/olivegree-hero-bg.webm" type="video/webm" />
          </video>
        </div>
        <div className="concept-hero-scrim" aria-hidden="true" />
        <div className="page-shell hero-copy reveal">
          <h1>{copy.hero.title.split('\n').map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h1>
          <div className="hero-intro">
            {copy.hero.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <ButtonLink locale={locale}>{copy.hero.cta}</ButtonLink>
        </div>
      </section>

      <section className="meet section-pad concept-meet" id="about">
        <div className="page-shell meet-grid">
          <div className="portrait-composition">
            <div className="portrait-frame">
              <img src="/images/eunice-lee.png" width="320" height="400" alt={copy.meet.imageAlt} />
            </div>
          </div>
          <div className="meet-copy">
            <h2>{copy.meet.title}</h2>
            <p className="meet-lead">{copy.meet.lead}</p>
            {copy.meet.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <aside className="how-i-work">
              <h3>{copy.meet.howTitle}</h3>
              <p>{copy.meet.howCopy}</p>
            </aside>
          </div>
        </div>
        <div className="page-shell meet-trust"><TrustRow locale={locale} /></div>
      </section>

      <section className="about section-pad concept-about">
        <img className="concept-section-branch" src="/images/home-concept/branches/art-nouveau-olive-branch-v2.png" alt="" width="1034" height="1520" loading="lazy" decoding="async" aria-hidden="true" />
        <div className="page-shell about-grid">
          <div>
            <h2>{copy.about.title}</h2>
          </div>
          <div className="about-body">
            <p className="lead">{copy.about.lead}</p>
            <div className="credentials">
              {copy.about.credentials.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="support section-pad" id="support">
        <img className="concept-section-branch-right" src="/images/home-concept/branches/art-nouveau-olive-branch-right-v1.png" alt="" width="1023" height="1537" loading="lazy" decoding="async" aria-hidden="true" />
        <img className="concept-support-ground" src="/images/home-concept/branches/art-nouveau-fallen-olives-ground-v1.png" alt="" width="1830" height="368" loading="lazy" decoding="async" aria-hidden="true" />
        <div className="page-shell">
          <div className="section-heading section-heading-direct support-heading">
            <h2>{copy.support.title}</h2>
            <span aria-hidden="true" />
          </div>
          <ul className="support-grid">
            {copy.support.areas.map(([title, description, image, retinaImage]) => (
              <li className="support-card" key={title}>
                <div className="support-card-image">
                  <img src={image} srcSet={`${image} 1x, ${retinaImage} 2x`} alt="" width="410" height="261" />
                </div>
                <div className="support-card-content">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="expect section-pad" id="approach">
        <div className="page-shell expect-grid">
          <div className="expect-sticky">
            <h2>{copy.expect.title}</h2>
            <p className="expect-lead">{copy.expect.lead}</p>
            <p>{copy.expect.copy}</p>
          </div>
          <div className="session-steps">
            {copy.expect.steps.map(([title, description], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}
            <div className="approach-cloud" aria-label={copy.expect.approachesLabel}>
              {copy.expect.approaches.map((approach) => <span key={approach}>{approach}</span>)}
            </div>
            <p className="approach-note">{copy.expect.note}</p>
          </div>
        </div>
      </section>

      <section className="fees section-pad">
        <div className="page-shell fees-grid">
          <div className="fees-title"><h2>{copy.fees.title}</h2></div>
          <div className="fees-copy">
            <p>{copy.fees.intro}</p>
            <h3 className="insurance-heading">{copy.fees.accepted}</h3>
            <ul className="insurance-list">
              {copy.fees.insurances.map((insurance) => <li key={insurance}>{insurance}</li>)}
            </ul>
            <p className="fees-note">{copy.fees.note}</p>
            <ButtonLink locale={locale}>{copy.fees.cta}</ButtonLink>
          </div>
        </div>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="page-shell faq-grid">
          <div className="faq-intro">
            <h2>{copy.faq.title}</h2>
            <p>{copy.faq.intro}</p>
          </div>
          <div className="faq-list">
            {copy.faq.items.map(([question, answer], index) => (
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
          <div className="logistics-top"><h2>{copy.logistics.title}</h2></div>
          <div className="logistics-grid">
            <article className="online-card"><GlobeHemisphereWest size={30} /><div><p className="card-kicker">{copy.logistics.onlineKicker}</p><h3>{copy.logistics.onlineTitle}</h3><p>{copy.logistics.onlineCopy}</p></div></article>
            <article className="office-card"><MapPin size={30} /><div><p className="card-kicker">{copy.logistics.officeKicker}</p><h3>Journey 2 Grow Therapy</h3><address>233 Mt. Airy Rd.<br />Suite 100 – Room 103<br />Basking Ridge, NJ 07920</address></div></article>
          </div>
        </div>
      </section>

    </main>
  )
}

function FieldError({ children }) { return children ? <span className="field-error">{children}</span> : null }

function Booking({ locale }) {
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const copy = siteContent[locale]
  const booking = copy.booking

  async function submitForm(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const nextErrors = {}
    if (!data.get('name')?.trim()) nextErrors.name = booking.errors.name
    if (!/^\S+@\S+\.\S+$/.test(data.get('email') || '')) nextErrors.email = booking.errors.email
    if (!data.get('contact')) nextErrors.contact = booking.errors.contact
    if (!data.get('state')) nextErrors.state = booking.errors.state
    if (!data.get('session')) nextErrors.session = booking.errors.session
    if (!data.get('consent')) nextErrors.consent = booking.errors.consent
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setStatus('loading')
    const requestId = form.dataset.requestId
      || globalThis.crypto?.randomUUID?.()
      || `${Date.now()}-${Math.random().toString(16).slice(2)}`

    form.dataset.requestId = requestId
    try {
      const response = await fetch('/api/request-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          contactMethod: data.get('contact'),
          stateLocation: data.get('state'),
          sessionPreference: data.get('session'),
          supportReasons: data.getAll('support'),
          message: data.get('message'),
          consent: data.get('consent') === 'on',
          website: data.get('website'),
          requestId,
        }),
      })

      if (!response.ok) throw new Error('Unable to send')

      form.reset()
      delete form.dataset.requestId
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className={`booking-page ${locale === 'ko' ? 'locale-ko' : ''}`}>
      <section className="booking-hero section-pad">
        <div className="page-shell booking-hero-grid">
          <div><p className="eyebrow">{booking.eyebrow}</p><h1>{booking.title.split('\n').map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h1></div>
          <p>{booking.intro}</p>
        </div>
      </section>
      <section className="booking-content section-pad">
        <div className="page-shell booking-grid">
          <div className="form-wrap">
            {status === 'success' ? (
              <div className="success-state" role="status"><div className="success-icon"><Check size={28} weight="bold" /></div><p className="eyebrow">{booking.success.eyebrow}</p><h2>{booking.success.title}</h2><p>{booking.success.copy}</p><button className="text-button" onClick={() => setStatus('idle')}>{booking.success.again}</button></div>
            ) : (
              <form onSubmit={submitForm} noValidate>
                <input type="hidden" name="language" value={copy.localeName} />
                <div className="form-heading"><h2>{booking.formTitle}</h2><p>{booking.requiredNote}</p></div>
                <div className="field-grid two">
                  <label><span>{booking.fields.name}</span><input name="name" autoComplete="name" aria-invalid={!!errors.name} /><FieldError>{errors.name}</FieldError></label>
                  <label><span>{booking.fields.email}</span><input name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} /><FieldError>{errors.email}</FieldError></label>
                </div>
                <div className="field-grid two">
                  <label><span>{booking.fields.phone} <small>{booking.fields.optional}</small></span><input name="phone" type="tel" autoComplete="tel" /></label>
                  <fieldset><legend>{booking.fields.contact}</legend><div className="choice-row"><label><input type="radio" name="contact" value="Email" /> {booking.options.email}</label><label><input type="radio" name="contact" value="Text" /> {booking.options.text}</label><label><input type="radio" name="contact" value="Phone" /> {booking.options.phone}</label></div><FieldError>{errors.contact}</FieldError></fieldset>
                </div>
                <div className="field-grid two">
                  <fieldset><legend>{booking.fields.state}</legend><div className="choice-row"><label><input type="radio" name="state" value="NJ" /> NJ</label><label><input type="radio" name="state" value="NY" /> NY</label><label><input type="radio" name="state" value="Other" /> {booking.options.other}</label></div><FieldError>{errors.state}</FieldError></fieldset>
                  <fieldset><legend>{booking.fields.session}</legend><div className="choice-stack"><label><input type="radio" name="session" value="Online" /> {booking.options.online}</label><label><input type="radio" name="session" value="In person" /> {booking.options.inPerson}</label><label><input type="radio" name="session" value="Not sure" /> {booking.options.unsure}</label></div><FieldError>{errors.session}</FieldError></fieldset>
                </div>
                <fieldset className="support-choices"><legend>{booking.fields.support}</legend><div>{copy.support.areas.map(([title], index) => <label key={title}><input type="checkbox" name="support" value={siteContent.en.support.areas[index][0]} /> {title}</label>)}<label><input type="checkbox" name="support" value="Other" /> {booking.options.other}</label></div></fieldset>
                <label className="message-field"><span>{booking.fields.message}</span><textarea name="message" rows="5" placeholder={booking.fields.placeholder} /><small>{booking.fields.privacy}</small></label>
                <label className="consent"><input type="checkbox" name="consent" /><span>{booking.fields.consent}</span></label>
                <FieldError>{errors.consent}</FieldError>
                <label className="website-field" aria-hidden="true">Website<input name="website" type="text" tabIndex="-1" autoComplete="off" /></label>
                {status === 'error' && <div className="submit-error" role="alert">{booking.errors.submit}</div>}
                <button className="button submit-button" type="submit" disabled={status === 'loading'}>{status === 'loading' ? booking.sending : booking.submit}{status !== 'loading' && <ArrowRight size={17} weight="bold" />}</button>
              </form>
            )}
          </div>
          <aside className="booking-aside">
            <div className="crisis-note"><strong>{booking.crisis.title}</strong><p>{booking.crisis.copyBefore}<a href="tel:988">{booking.crisis.link}</a>{booking.crisis.copyAfter}</p></div>
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

function Footer({ locale, concept = false }) {
  const copy = siteContent[locale]
  const homePath = localizePath('/', locale)
  const bookingPath = localizePath('/booking', locale)
  return (
    <footer className={`site-footer ${concept ? 'concept-footer' : ''}`}>
      <div className="footer-image" aria-hidden="true" />
      <div className="footer-overlay" />
      <div className="page-shell footer-content">
        <div className="footer-main">
          <h2><span className="footer-heading-context">{copy.footer.context}</span>{' '}<span className="footer-heading-action">{copy.footer.action}</span></h2>
          <ButtonLink locale={locale} light>{copy.footer.cta}</ButtonLink>
        </div>
        <div className="footer-detail"><strong>{copy.footer.practice}</strong><span>Eunice Lee, LCSW</span><span>{copy.footer.licensed}</span></div>
        <div className="footer-detail"><strong>{copy.footer.office}</strong><address>233 Mt. Airy Rd., Suite 100 – Room 103<br />Basking Ridge, NJ 07920</address></div>
        <nav className="footer-detail footer-links" aria-label={locale === 'ko' ? '하단 내비게이션' : 'Footer navigation'}><strong>{copy.footer.explore}</strong><div><RouteLink href={homePath}>{copy.nav.home}</RouteLink><RouteLink href={bookingPath}>{copy.nav.booking}</RouteLink></div></nav>
        <p className="footer-copyright">© {new Date().getFullYear()} Journey 2 Grow Therapy. {copy.footer.copyright}</p>
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
  const locale = getLocaleFromPath(path)
  const englishPath = localizePath(path, 'en')
  const page = englishPath === '/booking'
    ? <Booking locale={locale} />
    : path.startsWith('/blog/')
      ? <BlogPost post={post} />
      : englishPath === '/blog'
        ? <Blog posts={posts} configured={configured} />
        : <Home locale={locale} />
  return <><SmoothScroll /><ScrollReveal path={path} /><Header path={path} locale={locale} />{page}<Footer locale={locale} concept={englishPath === '/'} /></>
}
