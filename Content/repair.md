# Repairs Page — Content Plan
> Garage Gaffer · Bristol's mechanic marketplace
> Layout: Fixed 7-section SERVICE PAGE GUIDELINES skeleton
> Generated: April 2026

---

## Layout Overview

| # | Section | Purpose |
|---|---|---|
| 1 | Hero + QuoteWidget | Validate the driver's situation and let them act immediately |
| 2 | Trust Strip | 3 hard credibility facts before the driver has scrolled |
| 3 | Top Mechanics | Real, bookable mechanics — most conversion-critical section |
| 4 | FAQ | Handle last-mile objections before the driver bounces |
| 5 | Problem Finder | Catch drivers who are still lost and haven't acted |
| 6 | Other Services | Surface the other 2 service pages |
| 7 | Footer | Existing Footer component — no custom content |

---

---

## Section 1 — Hero + QuoteWidget

**Layout:** 2-column desktop (left = text block, right = QuoteWidget component). Stacks on mobile. Background: `#0A1412` with two radial brand-green glows. Same pattern as existing repair page.

---

### Left column — text block

**Eyebrow:**
Car repairs · Bristol
> Rubik 11px 700 uppercase `#0D7A5F`

**H1 headline:**
Something's wrong with your car. Let's sort it.
> Emotion: frustration + urgency. Open Sans 800, 56px (≤960px → 40px), line-height 1.05, letter-spacing -1.5px, white.

**Subheadline:**
Post your problem, get quotes from vetted Bristol mechanics, and pick the one that works for you. They come to you.
> Rubik 400 17px `rgba(255,255,255,0.75)`

**Body copy:**
You don't need to know exactly what's wrong. Describe what's happening — a noise, a warning light, something that doesn't feel right — and local mechanics will quote you directly.
> Rubik 400 15px `rgba(255,255,255,0.60)`

**Trust badge pills** — 3 pills, `bg-white/8 border-white/12 rounded-full`, tick SVG + text:
- Vetted mechanics only
- See the price before you commit
- 12-month workmanship warranty

---

### Right column — QuoteWidget

**Component:** Use existing `QuoteWidget` component.
- `idSuffix` prop: `"repair-hero"`
- Service dropdown: pre-selected to **"Repair a specific issue"**
- Do not rebuild the widget inline.

---

---

## Section 2 — Trust Strip

**Layout:** `grid-cols-3`, `gap: 20px`. Flows directly from the hero — no section header. Each card: `#FFFFFF` background, `border: 1px solid #DADCDB`, `border-radius: var(--radius-xl)`, `padding: 24px`, `--shadow-sm`. Icon well: `48×48px`, `#ECF7EF` background, `#0D7A5F` colour, `border-radius: var(--radius-lg)`, inline SVG 22–26px stroke 1.8.

> Note: These 3 cards are identical across all three service pages.

---

### Card 1

**Icon:** Calendar / shield variant (22–26px inline SVG, stroke 1.8, `currentColor`)

**Headline:**
12-month workmanship warranty.
> Open Sans 700 16px `#1A1E1D`

**Body:**
If something isn't right with the work, it's covered for a year. No arguments, no small print.
> Rubik 400 13.5px `#595C5B`

---

### Card 2

**Icon:** Shield (22–26px inline SVG, stroke 1.8, `currentColor`)

**Headline:**
DBS checked. Qualification verified.
> Open Sans 700 16px `#1A1E1D`

**Body:**
Every mechanic is background-checked and must show proof of their qualifications before appearing on the platform.
> Rubik 400 13.5px `#595C5B`

---

### Card 3

**Icon:** Document / certificate (22–26px inline SVG, stroke 1.8, `currentColor`)

**Headline:**
Insured on every job.
> Open Sans 700 16px `#1A1E1D`

**Body:**
All mechanics carry public liability insurance. Every job on Garage Gaffer is covered.
> Rubik 400 13.5px `#595C5B`

---

---

## Section 3 — Top Mechanics

**Layout:** `grid-cols-3` desktop · `grid-cols-2` tablet (≤860px) · `grid-cols-1` mobile (≤560px). `gap: 20px`.

**Component:** Exact Mechanic Profile Card from `DESIGN.md`. Every element of the spec must be followed.

**Show/hide behaviour:** First 9 cards visible by default. "View more mechanics →" ghost button (`btn-ghost`) centred below the grid — on click reveals remaining cards in the same grid. No page navigation.

> PLACEHOLDER NOTE: All 9 mechanic cards below are illustrative. Replace with live data before launch. Names, postcodes, ratings, and review counts are realistic samples only.

---

### Section copy

**Eyebrow:**
Top mechanics
> Rubik 11px 700 uppercase `#0D7A5F`

**Headline:**
Bristol's top repair mechanics.
> Open Sans 800 34px `#1A1E1D`

