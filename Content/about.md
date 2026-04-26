# About Us — Content & Layout Plan
> Garage Gaffer · Bristol's mechanic marketplace
> Generated: April 2026

---

## Platform Context Summary

Garage Gaffer is a Bristol mechanic marketplace connecting local drivers with vetted, local mobile mechanics. It is early-stage, deliberately city-specific, and built on a simple proposition: a driver posts a job, vetted mechanics quote, the driver picks one, and that mechanic comes to them. The brand personality is warm, plain-spoken, and Bristol-rooted — "The Trusted Local" meets "The Reliable Expert."

The About page is not a service or conversion page. It has no QuoteWidget, no mechanic grid. Its job is to make the platform feel real and accountable — to answer the question a sceptical driver legitimately asks before they trust a new platform with their car: "Who actually built this, and why should I believe them?"

Primary goal: build trust through honesty, not through superlatives.
Secondary goal: cross-sell the three service pages to drivers who've satisfied their curiosity and are ready to act.

---

## Research Insights

Analysed About pages from comparable early-stage local marketplace and service platforms: ClickMechanic, Rated People, Fantastic Services, Bark.com, and Deliveroo (early positioning). Key findings:

**What most About pages do wrong:**
- Open with a generic "we're on a mission to transform X" paragraph that says nothing concrete.
- Use "our values" cards with abstract nouns (Integrity, Innovation, Trust) that carry no weight.
- Celebrate company milestones (funding rounds, press coverage, headcount) that mean nothing to a driver trying to fix their car.
- Write in the third person ("Garage Gaffer believes…") which immediately creates distance.
- Include "meet the team" sections with stock-photo headshots and titles like "Head of Growth" that feel corporate, not local.

**What the best ones do:**
- Lead with the specific problem they witnessed, not a category-level statement. ClickMechanic's early copy was better when it said "finding a good mechanic is a lottery" than when it became "powering the future of automotive services."
- Admit what they are and are not. Early Deliveroo copy was refreshingly specific about being a restaurant delivery service in a handful of cities — that specificity made it feel real.
- Make the reader feel that real people built this for real reasons, not that it's a VC-backed machine disguised as a local service.
- Use the About page to pre-empt trust objections (vetting process, accountability, coverage) that don't fit neatly on service pages.

**UX patterns for About pages on marketplace / service platforms:**
- Short hero — one declarative sentence, not a pitch. The hero should identify the brand, not sell it.
- A "why we exist" narrative block that earns the driver's patience with concrete detail.
- A "how we work" or "what we actually do" section that is plain and matter-of-fact.
- A differentiation section that states what you won't do — this reads as authentic restraint where "what makes us special" reads as sales copy.
- Footer CTA linking to the product — the reader who's been persuaded needs a clear next step.

---

## Layout Blueprint

| # | Section | Layout Pattern | Purpose |
|---|---|---|---|
| 1 | **Hero** | Centred, text-only. Quiet — no widget, no stats strip. | Identify who we are. One honest sentence. |
| 2 | **The problem we saw** | Single-column narrative block, max-width 720px, centred. Optionally a 2-col pull-quote layout on desktop. | Establish the genuine frustration that created this platform. Concrete and specific. |
| 3 | **What we actually do** | 3-step numbered row (horizontal desktop / stacked mobile). Plain numbers, short labels, short descriptions. | Describe the marketplace model plainly — no jargon, no oversell. |
| 4 | **How we vet mechanics** | 2×2 icon-well grid (same token set as Trust Strip on service pages). `background: #F5F7F6` section wash. | Earn trust through specifics of the vetting process. The substance section. |
| 5 | **Where we operate** | Postcode chip cluster + short prose. Narrow centred layout. | Honest geographic boundary. Makes the platform feel real and bounded. |
| 6 | **Who's behind it** | 1-column text block, max-width 640px, centred. No headshots. No team cards. | Human and brief. Founders as people, not a leadership team. |
| 7 | **What we won't do** | Short, plain list (4–5 items). Left-aligned. Light background or inline. | Differentiator section. Reads as restraint, not a brag. |
| 8 | **Our services** | 3-column card grid (`grid-cols-3` desktop / `grid-cols-1` mobile). Same `<article>` card structure as `Services.tsx`. | Cross-sell to the three service pages. |
| 9 | **Footer** | Existing `Footer` component. No custom content. | Standard site close. |

