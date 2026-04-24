# Support / Help Centre — Content & Layout Plan
> Garage Gaffer · Bristol's mechanic marketplace
> Generated: April 2026

---

## Platform Context Summary

Garage Gaffer is Bristol's mechanic marketplace. Drivers post a job, get quotes from vetted local mechanics, and get the work done at their door. The support page serves two audiences simultaneously: drivers who are stuck mid-booking or post-job, and mechanics who need help with onboarding or account management. Both arrive in a low-patience, slightly anxious state. The page's single job is to get them to the right answer — fast — without making them feel like they've landed in a corporate FAQ maze.

Voice on this page: warm, practical, no fluff. Short sentences. Clear paths. The tone is a good friend who happens to know the platform inside out.

---

## Layout Overview

| # | Section | Purpose |
|---|---|---|
| 1 | Hero + Search | Orient the user, signal they're in the right place, let them search immediately |
| 2 | Help Topic Categories | Surface the 6 topic buckets so they can self-route without searching |
| 3 | Popular Articles | Surface the 8 most-reached-for articles — handles 80% of queries without any navigation |
| 4 | Driver FAQ | Tackle the most common driver questions in a fast, scannable accordion |
| 5 | Mechanic Hub | Separate, clearly-labelled block for mechanic-side users — onboarding, accounts, jobs |
| 6 | Contact & Escalation | Last resort — email, chat, and response time expectations |
| 7 | Footer | Existing Footer component — no custom content |

---

---

## Section 1 — Hero + Search

**Layout:** Centred hero, full-width. Background: `#0A1412` with a single soft radial green glow (lighter intensity than service page heroes — this is a utility page, not a conversion page). Max-width centred content block, `max-width: 680px`. Stacks naturally on all viewports.

**Visual note:** This hero is deliberately quieter than the service page heroes. No QuoteWidget. No two-column split. The search bar is the focal point. Text block above is short — orientation only, not sales copy.

---

### Text block (centred)

**Eyebrow** (Rubik 11px 700 uppercase `#0D7A5F`):
> Help centre · Garage Gaffer

**H1 headline** (Open Sans 800, 46px desktop / 34px mobile, `#FFFFFF`, line-height 1.1, letter-spacing -1px):
> How can we help?

**Subheadline** (Rubik 400, 17px, `rgba(255,255,255,0.70)`, line-height 1.6):
> Search for answers, browse by topic, or get in touch. Most questions have a quick answer below.

---

### Search bar

**Component:** Full-width input field, `max-width: 560px`, centred. Not a live-search API call at this stage — this can ship as a static filter/anchor that scrolls to the relevant category section, or as a keyword match across the article titles. Architect to accept a search API later.

**Placeholder text** (Rubik 400, 15px, `#9BA0A0`):
> Search — e.g. "cancel a booking", "warranty", "how to get paid"

**Input styling:** `background: rgba(255,255,255,0.07)`, `border: 1.5px solid rgba(255,255,255,0.15)`, `border-radius: var(--radius-xl)`, `padding: 14px 20px`, white text on focus, `box-shadow: 0 0 0 3px rgba(13,122,95,0.25)` on focus. Magnifying glass icon left-aligned inside input (`#9BA0A0` at rest, `#FFFFFF` on focus).

**No search button required** — hit Enter or the icon triggers the action.

**Below search bar — quick link chips** (Rubik 13px, `rgba(255,255,255,0.65)`, pill chips with `bg-white/8 border-white/12 rounded-full`):
> Popular: Booking a mechanic · Cancellations · Warranty claims · Mechanic onboarding

---

---

## Section 2 — Help Topic Categories

**Layout:** Full-width section, white background, `padding: 72px 0`. Centred content, standard `.container`. `grid-cols-3` desktop · `grid-cols-2` tablet (≤860px) · `grid-cols-1` mobile (≤560px). Gap `20px`.

