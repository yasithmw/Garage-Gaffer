# Car Diagnostics — Content & Layout Plan
> Garage Gaffer · Bristol's mechanic marketplace
> Rewritten: April 2026 · Compliant with Service Page Guidelines (7-section fixed skeleton)

---

## Platform Context Summary

Garage Gaffer is Bristol's mechanic marketplace — a platform that connects local drivers with vetted, mobile mechanics who come to them. The diagnostics page targets drivers in a state of anxiety and confusion: something is wrong with the car, they don't know what it is, and they don't feel equipped to describe it. The brand voice is warm, plain-English, and Bristol-specific. Every service page must reference the at-your-door convenience as a primary pillar, and must include the `QuoteWidget` component in both the hero and the Problem Finder section.

---

## Full Content — All 7 Sections in Fixed Order

---

### SECTION 1 — Hero + QuoteWidget

**Component:** Full-width dark hero, `background: #0A1412` with two radial glows — a primary brand-green glow (same pattern as the repair hero) and a secondary blue-accent glow (`--color-accent-blue: #066599`) to signal the diagnostics context. 2-column desktop layout: left = text block, right = `QuoteWidget` component. Stacks single-column on mobile (text above, widget below).

---

**Left column — text block**

Eyebrow (Rubik 11px 700 uppercase `#0D7A5F`):
> Car diagnostics · Bristol

H1 headline (Open Sans 800, 56px desktop / 40px mobile, `#FFFFFF`, line-height 1.05, letter-spacing -1.5px):
> Warning light on? Let's find out what it actually means.

Subheadline (Rubik 17px 400, `rgba(255,255,255,0.75)`, line-height 1.6):
> Post your problem, get a full diagnostic from a vetted Bristol mechanic — at your door. You'll get a plain-English report on exactly what's wrong, and what to do next.

Body copy (Rubik 15px 400, `rgba(255,255,255,0.60)`, line-height 1.6):
> Warning lights, strange noises, something that just doesn't feel right — you don't need to know what's causing it. That's the mechanic's job.

Trust badge pills (3 pills, `bg-white/8 border-white/12 rounded-full`, tick SVG + Rubik 13px):
- Vetted mechanics only
- Plain-English report on what's wrong
- 12-month workmanship warranty

---

**Right column — QuoteWidget**

Component: `<QuoteWidget idSuffix="diagnostics-hero" />`

- Service dropdown pre-selected: "Run full diagnostics"
- Use the existing QuoteWidget component — do not rebuild inline
- Shorter label variant applies

---

### SECTION 2 — Trust Strip

**Component:** `grid-cols-3`, gap `20px`. No section header — this strip flows directly below the hero as a credibility continuation, not a new named section. Sits within the standard `.container` wrapper.

**Fixed content — identical across all three service pages:**

---

**Card 1 — Warranty**

Icon: Calendar (shield variant) — inline SVG, `22–26px`, stroke `1.8`, `currentColor`. Icon well: `48×48px`, `background: #ECF7EF`, `color: #0D7A5F`, `border-radius: var(--radius-lg)`.

Headline (Open Sans 700, 16px, `#1A1E1D`):
> 12-month workmanship warranty.

Body (Rubik 400, 13.5px, `#595C5B`):
> If something isn't right with the work, it's covered for a year. No arguments, no small print.

---

**Card 2 — Vetting**

Icon: Shield — inline SVG, `22–26px`, stroke `1.8`, `currentColor`. Icon well: `48×48px`, `background: #ECF7EF`, `color: #0D7A5F`, `border-radius: var(--radius-lg)`.

Headline (Open Sans 700, 16px, `#1A1E1D`):
> DBS checked. Qualification verified.

Body (Rubik 400, 13.5px, `#595C5B`):
> Every mechanic is background-checked and must show proof of their qualifications before appearing on the platform.

---

**Card 3 — Insurance**

Icon: Document — inline SVG, `22–26px`, stroke `1.8`, `currentColor`. Icon well: `48×48px`, `background: #ECF7EF`, `color: #0D7A5F`, `border-radius: var(--radius-lg)`.

Headline (Open Sans 700, 16px, `#1A1E1D`):
> Insured on every job.