---

---

## Section 1 — Hero

**Component type:** Centred hero. Typography-led. No photography, no widget, no stats. Background: `#0A1412` with a single, subtle radial brand-green glow centred behind the text (quieter than the service page heroes — one glow, not two). On mobile: consistent padding, text centred.

**Purpose:** Arrive, identify, and set tone. Not a pitch. Not a value proposition. The equivalent of a handshake before you start talking.

> Visual note: The hero should feel meaningfully quieter than the service pages. The radial glow is present for visual continuity but at reduced intensity (`opacity: 0.35–0.45` rather than full). No illustration, no badge strip. Just text.

---

**Eyebrow:**
About Garage Gaffer
> Rubik 11px 700 uppercase `#0D7A5F`

**H1 headline:**
We're a small Bristol team that got tired of the way finding a mechanic works.
> Open Sans 800. 56px (≤960px → 40px), line-height 1.05, letter-spacing -1.5px, white. Wraps to ~2 lines at desktop width — that's intentional, it should read as a statement, not a strap line.

**Subheadline:**
So we built something that fixes the worst parts of it.
> Rubik 400 17px `rgba(255,255,255,0.75)`. One line. No further explanation here — the rest of the page does that.

> No CTA button in the hero. This page isn't asking for an action. The driver scrolls because they're curious, not because they need to act immediately.

---

---

## Section 2 — The Problem We Saw

**Component type:** Single-column narrative. `max-width: 720px`, centred. Prose-heavy but broken into short paragraphs — no walls of text. On desktop, optionally pull one key sentence as a typographic callout (Open Sans, large, brand green) to break the rhythm and give the reader a visual anchor.

**Background:** White. This section follows the dark hero and should feel like a gear-change into plain daylight — clear and readable.

**Purpose:** Establish why this exists. Concrete frustration, not category-level complaint. The tone should feel like someone who has actually tried to book a mechanic in Bristol and been annoyed by the experience — because they have.

> Visual note: Keep it text-focused. If a pull-quote treatment is used, it should be one sentence only — bold, large, brand green — set between two paragraphs. Not a box, not a bordered card. Just the typographic contrast.

---

**Eyebrow:**
Why we built this
> Rubik 11px 700 uppercase `#0D7A5F`

**Section headline:**
Finding a good mechanic in Bristol is harder than it should be.
> Open Sans 800 34px `#1A1E1D`

**Body copy — Paragraph 1:**
If your car breaks down or starts making a noise you don't recognise, the first thing most people do is ask around. Because the alternative — just ringing garages — is a bad experience. You ring. They're busy. You leave a voicemail. They don't ring back. Or they do, give you a number off the top of their head with no breakdown, and you have no idea whether it's fair.

**Body copy — Paragraph 2:**
Mobile mechanics are a better answer for a lot of jobs. They come to you, their overheads are lower, and the good ones are genuinely excellent. But finding a vetted one in Bristol who does your type of repair, is available when you need them, and will give you a straight quote upfront? That's a lottery. Word-of-mouth if you're lucky. A directory listing if you're not.

**Pull-quote (optional typographic treatment):**
> "A directory listing isn't a vetting. Anyone can pay to appear on a list."
> Open Sans 800, 22–24px, `#0D7A5F`, max-width 560px, centred, `margin: 32px auto`

**Body copy — Paragraph 3:**
That's the gap Garage Gaffer is for. A place where drivers can post a job and hear from mechanics who've actually been checked — not just listed. Where the quote is itemised before you commit. Where the person doing the work is accountable, not anonymous.

---

---

## Section 3 — What We Actually Do

**Component type:** 3-step numbered row — same visual rhythm as the "Three Steps" section in `how-it-works.md`. Large decorative step numbers (Open Sans 800, oversized, `#ECF7EF` fill or `#0D7A5F` at low opacity — not a badge). Short label. One-sentence description. Clean horizontal layout on desktop, stacked vertically on mobile.

**Background:** `#F5F7F6` section wash.

