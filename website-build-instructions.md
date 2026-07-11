# Eunice Lee Website — Build Instructions

**Client:** Eunice W. Lee / Journey 2 Grow Therapy
**Source:** [Website Planner (Notion)](https://www.notion.so/Website-planner-3948e97f8c0680279517d7d2f6b4ac29)
**Change from planner:** Navigation simplified to three items — **Home, Blog, Booking**. All content that previously lived on separate pages (About, Therapy, Specialties, Fees & Insurance) is consolidated into Home as long-form sections. Contact is merged into Booking rather than kept as its own nav item.

---

## 1. Project summary

A simple, credible, professional website for Eunice Lee, LCSW — introduces her practice, builds trust, and drives visitors to request a **free 15-minute consultation**. Tone: professional, calm, sincere, private-practice scale but "properly run." Avoid glossy/agency polish, heavy animation, or salesy language.

Core audience: prospective clients dealing with anxiety, depression, relationship issues, life transitions, immigration/adjustment, self-esteem, or anger management — considering therapy but unsure how to start. Some clients will be Korean-speaking.

---

## 2. Navigation

Top nav — **3 items only**:

1. **Home**
2. **Blog** *(build the page/CMS, but hide this nav item at launch — see §6)*
3. **Booking** *(consultation request form + contact details, replaces separate "Contact" and "Contact/Consultation" pages from the original planner)*

No About, Therapy, Specialties, or Fees pages in the nav. That content moves into Home as scrollable sections (see §3). Keep footer minimal — optionally repeat Booking CTA and licensing/contact info in the footer, but do not add extra footer nav pages.

---

## 3. Home page — section-by-section

Build as a single scrolling page with clear section breaks (this absorbs what the planner split into About / Therapy / Specialties / Fees & Insurance).

### 3.1 Hero
- **Headline:** "Professional therapy for anxiety, relationships, and life transitions."
- **Subheadline:** "I'm Eunice Lee, an LCSW licensed in New York and New Jersey. I offer individual therapy online and in person in Basking Ridge, NJ, with support available in English and Korean."
- **Primary CTA:** "Request a free 15-minute consultation" → links to Booking page
- **Support line (small trust strip):** Online and in-person · NY/NJ licensed · English/Korean · Insurance accepted

### 3.2 Intro / about Eunice
Short paragraph introducing her approach:
> "Therapy with Eunice is collaborative and client-centered. She helps clients better understand what they are experiencing, build practical coping skills, and work toward clarity, resilience, and healthier relationships."

Include credentials briefly (not a full bio page):
- LCSW, licensed in New Jersey (44SC05929300) and New York (096779)
- MSW, Columbia University (2016); 10 years in practice
- Certified Clinical Trauma Professional (CCTP), 2022
- English and Korean spoken

### 3.3 Support areas / specialties
Simple card or list layout:
- Anxiety
- Depression
- Relationship issues
- Life transitions
- Immigration / adjustment
- Self-esteem
- Anger management

### 3.4 Therapy approach / what to expect
- Individual 1:1 therapy, online or in-person
- Intake session: 75 minutes
- Regular session: 55 minutes
- First 2–3 sessions focus on getting to know the client and building a treatment plan
- Approaches used: CBT, ACT, DBT, IFS, attachment-based, solution-focused, person-centered, trauma-focused (list simply, not clinically dense)
- *Note: only include "Christian counseling" if Eunice confirms she wants it public.*

### 3.5 Fees & insurance (short section, not a full page)
- Most major insurance accepted — list adapted from her Alma profile
- Cost varies by plan — direct visitors to inquire via Booking for details
- Mention sliding scale / superbill only if Eunice confirms
- Free 15-minute consultation available

### 3.6 Logistics / trust strip
Repeat key facts near the bottom of Home:
- Licensed in NY and NJ
- Online and in-person (Journey 2 Grow Therapy, 233 Mt. Airy Rd. Suite 100 – Room 103, Basking Ridge, NJ 07920)
- English and Korean
- Insurance accepted
- Free 15-minute consultation

### 3.7 Closing CTA block
> "If you're considering therapy but not sure where to begin, you can start with a brief consultation. Share a little about what you're looking for, and Eunice will follow up by email or text."
**CTA:** "Send an inquiry" → links to Booking page

---

## 4. Booking page (merged Contact + Consultation)

This replaces the planner's separate "Contact / Consultation" page. One page handles both the inquiry form and contact/location info.

### Form fields
- Name
- Email
- Phone (optional)
- Preferred contact method: Email / Text / Phone
- State/location: NJ / NY / Other
- Session preference: Online / In-person in Basking Ridge / Not sure
- Main reason for seeking support (checkboxes): Anxiety, Depression, Relationship issues, Life transitions, Immigration/adjustment, Self-esteem, Anger management, Other
- Short message: "Briefly tell me what you're hoping to get support with. Please avoid including urgent, crisis, or highly sensitive medical details in this form."
- Consent checkbox: "I understand this form is for consultation inquiries and is not for emergencies."

### Form behavior
- Submissions send to Eunice's email (confirm destination address before build — see §7 open items).
- Show a confirmation message after submit with next-step expectations.
- Include a crisis disclaimer near the form (e.g., pointing to 988 Suicide & Crisis Lifeline for emergencies).

### Contact/location info on same page
- In-person sessions are held at: Journey 2 Grow Therapy, 233 Mt. Airy Rd. Suite 100 – Room 103, Basking Ridge, NJ 07920
- Some clients travel from New York for in-person sessions — don't imply NY-based clients are online-only; simply list Online and In-person (233 Mt. Airy) as the two options for anyone, NJ or NY.
- Note that phone calls aren't ideal (she can't answer while working) — text or email preferred