Body (Rubik 400, 13.5px, `#595C5B`):
> All mechanics carry public liability insurance. Every job on Garage Gaffer is covered.

---

Card spec (each card): `background: #FFFFFF` · `border: 1px solid #DADCDB` · `border-radius: var(--radius-xl)` · `padding: 24px` · `box-shadow: var(--shadow-sm)`

---

### SECTION 3 — Top Mechanics

**Component:** `grid-cols-3` desktop · `grid-cols-2` tablet (≤860px) · `grid-cols-1` mobile (≤560px). Gap `20px`. First 9 mechanic cards visible by default. "View more mechanics →" `btn-ghost` button centred below the grid — on click reveals remaining cards in the same grid, no page navigation.

Each card uses the exact **Mechanic Profile Card** component from DESIGN.md. No new card variants.

---

**Section header (above grid):**

Eyebrow (Rubik 11px 700 uppercase `#0D7A5F`):
> Top mechanics

Headline (Open Sans 800, 34px, `#1A1E1D`, letter-spacing -0.5px):
> Bristol's top diagnostic mechanics

Subheadline (Rubik 16px, `#595C5B`):
> Vetted, rated, and ready to come to you.

---

**Mechanic Card 1** — placeholder data, replace with live records before launch

- Avatar: initials `MK`, `.avatar-green`
- Name: Marcus Kelly
- Location: BS6 · Redland
- Verified badge: Verified mechanic
- Stars: 5.0 (filled) · Rating: 4.9 · Reviews: (47 reviews)
- Skill tags: `Diagnostics` (primary, green badge) · `Engine` (neutral) · `OBD scan` (neutral)
- Card footer left: Responds within 1 hr
- Card footer right: [Request Quote] `btn-primary-sm`

---

**Mechanic Card 2** — placeholder

- Avatar: initials `SB`, `.avatar-blue`
- Name: Sam Brislington
- Location: BS4 · Brislington
- Verified badge: Verified mechanic
- Stars: 5.0 (filled) · Rating: 5.0 · Reviews: (31 reviews)
- Skill tags: `Diagnostics` (primary, green badge) · `Fault finding` (neutral) · `Engine` (neutral)
- Card footer left: Responds within 2 hrs
- Card footer right: [Request Quote] `btn-primary-sm`

---

**Mechanic Card 3** — placeholder

- Avatar: initials `RP`, `.avatar-teal`
- Name: Rachel Parris
- Location: BS3 · Bedminster
- Verified badge: Verified mechanic
- Stars: 5.0 (filled) · Rating: 4.8 · Reviews: (62 reviews)
- Skill tags: `Diagnostics` (primary, green badge) · `OBD scan` (neutral) · `Fault finding` (neutral)
- Card footer left: Responds within 1 hr
- Card footer right: [Request Quote] `btn-primary-sm`

---

**Mechanic Card 4** — placeholder

- Avatar: initials `TO`, `.avatar-purple`
- Name: Tom Oliveira
- Location: BS7 · Horfield
- Verified badge: Verified mechanic
- Stars: 5.0 (filled) · Rating: 4.9 · Reviews: (28 reviews)
- Skill tags: `Diagnostics` (primary, green badge) · `Engine` (neutral) · `OBD scan` (neutral)
- Card footer left: Responds within 3 hrs
- Card footer right: [Request Quote] `btn-primary-sm`

---

**Mechanic Card 5** — placeholder

- Avatar: initials `DM`, `.avatar-green`
- Name: Dan Merchant
- Location: BS8 · Clifton
- Verified badge: Verified mechanic
- Stars: 5.0 (filled) · Rating: 4.7 · Reviews: (54 reviews)
- Skill tags: `Diagnostics` (primary, green badge) · `Fault finding` (neutral) · `Engine` (neutral)
- Card footer left: Responds within 2 hrs
- Card footer right: [Request Quote] `btn-primary-sm`

---

**Mechanic Card 6** — placeholder

- Avatar: initials `AL`, `.avatar-blue`
- Name: Ash Liddiard
- Location: BS5 · Easton
- Verified badge: Verified mechanic
- Stars: 5.0 (filled) · Rating: 4.8 · Reviews: (39 reviews)
- Skill tags: `Diagnostics` (primary, green badge) · `OBD scan` (neutral) · `Fault finding` (neutral)
- Card footer left: Responds within 1 hr
- Card footer right: [Request Quote] `btn-primary-sm`