**Purpose:** Describe the marketplace plainly. No jargon. No "ecosystem." Three sentences and the driver understands the model.

> Visual note: Do not use icons for this section — the large step numbers are the visual. Connector line between the steps (a thin, brand-green line, `opacity: 0.3`) reinforces the left-to-right progression on desktop. Drop it on mobile (it becomes redundant in a stacked layout).

---

**Eyebrow:**
How it works
> Rubik 11px 700 uppercase `#0D7A5F`

**Section headline:**
We're a marketplace. Here's the plain version.
> Open Sans 800 34px `#1A1E1D`

**Step 1**
- **Number:** 01
- **Label:** You post your job
- **Body:** Tell us what's happening with your car and where you're based. Takes under two minutes. No card needed.

**Step 2**
- **Number:** 02
- **Label:** Vetted mechanics quote
- **Body:** Bristol mechanics who've passed our checks see your job and send an itemised price. You see who they are, their ratings, and their qualifications before you commit.

**Step 3**
- **Number:** 03
- **Label:** You pick one and they come to you
- **Body:** Choose the mechanic that suits you — on price, reviews, or availability. They turn up at your door. You don't move the car.

**Microcopy beneath steps:**
Free to post · No commitment until you book · Same-day slots available
> Rubik 400 13.5px `#595C5B`, centred, below the step row

---

---

## Section 4 — How We Vet Mechanics

**Component type:** 2×2 icon-well grid. Same visual spec as the Trust Strip on service pages but with a section header and fuller body copy per card (this is a dedicated trust section, not a quick strip). `background: #FFFFFF`. Cards: `#FFFFFF`, `border: 1px solid #DADCDB`, `border-radius: var(--radius-xl)`, `padding: 24px`, `--shadow-sm`. Icon well: `48×48px`, `#ECF7EF` background, `#0D7A5F` colour, `border-radius: var(--radius-lg)`, inline SVG 22–26px stroke 1.8.

**Purpose:** The substance section. This is where the About page earns the trust it's claimed in Sections 1 and 2. Every claim is backed by a specific check. No superlatives.

> Visual note: The grid should feel like a factual disclosure, not a marketing panel. Headline fragments, not full sentences with exclamation points. The tone is matter-of-fact: here is what we check, here is why it matters.

---

**Eyebrow:**
How we check our mechanics
> Rubik 11px 700 uppercase `#0D7A5F`

**Section headline:**
Every mechanic is checked before they take a job.
> Open Sans 800 34px `#1A1E1D`

**Subheadline:**
Not at sign-up — before their first job on the platform. Here's what that actually involves.
> Rubik 400 16px `#595C5B`

---

**Card 1 — DBS check**

**Icon:** Shield (22–26px inline SVG, stroke 1.8, `currentColor`)

**Headline:**
DBS checked.
> Open Sans 700 16px `#1A1E1D`

**Body:**
Every mechanic undergoes a Disclosure and Barring Service check before they can take jobs on the platform. We see the result. If it's not clean, they don't appear.
> Rubik 400 13.5px `#595C5B`

---

**Card 2 — Qualifications**

**Icon:** Certificate / badge (22–26px inline SVG, stroke 1.8, `currentColor`)

**Headline:**
Qualifications verified.
> Open Sans 700 16px `#1A1E1D`

**Body:**
Mechanics must provide proof of their qualifications — City & Guilds, IMI, or equivalent — before appearing on the platform. We don't take their word for it.
> Rubik 400 13.5px `#595C5B`

---

**Card 3 — Insurance**

**Icon:** Document / certificate (22–26px inline SVG, stroke 1.8, `currentColor`)

**Headline:**
Public liability insurance confirmed.
> Open Sans 700 16px `#1A1E1D`

**Body:**
Every mechanic on Garage Gaffer holds their own public liability insurance. We confirm this before they take a job. If something goes wrong, it's covered.
> Rubik 400 13.5px `#595C5B`

---

**Card 4 — Warranty**

**Icon:** Calendar / warranty (22–26px inline SVG, stroke 1.8, `currentColor`)

**Headline:**
12-month workmanship warranty.
> Open Sans 700 16px `#1A1E1D`

