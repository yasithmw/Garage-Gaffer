# Booking Flow Design

**Date:** 2026-04-26  
**Status:** Approved  
**Scope:** Multi-step mechanic booking flow, triggered from "Get Started" nav button and "See my price" quote widget submit button.

---

## 1. Overview

A 4-step booking flow built as full-page navigation using Next.js App Router nested routing. Each step lives at its own URL. State is persisted in `sessionStorage` so users can navigate back without losing data.

**Progress bar steps:** Car → Select Work → Details → Book

Entry points:
- **"Get Started" (Nav)** — always starts at Step 1, clears any existing session
- **"See my price" (QuoteWidget)** — carries reg, postcode, service type; skips Step 1 and the intermediate service selection screen; lands directly on Step 2 with the correct tab pre-selected

---

## 2. Routing Structure

```
/src/app/booking/
├── layout.tsx              ← Nav + BookingProgressBar + Footer (site-consistent)
├── page.tsx                ← Smart entry redirect (reads URL params, writes session, redirects)
├── step-1/page.tsx         ← Car details
├── service-select/page.tsx ← Intermediate service type selection (Get Started flow only)
├── step-2/page.tsx         ← Select Work
├── step-3/page.tsx         ← Your Details + Availability
├── step-4/page.tsx         ← Payment
└── confirmation/page.tsx   ← Post-payment confirmation
```

**Entry redirect logic (`/booking/page.tsx`):**

```
Incoming URL has reg + postcode + service params?
  → Write car + service data to sessionStorage
  → Mark Step 1 complete in completedSteps[]
  → router.redirect('/booking/step-2')

No params (Get Started):
  → Clear sessionStorage booking_session
  → router.redirect('/booking/step-1')
```

---

## 3. Component Structure

```
/src/components/booking/
├── BookingProgressBar.tsx
├── BookingOrderSummary.tsx       ← Reused in Step 3 and Step 4 (dark bg block)
├── useBookingSession.ts          ← Custom hook: read/write/clear sessionStorage
├── step1/
│   ├── NumberPlateTab.tsx        ← Reg + postcode inputs
│   └── CarDetailsTab.tsx         ← Make/Model/Fuel/Engine/Year cascading dropdowns + postcode
├── step2/
│   ├── RepairsTab.tsx            ← Search bar + Popular Repairs + Browse by Category
│   ├── DiagnosticsTab.tsx        ← IN-PERSON DIAGNOSTIC label + options list
│   ├── ServicingTab.tsx          ← Services list with badge labels + More Info modal trigger
│   ├── ServiceComparisonModal.tsx ← Interim/Full/Major comparison table popup
│   ├── PriceSummaryPanel.tsx     ← Desktop right sidebar
│   └── PriceSummaryStickyBar.tsx ← Mobile sticky bottom bar (expandable)
├── step3/
│   ├── UpsellSection.tsx         ← "Customers often book this at the same time"
│   ├── YourDetailsForm.tsx       ← First name, last name, email, opt-in checkbox
│   ├── BookingAddressForm.tsx    ← Street, city, postcode (pre-filled), phone
│   ├── AvailabilityGrid.tsx      ← Date/time slot picker with week navigation
│   └── VehicleDetailsForm.tsx    ← Drivable toggle + mechanic instructions textarea
└── step4/
    └── PaymentForm.tsx           ← Card type selector + card details form
```

---

## 4. State Management

All booking state is stored in `sessionStorage` under the key `booking_session`, serialised as JSON.

**Session shape:**

```ts
type BookingSession = {
  car: {
    reg: string
    postcode: string
    make?: string
    model?: string
    fuelType?: string
    engineCapacity?: string
    year?: string
  }
  service: 'repairs' | 'diagnostics' | 'servicing'
  selectedWork: SelectedItem[]
  details: {
    firstName: string
    lastName: string
    email: string
    optIn: boolean
    address1: string
    address2?: string
    city: string
    postcode: string
    phone: string
    availability: string[]   // ISO date+slot strings e.g. "2026-04-28T08:00"
    drivable: boolean
    instructions?: string
  }
  completedSteps: number[]   // e.g. [1, 2] means Steps 1 & 2 are done
}

type SelectedItem = {
  id: string
  name: string
  price: number
  labourTime?: string
  partsIncluded?: boolean
}
```

**`useBookingSession` hook** — all step components read/write through this hook. It handles JSON parse/serialise, handles `sessionStorage` being unavailable (SSR), and exposes typed getters/setters per field group.