**Subheadline:**
Vetted, rated, and ready to come to you.
> Rubik 400 16px `#595C5B`

---

### Mechanic card data — 9 illustrative records

> Card structure per DESIGN.md Mechanic Profile Card spec:
> - `.mechanic-header`: avatar (initials + colour variant) + `.mechanic-name` + `.mechanic-location` + `.mechanic-verified` badge
> - `.star-row`: filled stars `#F9C339` + rating value + review count
> - `.skill-tags`: 1 coloured primary badge + up to 2 neutral badges
> - `.card-footer`: response time left / "Request Quote" primary-sm button right

---

**Card 1** *(PLACEHOLDER)*
- Avatar initials: `JT` · colour class: `.avatar-green` (`#0D7A5F`)
- Name: James T.
- Location: BS8 · Clifton
- Verified badge: Verified mechanic
- Rating: 4.9 ★ (47 reviews)
- Skill tags: Primary (green) — Brakes · Neutral — Suspension · Neutral — Exhaust
- Footer left: Usually responds in under 1 hr
- Footer right: Request Quote (btn-primary-sm)

---

**Card 2** *(PLACEHOLDER)*
- Avatar initials: `MO` · colour class: `.avatar-blue` (`#066599`)
- Name: Marcus O.
- Location: BS3 · Bedminster
- Verified badge: Verified mechanic
- Rating: 5.0 ★ (31 reviews)
- Skill tags: Primary (green) — Clutch · Neutral — Gearbox · Neutral — Brakes
- Footer left: Usually responds in under 2 hrs
- Footer right: Request Quote (btn-primary-sm)

---

**Card 3** *(PLACEHOLDER)*
- Avatar initials: `SK` · colour class: `.avatar-teal` (`#31A7A8`)
- Name: Sophie K.
- Location: BS6 · Redland
- Verified badge: Verified mechanic
- Rating: 4.8 ★ (63 reviews)
- Skill tags: Primary (green) — Electrical · Neutral — Brakes · Neutral — Battery
- Footer left: Usually responds in under 1 hr
- Footer right: Request Quote (btn-primary-sm)

---

**Card 4** *(PLACEHOLDER)*
- Avatar initials: `RB` · colour class: `.avatar-green` (`#0D7A5F`)
- Name: Ravi B.
- Location: BS5 · Easton
- Verified badge: Verified mechanic
- Rating: 4.9 ★ (29 reviews)
- Skill tags: Primary (green) — Exhaust · Neutral — Suspension · Neutral — Brakes
- Footer left: Usually responds in under 3 hrs
- Footer right: Request Quote (btn-primary-sm)

---

**Card 5** *(PLACEHOLDER)*
- Avatar initials: `CW` · colour class: `.avatar-purple` (`#6165DD`)
- Name: Connor W.
- Location: BS9 · Stoke Bishop
- Verified badge: Verified mechanic
- Rating: 4.7 ★ (22 reviews)
- Skill tags: Primary (green) — Suspension · Neutral — Brakes · Neutral — Clutch
- Footer left: Usually responds in under 2 hrs
- Footer right: Request Quote (btn-primary-sm)

---

**Card 6** *(PLACEHOLDER)*
- Avatar initials: `PA` · colour class: `.avatar-blue` (`#066599`)
- Name: Priya A.
- Location: BS7 · Bishopston
- Verified badge: Verified mechanic
- Rating: 5.0 ★ (18 reviews)
- Skill tags: Primary (green) — Brakes · Neutral — Electrical · Neutral — Exhaust
- Footer left: Usually responds in under 1 hr
- Footer right: Request Quote (btn-primary-sm)

---

**Card 7** *(PLACEHOLDER)*
- Avatar initials: `DN` · colour class: `.avatar-teal` (`#31A7A8`)
- Name: Dan N.
- Location: BS4 · Knowle
- Verified badge: Verified mechanic
- Rating: 4.8 ★ (54 reviews)
- Skill tags: Primary (green) — Clutch · Neutral — Gearbox · Neutral — Suspension
- Footer left: Usually responds in under 2 hrs
- Footer right: Request Quote (btn-primary-sm)

---

**Card 8** *(PLACEHOLDER)*
- Avatar initials: `TL` · colour class: `.avatar-green` (`#0D7A5F`)
- Name: Tom L.
- Location: BS13 · Hartcliffe
- Verified badge: Verified mechanic
- Rating: 4.9 ★ (37 reviews)
- Skill tags: Primary (green) — Exhaust · Neutral — Clutch · Neutral — Brakes
- Footer left: Usually responds in under 3 hrs
- Footer right: Request Quote (btn-primary-sm)

---