**Body:**
All work booked through Garage Gaffer carries a 12-month workmanship warranty. If something isn't right with the job itself, it's covered — no arguments, no small print.
> Rubik 400 13.5px `#595C5B`

---

**Supporting copy (below the grid, centred):**
We're not a directory. Anyone can pay to appear in a directory. We check every mechanic individually, and we take responsibility for who's on the platform.
> Rubik 400 14px `#595C5B`, max-width 600px, centred, `margin-top: 24px`

---

---

## Section 5 — Where We Operate

**Component type:** Narrow centred layout — `max-width: 680px`. Short prose paragraph followed by a cluster of Bristol postcode chip tags (non-interactive, visual only). Chips use the standard pill token: `background: #ECF7EF`, `border: 1px solid rgba(13,122,95,0.2)`, `border-radius: var(--radius-full)`, Rubik 600 13px `#0D7A5F`. Below the chips: a single honest sentence about coverage limits.

**Background:** `#F5F7F6` section wash.

**Purpose:** Be specific about geography. "Bristol and surrounding areas" is vague; named postcodes are honest and trust-building. Being clear about the boundary also manages expectations — a driver in Swindon finds out before they post, not after.

> Visual note: The postcode chips are decorative / informational — not interactive filters. They should feel like a visual "here's the places we cover" statement, not a search interface. Compact cluster layout, `flex-wrap: wrap`, `gap: 8px`.

---

**Eyebrow:**
Where we operate
> Rubik 11px 700 uppercase `#0D7A5F`

**Section headline:**
Bristol. Properly covered.
> Open Sans 800 34px `#1A1E1D`

**Body copy:**
We operate in Bristol and the areas directly around it. The mechanics on the platform are based here — they're not driving in from somewhere else to cover a job.

**Postcode chips:**
BS1 · BS2 · BS3 · BS4 · BS5 · BS6 · BS7 · BS8 · BS9 · BS10 · BS11 · BS13 · BS14 · BS15 · BS16 · BS30 · BS31 · BS32 · BS34 · BS36 · BS37

> `[PLACEHOLDER — confirm exact coverage postcodes with founder before publishing]`

**Coverage note (below chips):**
Not sure if we cover your area? Enter your postcode when you post a job and we'll show you who's nearby.
> Rubik 400 13.5px `#595C5B`

---

---

## Section 6 — Who's Behind It

**Component type:** Single-column text block. `max-width: 640px`, centred. No headshot cards. No "leadership team" panel. Just direct prose — who built this, where they're from, what drove it. If there are two founders, two short paragraphs. If one, one paragraph.

**Background:** White.

**Purpose:** Make the platform feel like it was built by real Bristol people for real reasons, not spun up as a business opportunity. Admitting the company is small and new is a differentiator here — it's honest, and the driver senses that.

> Visual note: No avatars, no role titles, no company org-chart energy. Plain prose. The names are set in the body copy naturally, not in a name/title/headshot grid format.

> Founders are placeholders. Mark clearly for the implementer.

---

**Eyebrow:**
The people behind it
> Rubik 11px 700 uppercase `#0D7A5F`

**Section headline:**
We're small. That's the point.
> Open Sans 800 34px `#1A1E1D`

**Body copy — Paragraph 1:**
Garage Gaffer was started in 2024 by [FOUNDER NAME — PLACEHOLDER] and [CO-FOUNDER NAME — PLACEHOLDER], both based in Bristol. The short version: one of them had a car problem, couldn't find a mechanic they trusted, and spent two days ringing garages that didn't call back. The platform came from that.

> `[PLACEHOLDER — replace bracketed names with real founder details before publishing]`

**Body copy — Paragraph 2:**
We're not a large company trying to enter Bristol. We're based here. We use this platform ourselves when something goes wrong with our cars. That's not a marketing line — it's just true, and it shapes how we've built it.

**Body copy — Paragraph 3:**
The team is small, which means decisions get made quickly and we're reachable. If something on the platform doesn't work the way it should, we want to know. The contact details are at the bottom of every page.

---

---

## Section 7 — What We Won't Do

**Component type:** Short plain list. 4–5 items, each introduced with a dash or a simple `×` marker in brand-dark colour. Left-aligned within a centred container (`max-width: 680px`). No icons, no cards — just the list. This section is deliberately stripped-back. The plainness is the signal.

