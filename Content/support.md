# Support / Help Centre — Content & Layout Plan
> Garage Gaffer · Bristol's mechanic marketplace
> Rewritten: April 2026 · Refined to match site-wide light visual language

---

## Platform Context Summary

Garage Gaffer is Bristol's mechanic marketplace. Drivers post a job, get quotes from vetted local mechanics, and get the work done at their door. The support page serves two audiences simultaneously: drivers who are stuck mid-booking or post-job, and mechanics who need help with onboarding or account management. Both arrive in a low-patience, slightly anxious state. The page's single job is to get them to the right answer — fast — without making them feel like they've landed in a corporate FAQ maze.

Voice on this page: warm, practical, no fluff. Short sentences. Clear paths. The tone is a good friend who happens to know the platform inside out.

---

## Layout Overview

| # | Section | Background | Purpose |
|---|---|---|---|
| 1 | Hero + Search | `#F8FAF9` (light — matches site-wide hero language) | Orient the user, signal they're in the right place, let them search immediately |
| 2 | Help Topic Categories | `#FFFFFF` | Surface the 6 topic buckets so they can self-route without searching |
| 3 | Popular Articles | `#F5F7F6` (tinted) | Surface the 8 most-reached-for articles — handles 80% of queries without further navigation |
| 4 | Driver FAQ | `#FFFFFF` | Tackle the most common driver questions in a fast, scannable accordion |
| 5 | Mechanic Hub | `#F5F7F6` (tinted) | Separate, clearly-labelled block for mechanic-side users — onboarding, accounts, jobs |
| 6 | Contact & Escalation | `#FFFFFF` | Last resort — contact form, email, and response time expectations |
| 7 | Footer | — | Existing Footer component — no custom content |

**Surface rhythm:** light hero → white → tinted → white → tinted → white. No two adjacent sections share the same surface. Every transition reads cleanly without a divider.

---

---

## Section 1 — Hero + Search

**Layout:** Centred hero, full-width. No QuoteWidget. No two-column split. Centred content block, `max-width: 760px`. Stacks naturally on all viewports.

**Visual language:** Mirrors `ServiceHero.tsx` exactly — light cream background with soft radial green glows and a faint dotted grid mask. Dark text on light background. Eyebrow, H1 with an `<em>`-highlighted word, subhead, search bar, chips, meta row. This hero must look like it was designed on the same day as the service page heroes — not as an afterthought.

**Why the dark hero was wrong:** Every other hero on the site is light. `ServiceHero.tsx` uses `#F8FAF9` with `rgba(13,122,95,0.07)` and `rgba(49,167,168,0.06)` radial glows and the dotted grid mask. The dark `#0A1412` hero on the support page created a jarring context switch: drivers arriving from a service page would feel like they'd left the site. The support page is not a dark panel — it is a light utility page that belongs to the same product.

**Tone note:** The service page heroes are quieter on this page than on service pages — the glows are slightly softer (5–6% opacity vs 7–8%) because this is a utility arrival, not a conversion moment. The structure is the same; the energy is just lower.

---

### Background + overlay spec

```
background:
  radial-gradient(1200px 500px at 75% -5%, rgba(13,122,95,0.06), transparent 60%),
  radial-gradient(700px 400px at 15% 100%, rgba(49,167,168,0.05), transparent 60%),
  #F8FAF9;
```

**Grid mask (::before pseudo-element — same as `ServiceHero.tsx`):**
```
background-image:
  linear-gradient(rgba(13,122,95,0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(13,122,95,0.03) 1px, transparent 1px);
background-size: 32px 32px;
mask-image: radial-gradient(ellipse at center, black 20%, transparent 75%);
```

**Section padding:** `64px 0 80px` desktop · `48px 0 64px` mobile

---

### Text block (centred, `max-width: 760px`)

**Breadcrumb** — mirrors `.sh-breadcrumb` from `ServiceHero.tsx`:

```
Garage Gaffer · Help centre
```

Rubik 11px 700, uppercase, letter-spacing 0.14em, `color: #595C5B`. The separator dot (`·`) is a 3×3px circle, `background: #595C5B`. The final segment ("Help centre") is `color: #0D7A5F`.

---

**H1 headline** (Open Sans 800, 60px desktop / 40px mobile, `#1A1E1D`, line-height 1.02, letter-spacing -1.8px):