---

## 5. Progress Bar Behaviour

| Step State | Visual Treatment | Clickable? |
|---|---|---|
| Completed | Green fill, white tick icon, green label | Yes — navigates back |
| Active | Brand-primary ring/highlight, bold label | No |
| Incomplete (ahead) | Grey fill, grey label | No |

- The progress bar reads `completedSteps[]` from `sessionStorage` to determine which steps are clickable.
- Clicking a completed step calls `router.push('/booking/step-N')`. The target step re-hydrates from `sessionStorage` instantly — no data loss.
- The intermediate "Select Service Type" screen is **not** a progress bar step. When skipped, the progress bar initialises with Step 1 complete and Step 2 active.
- The progress bar does **not** advance if the user navigates backwards — it reflects the furthest step reached, not the current step. The active indicator moves with the current URL.

---

## 6. Step-by-Step Specification

### Step 1 — Car (`/booking/step-1`)

Two tabs: **Use Number Plate** (default) | **Use Car Details**

**Number Plate tab:**
- Number plate input (styled with GB yellow plate visual, matching QuoteWidget)
- Postcode input
- Next Step button (green, full width)
- API placeholder: number plate lookup auto-populates car details

**Car Details tab:**
- Cascading dropdowns: Make → Model (enabled after Make) → Fuel Type → Engine Capacity → Year
- Postcode input
- Next Step button (green, full width)

On submit: write car data to session, add `1` to `completedSteps[]`, navigate to intermediate service selection screen (`/booking/service-select`) if no service in session, or directly to `/booking/step-2` if service already set.

---

### Intermediate — Select Service Type (`/booking/service-select`)

Shown only when arriving from Step 1 with no service pre-selected (i.e., "Get Started" flow).

Three cards in a row (stack vertically on mobile):
1. Repairs
2. Diagnostics
3. Servicing & MOT

Tapping a card writes the service to session and immediately navigates to `/booking/step-2`. No confirm button. This screen is **not** a progress bar step — progress bar shows Step 1 complete, Step 2 active while on this screen.

---

### Step 2 — Select Work (`/booking/step-2`)

**Layout:**
- Desktop: Left panel (service list, ~65% width) + Right sidebar (price summary, ~35% width)
- Mobile: Full-width service list. Price summary becomes a sticky bar at the bottom.

**Service tabs** (always visible, user can switch freely):
- Repairs | Diagnostics | Servicing & MOT
- Active tab is pre-selected based on `session.service`

**Repairs tab:**
- Search bar ("Search available repairs")
- Popular Repairs list: name | More info link | Add/Remove button
- Browse by Category: collapsible categories → sub-categories → items (name | More info | Add/Remove)
- Banner: "Unsure what's wrong with your car? Add a diagnostic."

**Diagnostics tab:**
- "IN-PERSON DIAGNOSTIC" section label
- Short description text below the label
- Options list: Diagnostic Inspection | Car Won't Start Inspection | Plug-in Diagnostic Inspection — each shows name, price, star rating + review count, More info link, Add/Remove button
- Banner: "Unsure what's wrong? Use our free diagnostics tool."

**Servicing & MOT tab:**
- Services list: MOT with collection & delivery | Major Service | Full Service | Interim Service | Vehicle Health Check
- Each row: name | price (dealer price struck through) | star rating + review count | More info | Add button
- Some rows show badge labels (e.g. "ONLY £19 WHEN BOOKED WITH A SERVICE")
- More Info opens `ServiceComparisonModal`

**ServiceComparisonModal:**
- Header: "What does my service include?" with close (×) button
- View checklist button
- Comparison table: Interim | Full | Major columns
- Rows grouped by category (Pre-Engine Checks, Parts Included, Top-ups, etc.) — checkmark or cross per cell
- Footer: price per tier with Add button under each
- Footnotes: * If fitted | ** Petrol only | *** Diesel only

**Price Summary (desktop sidebar):**
- TOTAL PRICE (large) with "You save X%" badge
- "Quote includes VAT where applicable" with tooltip
- Dealer price struck through
- Vehicle info line (Make, Model, Engine, Year · Postcode) with Edit link
- SELECTED WORK list: × remove icon | name | price | sub-details (labour time, parts)
- Booking fee line
- Collection & Delivery: FREE
- 12-Month Warranty: FREE (note: Valid on labour & parts)
- Klarna note
- Next Step button (green, full width)

**Price Summary (mobile sticky bar):**
- Shows: total price | "You save X%" badge | Next Step button
- Tapping bar expands to show full summary above

