# Booking Flow — Build Milestones

Spec: `docs/superpowers/specs/2026-04-26-booking-flow-design.md`

---

- [x] **M1 — Foundation**
  - `src/components/booking/useBookingSession.ts` — BookingSession type + hook (read/write/clear sessionStorage)
  - `src/components/booking/mockData.ts` — placeholder data for repairs, diagnostics, servicing, upsell items

- [x] **M2 — Layout & Progress Bar**
  - `src/components/booking/BookingProgressBar.tsx` — 4 steps, completed=green+tick+clickable, active=highlighted, inactive=grey, active indicator follows current URL
  - `src/app/booking/layout.tsx` — Nav + BookingProgressBar + Footer (same as all other pages)

- [x] **M3 — Entry Point**
  - `src/app/booking/page.tsx` — server component: if reg+postcode+service params present → redirect to `/booking/step-2` with params; else → redirect to `/booking/step-1?clear=true`

- [x] **M4 — Step 1: Car**
  - `src/components/booking/step1/NumberPlateTab.tsx` — reg input (GB yellow plate style) + postcode input
  - `src/components/booking/step1/CarDetailsTab.tsx` — cascading dropdowns Make→Model→Fuel→Engine→Year + postcode
  - `src/app/booking/step-1/page.tsx` — tab switcher (Number Plate default | Car Details), clears session if `?clear=true`, on Next Step writes car to session + navigates to `/booking/service-select`

- [x] **M5 — Service Select (Intermediate)**
  - `src/app/booking/service-select/page.tsx` — 3 cards (Repairs / Diagnostics / Servicing & MOT), tap writes service to session + navigates to `/booking/step-2`, progress bar shows Step 1 complete + Step 2 active

- [x] **M6 — Step 2: Select Work**
  - `src/components/booking/step2/RepairsTab.tsx` — search bar + Popular Repairs list (Add/Remove) + Browse by Category (collapsible categories→sub-categories) + bottom banner
  - `src/components/booking/step2/DiagnosticsTab.tsx` — IN-PERSON DIAGNOSTIC label + short description + 3 options (name/price/rating/More info/Add) + bottom banner
  - `src/components/booking/step2/ServicingTab.tsx` — 5 services (name/price struck/rating/More info/Add) + badge labels
  - `src/components/booking/step2/ServiceComparisonModal.tsx` — modal overlay, Interim/Full/Major table, checkmarks/crosses, price+Add per tier, footnotes
  - `src/components/booking/step2/PriceSummaryPanel.tsx` — desktop right sidebar (total, save badge, VAT tooltip, vehicle info, Edit link, selected work list, booking fee, C&D FREE, warranty FREE, Klarna, Next Step)
  - `src/components/booking/step2/PriceSummaryStickyBar.tsx` — mobile sticky bottom bar, expands to show full summary
  - `src/app/booking/step-2/page.tsx` — reads reg/postcode/service from URL params on first load (widget flow), writes to session + clears params; desktop two-column layout; service tab state; selected work state; on Next Step writes selectedWork to session + navigates to step-3

- [x] **M7 — Step 3: Details**
  - `src/components/booking/BookingOrderSummary.tsx` — dark bg block (price, VAT note, vehicle info, work items, booking fee, help centre link), used in Step 3 + Step 4
  - `src/components/booking/step3/UpsellSection.tsx` — "CUSTOMERS OFTEN BOOK THIS WORK AT THE SAME TIME" + 2–3 add-on cards
  - `src/components/booking/step3/YourDetailsForm.tsx` — First Name, Last Name, Email, pre-checked opt-in checkbox, sign-in link
  - `src/components/booking/step3/BookingAddressForm.tsx` — Address 1, Address 2 (optional), City, Postcode (pre-filled from session), Phone
  - `src/components/booking/step3/AvailabilityGrid.tsx` — week navigation, 7-row × 5-col grid (All day / 8-10 / 10-12 / 12-2 / 2-4 / 4-6 / 6-8), tappable cells (blue filled = selected), Priority slots note, counter above grid
  - `src/components/booking/step3/VehicleDetailsForm.tsx` — drivable Yes/No radio, instructions textarea
  - `src/app/booking/step-3/page.tsx` — assembles all sections, form validates on submit, on Final Step writes details to session + navigates to step-4

- [x] **M8 — Step 4: Payment**
  - `src/components/booking/step4/PaymentForm.tsx` — card type selector (Visa/MC/Amex logo buttons), Card Number + Expiry + CVV + Cardholder Name inputs, Pay Now button showing total
  - `src/app/booking/step-4/page.tsx` — BookingOrderSummary with trust badges, "Why card details" section (3 points + body copy), PaymentForm, on Pay Now navigates to confirmation

- [x] **M9 — Confirmation**
  - `src/app/booking/confirmation/page.tsx` — booking confirmed message, summary of booking, clears sessionStorage, links back to home

- [x] **M10 — Wire Up Entry Points**
  - `src/components/Nav.tsx` — change both "Get Started" `<a href="#quote">` buttons to `<Link href="/booking">`
  - `src/components/QuoteWidget.tsx` — add `value` attributes to service options, convert onSubmit to build `/booking?reg=X&postcode=Y&service=Z` URL and call `router.push`
  - `src/components/CompactQuoteWidget.tsx` — same as QuoteWidget

- [x] **M11 — Browser Verification**
  - Happy path: Get Started → Step 1 → Service Select → Step 2 → Step 3 → Step 4 → Confirmation
  - Widget path: fill QuoteWidget → See my price → land on Step 2 with correct tab pre-selected
  - Back navigation: click completed step in progress bar, data preserved
  - Mobile: test sticky price bar, stacked layout, availability grid
  - Refresh mid-flow: data persists via sessionStorage
