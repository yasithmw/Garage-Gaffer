# Car Servicing — Content & Layout Plan
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

**Layout:** 2-column desktop (left = text block, right = QuoteWidget component). Stacks on mobile. Background: `#0A1412` with two radial brand-green glows. Same pattern as the existing repair and diagnostics pages. A secondary teal-accent glow (`--color-accent-teal: #31A7A8`) may be used to signal the servicing context without breaking the design system.

---

### Left column — text block

**Eyebrow:**
Car servicing · Bristol
> Rubik 11px 700 uppercase `#0D7A5F`

**H1 headline:**
Keep your car in good shape. <em>Before it becomes a problem.</em>
> Emotion: responsibility + care. The driver is being proactive, not reactive. Open Sans 800, 56px (≤960px → 40px), line-height 1.05, letter-spacing -1.5px, white. The `<em>` wraps the second sentence for the highlighted phrase treatment consistent with the peer pages.

**Subheadline:**
Book an interim or full service from a vetted Bristol mechanic — they come to you, work on your schedule, and keep your car running exactly as it should.
> Rubik 400 17px `rgba(255,255,255,0.75)`

**Body copy:**
No garage visit, no waiting around. Post your job, get quotes from mechanics near you, and pick the one that suits. Your car stays right where it is.
> Rubik 400 15px `rgba(255,255,255,0.60)`

**Trust badge pills** — 3 pills, `bg-white/8 border-white/12 rounded-full`, tick SVG + text:
- Vetted mechanics only
- Won't void your manufacturer warranty
- 12-month workmanship warranty

---

### Right column — QuoteWidget

**Component:** Use existing `QuoteWidget` component.
- `idSuffix` prop: `"servicing-hero"`
- Service dropdown: pre-selected to **"Full service"**
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
Bristol's top servicing mechanics.
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
- Avatar initials: `NP` · colour class: `.avatar-teal` (`#31A7A8`)
- Name: Natalie P.
- Location: BS8 · Clifton
- Verified badge: Verified mechanic
- Rating: 4.9 ★ (52 reviews)
- Skill tags: Primary (green) — Full service · Neutral — Interim · Neutral — Oil & filter
- Footer left: Usually responds in under 1 hr
- Footer right: Request Quote (btn-primary-sm)

---

**Card 2** *(PLACEHOLDER)*
- Avatar initials: `DH` · colour class: `.avatar-green` (`#0D7A5F`)
- Name: David H.
- Location: BS6 · Redland
- Verified badge: Verified mechanic
- Rating: 5.0 ★ (38 reviews)
- Skill tags: Primary (green) — Full service · Neutral — Timing belt · Neutral — MOT prep
- Footer left: Usually responds in under 2 hrs
- Footer right: Request Quote (btn-primary-sm)

---

**Card 3** *(PLACEHOLDER)*
- Avatar initials: `AO` · colour class: `.avatar-blue` (`#066599`)
- Name: Amara O.
- Location: BS3 · Southville
- Verified badge: Verified mechanic
- Rating: 4.8 ★ (67 reviews)
- Skill tags: Primary (green) — Interim · Neutral — Full service · Neutral — Brake fluid
- Footer left: Usually responds in under 1 hr
- Footer right: Request Quote (btn-primary-sm)

---

**Card 4** *(PLACEHOLDER)*
- Avatar initials: `LW` · colour class: `.avatar-teal` (`#31A7A8`)
- Name: Lewis W.
- Location: BS7 · Bishopston
- Verified badge: Verified mechanic
- Rating: 4.9 ★ (44 reviews)
- Skill tags: Primary (green) — Full service · Neutral — Spark plugs · Neutral — Air filter
- Footer left: Usually responds in under 2 hrs
- Footer right: Request Quote (btn-primary-sm)

---

**Card 5** *(PLACEHOLDER)*
- Avatar initials: `FN` · colour class: `.avatar-purple` (`#6165DD`)
- Name: Fatima N.
- Location: BS5 · Easton
- Verified badge: Verified mechanic
- Rating: 4.7 ★ (29 reviews)
- Skill tags: Primary (green) — Interim · Neutral — Oil & filter · Neutral — Coolant flush
- Footer left: Usually responds in under 3 hrs
- Footer right: Request Quote (btn-primary-sm)

---

**Card 6** *(PLACEHOLDER)*
- Avatar initials: `GC` · colour class: `.avatar-green` (`#0D7A5F`)
- Name: George C.
- Location: BS9 · Westbury-on-Trym
- Verified badge: Verified mechanic
- Rating: 5.0 ★ (21 reviews)
- Skill tags: Primary (green) — Full service · Neutral — Timing belt · Neutral — Interim
- Footer left: Usually responds in under 1 hr
- Footer right: Request Quote (btn-primary-sm)

---