> How can we <em>help</em>?

The `<em>` on "help" applies the `ServiceHero.tsx` highlight treatment: `color: #0D7A5F`, `background: linear-gradient(180deg, transparent 62%, rgba(13,122,95,0.15) 62%)`, `padding: 0 2px`, font-style: normal. This is the same CSS as `.sh-h1 em` in `ServiceHero.tsx` — use that class or replicate the exact rule. Do not invent a new variant.

---

**Subheadline** (Rubik 400, 16px, `#595C5B`, line-height 1.55, `max-width: 560px`, centred):

> Search for answers, browse by topic, or get in touch. Most questions are answered below — no waiting required.

---

### Search bar

**Component:** Full-width input, `max-width: 560px`, centred. Not a live-search API at this stage — ships as a keyword-match filter that scrolls to the matching category anchor. Architect to accept a `/api/search?q=` endpoint later without rebuilding the UI.

**Input styling — light theme (this is the important change from the old spec):**

```
background: #FFFFFF
border: 1.5px solid #DADCDB
border-radius: var(--radius-xl)
padding: 14px 20px 14px 48px
font-family: var(--font-rubik)
font-size: 15px
color: #1A1E1D
box-shadow: var(--shadow-sm)
transition: border var(--t-fast), box-shadow var(--t-fast)
```

**Hover state:** `border-color: #b0bab5`

**Focus state:**
```
outline: 0
border-color: #0D7A5F
box-shadow: 0 0 0 3px rgba(13,122,95,0.25)
```

The focus ring `rgba(13,122,95,0.25)` is slightly stronger than the global form focus ring (`0.12`) — this search bar is the primary focal point of the page and deserves a more visible ring.

**Placeholder text** (Rubik 400, 15px, `#9BA0A0`):
> Search — e.g. "cancel a booking", "warranty", "how to get paid"

**Magnifying glass icon:** Left-aligned, inset 16px from left edge. `color: #9BA0A0` at rest. `color: #0D7A5F` on focus. 20px, inline SVG, `stroke-width: 2`, `currentColor`.

**No search button required** — Enter key or icon tap triggers the action.

---

### Popular-search chips (below search bar)

**Layout:** `display: flex`, `flex-wrap: wrap`, `justify-content: center`, `gap: 8px`. Margin-top `16px`.

**Chip styling — light theme mint chips (replaces the old dark glass chips):**

```
background: #ECF7EF
border: 1px solid rgba(13,122,95,0.2)
border-radius: var(--radius-full)
padding: 6px 14px
font-family: var(--font-rubik)
font-size: 13px
color: #0D7A5F
font-weight: 500
transition: background var(--t-fast), border-color var(--t-fast)
```

**Hover state:** `background: #d4ede0`, `border-color: rgba(13,122,95,0.35)`

**Label prefix:** "Popular:" in Rubik 13px, `#595C5B`, not a chip — plain inline text, `margin-right: 4px`.

**Chip links:**
- Booking a mechanic → `#help-booking`
- Cancellations → `#help-booking`
- Warranty claims → `#help-warranty`
- Mechanic onboarding → `#help-onboarding`

These are `<a href="#...">` anchor links — no JavaScript required.

---

### Meta row (below chips — mirrors `.sh-meta` from `ServiceHero.tsx`)

**Layout:** `display: flex`, `align-items: center`, `justify-content: center`, `gap: 16px`, `flex-wrap: wrap`. Margin-top `20px`.

**Font:** Rubik 400, 12.5px, `#595C5B`. Separator dots: 3×3px circle, `background: #8A8D8C`. Bold values: `color: #1A1E1D`, font-weight 600.

**Content:**

```
Avg reply within 1 working day  ·  Bristol-based team  ·  Support Mon–Fri, 8am–6pm
```

This meta row serves the same rhythm purpose as the mechanic-count and quote-time row on service heroes — it grounds the page in real, Bristol-specific facts and sets expectations before the user scrolls. It is not decorative. Keep it.

> **Flag for review:** "Avg reply within 1 working day" and "Support Mon–Fri, 8am–6pm" are assumed SLAs. Confirm with the team before publishing.

---

---

## Section 2 — Help Topic Categories

