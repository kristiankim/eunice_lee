import {
  ArrowRightIcon as ArrowRight,
  CaretDownIcon as CaretDown,
  CheckIcon as Check,
  GlobeHemisphereWestIcon as GlobeHemisphereWest,
  MapPinIcon as MapPin,
  SealCheckIcon as SealCheck,
  TranslateIcon as Translate,
} from '@phosphor-icons/react'
import './home-concept.css'

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

function ConceptButton({ children }) {
  return <a href="/booking" className="button">{children}<ArrowRight size={17} weight="bold" /></a>
}

function ConceptTrustRow() {
  const facts = [
    [SealCheck, 'NY & NJ licensed'],
    [GlobeHemisphereWest, 'Online & in person'],
    [Translate, 'English & Korean'],
    [Check, 'Insurance varies by plan'],
  ]

  return (
    <div className="trust-row">
      {facts.map(([Icon, label]) => <div key={label}><Icon size={19} weight="regular" /><span>{label}</span></div>)}
    </div>
  )
}

export default function HomeConcept() {
  return (
    <main className="home-concept-root">
      <section className="hero section-pad concept-hero">
        <div className="concept-hero-media" aria-hidden="true">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/home-concept/hero/olivegree-hero-bg-poster.png"
            preload="metadata"
          >
            <source src="/images/home-concept/hero/olivegree-hero-bg.webm" type="video/webm" />
          </video>
        </div>
        <div className="concept-hero-scrim" aria-hidden="true" />
        <div className="page-shell hero-copy reveal">
          <h1>Welcome,<br />I’m glad you are here.</h1>
          <div className="hero-intro">
            <p>Sometimes, we find ourselves carrying questions, feelings, or struggles that are difficult to put into words—or difficult to share with anyone else.</p>
            <p>Therapy can be a supportive place to slow down, feel heard, and explore what matters to you. It can be a space not only to work through life’s challenges, but also to better understand yourself, your relationships, and the questions you may have been quietly carrying on your own.</p>
            <p>You don’t have to have everything figured out before you begin.</p>
            <p>Perhaps therapy can be a place to begin exploring.</p>
          </div>
          <ConceptButton>Request a free 15-minute consultation</ConceptButton>
        </div>
      </section>

      <section className="meet section-pad concept-meet" id="about">
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
        <div className="page-shell meet-trust"><ConceptTrustRow /></div>
      </section>

      <section className="about section-pad concept-about">
        <img
          className="concept-section-branch"
          src="/images/home-concept/branches/art-nouveau-olive-branch-v2.png"
          alt=""
          width="1034"
          height="1520"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
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
        <img
          className="concept-section-branch-right"
          src="/images/home-concept/branches/art-nouveau-olive-branch-right-v1.png"
          alt=""
          width="1023"
          height="1537"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
        <img
          className="concept-support-ground"
          src="/images/home-concept/branches/art-nouveau-fallen-olives-ground-v1.png"
          alt=""
          width="1830"
          height="368"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
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
            <article><span>01</span><div><h4>Begin with an intake</h4><p>Your first 75-minute session offers time to share what brings you in and what you hope might change.</p></div></article>
            <article><span>02</span><div><h4>Build a plan together</h4><p>The first two to three sessions focus on getting to know you and creating a treatment plan grounded in your goals.</p></div></article>
            <article><span>03</span><div><h4>Continue with steady support</h4><p>Regular 55-minute, one-to-one sessions are available online or in person in Basking Ridge.</p></div></article>
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
            <ConceptButton>Ask about insurance</ConceptButton>
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