**Background:** `#F5F7F6` section wash. Keeps it visually distinct from Section 6 without making it feel promotional.

**Purpose:** Establish credibility through what you refuse to do. Every item on this list is a practice common to national directories or aggregators that Garage Gaffer actively avoids. Drivers who have been burned by those platforms will recognise each line. This section reads as authentic restraint, not a brag.

> Visual note: Plain list. No decorative graphics. The `×` marker (or dash) should be `#0D7A5F` — it functions as a "we don't do this" mark, not a negative. Headline above the list, one sentence intro, then the list. Nothing below the list except a closing line.

---

**Eyebrow:**
What we don't do
> Rubik 11px 700 uppercase `#0D7A5F`

**Section headline:**
A few things we've deliberately left out.
> Open Sans 800 34px `#1A1E1D`

**Intro sentence:**
These are things a lot of platforms do. We don't, and we won't.
> Rubik 400 16px `#595C5B`

---

**List items:**
> Each item: `×` marker in `#0D7A5F` + Rubik 400 15px `#1A1E1D` headline + optional Rubik 400 13.5px `#595C5B` clarifier on the line below

1. **We don't take a cut from your quote.**
   What you're quoted is what the mechanic charges. We don't add a margin on top of their price.

2. **We don't list mechanics we haven't checked.**
   If a mechanic hasn't passed our vetting process, they don't appear on the platform. There's no paid listing, no "boost your visibility" tier.

3. **We don't hide who's doing the job.**
   Every quote comes from a named, identifiable mechanic with a real profile. You know who's coming before you book.

4. **We don't operate nationally.**
   We're Bristol. Specifically Bristol. We don't have a version of this in twelve cities where no one knows who the mechanics are. When we expand, we'll vet each city properly.

5. **We don't take sides if something goes wrong.**
   If there's a dispute, we'll look into it properly. We're not going to tell you to "take it up with the mechanic" and disappear. The 12-month workmanship warranty exists because we want there to be a clear route to resolution.

---

**Closing line (below the list):**
We're not claiming to be perfect. We're claiming to be honest about it when we're not.
> Rubik 400 14px `#595C5B`, centred, `margin-top: 24px`

---

---

## Section 8 — Our Services

**Component type:** 3-column card grid (`grid-cols-3` desktop / `grid-cols-2` tablet (≤860px) / `grid-cols-1` mobile (≤560px)). Same `<article>` card structure as `Services.tsx` on the home page. White background, `border-radius: var(--radius-2xl)`, `border: 1px solid #DADCDB`, `--shadow-sm`. Hover: `-translate-y-[3px]` + `--shadow-lg` + top accent bar (`opacity-0 → opacity-100`). Icon well: `44×44px`, `border-radius: var(--radius-xl)`. Title: Open Sans 700 21px. Description: Rubik 400 14.5px `#595C5B`. Bullets: coloured dot + Rubik 13.5px `#595C5B`.

**Background:** White.

**Purpose:** Cross-sell. The driver who has read this far is warm. Give them a clear, low-friction path to the relevant service.

---

**Eyebrow:**
Our services
> Rubik 11px 700 uppercase `#0D7A5F`

**Section headline:**
Ready to get sorted?
> Open Sans 800 34px `#1A1E1D`

**Subheadline:**
Three services. All at your door. All carried out by vetted Bristol mechanics.
> Rubik 400 16px `#595C5B`

---

**Card 1 — Repairs**

**Accent colour:** `#0D7A5F` · Icon well: `#ECF7EF`
**Link:** `/repairs`

**Title:**
Repairs

**Description:**
Something's wrong and you know it needs fixing. Post the job, get quotes from mechanics near you, pick one. They come to you.

**Bullet points:**
- Any make or model
- Itemised quote before you commit
- 12-month workmanship warranty

**CTA link text:** Get repair quotes →

---

**Card 2 — Diagnostics**

**Accent colour:** `#066599` · Icon well: `#E6F3FA`
**Link:** `/diagnostics`

**Title:**
Diagnostics

**Description:**
Not sure what's wrong? A diagnostic gives you a clear answer before you spend money on anything.