**Layout:** Full-width section, `background: #FFFFFF`, `padding: 96px 0` desktop / `64px 0` mobile. Standard `.container`. `grid-cols-3` desktop · `grid-cols-2` tablet (≤860px) · `grid-cols-1` mobile (≤560px). Gap `20px`.

**Purpose:** Primary navigation layer. These 6 topic cards are the backbone of the help centre — each routes to a sub-page or anchor. They cover the full support surface at a glance.

**Visual note:** Cards are navigation, not content. Compact. Icon well + title + one-sentence description + "Browse articles →" link. No accordion. The white background provides clean contrast after the light-tinted hero — the separation is subtle but legible.

---

### Section header

**Eyebrow** (Rubik 11px 700 uppercase `#0D7A5F`):
> Browse by topic

**Headline** (Open Sans 800, 34px, `#1A1E1D`, letter-spacing -0.5px):
> Find what you need.

---

### Category cards — 6 cards

Each card: `background: #FFFFFF`, `border: 1px solid #DADCDB`, `border-radius: var(--radius-xl)`, `padding: 28px 24px`, `box-shadow: var(--shadow-sm)`. Hover: `translateY(-2px)` + `box-shadow: var(--shadow-md)`.

Icon well: `44×44px`, `border-radius: var(--radius-lg)`, `background: #ECF7EF`, `color: #0D7A5F`. Icon: inline SVG, 22–26px, `stroke-width: 1.8`, `currentColor`.

Title: Open Sans 700, 16px, `#1A1E1D`.
Description: Rubik 400, 13.5px, `#595C5B`.
Link: Rubik 14px, `#0D7A5F`, "Browse articles →" with right-arrow SVG.

> Route targets: each card routes to its anchor (`#help-booking`, `#help-payments`, `#help-mechanic`, `#help-warranty`, `#help-account`, `#help-onboarding`) initially, then to a dedicated sub-page when article content is built.

---

**Card 1 — Booking & Quotes**

- Icon: Calendar with check mark (22–26px, stroke 1.8)
- Title: Booking & Quotes
- Description: How to post a job, read quotes, book a mechanic, and change or cancel a booking.
- Link: Browse articles →
- Anchor: `#help-booking`

---

**Card 2 — Payments**

- Icon: Credit card (22–26px, stroke 1.8)
- Title: Payments
- Description: How payment works, what you're charged, invoices, and what to do if something doesn't look right.
- Link: Browse articles →
- Anchor: `#help-payments`

---

**Card 3 — My Mechanic**

- Icon: Person with wrench or hard hat (22–26px, stroke 1.8)
- Title: My Mechanic
- Description: Contacting your mechanic, understanding their profile, leaving a review, and reporting a problem.
- Link: Browse articles →
- Anchor: `#help-mechanic`

---

**Card 4 — Warranty & Complaints**

- Icon: Shield with tick (22–26px, stroke 1.8)
- Title: Warranty & Complaints
- Description: What our 12-month workmanship warranty covers, how to make a claim, and how to raise a dispute.
- Link: Browse articles →
- Anchor: `#help-warranty`

---

**Card 5 — Account & Profile**

- Icon: Person silhouette (22–26px, stroke 1.8)
- Title: Account & Profile
- Description: Updating your details, managing notifications, deleting your account, and sign-in issues.
- Link: Browse articles →
- Anchor: `#help-account`

---

**Card 6 — Mechanic Onboarding**

- Icon: Clipboard with tick (22–26px, stroke 1.8)
- Title: Mechanic Onboarding
- Description: For mechanics: how to join Garage Gaffer, what vetting involves, setting up your profile, and getting your first job.
- Link: Browse articles →
- Anchor: `#help-onboarding`

> **Designer note:** Card 6 carries a "For mechanics" label — Rubik 11px, `#595C5B`, positioned above the title. This is plain text, not a badge component. It prevents driver-side users from entering mechanic-specific content. Do not use a different card design — same card, just the label.

---

---

## Section 3 — Popular Articles

**Layout:** Full-width section, `background: #F5F7F6`, `padding: 96px 0` desktop / `64px 0` mobile. Standard `.container`. Two-column list layout: `grid-cols-2` desktop · `grid-cols-1` mobile. Gap `12px` between rows.

**Purpose:** Handles the majority of support queries without any navigation. These 8 articles should reflect the top recurring queries from real support contact. Until live data exists, the set below is based on category patterns common to marketplace support pages.

