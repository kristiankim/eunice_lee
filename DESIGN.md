---
name: "Journey 2 Grow Therapy"
description: "A welcoming, practical, and natural personal-brand system for Eunice Lee, LCSW."
colors:
  dining-room-olive: "#586B45"
  deep-olive: "#344029"
  soft-leaf: "#E6EECD"
  warm-white: "#EDEAE4"
  linen: "#E8E3D9"
  quiet-surface: "#F6F3ED"
  dark-olive: "#1A1F14"
  muted-olive: "#5C6653"
  hairline: "#1A1F1426"
  error: "#9B3F30"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(3rem, 4.45vw, 4.9rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2.1rem, 3vw, 3.55rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(1.55rem, 2.3vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.08
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.01em"
rounded:
  none: "0"
  subtle: "2px"
  circular: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "72px"
components:
  button-primary:
    backgroundColor: "{colors.dining-room-olive}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.subtle}"
    padding: "0 22px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.deep-olive}"
    textColor: "#FFFFFF"
  button-light:
    backgroundColor: "{colors.soft-leaf}"
    textColor: "{colors.dark-olive}"
    typography: "{typography.label}"
    rounded: "{rounded.subtle}"
    padding: "0 22px"
    height: "50px"
  input:
    backgroundColor: "{colors.quiet-surface}"
    textColor: "{colors.dark-olive}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "14px"
  chip:
    backgroundColor: "{colors.warm-white}"
    textColor: "{colors.muted-olive}"
    typography: "{typography.label}"
    rounded: "{rounded.circular}"
    padding: "11px 16px"
---

# Design System: Journey 2 Grow Therapy

## Overview

**Creative North Star: "The Welcoming Study"**

The interface should feel like entering a thoughtful, quietly furnished study where a serious conversation can begin without ceremony. It is calm and personal, but its warmth comes from clarity, natural materials, olive color, photography, and measured spacing—not wellness decoration. Every composition should feel practical before it feels styled.

The system is bright, breathable, and deliberately square-edged. Large ideas receive space, while details such as credentials, fees, session formats, and form guidance remain easy to scan. Desktop layouts may be asymmetric, but reading order is always vertical and obvious. Mobile is an equal design surface with smaller display type, full-width portraiture, 44px touch targets, and no compressed multi-column artifacts.

This system explicitly rejects cold medical portals, generic wellness or spa branding, glossy agency production, and conversion-heavy sales funnels.

**Key Characteristics:**

- Practical, natural, and quietly personal
- Muted olive color used with confidence
- Classical serif hierarchy paired with plainspoken sans-serif copy
- Tonal layering and hairlines instead of decorative shadows
- Real portrait and interior photography as emotional evidence
- Restrained, one-time entrance motion with reduced-motion parity

## Colors

The palette comes from Eunice’s dining-room olive and the natural materials of a comfortable consultation space.

### Primary

- **Dining Room Olive:** The defining brand surface for primary actions, support sections, links, icons, and high-confidence moments.
- **Deep Olive:** A darker structural tone for hover states, closing sections, overlays, and strong contrast.

### Secondary

- **Soft Leaf:** A light botanical accent for gentle calls to action, success moments, and selected emphasis. It is not a default page background.

### Neutral

- **Warm White:** The main page ground. It remains quiet enough for long-form reading while staying connected to the olive palette.
- **Linen:** Secondary surfaces, cards, and form-adjacent blocks that need separation without elevation.
- **Quiet Surface:** The lightest reading and form surface.
- **Dark Olive:** The universal heading and body ink; never substitute pure black.
- **Muted Olive:** Secondary copy that remains AA-readable on light surfaces.
- **Hairline:** Dividers and structural boundaries only.
- **Error:** Inline form errors and failed submission messaging.

**The Olive Commitment Rule.** Dining Room Olive must carry meaningful surface area or interaction weight; never reduce it to tiny decorative accents scattered across a neutral page.

**The Natural Warmth Rule.** Warmth comes from olive, imagery, typography, and material texture. Never introduce unrelated beige, gold, peach, or dusty-pink accents.

## Typography

**Display Font:** Newsreader (with Georgia fallback)  
**Body Font:** DM Sans (with sans-serif fallback)

**Character:** Newsreader gives Eunice’s voice a calm, human cadence; DM Sans keeps practical information and forms direct. The pairing should feel like a considered conversation, not a magazine cover.

### Hierarchy

- **Display** (400, fluid 3rem–4.9rem, 0.98): Hero statements only. Cap line width near 13 characters and reduce to approximately 2.65rem–3.35rem on mobile.
- **Headline** (400, fluid 2.1rem–3.55rem, 1.04): Section introductions and major booking-page statements. On mobile, use 2rem–2.65rem so section headings remain clearly subordinate to the hero.
- **Title** (400, fluid 1.55rem–2.25rem, 1.08): Support topics, session steps, and logistics titles.
- **Body** (400, 1rem, 1.7): Explanations and guidance, normally capped between 60 and 70 characters per line.
- **Label** (600, 0.875rem, 0.01em, sentence case): Eyebrows, field labels, navigation, and short metadata. Avoid automatic uppercase and wide tracking.

**The Calm Scale Rule.** Display type must support the portrait and message rather than dominate the viewport. The hero headline ceiling is 4.9rem, and mobile display type never exceeds 3.35rem.

**The Heading Contrast Rule.** Section H2s top out at 3.55rem—well below the 4.9rem hero ceiling—and use a slightly more open 1.04 line height. This keeps page hierarchy legible even when H1 and H2 appear within adjacent sections.

**The Direct Heading Rule.** Informational sections begin with a clear, literal heading and move directly into content. Reserve label–headline–blurb compositions for the hero or a genuinely distinct narrative moment; never repeat them as page scaffolding.

**The Insurance Clarity Rule.** Describe insurance as plan-specific until Eunice supplies and approves a current insurer list. Never imply universal acceptance, guaranteed coverage, or a known out-of-pocket cost; tell visitors what information to share and what they should confirm with their insurer.

## Elevation

The system is flat and tonally layered. Depth comes from adjacent olive, linen, warm-white, and quiet-surface fields; 1px hairlines establish structure. Shadows are exceptional and structural, used only for the consultation form or another foreground object that genuinely sits above its surroundings.

### Shadow Vocabulary

- **Form lift** (`0 24px 60px -38px rgba(57, 66, 46, 0.35)`): Reserved for the primary booking form against the quiet page surface.

**The Flat-by-Default Rule.** If a container can be separated with tone, spacing, or a hairline, a shadow is prohibited.

## Components

### Buttons

- **Shape:** Nearly square with a restrained 2px radius and a minimum 50px height.
- **Primary:** Dining Room Olive with white text, 22px horizontal padding, and a directional arrow.
- **Hover / Focus:** Hover shifts to Deep Olive and rises 2px with an exponential ease. Focus uses a 3px Dark Olive outline. Active returns downward by 1px.
- **Light:** Soft Leaf with Dark Olive text for actions placed on dark olive or photographic backgrounds.

### Chips

- **Style:** Fully rounded, border-defined approach labels with no shadow. Text uses Muted Olive on the surrounding page tone.
- **State:** Informational only; do not make static therapy-method chips look selectable.

### Cards / Containers

- **Corner Style:** Square or nearly square. Large rounded panels are prohibited.
- **Background:** Use Linen, Quiet Surface, or Dining Room Olive according to hierarchy.
- **Shadow Strategy:** Flat by default; follow the Elevation section.
- **Border:** Hairlines are permitted where they clarify grouping. Avoid borders when tonal contrast already establishes the edge.
- **Internal Padding:** Fluid 30px–54px for large logistics blocks; 20px–28px for compact information blocks.

### Inputs / Fields

- **Style:** Labels sit above controls. Text inputs use an underline; textareas use a full 1px boundary on Quiet Surface. Corners remain square.
- **Focus:** Boundary changes to Dining Room Olive with a visible 3px focus outline.
- **Error / Disabled:** Error text appears directly below its field in Error red. Disabled submit actions remain legible and visibly non-interactive.

### Navigation

- The navigation is minimal: wordmark, Home, and the consultation CTA. Blog remains hidden until approved for launch.
- Active text uses a quiet underline. Mobile collapses to a 44px menu control and a simple stacked list with hairline separation.

### Portrait Composition

- The portrait fills its available column up to 470px wide on desktop and the full content width on mobile.
- Use the supplied Eunice Lee portrait with a stable aspect ratio and explicit dimensions to avoid layout shift.
- The Soft Leaf listening note may overlap the lower-left edge on desktop; hide it when space becomes constrained.

### Section Introductions

- Informational sections use direct headings such as “Areas of support,” “What to expect,” “Fees & insurance,” and “Online and in-person sessions.”
- The hero may use one orienting label. Other sections omit labels unless they add information that the heading cannot.
- Preserve generous space after headings without adding promotional blurbs solely to fill the composition.

### Support List

- Support areas are a semantic, noninteractive list separated by quiet hairlines.
- Each row uses an index, a clear title, and one concise explanatory sentence.
- Static rows never use arrows, hover movement, button-like fills, or any other cue that promises navigation or expansion.

### Closing Footer

- The final invitation and site footer are one image-backed section, avoiding two consecutive calls to action.
- The invitation leads with the practical “If you’re considering therapy…” message, followed by one supporting sentence and one consultation action.
- Practice credentials, office address, navigation, and copyright information sit in a ruled utility row at the bottom of the image.
- Keep this ending useful and calm: one action, no promotional kicker, and no duplicate closing section above it.

### Motion

- Initial navigation and hero elements enter once with restrained upward movement.
- Scrolled content reveals once through opacity and a 28px upward translation using `cubic-bezier(.16, 1, .3, 1)`.
- Reduced-motion users receive immediate content with no meaningful movement. Content must remain readable even if animation does not execute.

## Do's and Don'ts

### Do:

- **Do** use Dining Room Olive as a committed brand surface and interaction color.
- **Do** keep the hero headline below 4.9rem and visually balanced with the 470px portrait.
- **Do** let informative sections begin with literal headings and move directly into useful content.
- **Do** use real portrait and interior photography with natural light and material texture.
- **Do** maintain WCAG 2.2 AA contrast, visible keyboard focus, semantic form labels, and reduced-motion support.
- **Do** treat mobile as an equal experience with 44px controls, at least 14px supporting text, and no horizontal overflow.
- **Do** use direct, practical language that makes beginning therapy feel manageable.
- **Do** style static information as static information, with semantic lists and no false interaction cues.

### Don't:

- **Don't** resemble a cold medical portal.
- **Don't** use generic wellness or spa styling, including candles, pastel self-care clichés, or vague healing imagery.
- **Don't** introduce glossy large-agency polish, excessive animation, or cinematic effects that compete with trust.
- **Don't** use conversion-heavy sales-funnel patterns, urgency language, exaggerated claims, or manufactured proof.
- **Don't** use a display headline larger than the portrait’s visual weight.
- **Don't** repeat eyebrows or label–headline–blurb compositions as decorative scaffolding.
- **Don't** add promotional blurbs when the section title and content already explain the purpose.
- **Don't** place arrows or hover motion on support rows unless those rows become genuinely interactive.
- **Don't** add large rounded cards, decorative glass effects, gradient text, pure black, neon accents, or heavy shadows.
- **Don't** imply testimonials, affiliations, Korean translations, insurance details, or clinical claims that Eunice has not approved.