---

## 5. Style direction

- Clean typography, generous whitespace, clear visual hierarchy, minimal navigation (3 items, per §2)
- Professional headshot/portrait if available
- No heavy animation or large-agency gloss
- Mobile layout gets equal design attention
- Overall feel: bright, warm, clean — not clinical/cold, not overly wellness-y

### Color palette

Finalized in Figma — [Color Palette frame](https://www.figma.com/design/sZRHNaD5nuC0oyE54f5Wuy/Eunice-Lee?node-id=5-3&m=dev), based on the olive green tone from Eunice's dining room (anchor color `#586B45`).

| Role | Hex | Name | Usage |
|---|---|---|---|
| Primary | `#586B45` | Olive Green | Main brand color — CTAs, key accents, links |
| Secondary | `#E6EECD` | Warm Tan | Light green-tan accent for section backgrounds, highlights |
| Background | `#EDEAE4` | Warm White | Page/section background |
| Surface | `#E8E3D9` | Linen | Cards, form fields, secondary surfaces |
| Text | `#1A1F14` | Dark Olive | Body copy and headings (near-black with a warm olive undertone, not true black) |

Notes:
- No blue/navy in the final palette — the earlier sky-blue/navy direction was superseded by this all-warm, olive-anchored set once Eunice saw it in Figma.
- Keep contrast in mind: Dark Olive (`#1A1F14`) on Warm White/Linen backgrounds for body text; white or Warm Tan text on Olive Green buttons — verify contrast ratios meet WCAG AA before build.
- Reference the Figma frame directly for swatch order/hierarchy when handing off to design/dev.

Palette should read as calm, warm, and clean together — avoid saturated/bright greens; keep the olive muted and soft. Confirm exact hex values with Eunice once mockups are ready (she referenced her dining room olive tone as the anchor).

---

## 6. Blog — build now, hide at launch

- Build the CMS/blog collection and article template now.
- Do **not** show "Blog" in the live nav at launch — keep the page built but unlinked/hidden.
- Add one draft/placeholder post for structure testing (not publicly visible).
- Prepare a short handoff guide for Eunice covering: how to create a post, how to publish/unpublish, and how to turn the Blog nav item on when she's ready.
- Suggested first topics (for later, not needed at launch): first-session expectations, anxiety basics, life transitions, relationship communication patterns, immigration/adjustment stress, anger & coping skills, bilingual (English/Korean) therapy.

---

## 7. Open items to confirm with Eunice before/at build

- Preferred public name: "Eunice Lee" vs. "Eunice W. Lee"
- How prominently to feature "Journey 2 Grow Therapy" as a practice name
- Destination email for Booking form submissions
- Whether to mention text-message follow-up publicly
- Whether to show a direct phone number
- Whether to show a map on the Booking page (address confirmed: 233 Mt. Airy Rd. Suite 100 – Room 103, Basking Ridge, NJ 07920)
- Final insurance list (source: Alma profile)
- Whether to mention sliding scale or superbill
- Headshot/photo assets
- Any required legal/privacy/HIPAA disclaimer language
- Korean: launch as an English site with a Korean note only, or include actual Korean copy sections
- Platform choice: Squarespace (easiest self-management for Blog) vs. Webflow (more design control, Kristian/Artuvo maintains)
- Domain/hosting status

---

## 8. Build phases

1. **Confirm direction** — share 3–5 simple/professional reference sites, confirm visual direction, platform, and Booking form destination email.
2. **Content architecture** — finalize this simplified 3-page structure, write section outlines, form fields, fees/insurance wording.
3. **Copywriting** — draft Home and Booking copy; send to Eunice for review.
4. **Visual design** — design Home first (all sections), then Booking; design reusable components (CTA block, topic cards, trust strip, form); design mobile carefully.
5. **Build** — build Home and Booking live; build Blog but keep hidden from nav; set up form email delivery; add SEO metadata; add crisis disclaimer.
6. **QA & handoff** — test form delivery and responsive layouts; check accessibility basics; verify all facts (insurance, license numbers, session lengths, consultation wording); deliver Blog activation/publishing guide.
7. **Launch** — connect domain, submit sitemap to Google Search Console, monitor Booking form submissions, revisit Blog activation when Eunice is ready.