---

**Mechanic Card 7** — placeholder

- Avatar: initials `CN`, `.avatar-teal`
- Name: Claire Nkosi
- Location: BS1 · City Centre
- Verified badge: Verified mechanic
- Stars: 5.0 (filled) · Rating: 5.0 · Reviews: (19 reviews)
- Skill tags: `Diagnostics` (primary, green badge) · `Engine` (neutral) · `OBD scan` (neutral)
- Card footer left: Responds within 2 hrs
- Card footer right: [Request Quote] `btn-primary-sm`

---

**Mechanic Card 8** — placeholder

- Avatar: initials `JW`, `.avatar-green`
- Name: Jake Whitmore
- Location: BS14 · Hengrove
- Verified badge: Verified mechanic
- Stars: 5.0 (filled) · Rating: 4.9 · Reviews: (33 reviews)
- Skill tags: `Diagnostics` (primary, green badge) · `Fault finding` (neutral) · `Engine` (neutral)
- Card footer left: Responds within 3 hrs
- Card footer right: [Request Quote] `btn-primary-sm`

---

**Mechanic Card 9** — placeholder

- Avatar: initials `PH`, `.avatar-purple`
- Name: Priya Hendry
- Location: BS9 · Westbury-on-Trym
- Verified badge: Verified mechanic
- Stars: 5.0 (filled) · Rating: 4.8 · Reviews: (44 reviews)
- Skill tags: `Diagnostics` (primary, green badge) · `OBD scan` (neutral) · `Fault finding` (neutral)
- Card footer left: Responds within 2 hrs
- Card footer right: [Request Quote] `btn-primary-sm`

---

"View more mechanics →" — `btn-ghost`, centred below the grid. On click: reveals all remaining mechanic cards progressively within the same grid. No page navigation.

**Placeholder flag:** All 9 mechanic cards above are illustrative sample data. Names, postcodes, ratings, and review counts must be replaced with live platform data before launch.

---

### SECTION 4 — FAQ

**Component:** Accordion, `max-width: 760px`, centred. 8 questions, collapsed by default. Active item: `border-[#0D7A5F]`, `box-shadow: 0 4px 12px rgba(13,122,95,0.08)`. Plus icon rotates to × on expand. Includes `FAQPage` / `Question` / `Answer` schema microdata on every item. Link to help centre below the accordion.

---

**Section header (centred above accordion):**

Eyebrow (Rubik 11px 700 uppercase `#0D7A5F`):
> Common questions

Headline (Open Sans 800, 34px, centred, `#1A1E1D`):
> Not sure? We get that.

---

**FAQ 1** — service-specific

Q: Do I need to know what the warning light means before I post a job?

A: No — just describe what you're seeing. The colour of the light, any symbol you can make out, and anything you've noticed about how the car's been behaving. Your mechanic identifies the fault from there. You don't need to speak their language.

---

**FAQ 2** — service-specific

Q: What's the difference between a diagnostic and just reading the fault codes?

A: A code reading tells you a code. A diagnostic tells you what it means, why it's happening, and what needs fixing. Our mechanics use the codes as a starting point — they cross-check with a physical inspection and their own judgement. It's not a plug-in-and-guess job.

---

**FAQ 3** — service-specific

Q: What does a diagnostic actually involve?

A: Your mechanic comes to you and runs a full check — including an OBD scan where relevant — to identify exactly what's causing the problem. They check systems, listen for symptoms, and look at the car as a whole. Most diagnostics take 45–90 minutes depending on the issue.

---

**FAQ 4** — service-specific

Q: Will the mechanic fix it on the spot, or do I need to book separately?

A: The diagnostic job is the check only. If a repair is needed, your mechanic gives you a quote on the day. You then decide whether to book the repair — through the same mechanic on the platform, or elsewhere. There's no pressure either way.

---

**FAQ 5** — general platform

Q: How much does a diagnostic cost?