**Purpose:** Primary navigation layer for the page. These 6 topic cards are the backbone of the help centre — each routes to a sub-page (or an anchor on this page if sub-pages don't exist yet). They must cover the full support surface area at a glance.

**Visual note:** Cards should feel like navigation, not content. Keep them compact and visually consistent. Icon well + title + one-sentence description + "Browse articles →" link. No accordion here — that's Section 3.

---

### Section header

**Eyebrow** (Rubik 11px 700 uppercase `#0D7A5F`):
> Browse by topic

**Headline** (Open Sans 800, 34px, `#1A1E1D`):
> Find what you need.

---

### Category cards — 6 cards

Each card: `background: #FFFFFF`, `border: 1px solid #DADCDB`, `border-radius: var(--radius-xl)`, `padding: 28px 24px`, `--shadow-sm`. Hover: `-translate-y-[2px]` + `--shadow-md`. Icon well: `44×44px`, `border-radius: var(--radius-lg)`, `background: #ECF7EF`, `color: #0D7A5F`. Title: Open Sans 700, 16px, `#1A1E1D`. Description: Rubik 400, 13.5px, `#595C5B`. Link: Rubik 14px, `#0D7A5F`, "Browse articles →" with right arrow.

> Route targets: each card routes to its anchor (`#booking`, `#payments`, `#mechanic`, `#warranty`, `#account`, `#onboarding`) or to a dedicated sub-page when built. Implement as anchor links initially.

---

**Card 1 — Booking & Quotes**

- Icon: Calendar with a check mark (22–26px, stroke 1.8, `currentColor`)
- Title: Booking & Quotes
- Description: How to post a job, read quotes, book a mechanic, and change or cancel a booking.
- Link: Browse articles →
- Anchor: `#help-booking`

---

**Card 2 — Payments**

- Icon: Credit card (22–26px, stroke 1.8, `currentColor`)
- Title: Payments
- Description: How payment works, what you're charged, invoices, and what to do if something doesn't look right.
- Link: Browse articles →
- Anchor: `#help-payments`

---

**Card 3 — My Mechanic**

- Icon: Person with a wrench or hard hat (22–26px, stroke 1.8, `currentColor`)
- Title: My Mechanic
- Description: Contacting your mechanic, understanding their profile, leaving a review, and reporting a problem.
- Link: Browse articles →
- Anchor: `#help-mechanic`

---

**Card 4 — Warranty & Complaints**

- Icon: Shield with a tick (22–26px, stroke 1.8, `currentColor`)
- Title: Warranty & Complaints
- Description: What our 12-month workmanship warranty covers, how to make a claim, and how to raise a dispute.
- Link: Browse articles →
- Anchor: `#help-warranty`

---

**Card 5 — Account & Profile**

- Icon: Person / silhouette (22–26px, stroke 1.8, `currentColor`)
- Title: Account & Profile
- Description: Updating your details, managing notifications, deleting your account, and sign-in issues.
- Link: Browse articles →
- Anchor: `#help-account`

---

**Card 6 — Mechanic Onboarding**

- Icon: Clipboard with a tick or toolbox (22–26px, stroke 1.8, `currentColor`)
- Title: Mechanic Onboarding
- Description: For mechanics: how to join Garage Gaffer, what vetting involves, setting up your profile, and getting your first job.
- Link: Browse articles →
- Anchor: `#help-onboarding`

> **Note for designers:** Card 6 (Mechanic Onboarding) should have a subtle visual treatment to signal it is for a different user type — a secondary badge label ("For mechanics") in small Rubik 11px, `#595C5B`, above the title. This prevents driver-side users from clicking into irrelevant content. Do not use a different card design — just the label.

---

---

## Section 3 — Popular Articles

**Layout:** Full-width section, `background: #F5F7F6`, `padding: 72px 0`. Centred content, `.container`. Two-column list layout: `grid-cols-2` desktop · `grid-cols-1` mobile. Gap `12px` between rows.

**Purpose:** This section handles the vast majority of support queries without the user needing to navigate anywhere. These 8 articles should be the top recurring queries from real support contact — update them as platform data builds up. Until live support data exists, the set below is based on category patterns common to this type of marketplace.

**Visual note:** These are link rows, not cards. Keep them light and fast to scan. Left: article title (Rubik 500, 15px, `#1A1E1D`). Right: category pill (Rubik 11px, `#595C5B`, `background: #EAECEA`, `border-radius: var(--radius-full)`, `padding: 4px 10px`). Small right-arrow on hover. Bottom border `1px solid #EAECEA` between rows within each column. No heavy card styling.

---

### Section header

**Eyebrow** (Rubik 11px 700 uppercase `#0D7A5F`):
> Most visited

**Headline** (Open Sans 800, 34px, `#1A1E1D`):
> Popular articles.

---

### Article list — 8 items (2 columns × 4 rows)

> Route: each article title links to its article page (`/help/[slug]`). Use anchor links as a placeholder if article pages are not yet built.

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

**Layout:** Accordion, `max-width: 760px`, centred, `padding: 72px 0`. White background. Collapsed by default. Active item: `border-[#0D7A5F]`, `box-shadow: 0 4px 12px rgba(13,122,95,0.08)`. Plus icon rotates to × on expand.

**FAQPage schema markup required on every item.**

**Purpose:** The driver FAQ is not a duplicate of service page FAQs. It handles *support queries* — what happens when something goes wrong, what the process is for money, disputes, and logistics. Tone is reassuring and direct. Never defensive.

---

### Section header

**Eyebrow** (Rubik 11px 700 uppercase `#0D7A5F`):
> For drivers

**Headline** (Open Sans 800, 34px, centred, `#1A1E1D`):
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

> More questions? [Contact us](#help-contact) — scroll down for the contact form and live chat.

---

---

## Section 5 — Mechanic Hub

**Layout:** Full-width section, `background: #F5F7F6`, `padding: 72px 0`. Centred content, `.container`, `max-width: 900px`. Two-column desktop layout: left = section copy block + quick-link list; right = "How onboarding works" mini-step block. Stacks on mobile (copy and links first, steps below).

**Purpose:** This section is specifically for mechanics — both those considering joining and those already on the platform managing their account. It must be clearly labelled as mechanic-facing to prevent drivers from reading content that isn't for them. The tone shifts slightly — a little more peer-to-peer, less hand-holding. Mechanics are professionals.

**Visual note:** Use a `"For mechanics"` badge or section-level eyebrow label to signal the audience shift. Do not use a different design system — just a clear textual cue.

---

### Left column — section copy + quick links

**Eyebrow** (Rubik 11px 700 uppercase `#0D7A5F`):
> For mechanics

**Headline** (Open Sans 800, 30px, `#1A1E1D`):
> Joining, setting up, and getting jobs.

**Body copy** (Rubik 400, 15px, `#595C5B`, line-height 1.65):
> Everything you need to apply, get verified, and start taking jobs on Garage Gaffer. If you're already on the platform and need account help, these articles cover that too.

---

**Quick-link list** (6 links, `anchor` + right arrow, Rubik 400 14px `#0D7A5F`, `border-bottom: 1px solid #EAECEA` between items):

1. How do I apply to join as a mechanic? →
2. What does the vetting process involve? →
3. How do I set up my profile and availability? →
4. How does payment work for mechanics? →
5. How do I manage a job I've accepted? →
6. How do I contact support about my account? →

> Route: each links to its article page (`/help/[slug]`) or a placeholder anchor until articles are written.

---

### Right column — How onboarding works (3 steps)

**Mini-step block** — compact, numbered. `background: #FFFFFF`, `border: 1px solid #DADCDB`, `border-radius: var(--radius-xl)`, `padding: 28px 24px`.

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

**CTA below steps** (btn-primary, full width of the block):
> Apply to join →
> Route: `/mechanics/apply` (or placeholder if not yet built)

---

---

## Section 6 — Contact & Escalation

**Layout:** Full-width section, white background, `padding: 72px 0`. Centred content, `.container`. `grid-cols-2` desktop · `grid-cols-1` mobile. Gap `32px`.

**id attribute:** `id="help-contact"` — this is the target of the "Contact us" links used elsewhere on the page.

**Purpose:** This section is the last resort — for users who have not found their answer in the sections above. The goal is to give them a clear, low-friction path to a human. Tone is warm and direct. Never make them feel like reaching out is a bother.

**Visual note:** Keep this section clean and uncluttered. Two channels: email (contact form, guaranteed response) and live chat (if available). Set honest expectations about response times. Do not use phrases like "our team is standing by" or "we're here 24/7" if that isn't operationally true.

---

### Section header (centred, above the two columns)

**Eyebrow** (Rubik 11px 700 uppercase `#0D7A5F`):
> Still need help?

**Headline** (Open Sans 800, 34px, `#1A1E1D`):
> Get in touch.

**Subheadline** (Rubik 400, 16px, `#595C5B`):
> We're a small team and we read every message. Pick the option that works best for you.

---

### Left column — Contact Form

**Card:** `background: #FFFFFF`, `border: 1px solid #DADCDB`, `border-radius: var(--radius-xl)`, `padding: 32px`, `--shadow-sm`.

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

**Submit button** (btn-primary, full width):
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

**Chat status pill** (dynamic): `background: #ECF7EF`, `color: #0D7A5F`, Rubik 12px — "Online now" when available. `background: #EAECEA`, `color: #595C5B` — "Offline" when not.

**Chat CTA button** (btn-ghost, full-width within card):
> Start a chat

> **Developer note:** The "Start a chat" button should conditionally render as active (opens chat widget) when support is online, and as a disabled state with tooltip ("Back tomorrow — use the form below") when offline. This requires a chat availability API or a simple scheduled availability flag.

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

**Response time note** (Rubik 400, 13px, `#595C5B`, italic-style — not actually italic, just copy tone):

> We're based in Bristol and keep normal working hours — Monday to Friday, 8am to 6pm. Anything that comes in outside those hours will get a reply the following morning.

---

---

## Section 7 — Footer

**Component:** Use the existing `Footer` component unchanged. No custom content for this section.

---

---

## Implementation Notes

### For developers

**Section 1 — Search bar:**
- Ship as a keyword-match filter initially — on input, highlight or scroll to the matching category section anchor. This does not require a search API at launch.
- Mark the input with `role="search"` and `aria-label="Search help articles"` for accessibility.
- Quick link chips below the search bar are `<a href="#help-[category]">` anchor links — no JavaScript required.
- Architect the search component to accept a `/api/search?q=` endpoint later without rebuilding the UI.

**Section 2 — Category cards:**
- Each card links to either a dedicated sub-page (`/help/[category]`) or an anchor on the current page. Implement as anchor links at launch. The URL structure should be `/help/booking`, `/help/payments`, etc. — route them as sub-pages when article content is built out.
- The "For mechanics" badge on Card 6 is a plain text label, not a separate component variant.

**Section 3 — Popular Articles:**
- These 8 article links are placeholders. Implement as a CMS-driven list so the team can update them without a code deploy. The "most visited" set should be updated once real support ticket volume data is available.
- Each article title links to `/help/[slug]`. Create placeholder pages at launch with the article title and a "coming soon" message, or route back to the contact form.

**Section 4 — Driver FAQ:**
- FAQPage / Question / Answer schema.org microdata required on every accordion item. The support page is likely to appear in zero-click answers for queries like "how do I cancel a Garage Gaffer booking" — structured data is non-negotiable.
- The "Contact us" link at the bottom of the accordion scrolls to `#help-contact` — use a smooth-scroll anchor, not a page navigation.

**Section 5 — Mechanic Hub:**
- The "Apply to join →" CTA routes to `/mechanics/apply`. If this page does not yet exist, use a placeholder route or a `/help/mechanic-onboarding` anchor.
- Quick-link list: Rubik 14px links, `#0D7A5F`, with `border-bottom: 1px solid #EAECEA`. No bullet icons — the right-arrow is the affordance.

**Section 6 — Contact Form:**
- The booking reference field is optional — do not mark it as required. Remove validation on that field.
- On submit: show an inline confirmation message ("Message sent — we'll be back within one working day") rather than routing to a separate confirmation page. Keep the form visible after submission so the user can see what they sent.
- Live chat status (online/offline pill and button state) requires a simple availability API or a scheduled availability flag. If neither is in scope at launch, remove the live chat block and show only the contact form and direct email. Do not display a "chat" button that is always offline.
- The "Start a chat" button should open whichever third-party chat widget is integrated (e.g. Crisp, Intercom, Freshchat). Do not build a custom chat interface.

**Section 7 — Footer:**
- No custom content. Use the existing `Footer` component.

---

### For designers

**Section 1 — Hero:**
- This is a utility hero, not a conversion hero. The radial glow should be softer and less saturated than the service page heroes — 40–50% opacity on the green glow vs full intensity on service pages. The tone is "you've arrived, you're in the right place" rather than "this is exciting."
- The search bar is the primary focal point. Give it more vertical margin above and below than a standard input would get. The quick-link chips below should have enough breathing room not to crowd the input.

**Section 2 — Category cards:**
- Six cards in a 3×2 grid (desktop). Each card is primarily a navigation element — do not load them with copy. The icon well, title, and one-sentence description should do the whole job.
- The "For mechanics" badge on Card 6 should be visually distinct but not alarming — a small grey label above the title, not a coloured badge.

**Section 3 — Popular Articles:**
- This section deliberately does not use cards. Use link rows with a bottom rule — fast to scan, easy to click. The category pill on the right aligns the article to its topic bucket without the user needing to navigate there first.
- On mobile: two-column collapses to single-column. Category pills can be hidden on mobile if they cause layout issues — article titles alone are sufficient.

**Section 4 — Driver FAQ accordion:**
- Same accordion component as the service pages — `border-[#0D7A5F]` active state, plus icon rotates to ×. No visual changes to the component.
- "For drivers" eyebrow above this section is important — it sets up the audience split before the Mechanic Hub below. Do not remove it.

**Section 5 — Mechanic Hub:**
- The two-column layout (links left, onboarding steps right) provides a scan-friendly structure. The step card (right column) should feel like a contained mini-module — white card on the light grey section background gives it definition.
- The "Apply to join →" button inside the step card is a primary CTA — style as `btn-primary`, full width within the card. This is the only primary button in this section.

**Section 6 — Contact & Escalation:**
- Do not use a dark background for this section. White background keeps it feeling accessible and low-pressure — the driver has already been through the page and needs a clear exit ramp, not another conversion moment.
- Two columns of equal visual weight — form left, chat/email right. Neither should dominate.
- The live chat online/offline pill is a dynamic element. Ensure the design handles both states gracefully: the "Start a chat" button should be visually inactive (greyed out, `cursor: not-allowed`) when offline, and the tooltip should explain why.

---

### Content assumptions flagged for review

1. **Section 3 — Popular Articles:** The 8 articles listed are based on category patterns common to marketplace support pages. Replace with actual high-traffic articles once real support contact data is available. Flag as `// PLACEHOLDER` in the CMS.
2. **Section 4 — Cancellation policy** (FAQ Q2): "fees that may apply depending on how close to the appointment you cancel" assumes a standard cancellation window exists. Confirm the exact policy before publishing.
3. **Section 4 — Payment timing** (FAQ Q3): "Payment is taken when the job is completed and confirmed" describes the assumed payment flow. Confirm this reflects the actual platform payment trigger.
4. **Section 4 — Deposit policy** (FAQ Q3): "If there's a deposit requirement for a specific job, it will be shown clearly in the quote" — confirm whether deposits are supported at launch.
5. **Section 5 — Onboarding timeline** (Step 2): "within 3 working days" is an assumed SLA for the vetting check. Confirm the actual turnaround before publishing.
6. **Section 6 — Live chat availability:** The "Start a chat" implementation assumes a third-party chat widget. If no chat tool is integrated at launch, remove the live chat block entirely and update the section to show the contact form and direct email only. Do not render a non-functional chat button.
7. **Section 6 — Email address:** `support@garagegaffer.co.uk` is a placeholder. Confirm the actual support email address before publishing.
8. **Section 6 — Response time:** "within 1 working day" and "Monday to Friday, 8am to 6pm" are assumed SLAs. Confirm with the team before publishing.
9. **Article routes:** All `/help/[slug]` routes are placeholders. A CMS or static article structure needs to be decided before these pages are built. The support page can launch with anchor-based navigation before article pages exist.