**Card 7** *(PLACEHOLDER)*
- Avatar initials: `KB` · colour class: `.avatar-blue` (`#066599`)
- Name: Kezia B.
- Location: BS4 · Knowle
- Verified badge: Verified mechanic
- Rating: 4.8 ★ (58 reviews)
- Skill tags: Primary (green) — Interim · Neutral — Full service · Neutral — MOT prep
- Footer left: Usually responds in under 2 hrs
- Footer right: Request Quote (btn-primary-sm)

---

**Card 8** *(PLACEHOLDER)*
- Avatar initials: `RM` · colour class: `.avatar-teal` (`#31A7A8`)
- Name: Ryan M.
- Location: BS13 · Bedminster Down
- Verified badge: Verified mechanic
- Rating: 4.9 ★ (35 reviews)
- Skill tags: Primary (green) — Full service · Neutral — Brake fluid · Neutral — Air filter
- Footer left: Usually responds in under 3 hrs
- Footer right: Request Quote (btn-primary-sm)

---

**Card 9** *(PLACEHOLDER)*
- Avatar initials: `JT` · colour class: `.avatar-purple` (`#6165DD`)
- Name: Jo T.
- Location: BS16 · Fishponds
- Verified badge: Verified mechanic
- Rating: 4.8 ★ (46 reviews)
- Skill tags: Primary (green) — Timing belt · Neutral — Full service · Neutral — Spark plugs
- Footer left: Usually responds in under 2 hrs
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
Good questions. Here are the answers.
> Open Sans 800 34px centred `#1A1E1D`

---

### FAQ items — 7 questions (3 servicing-specific)

---

**Q1** *(servicing-specific)*
**Question:** Will a service by one of your mechanics void my manufacturer warranty?

**Answer:** No — as long as the service is carried out to manufacturer guidelines using approved parts and fluids, your warranty stays intact. This is a legal requirement under UK competition law. Our mechanics follow the manufacturer schedule exactly. If you're unsure, ask the mechanic in your quote — they'll confirm it for your specific make and model.

---

**Q2** *(servicing-specific)*
**Question:** What's the difference between an interim and a full service?

**Answer:** An interim service covers the basics — oil and filter change, top-up of key fluids, tyre check, lights, and a general look over. It's designed for drivers who cover higher mileage and want a check every 6 months between full services. A full service goes further: it covers everything in an interim plus brakes, steering, suspension, filters, spark plugs (where due), and a more detailed inspection. Most manufacturers recommend a full service once a year or every 12,000 miles — whichever comes first.

---

**Q3** *(servicing-specific)*
**Question:** What parts and fluids are included — and where do they come from?

**Answer:** Your mechanic sources the parts and fluids and includes them in the upfront quote. You see the full cost — labour, parts, and VAT — before you commit. Parts are OEM-equivalent or manufacturer-approved where required. If you want a specific brand of oil or filter, mention it when you post the job.

---

**Q4**
**Question:** How do I know the price is accurate before I commit?

**Answer:** Every mechanic sends a full itemised quote — labour, parts, and VAT included. What you see is what you pay. If anything unexpected comes up during the service, your mechanic asks before doing anything extra.

---

**Q5**
**Question:** Are the mechanics actually vetted, or just registered?

**Answer:** Vetted. Every mechanic on Garage Gaffer is DBS-checked, must show proof of their qualifications, and carries their own insurance. They're not listed until they've passed. This isn't a directory where anyone can sign up.

---

**Q6**
**Question:** What if something goes wrong after the service?

**Answer:** All work comes with a 12-month workmanship warranty. If there's a problem with the service itself, it's covered. Get in touch and we'll sort it out.

---

**Q7**
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

### Problem-area pill set — Servicing

> Active state: brand-green border + `#ECF7EF` background + `#0D7A5F` text. One pill active at a time. Deselect on second click.

- Interim service
- Full service
- Oil & filter
- Brake fluid
- Coolant flush
- Air filter
- Spark plugs
- Timing belt
- MOT prep
- Other

---

### QuoteWidget below pills

**Component:** Existing `QuoteWidget`.
- `idSuffix` prop: `"servicing-finder"`
- Service dropdown: pre-selected to **"Full service"**
- On mobile: widget appears below the pill grid with a top separator.

---

---

## Section 6 — Other Services

**Layout:** `grid-cols-2` desktop · `grid-cols-1` mobile. Same gap as `Services.tsx`.

**Component:** Exact same `<article>` structure as `Services.tsx` on the home page. White background, `border-radius: var(--radius-2xl)`, `border: 1px solid #DADCDB`, `--shadow-sm`. Hover: `-translate-y-[3px]` + `--shadow-lg` + top accent bar (`opacity-0 → opacity-100`). Icon well: `44×44px`, `border-radius: var(--radius-xl)`. Title: Open Sans 700 21px. Description: Rubik 400 14.5px `#595C5B`. Bullets: coloured dot + Rubik 13.5px `#595C5B`.

