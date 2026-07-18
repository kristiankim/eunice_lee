# Website Type Styles

This inventory reflects the typography currently implemented in `src/styles.css` and used by the pages and states in `src/App.jsx`.

## Font families

| Family | Source | Available weights | Current use |
| --- | --- | --- | --- |
| **Gambarino** | Self-hosted WOFF2/WOFF via `@font-face` | 400 | Display headings, section headings, support-card titles, and the closing footer statement |
| **DM Sans** | Google Fonts import | 400, 500, 600 | Body copy, navigation, buttons, labels, metadata, form controls, and most smaller titles |
| **Georgia** | System fallback | 400 | Fallback for Gambarino |
| **sans-serif** | System fallback | Browser-dependent | Fallback for DM Sans |

The root typeface is **DM Sans**. The browser base size is not overridden, so the rem conversions below assume the standard `1rem = 16px`.

## Core hierarchy

| Style | Selector / use | Family | Size | Weight | Line height | Tracking / case |
| --- | --- | --- | --- | --- | --- | --- |
| **Display / H1** | `h1`; homepage, booking, and blog heroes | Gambarino | `56px` | 400 | 0.98 | `-0.025em` |
| **Section headline / H2** | `h2`; primary section headings | Gambarino | `40px` | 400 | 1.04 | `-0.025em` |
| **Body** | Standard paragraphs and inherited interface text | DM Sans | `1rem` (16px) | 400 | 1.7 on `p`; normal when inherited by non-paragraph elements | Normal |
| **Eyebrow** | `.eyebrow`; hero and status labels | DM Sans | `0.875rem` (14px) | 600 | Inherited/normal | `0.01em`, sentence case |
| **Button / CTA** | `.button`, `.nav-cta` | DM Sans | `0.875rem` (14px) | 500 | Inherited/normal | Normal, sentence case |
| **Mobile navigation link** | `.mobile-nav a` | DM Sans | `1rem` (16px) | 400 | Inherited/normal | Normal |

## Marketing and content styles

| Style | Selector / use | Family | Size | Weight | Line height | Tracking / case |
| --- | --- | --- | --- | --- | --- | --- |
| **Lead copy** | `.hero-intro`, `.about-body .lead` | DM Sans | `clamp(1.02rem, 1.4vw, 1.2rem)` (16.32–19.2px) | 400 | 1.7 | Normal |
| **Portrait note** | `.portrait-note p` | DM Sans | `1.05rem` (16.8px) | 500 | 1.35 | Normal |
| **Trust fact** | `.trust-row > div` | DM Sans | `0.78rem` (12.48px) | 400 | Inherited/normal | Normal |
| **Credential value** | `.credentials strong` | DM Sans | `1.45rem` (23.2px) | 600 | Inherited/normal | Normal |
| **Credential label** | `.credentials span` | DM Sans | `0.75rem` (12px) | 400 | Inherited/normal | Normal |
| **License note** | `.license-note` | DM Sans | `0.82rem` (13.12px) | 400 | 1.7 | Normal |
| **Support-card title** | `.support-card h3` | Gambarino | `24px` | 400 | 1.08 | `-0.015em` |
| **Support-card body** | `.support-card p` | DM Sans | `1rem` (16px) | 400 | 1.5 | Normal |
| **Session number** | `.session-steps > article > span` | DM Sans | `0.68rem` (10.88px) | 400 | Inherited/normal | Normal |
| **Session-step title** | `.session-steps h3` | DM Sans | `1.55rem` (24.8px) | 600 | Inherited/normal | `-0.015em` |
| **Approach chip** | `.approach-cloud span` | DM Sans | `0.74rem` (11.84px) | 400 | Inherited/normal | Normal |
| **Fees lead** | `.fees-copy > p` | DM Sans | `1.05rem` (16.8px) | 400 | 1.7 | Normal |
| **Fees list item** | `.fees-copy li` | DM Sans | `0.88rem` (14.08px) | 400 | Inherited/normal | Normal |
| **Card kicker** | `.card-kicker` | DM Sans | `0.7rem` (11.2px) | 600 | 1.7 | `0.12em`, uppercase |
| **Logistics title** | `.logistics-grid h3` | DM Sans | `clamp(1.5rem, 2.1vw, 2rem)` (24–32px) | 600 | 1.16 | `-0.015em` |
| **Logistics detail** | `.logistics-grid p:last-child`, `.logistics-grid address` | DM Sans | `0.86rem` (13.76px) | 400 | 1.7 | Normal; address is non-italic |
| **Booking intro** | `.booking-hero-grid > p` | DM Sans | `1.05rem` (16.8px) | 400 | 1.7 | Normal |
| **Blog summary** | `.blog-page p:last-child` | DM Sans | `1rem` (16px) | 400 | 1.7 | Normal |

## Closing footer styles