On Next Step: write `selectedWork` to session, add `2` to `completedSteps[]`, navigate to `/booking/step-3`.

---

### Step 3 — Details (`/booking/step-3`)

**Order Summary block** (dark background, top of page):
- Total price (large, white text)
- "Quote includes VAT" note
- Vehicle info
- Selected work items with labour time and parts
- Booking fee
- Link: "If you have any questions please check our help centre"

**Upsell section:**
- Label: "CUSTOMERS OFTEN BOOK THIS WORK AT THE SAME TIME"
- 2–3 suggested add-on items: name | price | optional savings badge | star rating + review count | Add button

**Section 1 — Your Details:**
- First Name input
- Last Name input
- Email input
- Checkbox: "Opt in to receive MOT reminders and monthly promotions" (pre-checked)
- Link: "Sign in with an existing account"

**Section 2 — Booking Address & Phone:**
- Street Address 1
- Street Address 2 (optional)
- City
- Postcode (pre-filled from session)
- Phone Number

**Section 3 — When Is the Vehicle Available?**
- Info note: "Please select ALL of the times when you are available across multiple days. Once a mechanic has been assigned you will receive a 2-hour arrival window."
- Counter above the grid: "You have selected X dates"
- Date navigation: < [date range] > arrows (week by week)
- Availability grid: columns = dates (Mon, Tue, Wed, Thu, Fri…), rows = All day | 8–10 AM | 10–12 AM | 12–2 PM | 2–4 PM | 4–6 PM | 6–8 PM
- Each cell: tappable, selected = filled blue, unselected = outlined
- Some dates show "Priority slots +£25" note below the date

**Section 4 — Your Vehicle Details:**
- Radio: "Is your vehicle drivable if collected?" — Yes | No
- Textarea: "Additional instructions for the mechanic" (optional)

**Final Step** button (green, full width).

On Final Step: write all details to session, add `3` to `completedSteps[]`, navigate to `/booking/step-4`.

---

### Step 4 — Book (`/booking/step-4`)

**Order Summary block** (dark background, same as Step 3) plus trust badges:
- ✓ Qualified mechanics
- ✓ No hidden extras
- ✓ 1 year parts & repairs warranty

**Why provide your card details now?** — three points with green checkmark icons:
- **We Won't Charge You** — You won't pay a penny until the work is complete.
- **Extra Protection** — If any issues arise after the booking it's easier to refund you.
- **Free Cancellation** — Up to 24 hours before the booking.

**Payment Form:**
- Card type selector: Visa | Mastercard | American Express (clickable logo buttons)
- Card Number input
- Expiry Date input
- CVV input
- Cardholder Name input
- Pay Now button (green, full width, shows total: "Pay £238.34")
- API placeholder: payment gateway integration pending

On Pay Now: navigate to `/booking/confirmation`.

---

## 7. UI Consistency Rules

- Use the same `<Nav />` and `<Footer />` as all other pages — rendered in `/booking/layout.tsx`
- All colour values reference design tokens from `globals.css` only (never hardcoded)
- Buttons use `.btn-primary`, `.btn-secondary`, `.btn-outline` classes from `globals.css`
- Form inputs follow the standard `form-input` / `form-select` patterns
- Shadows use `--shadow-sm` / `--shadow-md` / `--shadow-lg` / `--shadow-xl`
- Typography: Open Sans for headings, Rubik for body/UI — loaded via root layout (no re-import needed)
- Animations: use `--t-fast`, `--t-base`, `--t-slow` vars; always include `@media (prefers-reduced-motion: reduce)` guard
- Responsive breakpoints: 960px, 860px, 560px, 500px — matching the rest of the site

---

## 8. API Placeholders

Two integrations are deferred and handled as no-ops for now:
1. **Number plate lookup** — form submits with reg entered manually; lookup will populate cascading fields when integrated
2. **Payment gateway** — Pay Now button prevents default; gateway integration pending

---

## 9. General Rules (from spec)

- Progress bar active indicator updates as the user moves forward and also when they navigate back — it always reflects the current URL/step
- Completed steps remain green with tick even when the user navigates back; they do not revert to inactive
- Users cannot skip steps forward (Next Step is the only way forward)
- "More info" links open inline expanded text or a modal — no page navigation
- All forms validate on submission, not on blur
- Mobile layout stacks all columns vertically
- Mobile sticky price bar (Step 2) does not obscure the Next Step button