**Bullet points:**
- Full vehicle health check
- Fault codes explained in plain English
- Recommended next steps with no pressure

**CTA link text:** Book a diagnostic →

---

**Card 3 — Servicing**

**Accent colour:** `#31A7A8` · Icon well: `#E4F6F6`
**Link:** `/servicing`

**Title:**
Servicing

**Description:**
Interim or full service, at your door. Keep the car healthy and the warranty intact.

**Bullet points:**
- Interim and full service options
- Oil, filters, fluids, and full inspection
- Same-day slots available

**CTA link text:** Book a service →

---

---

## Section 9 — Footer

**Component:** Use existing `Footer` component. No custom content.

---

---

## Implementation Notes

### For developers

- No `QuoteWidget` on this page. Do not add one. The cross-sell CTA is handled entirely by Section 8 service cards.
- Section 5 postcode chips are display-only — not interactive filters. Render as static pill elements. No click handler required.
- Section 7 `×` markers: these are typographic/decorative. Use `aria-hidden="true"` on the marker glyph and keep the list item text fully accessible as a `<li>` or `<p>`. Do not use a real `×` character for a "close" semantic — it's a visual prefix only here.
- Section 8 service cards must exactly match the `<article>` structure in `Services.tsx`. Do not create new card variants.
- Section 6 founder names are clearly marked as `[PLACEHOLDER]` — they must be replaced with real details before publishing. Do not ship with placeholder text visible.
- Section 5 postcode list is also marked `[PLACEHOLDER]` — confirm exact coverage boundary with the founder before publishing.
- `FAQPage` schema is not needed on this page. This is an informational brand page, not an FAQ page.
- Add `Organization` and `LocalBusiness` schema markup to the `<head>` of this page — it is the most appropriate page to carry that structured data (name, address, areaServed: Bristol, url).

### For designers

- The hero is intentionally quieter than the service pages — one radial glow at reduced intensity, no widget, no badge strip. Resist the urge to add more visual elements to the hero. The plainness is the message.
- Section 2 (The Problem We Saw): if a pull-quote typographic treatment is used, it should be a single sentence in Open Sans 800, `#0D7A5F`, set inline between paragraphs — not a styled card or bordered block.
- Section 3 steps: large decorative numerals are the visual. Use Open Sans 800 at ~64–80px, colour `rgba(13,122,95,0.12)` as an oversized background numeral, with the step label and body copy sitting on top in normal weight and normal size. This is the same approach referenced in `how-it-works.md`.
- Section 7 (What We Won't Do): the plainness is deliberate and load-bearing. Do not add decorative icons, gradient backgrounds, or card treatments to this section. A plain list in a pale section background is exactly right.
- Section 8 service cards: 3-column on desktop. This page does not have a "currently on this page" card to exclude, so all three services appear. Match the exact card spec and accent colours from `Services.tsx`.

### Content assumptions flagged for review

1. **Section 6 — Founder names and backstory** are fully placeholders. Replace with real founder details, real founding year confirmation (2024 is stated in CONTEXT.md), and any real founding anecdote the founders want to use before publishing.
2. **Section 5 — Postcode list** is drawn from CONTEXT.md neighbourhood examples and extended logically. Confirm exact service boundary with the founder — specifically BS30, BS31, BS32, BS34, BS36, BS37 (surrounding areas). The inner Bristol postcodes (BS1–BS16) are likely safe.
3. **Section 7 — List item 1 ("we don't take a cut from your quote"):** confirm this is accurate to the business model before publishing. If the platform charges mechanics a fee or commission rather than the driver, this line holds — but if there is any charge to the driver embedded in the quote, this line must be revised.
4. **Section 3 — "Same-day slots available":** consistent with the claim made across service pages. Confirm operational reliability before publishing.
5. **Section 8 — CTA link text** uses slightly varied phrasing from the standard "Find out more →" used in `repair.md`'s Section 6 (here: "Get repair quotes →", "Book a diagnostic →", "Book a service →"). This was a deliberate choice — on the About page, the driver is warm and ready to act, so the CTAs are more direct. Cross-check with the team on whether they want a consistent CTA label across all service card instances site-wide, or context-appropriate variation.