**Card 9** *(PLACEHOLDER)*
- Avatar initials: `EF` · colour class: `.avatar-purple` (`#6165DD`)
- Name: Elena F.
- Location: BS16 · Fishponds
- Verified badge: Verified mechanic
- Rating: 4.8 ★ (41 reviews)
- Skill tags: Primary (green) — Electrical · Neutral — Battery · Neutral — Brakes
- Footer left: Usually responds in under 1 hr
- Footer right: Request Quote (btn-primary-sm)

---

### "View more" control

**Button text:** View more mechanics →
**Style:** `btn-ghost`, centred below grid.
**Behaviour:** Reveals remaining cards progressively in the same grid. No page navigation.

---

---

## Section 4 — FAQ

**Layout:** Accordion, `max-width: 760px`, centred. Collapsed by default. Active item: `border-[#0D7A5F]`, `shadow-[0_4px_12px_rgba(13,122,95,0.08)]`. Expand/collapse: plus icon rotates to ×. FAQPage / Question / Answer schema markup required on every item.

---

### Section copy

**Eyebrow:**
Common questions
> Rubik 11px 700 uppercase `#0D7A5F`

**Headline:**
Got a question? Good.
> Open Sans 800 34px centred `#1A1E1D`

---

### FAQ items — 8 questions (3 repair-specific)

---

**Q1** *(repair-specific)*
**Question:** I don't know exactly what's wrong. Can I still post a job?

**Answer:** Yes — that's exactly what most drivers do. Just describe what's happening: the noise, the warning light, how it's behaving. Mechanics will review your job and quote if they can help. You can add photos too, which helps.

---

**Q2** *(repair-specific)*
**Question:** What if the repair needs parts? How does that work?

**Answer:** Your mechanic will source the parts and include them in the quote upfront. You see the parts cost broken out before you commit — labour, parts, and VAT, all listed separately. Nothing gets added without your go-ahead.

---

**Q3** *(repair-specific)*
**Question:** Do I need a diagnostic first, or can I just book a repair?

**Answer:** You can book a repair directly if you know what needs fixing. If you're not sure what's wrong, our Diagnostics service is the right starting point — a mechanic will run a full check and tell you exactly what's needed before any work begins.

---

**Q4**
**Question:** How do I know the price is accurate before I commit?

**Answer:** Every mechanic sends a full itemised quote — labour, parts, and VAT included. What you see is what you pay. If anything unexpected comes up during the job, your mechanic asks before doing anything extra.

---

**Q5**
**Question:** Are the mechanics actually vetted, or just registered?

**Answer:** Vetted. Every mechanic on Garage Gaffer is DBS-checked, must show proof of their qualifications, and carries their own insurance. They're not listed until they've passed. This isn't a directory where anyone can sign up.

---

**Q6**
**Question:** What if something goes wrong after the repair?

**Answer:** All work comes with a 12-month workmanship warranty. If there's a problem with the work itself, it's covered. Get in touch and we'll sort it out.

---

**Q7**
**Question:** Do you cover my area of Bristol?

**Answer:** We cover Bristol and the surrounding areas — Clifton, Southville, Redland, Bedminster, Stoke Bishop, Bishopston, and more. Enter your postcode when you post your job and we'll show you who's nearby.

---

**Q8**
**Question:** Is it really free to post a job?

**Answer:** Yes. Posting a job and getting quotes costs you nothing. You only pay when you book a mechanic.

---

### Link below accordion

More questions? Visit the help centre →
> Link placeholder — route to `/help` or help centre URL when live.

---

---

## Section 5 — Problem Finder

**Layout:** Full-width section, `background: #F5F7F6`, centred content, `max-width: 900px`. Pill selection highlights and feeds context into QuoteWidget below.

**Tone note:** This is a helper tool for the driver who has read everything and still hasn't acted. Practical and gentle — not promotional.

---

### Section copy

**Eyebrow:**
Not sure where to start?
> Rubik 11px 700 uppercase `#0D7A5F`

**Headline:**
Still figuring it out? Start here.
> Open Sans 800 34px `#1A1E1D`

**Subheadline:**
Pick the area that sounds closest — we'll show you who can help.
> Rubik 400 16px `#595C5B`

---

### Problem-area pill set — Repairs

> Active state: brand-green border + `#ECF7EF` background + `#0D7A5F` text. One pill active at a time. Deselect on second click.

- Brakes
- Tyres
- Suspension
- Battery
- Engine noise
- Exhaust
- Electrics
- Cooling
- Steering
- Clutch
- Gearbox
- Oil leak
- Warning light
- Other

---

### QuoteWidget below pills

**Component:** Existing `QuoteWidget`.
- `idSuffix` prop: `"repair-finder"`
- Service dropdown: pre-selected to **"Repair a specific issue"**
- On mobile: widget appears below the pill grid with a top separator.

---

---

## Section 6 — Other Services

**Layout:** `grid-cols-2` desktop · `grid-cols-1` mobile. Same gap as `Services.tsx`.