A: Each mechanic sets their own diagnostic fee — you'll see it in their quote before you commit to anything. It's typically a flat rate, and many mechanics deduct it from the repair cost if you go ahead with the same person.

---

**FAQ 6** — general platform

Q: Can a mobile mechanic do a proper diagnostic at my home?

A: Yes. Professional diagnostic tools are portable. Our mechanics bring everything they need — you don't need to be near a garage. A driveway diagnostic is just as thorough as one done in a workshop.

---

**FAQ 7** — general platform

Q: What if the car isn't driveable?

A: Post the job and describe the situation. The mechanic comes to wherever the car is — your driveway, a car park, or kerbside. They don't need it to be running to run a diagnostic.

---

**FAQ 8** — general platform

Q: Is it really free to post a diagnostic job?

A: Yes. Posting a job and getting quotes costs nothing. You only pay when you choose a mechanic and confirm the booking.

---

Link below accordion:

> More questions? [Visit the help centre](#) *(link to be confirmed before launch)*

**Schema note for developers:** Every FAQ item above must be marked up with `FAQPage` / `Question` / `Answer` schema.org microdata. This page is likely to rank for "car diagnostic Bristol", "what does my warning light mean Bristol", and related queries — structured data is non-negotiable.

---

### SECTION 5 — Problem Finder + QuoteWidget

**Component:** Full-width section, `background: #F5F7F6`, centred content `max-width: 900px`. Pill grid of clickable problem-area tags. Active pill state: `border: 1.5px solid #0D7A5F`, `background: #ECF7EF`, `color: #0D7A5F`. Only one pill active at a time — deselect on second click. `QuoteWidget` component sits below the pill grid (service pre-filtered). On mobile: widget appears below pill grid with a top separator.

**Purpose:** This section is for the driver who has read everything and still hasn't acted — they're unsure what they need or whether their problem fits. Tone is gentle and practical, not promotional.

---

**Section header (centred):**

Eyebrow (Rubik 11px 700 uppercase `#0D7A5F`):
> Still figuring it out?

Headline (Open Sans 800, 34px, `#1A1E1D`):
> Start here.

Subheadline (Rubik 16px, `#595C5B`):
> Pick the area that sounds closest — we'll show you who can help.

---

**Problem-area pill tags (diagnostics-specific set):**

- Warning light on
- Unusual noise
- Won't start
- Poor fuel economy
- Engine misfiring
- Overheating
- Rough idle
- Failed emissions
- Other

Pill styling: white background at rest, `border: 1px solid #DADCDB`, `border-radius: var(--radius-full)`, Rubik 13px, `padding: 8px 16px`. Active: `border-color: #0D7A5F`, `background: #ECF7EF`, `color: #0D7A5F`. Transition: `var(--t-fast)`.

---

**QuoteWidget (below pill grid):**

Component: `<QuoteWidget idSuffix="diagnostics-problem-finder" />`

- Service dropdown pre-filtered to: "Run full diagnostics"
- Pill selection feeds context into widget where applicable
- Do not rebuild the widget inline — reference the existing component

---

### SECTION 6 — Other Services

**Component:** `grid-cols-2` desktop · `grid-cols-1` mobile. Same gap as `Services.tsx`. Each card uses the exact same `<article>` structure as `Services.tsx` on the home page. Hover: `translateY(-3px)` + `--shadow-lg` + top accent bar animates from `opacity: 0` to `opacity: 1`.

---

**Section header:**

Eyebrow (Rubik 11px 700 uppercase `#0D7A5F`):
> Our other services

Headline (Open Sans 800, 34px, `#1A1E1D`):
> Need something else?

---

**Service Card — Repairs**

Icon well: `44×44px`, `background: #ECF7EF`, `border-radius: var(--radius-xl)`. Icon accent: `#0D7A5F`.

Title (Open Sans 700, 21px, `#1A1E1D`):
> Car repairs

Description (Rubik 400, 14.5px, `#595C5B`):
> Know what's wrong and need it sorted? Get a fixed quote from a vetted Bristol mechanic — at your door.

Bullet points (coloured dot `#0D7A5F` + Rubik 13.5px, `#595C5B`):
- Brakes, clutch, exhaust, suspension and more
- Fixed price upfront — no surprises after the job
- 12-month workmanship warranty on every repair

CTA: `<Link href="/repairs">` → `See repairs →`

---

**Service Card — Servicing**

Icon well: `44×44px`, `background: #E4F6F6`, `border-radius: var(--radius-xl)`. Icon accent: `#31A7A8`.

Title (Open Sans 700, 21px, `#1A1E1D`):
> Car servicing

Description (Rubik 400, 14.5px, `#595C5B`):
> Keep your car in good shape. Interim and full services from qualified Bristol mechanics, at your door.

Bullet points (coloured dot `#31A7A8` + Rubik 13.5px, `#595C5B`):
- Interim, full service, and timing belt
- Manufacturer guidelines followed — won't void your warranty
- Oil, filters, fluids, and everything in between

CTA: `<Link href="/servicing">` → `See servicing →`

---

### SECTION 7 — Footer

**Component:** Use the existing `Footer` component unchanged. No custom content for this section.

---

## Implementation Notes

### For developers

- `QuoteWidget` is called twice: in Section 1 (hero, `idSuffix="diagnostics-hero"`) and in Section 5 (problem finder, `idSuffix="diagnostics-problem-finder"`). Both must pre-select "Run full diagnostics" from the service dropdown. Do not rebuild the widget inline in either location.
- The primary CTA throughout this page is `Get a diagnostic` in microcopy and hero contexts, and `Request Quote` on mechanic cards (as per the Mechanic Profile Card component spec). Do not introduce new CTA variants.
- The diagnostics page shares the same layout shell (Nav, Footer, ScrollReveal) as the repairs page. No new global components needed.
- Section 4 FAQ accordion requires `FAQPage` / `Question` / `Answer` schema.org microdata on every item. This is non-negotiable for SEO.
- Section 3 "View more mechanics" button reveals remaining cards within the same grid on click. No page navigation, no separate route.
- Section 5 pill click handler must highlight the selected pill (active state) and feed context into the QuoteWidget below. Deselect on second click.
- Hero background: `#0A1412` with radial glow. The diagnostics page uses the same glow pattern as the repairs page — a green primary glow with a secondary blue-accent glow (`#066599`) to provide visual differentiation without breaking the design system.

### For designers

- The hero blue accent glow (`--color-accent-blue: #066599`) is used only in the hero to signal "diagnostics context" — the rest of the page uses the standard brand green palette. Do not bleed the blue accent into subsequent sections.
- Trust Strip (Section 2) icon wells use the standard mint (`#ECF7EF`) and green (`#0D7A5F`) — not the blue accent. Consistency across trust strips on all service pages is intentional.
- The Mechanic Profile Cards (Section 3) must match the DESIGN.md spec exactly. Avatar colour variants (green, teal, blue, purple) cycle across the 9 placeholder cards as shown above.
- Section 6 service card top accent bars use the respective service accent colour: green (`#0D7A5F`) for Repairs, teal (`#31A7A8`) for Servicing.

### Content assumptions flagged for review before launch

1. **Mechanic card data** (Section 3) — all 9 cards are placeholder data. Names, BS postcode areas, ratings, and review counts must be replaced with live mechanic records before launch. Flag as `// PLACEHOLDER` in code.
2. **Diagnostic fee note** in FAQ 5 — "typically a flat rate, and many mechanics deduct it from the repair cost" reflects common industry practice. Confirm this is the actual platform policy before publishing.
3. **Diagnostic duration** in FAQ 3 — "45–90 minutes" is an estimate based on typical mobile diagnostic jobs. Confirm with mechanics before publishing.
4. **Help centre link** in Section 4 — the link target `(#)` is a placeholder. Replace with the actual help centre URL before launch.
5. **Service dropdown option label** — "Run full diagnostics" is the assumed label for the diagnostics option in the QuoteWidget service dropdown. Confirm the exact label with the component implementation before publishing.
6. **"Same-day slots available"** used in hero trust badge — this is a promise that depends on mechanic availability. Confirm this is operationally reliable before it appears on a persistent page.
7. **Coverage area** — assumed to match the repairs page (Bristol and surrounding areas). Confirm whether diagnostic coverage exactly matches repair coverage before launch.