> This page shows: **Repairs** + **Diagnostics** cards (Servicing is the current page — omit it).

---

### Section copy

**Eyebrow:**
Our other services
> Rubik 11px 700 uppercase `#0D7A5F`

**Headline:**
Need something else?
> Open Sans 800 34px `#1A1E1D`

---

### Card 1 — Repairs

**Accent colour:** `#0D7A5F` · Icon well: `#ECF7EF`
**Link:** `/repairs`

**Title:**
Car repairs

**Description:**
Something's broken and you know what it is? Get a fixed quote from a vetted Bristol mechanic — at your door.

**Bullet points:**
- Brakes, clutch, exhaust, suspension and more
- Fixed price upfront — no surprises after the job
- 12-month workmanship warranty on every repair

**CTA link text:** See repairs →

---

### Card 2 — Diagnostics

**Accent colour:** `#066599` · Icon well: `#E6F3FA`
**Link:** `/diagnostics`

**Title:**
Diagnostics

**Description:**
Not sure what's wrong? Get a full diagnostic from a vetted Bristol mechanic and know exactly what needs doing before you commit to anything.

**Bullet points:**
- Full vehicle health check at your door
- Plain-English report on what's wrong
- Recommended next steps with no pressure

**CTA link text:** Find out more →

---

---

## Section 7 — Footer

**Component:** Use existing `Footer` component. No custom content.

---

---

## Implementation Notes

### For developers

- `QuoteWidget` appears in two places on this page: Section 1 (Hero, `idSuffix="servicing-hero"`) and Section 5 (Problem Finder, `idSuffix="servicing-finder"`). Both must pre-select **"Full service"** from the service dropdown. Pass `idSuffix` as specified — never build a duplicate widget inline.
- Section 3 mechanic cards: all 9 are illustrative placeholders. Wire up to the live mechanic data API before launch. The "View more mechanics →" ghost button should reveal additional cards in-grid without triggering page navigation.
- Section 4 FAQ: every accordion item must carry `FAQPage` / `Question` / `Answer` schema microdata for SEO. The help centre link at the bottom of the FAQ is a placeholder — route to `/help` when live.
- Section 5 pills: pill selection should populate a context field in the QuoteWidget below it. On mobile, the QuoteWidget sits below the pill grid with a top separator line.
- Section 6 cards link to `/repairs` and `/diagnostics`. Build as route placeholders if those pages are not yet live — do not omit the section.
- The `<article>` card structure in Section 6 must exactly match `Services.tsx`. Do not create a new card variant.

### For designers

- Section 1 background: `#0A1412` with two radial brand-green glows — consistent with existing service page pattern. A secondary teal-accent glow (`#31A7A8`) may be used to provide visual differentiation for servicing without breaking the design system. If used, confine the teal glow to the hero only.
- Section 2 Trust Strip: no section header. It reads as a continuation of the hero, not a new content block. Keep the strip visually tight and low-profile.
- Section 3: the first 9 mechanic cards are visible without interaction. The ghost button below sits in the same visual rhythm as the grid — do not add a divider or separator before it.
- Section 5: `background: #F5F7F6`. The pill grid must have sufficient touch target size on mobile (minimum 44px tap area). Active pill state uses brand-green border + `#ECF7EF` fill + `#0D7A5F` text — matches the platform's standard active-chip pattern.
- Section 6: top accent bar on each service card appears on hover only (`opacity-0 → opacity-100`, `transition: var(--t-base)`). Repairs uses green (`#0D7A5F`), Diagnostics uses blue (`#066599`).

### Content assumptions flagged for review

1. **Section 3 — All 9 mechanic cards** are illustrative placeholders. Names, postcodes, ratings, review counts, and skill tags must be replaced with live data before launch.
2. **Section 1 — QuoteWidget service option label** — "Full service" is the assumed label for the pre-selected option. Confirm the exact label string with the component implementation before publishing.
3. **Section 4 — Q1 (warranty)** — the answer references UK competition law (the Block Exemption Regulation). Confirm with legal before publishing. The substance is correct but the framing should be verified.
4. **Section 4 — Q2 (interim vs full)** — "12,000 miles or 12 months" is a common manufacturer guideline. Confirm this is the interval the platform intends to use as a general reference, or adjust to "check your handbook."
5. **Section 5 — Pill-to-widget wiring:** confirm the QuoteWidget API supports a context or pre-fill prop for pill selection interaction.
6. **Coverage area** — assumed to match the repairs and diagnostics pages (Bristol and surrounding areas). Confirm actual service boundary before publishing.
7. **Section 6 — Card descriptions and bullets** are written to match the `Services.tsx` pattern but are new copy. Cross-check against whatever is live in `Services.tsx` to ensure consistency.