**Component:** Exact same `<article>` structure as `Services.tsx` on the home page. White background, `border-radius: var(--radius-2xl)`, `border: 1px solid #DADCDB`, `--shadow-sm`. Hover: `-translate-y-[3px]` + `--shadow-lg` + top accent bar (`opacity-0 → opacity-100`). Icon well: `44×44px`, `border-radius: var(--radius-xl)`. Title: Open Sans 700 21px. Description: Rubik 400 14.5px `#595C5B`. Bullets: coloured dot + Rubik 13.5px `#595C5B`.

> This page shows: **Diagnostics** + **Servicing** cards (Repairs is the current page — omit it).

---

### Section copy

**Eyebrow:**
Our other services
> Rubik 11px 700 uppercase `#0D7A5F`

**Headline:**
Need something else?
> Open Sans 800 34px `#1A1E1D`

---

### Card 1 — Diagnostics

**Accent colour:** `#066599` · Icon well: `#E6F3FA`
**Link:** `/diagnostics`

**Title:**
Diagnostics

**Description:**
Not sure what's wrong? Book a diagnostic and get a clear answer before committing to anything.

**Bullet points:**
- Full vehicle health check
- Fault code reading and plain-English explanation
- Recommended next steps with no pressure

**CTA link text:** Find out more →

---

### Card 2 — Servicing

**Accent colour:** `#31A7A8` · Icon well: `#E4F6F6`
**Link:** `/servicing`

**Title:**
Servicing

**Description:**
Keep your car healthy and your warranty intact. Interim or full service, at your door, by a vetted Bristol mechanic.

**Bullet points:**
- Interim and full service options
- Oil, filters, fluids, and full inspection
- Same 12-month workmanship warranty

**CTA link text:** Find out more →

---

---

## Section 7 — Footer

**Component:** Use existing `Footer` component. No custom content.

---

---

## Implementation Notes

### For developers

- `QuoteWidget` appears in two places on this page: Section 1 (Hero, `idSuffix="repair-hero"`) and Section 5 (Problem Finder, `idSuffix="repair-finder"`). Both must pre-select "Repair a specific issue". Pass `idSuffix` as specified — never build a duplicate widget inline.
- Section 3 mechanic cards: all 9 are illustrative placeholders. Wire up to the live mechanic data API before launch. The "View more mechanics →" ghost button should reveal additional cards in-grid without triggering page navigation.
- Section 4 FAQ: every accordion item must carry `FAQPage` / `Question` / `Answer` schema microdata for SEO. The help centre link at the bottom of the FAQ is a placeholder — route to `/help` when live.
- Section 5 pills: pill selection should populate a context field in the QuoteWidget below it — so when a driver picks "Brakes", the widget pre-fills or highlights the relevant service context. On mobile, the QuoteWidget sits below the pill grid with a top separator line.
- Section 6 cards link to `/diagnostics` and `/servicing`. Build as route placeholders if those pages are not yet live — do not omit the section.
- The `<article>` card structure in Section 6 must exactly match `Services.tsx`. Do not create a new card variant.

### For designers

- Section 1 background: `#0A1412` with two radial brand-green glows — consistent with existing repair page pattern.
- Section 2 Trust Strip: no section header. It reads as a continuation of the hero, not a new content block. Keep the strip visually tight and low-profile.
- Section 3: the first 9 mechanic cards are visible without interaction. The ghost button below sits in the same visual rhythm as the grid — do not add a divider or separator before it.
- Section 5: `background: #F5F7F6`. The pill grid must have sufficient touch target size on mobile (minimum 44px tap area). Active pill state uses brand-green border + `#ECF7EF` fill + `#0D7A5F` text — matches the platform's standard active-chip pattern.
- Section 6: top accent bar on each service card appears on hover only (`opacity-0 → opacity-100`, `transition: var(--t-base)`). Accent colours are service-specific — do not swap them.

### Content assumptions flagged for review

1. **Section 3 — All 9 mechanic cards** are illustrative placeholders. Names, postcodes, ratings, review counts, and skill tags must be replaced with live data before launch.
2. **Section 5 — Pill-to-widget wiring:** the spec assumes pill selection feeds context into the QuoteWidget. Confirm the QuoteWidget API supports a context or pre-fill prop for this interaction.
3. **Section 4 — "Do I need a diagnostic first?"** (FAQ Q3) links conceptually to the Diagnostics page. If an in-text link is added, route to `/diagnostics`.
4. **Section 6 — Card descriptions and bullets** are written to match the `Services.tsx` pattern but are new copy. Cross-check against whatever is live in `Services.tsx` to ensure consistency.
5. **Coverage area neighbourhoods** in FAQ Q7 are drawn from `CONTEXT.md` examples — confirm actual service boundary before publishing.