| Style | Selector / use | Family | Size | Weight | Line height | Tracking / case |
| --- | --- | --- | --- | --- | --- | --- |
| **Footer display** | `.footer-main h2` | Gambarino | `50px` | 400 | 1.04 by H2 inheritance | `-0.025em` |
| **Footer setup line** | `.footer-heading-context` | DM Sans | `0.56em` of footer display (28px) | 400 | 1.14 | `-0.01em` |
| **Footer action line** | `.footer-heading-action` | Gambarino | Inherits footer display size | 400 | 1.02 | `-0.025em` |
| **Office-hours heading** | `.footer-hours > strong` | DM Sans | `0.75rem` (12px) | 600 | Inherited/normal | `0.08em`, uppercase |
| **Office-hours note** | `.footer-hours > p` | DM Sans | `0.8rem` (12.8px) | 400 | 1.6 | Normal |
| **Office-hours day** | `.footer-hours dt` | DM Sans | `0.8rem` (12.8px) | 600 | Inherited/normal | Normal |
| **Office-hours time** | `.footer-hours dd` | DM Sans | `0.8rem` (12.8px) | 400 | Inherited/normal | Normal |
| **Footer utility text** | `.footer-bottom`, its spans and address | DM Sans | `0.8rem` (12.8px) | 400 | 1.6 on spans/address | Normal; address is non-italic |
| **Footer utility heading** | `.footer-detail > strong` | DM Sans | `0.72rem` (11.52px) | 600 | Inherited/normal | `0.08em`, uppercase |
| **Copyright** | `.footer-copyright` | DM Sans | `0.75rem` (12px) | 400 | 1.7 | Normal |

## Booking form and status styles

| Style | Selector / use | Family | Size | Weight | Line height | Tracking / case |
| --- | --- | --- | --- | --- | --- | --- |
| **Aside title** | `.aside-block h2` | DM Sans | `0.9rem` (14.4px) | 600 | 1.04 by H2 inheritance | `0` |
| **Aside detail** | `.aside-block p`, `.aside-block address` | DM Sans | `0.8rem` (12.8px) | 400 | 1.65 | Normal; address is non-italic |
| **Crisis note** | `.crisis-note` and its `strong` | DM Sans | `0.77rem` (12.32px) | 400; `strong` is browser-bold | Normal | Normal |
| **Crisis-note body** | `.crisis-note p` | DM Sans | Inherits `0.77rem` (12.32px) | 400 | 1.6 | Normal |
| **Form / success heading** | `.form-heading h2`, `.success-state h2` | Gambarino | `2.7rem` (43.2px) | 400 | 1.04 | `-0.025em` |
| **Form heading note** | `.form-heading p` | DM Sans | `0.75rem` (12px) | 400 | 1.7 | Normal |
| **Field label / legend** | `form label > span`, `legend`, `.message-field > span` | DM Sans | `0.76rem` (12.16px) | 600 | Inherited/normal | Normal |
| **Optional label** | `form label > span small` | DM Sans | Inherits `0.76rem` (12.16px) | 400 | Inherited/normal | Normal |
| **Input / textarea** | `input`, `textarea` | DM Sans | `1rem` (16px) | 400 | Inherited/normal | Normal |
| **Choice / consent label** | `.choice-row label`, `.choice-stack label`, `.support-choices label`, `.consent` | DM Sans | `0.75rem` (12px) | 400 | 1.5 on consent copy | Normal |
| **Field helper** | `.message-field small` | DM Sans | `0.68rem` (10.88px) | 400 | 1.5 | Normal |
| **Field error** | `.field-error` | DM Sans | `0.68rem` (10.88px) | 400 | Inherited/normal | Normal |
| **Submit error** | `.submit-error` | DM Sans | `0.75rem` (12px) | 400 | Inherited/normal | Normal |
| **Text button** | `.text-button` | DM Sans | `1rem` (16px) | 400 | Inherited/normal | Normal |
| **Success body** | `.success-state > p:not(.eyebrow)` | DM Sans | `1rem` (16px) | 400 | 1.7 | Normal |

## Responsive type changes

### Tablet — up to 920px

- The homepage hero H1 changes to `clamp(2.9rem, 6vw, 3.5rem)` (46.4–56px).
- Other typography retains its desktop values.

### Mobile — up to 680px

| Style affected | Mobile value |
| --- | --- |
| Global H1 and homepage hero H1 | `clamp(2.65rem, 11.5vw, 3.35rem)` (42.4–53.6px) |
| Global H2 | `clamp(2rem, 8.5vw, 2.65rem)` (32–42.4px) |
| Footer display | `clamp(2.25rem, 10vw, 2.65rem)` (36–42.4px) |
| Form / success heading | `2.2rem` (35.2px) |
| Footer office-hours heading, note, day, time, utility text, utility headings, and copyright | `0.875rem` (14px) |
| Trust facts, credential labels, license note, approach chips, booking-aside details, crisis note, form note, field labels, choice labels, consent, helper text, and field errors | `0.875rem` (14px) |

## Implementation notes

- Major headings use balanced wrapping; paragraphs use pretty wrapping.
- Font synthesis is disabled and text rendering is set to `optimizeLegibility`.
- The only italic reset in active use is on addresses, which are rendered upright.
- The only all-caps treatments are the logistics card kicker, office-hours heading, and footer utility headings.
- No global line height is set on the root or body. Paragraphs default to `1.7`, while several compact component styles set their own tighter line height.