**Visual note:** Link rows, not cards. Light and fast to scan. Left: article title (Rubik 500, 15px, `#1A1E1D`). Right: category pill (Rubik 11px, `#595C5B`, `background: #EAECEA`, `border-radius: var(--radius-full)`, `padding: 4px 10px`). Small right-arrow on hover. Bottom border `1px solid #EAECEA` between rows within each column.

The tinted background here cleanly separates this section from the white categories above and the white FAQ below — no divider needed.

---

### Section header

**Eyebrow** (Rubik 11px 700 uppercase `#0D7A5F`):
> Most visited

**Headline** (Open Sans 800, 34px, `#1A1E1D`, letter-spacing -0.5px):
> Popular articles.

---

### Article list — 8 items (2 columns × 4 rows)

> Route: each article title links to `/help/[slug]`. Use anchor links as a placeholder if article pages are not yet built.

**Column A**

| Title | Category pill |
|---|---|
| How to post a job and get quotes | Booking & Quotes |
| Can I cancel after I've booked? | Booking & Quotes |
| What does the 12-month warranty cover? | Warranty & Complaints |
| How do I leave a review for my mechanic? | My Mechanic |

**Column B**

| Title | Category pill |
|---|---|
| When and how do I pay? | Payments |
| The work didn't go well — what are my options? | Warranty & Complaints |
| How do I contact my mechanic before the job? | My Mechanic |
| I want to join as a mechanic — where do I start? | Mechanic Onboarding |

---

---

## Section 4 — Driver FAQ

**Layout:** Full-width section, `background: #FFFFFF`, `padding: 96px 0` desktop / `64px 0` mobile. Accordion, `max-width: 760px`, centred within `.container`. Collapsed by default. Active item: `border-color: #0D7A5F`, `box-shadow: 0 4px 12px rgba(13,122,95,0.08)`. Plus icon rotates to × on expand.

**FAQPage schema markup required on every item.**

**Purpose:** Handles support queries — what happens when something goes wrong, how money works, disputes, and logistics. Tone is reassuring and direct. Never defensive. This section is explicitly for drivers: the "For drivers" eyebrow sets up the audience split before the Mechanic Hub section that follows.

**Surface note:** White background here creates a clean alternation from the tinted Popular Articles above it, and leads into the tinted Mechanic Hub below. The accordion sits comfortably on white without visual noise.

---

### Section header

**Eyebrow** (Rubik 11px 700 uppercase `#0D7A5F`):
> For drivers

**Headline** (Open Sans 800, 34px, centred, `#1A1E1D`, letter-spacing -0.5px):
> Driver questions.

**Subheadline** (Rubik 400, 16px, centred, `#595C5B`):
> The most common questions from Bristol drivers. Quick answers, no waffle.

---

### FAQ items — 8 questions

---

**Q1 — Booking**

Question: How do I post a job on Garage Gaffer?

Answer: Go to the home page and click "Get quotes." Describe your car problem in your own words — make, model, registration, and what's happening. You don't need to know the fault or the part name. Mechanics review your job and send you a quote if they can help. Posting is free and you don't need a card.

---

**Q2 — Booking**

Question: Can I cancel my booking after I've confirmed it?

Answer: Yes — you can cancel through your account dashboard. Check the cancellation policy on your booking confirmation for any fees that may apply depending on how close to the appointment you cancel. If your circumstances have changed, it's always worth messaging the mechanic directly first — they may be able to rearrange.

---

**Q3 — Payments**

Question: When do I pay, and how?

Answer: Payment is taken when the job is completed and confirmed. You'll be prompted through the platform — you don't hand cash to the mechanic on the day. If there's a deposit requirement for a specific job, it will be shown clearly in the quote before you confirm.

---

**Q4 — Payments**

Question: The amount I was charged doesn't match my quote. What do I do?

Answer: That shouldn't happen — your quoted price is what you pay. If the charge is different, contact us through the "Get in touch" section below and include your booking reference. We'll look into it and sort it out.

---

**Q5 — Mechanic**

Question: What if my mechanic doesn't show up?

Answer: Get in touch with your mechanic through the platform first — delays happen and most are easily resolved. If you can't reach them and the appointment time has passed, contact us directly using the form below. We take reliability seriously and will follow up on your behalf.

---

**Q6 — Warranty & Complaints**

Question: The work has a problem. What does the 12-month warranty actually cover?

Answer: The warranty covers workmanship — meaning the quality of the work the mechanic carried out. If the same fault has returned and it's related to the job that was done, contact us and we'll arrange for it to be looked at again. The warranty does not cover new faults unrelated to the original job, wear-and-tear, or parts the mechanic sourced on your instruction against their recommendation.

---

**Q7 — Warranty & Complaints**

Question: I'm not happy with how the job went. How do I raise a complaint?

Answer: Use the contact form below — select "Complaint about a job" as the subject. Give us the booking reference, a description of the issue, and any photos if relevant. We aim to come back to you within one working day. We investigate every complaint properly, not just acknowledge receipt.

---

**Q8 — General**

Question: Is Garage Gaffer available outside Bristol?

Answer: Right now, we're focused on Bristol and the areas immediately surrounding it. That's intentional — we built this for Bristol drivers, with Bristol mechanics. If you're in a neighbouring area, enter your postcode and we'll let you know whether you're covered.

---

### Link below accordion

> More questions? [Contact us](#help-contact) — scroll down for the contact form.

---

---

## Section 5 — Mechanic Hub

**Layout:** Full-width section, `background: #F5F7F6`, `padding: 96px 0` desktop / `64px 0` mobile. Standard `.container`, `max-width: 900px`. Two-column desktop layout: left = section copy block + quick-link list; right = "How onboarding works" mini-step card. Stacks on mobile (copy and links first, steps below).

**Purpose:** Specifically for mechanics — both those considering joining and those already on the platform. Clearly labelled as mechanic-facing. Tone shifts slightly — a little more peer-to-peer, less hand-holding. Mechanics are professionals.

**Surface note:** The tinted background here pairs with the tinted Popular Articles section to bracket the white Driver FAQ between them — this visual bracketing reinforces the audience split. Mechanics arriving via direct link or anchor will find their content in a visually distinct zone, even though the design system is identical.

---

### Left column — section copy + quick links

**Eyebrow** (Rubik 11px 700 uppercase `#0D7A5F`):
> For mechanics

**Headline** (Open Sans 800, 30px, `#1A1E1D`, letter-spacing -0.5px):
> Joining, setting up, and getting jobs.

**Body copy** (Rubik 400, 15px, `#595C5B`, line-height 1.65):
> Everything you need to apply, get verified, and start taking jobs on Garage Gaffer. If you're already on the platform and need account help, these articles cover that too.

---

**Quick-link list** (6 links, Rubik 400 14px `#0D7A5F`, `border-bottom: 1px solid #EAECEA` between items, right-arrow affordance, no bullet icons):

1. How do I apply to join as a mechanic? →
2. What does the vetting process involve? →
3. How do I set up my profile and availability? →
4. How does payment work for mechanics? →
5. How do I manage a job I've accepted? →
6. How do I contact support about my account? →

> Route: each links to its article page (`/help/[slug]`) or a placeholder anchor until articles are written.

---

### Right column — How onboarding works (3 steps)

**Card:** `background: #FFFFFF`, `border: 1px solid #DADCDB`, `border-radius: var(--radius-xl)`, `padding: 28px 24px`, `box-shadow: var(--shadow-sm)`. White card on the tinted section background — the contrast gives it definition without adding a new surface tier.

**Block header** (Open Sans 700, 16px, `#1A1E1D`):
> How the application works

**Step 1**
- Number: `01` (Rubik 700, 24px, `#0D7A5F`)
- Label (Open Sans 700, 14px, `#1A1E1D`): Apply online
- Body (Rubik 400, 13.5px, `#595C5B`): Fill in your details — qualifications, experience, and areas you cover. Takes about 10 minutes.

**Step 2**
- Number: `02`
- Label: Vetting check
- Body: We verify your qualifications and run a DBS check. We'll be in touch within 3 working days.

**Step 3**
- Number: `03`
- Label: Go live
- Body: Once approved, your profile goes live and you start receiving job alerts in your area.

**CTA below steps** (`btn-primary`, full width of the card):
> Apply to join →
> Route: `/mechanics/apply` (or placeholder if not yet built)

---

---

## Section 6 — Contact & Escalation

**Layout:** Full-width section, `background: #FFFFFF`, `padding: 96px 0` desktop / `64px 0` mobile. Standard `.container`. `grid-cols-2` desktop · `grid-cols-1` mobile. Gap `32px`.

**id attribute:** `id="help-contact"` — this is the scroll target used by the accordion link and the meta row link above.

**Purpose:** Last resort — for users who have not found their answer above. The goal is a clear, low-friction path to a human. Tone is warm and direct. Never make them feel like reaching out is a bother.

**Surface note:** White background keeps this section feeling accessible and low-pressure. The driver has been through the page and needs a clean exit ramp, not another conversion moment. White after tinted Mechanic Hub is the correct alternation.

---

### Section header (centred, above the two columns)

**Eyebrow** (Rubik 11px 700 uppercase `#0D7A5F`):
> Still need help?

**Headline** (Open Sans 800, 34px, `#1A1E1D`, letter-spacing -0.5px):
> Get in touch.

**Subheadline** (Rubik 400, 16px, `#595C5B`):
> We're a small team and we read every message. Pick the option that works best for you.

---

### Left column — Contact Form

**Card:** `background: #FFFFFF`, `border: 1px solid #DADCDB`, `border-radius: var(--radius-xl)`, `padding: 32px`, `box-shadow: var(--shadow-sm)`.

**Card headline** (Open Sans 700, 18px, `#1A1E1D`):
> Send us a message

**Card body** (Rubik 400, 13.5px, `#595C5B`, below headline):
> We aim to respond within one working day. For booking or payment issues, include your booking reference — it speeds things up.

**Form fields:**

1. **Your name** — text input, label: "Your name", placeholder: "First name and surname"
2. **Your email** — email input, label: "Email address", placeholder: "The one you used to sign up"
3. **Subject** — select dropdown, label: "What's it about?", options:
   - Select a topic
   - Booking or cancellation
   - Payment query
   - Problem with a job
   - Complaint about a job
   - Warranty claim
   - Account or sign-in issue
   - Mechanic account or onboarding
   - Something else
4. **Booking reference** — text input, label: "Booking reference (if relevant)", placeholder: "e.g. GG-20260425-001", optional field
5. **Message** — textarea, label: "Your message", placeholder: "Tell us what's happened and we'll sort it out", min-height: 120px

**Form input styling:** Use `.form-input` / `.form-select` / `.form-label` tokens from DESIGN.md exactly. Do not recreate the input styling — the global tokens handle it. Focus ring: `0 0 0 3px rgba(13,122,95,0.12)` as per DESIGN.md section 5.

**Submit button** (`btn-primary`, full width):
> Send message

**Microcopy below button** (Rubik 400, 12px, `#9BA0A0`):
> We'll reply to your email address. Response time: within 1 working day.

---

### Right column — Live Chat + Other Options

**Card:** same card styling as left column.

**Card headline** (Open Sans 700, 18px, `#1A1E1D`):
> Other ways to reach us

---

**Chat block** (top of card):

Icon: Chat bubble (22px, `#0D7A5F`). Label (Open Sans 700, 15px, `#1A1E1D`): Live chat. Body (Rubik 400, 13.5px, `#595C5B`): If live chat is shown as available below, someone is online and will respond in minutes. If it shows as offline, use the contact form — we'll be back the next working day.

**Chat status pill** (dynamic):
- Online: `background: #ECF7EF`, `color: #0D7A5F`, Rubik 12px — "Online now"
- Offline: `background: #EAECEA`, `color: #595C5B`, Rubik 12px — "Offline"

**Chat CTA button** (`btn-ghost`, full-width within card):
> Start a chat

> **Developer note:** The "Start a chat" button conditionally renders as active (opens chat widget) when support is online, and as disabled (`cursor: not-allowed`, greyed appearance) with a tooltip ("Back tomorrow — use the form below") when offline. Requires a chat availability API or a scheduled availability flag. If neither is in scope at launch, remove the entire live chat block — email + form only. Do not display a non-functional chat button.

---

**Divider:** `1px solid #EAECEA`, `margin: 24px 0`

---

**Email block** (below divider):

Icon: Envelope (22px, `#0D7A5F`). Label (Open Sans 700, 15px, `#1A1E1D`): Email us directly. Body (Rubik 400, 13.5px, `#595C5B`): Prefer to email? Reach us at:

**Email address** (Rubik 500, 14px, `#0D7A5F`, clickable `mailto:` link):
> support@garagegaffer.co.uk

**Microcopy** (Rubik 400, 12px, `#9BA0A0`):
> Same 1 working day response as the form.

---

**Divider:** `1px solid #EAECEA`, `margin: 24px 0`

---

**Response time note** (Rubik 400, 13px, `#595C5B`):

> We're based in Bristol and keep normal working hours — Monday to Friday, 8am to 6pm. Anything that comes in outside those hours will get a reply the following morning.

---

---

## Section 7 — Footer

**Component:** Use the existing `Footer` component unchanged. No custom content for this section.

---

---

## Implementation Notes

### Component changes required

**`SupportHero.tsx` — rewrite required**

This component needs to be substantially rewritten to implement the light-mode hero. The two approaches are:

**Option A — Sibling component (recommended):** Keep `SupportHero.tsx` as a standalone component but copy the visual primitives from `ServiceHero.tsx` directly: the `#F8FAF9` background, both radial gradients, and the `::before` grid mask. Replace the `CompactQuoteWidget` column with the search bar. Replace the meta row content with the support-specific trust facts. This avoids a shared-component coupling where the service hero and support hero have meaningfully different internal structures (one is two-column with a widget; the other is centred with a search input), while still producing identical visual language.

**Option B — Extend `ServiceHero.tsx`:** Add an optional prop (e.g. `variant="search"`) to `ServiceHero.tsx` that renders the search-bar layout instead of the `CompactQuoteWidget` column. This produces the cleanest single source of truth for the background + glows + grid mask primitives. The risk is that `ServiceHero.tsx` accumulates conditional rendering logic and becomes harder to reason about. Only pursue this option if the team anticipates more page types that need the same hero shell with different centre content.

**Recommendation:** Option A. The backgrounds and glows are 4 lines of CSS — copying them into `SupportHero.tsx` is not a meaningful duplication risk. The semantic difference between a two-column conversion hero and a centred utility hero is large enough to warrant separate components.

**Shared primitives worth extracting**

If neither Option A nor Option B is taken, the following primitives are worth extracting into a shared module:

- The radial glow overlay `<div>` (parameterised by glow colour and position)
- The `::before` dotted grid mask (single CSS block, reusable as a class or mixin)
- The breadcrumb component (already consistent across `ServiceHero.tsx` — a `<HeroBreadcrumb>` component would reduce drift)

These are low-priority extractions that can happen in a refactor pass. They are not blockers for the support page launch.

---

### For developers

**Section 1 — Search bar:**
- Ship as a keyword-match filter initially — on input, highlight or scroll to the matching category section anchor. No search API required at launch.
- Mark the input with `role="search"` and `aria-label="Search help articles"` for accessibility.
- Quick-link chips below the search bar are `<a href="#help-[category]">` anchor links — no JavaScript required.
- The search component must accept a `/api/search?q=` endpoint later without rebuilding the UI — architect with a prop or context hook for the search handler.

**Section 2 — Category cards:**
- Each card links to either a dedicated sub-page (`/help/[category]`) or an anchor on the current page. Implement as anchor links at launch. URL structure should be `/help/booking`, `/help/payments`, etc. — route as sub-pages when article content is built.
- The "For mechanics" label on Card 6 is plain text, not a component variant.

**Section 3 — Popular Articles:**
- Implement as a CMS-driven list so the team can update it without a code deploy. The "most visited" set must be updated once real support ticket volume data is available.
- Each article title links to `/help/[slug]`. Create placeholder pages at launch with the article title and a short holding message, or route back to the contact form anchor.

**Section 4 — Driver FAQ:**
- `FAQPage` / `Question` / `Answer` schema.org microdata required on every accordion item. The support page is likely to appear in zero-click answers for queries like "how do I cancel a Garage Gaffer booking" — structured data is non-negotiable.
- The "Contact us" link at the bottom of the accordion scrolls to `#help-contact` — use a smooth-scroll anchor.

**Section 5 — Mechanic Hub:**
- The "Apply to join →" CTA routes to `/mechanics/apply`. If this page does not yet exist, use a placeholder route or a `/help/mechanic-onboarding` anchor.
- Quick-link list: right-arrow affordance, `border-bottom: 1px solid #EAECEA`. No bullet icons.

**Section 6 — Contact Form:**
- Booking reference field is optional — do not mark it as required.
- On submit: show an inline confirmation message ("Message sent — we'll be back within one working day") rather than routing to a separate confirmation page.
- Live chat status (online/offline pill and button state) requires a chat availability API or scheduled flag. If neither is in scope at launch, remove the live chat block and show contact form + direct email only.
- "Start a chat" opens whichever third-party chat widget is integrated (e.g. Crisp, Intercom, Freshchat). Do not build a custom chat interface.

**Section 7 — Footer:**
- No custom content. Use the existing `Footer` component.

---

### For designers

**Section 1 — Hero:**
- The light hero must match `ServiceHero.tsx` visually. Use the same background hex (`#F8FAF9`), the same two radial gradients (reduced to ~5–6% opacity for utility tone), and the same `::before` grid mask. The result should look like the hero was designed alongside the service page heroes — because it was.
- Search bar is the primary focal point. White card-style input (`#FFFFFF`, `#DADCDB` border) with a mint focus ring (`rgba(13,122,95,0.25)`) on the light background. This is more visible and accessible than the old semi-transparent dark-mode input.
- Mint chips (`#ECF7EF`, `#0D7A5F` text) on a light background are legible and on-brand. The old dark glass chips (`bg-white/8 border-white/12`) only worked on dark backgrounds — they must not survive into the light hero.
- The meta row below the chips mirrors the `.sh-meta` row from `ServiceHero.tsx`. Same font, same separator dots, same rhythm. The content differs (support facts vs mechanic count), but the visual structure is identical.

**Section 4 — Driver FAQ accordion:**
- Same accordion component as the service pages — `border-[#0D7A5F]` active state, plus icon rotates to ×. No visual changes to the component.
- "For drivers" eyebrow is important — do not remove it. It sets up the audience split before Mechanic Hub.

**Section 5 — Mechanic Hub:**
- White step card on the tinted `#F5F7F6` section background gives it definition without a new surface tier. This is intentional — the card uses `box-shadow: var(--shadow-sm)` to float off the tinted background.
- "Apply to join →" is the only `btn-primary` in this section. Full width within the card.

**Section 6 — Contact & Escalation:**
- Two columns of equal visual weight — form left, chat/email right. Neither dominates.
- The live chat online/offline pill handles both states: the "Start a chat" button is greyed out and `cursor: not-allowed` when offline, with a tooltip explaining why.

---

### Content assumptions flagged for review before launch

1. **Section 1 — Meta row SLAs:** "Avg reply within 1 working day" and "Support Mon–Fri, 8am–6pm" are assumed. Confirm with the team before publishing.
2. **Section 3 — Popular Articles:** The 8 articles are based on category patterns common to marketplace support pages. Replace with actual high-traffic articles once real support contact data is available. Flag as `// PLACEHOLDER` in the CMS.
3. **Section 4 — Cancellation policy** (FAQ Q2): "fees that may apply depending on how close to the appointment you cancel" assumes a standard cancellation window exists. Confirm the exact policy before publishing.
4. **Section 4 — Payment timing** (FAQ Q3): "Payment is taken when the job is completed and confirmed" describes the assumed payment flow. Confirm this reflects the actual platform payment trigger.
5. **Section 4 — Deposit policy** (FAQ Q3): "If there's a deposit requirement for a specific job, it will be shown clearly in the quote" — confirm whether deposits are supported at launch.
6. **Section 5 — Onboarding timeline** (Step 2): "within 3 working days" is an assumed SLA for the vetting check. Confirm before publishing.
7. **Section 6 — Live chat:** If no chat tool is integrated at launch, remove the live chat block. Do not render a non-functional button.
8. **Section 6 — Email address:** `support@garagegaffer.co.uk` is a placeholder. Confirm the actual support email address before publishing.
9. **Section 6 — Response time:** "within 1 working day" and "Monday to Friday, 8am to 6pm" are assumed SLAs. Confirm before publishing.
10. **Article routes:** All `/help/[slug]` routes are placeholders. A CMS or static article structure needs to be decided before these pages are built. The support page can launch with anchor-based navigation before article pages exist.
