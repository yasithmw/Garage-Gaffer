# Mechanic Booking Flow

A 4-step booking flow. A progress bar at the top always shows the current step.

**Progress bar steps:** Car → Select Work → Details → Book

Completed steps are green. The active step is highlighted. Inactive steps are grey.

---

## Step 1 — Car

Two tabs at the top of the form card: **Use Number Plate** | **Use Car Details**

### Tab: Use Number Plate (default)
- Number plate text input
- Postcode text input
- **Next Step** button (green, full width)

### Tab: Use Car Details
- Select Make — dropdown
- Select Model — dropdown (enabled only after Make is selected)
- Select Fuel Type — dropdown (enabled only after Model is selected)
- Select Engine Capacity — dropdown (enabled only after Fuel Type is selected)
- Select Year — dropdown (enabled only after Engine Capacity is selected)
- Postcode text input
- **Next Step** button (green, full width)

> API placeholder: Number plate lookup populates Make, Model, Fuel Type, Engine Capacity, Year automatically.

---

## Intermediate Screen — Select Service Type

Shown after Step 1 before entering Step 2.

Three cards in a row (stack vertically on mobile):
1. Repairs
2. Diagnostics
3. Servicing

Tapping a card immediately navigates to Step 2 with that service tab pre-selected. No confirm button needed.

---

## Step 2 — Select Work

### Layout
- **Desktop:** Left panel (service list) + Right sidebar (price summary)
- **Mobile:** Full-width service list. Price summary becomes a sticky bar at the bottom.

### Service tabs (always visible at top, user can switch freely)
- Repairs | Diagnostics | Servicing

---

### Tab: Repairs

**Search bar** — "Search available repairs" (full width)

**Popular Repairs list**
Each row: service name | More info link | Add button (turns to Remove if already added)

**Browse by Category** — collapsible section below the list
- Categories (e.g. Suspension, General Electrics) expand/collapse on tap
- Inside each category, sub-categories group the items (e.g. Charging System, Starting System)
- Each item: name | More info link | Add button
- A prompt banner at the bottom: "Unsure what's wrong with your car? Add a diagnostic."

---

### Tab: Diagnostics

**Section label:** IN-PERSON DIAGNOSTIC
Short description text below the label.

**Diagnostic options list**
Each row: name | price | star rating + review count | More info link | Add button

Options include: Diagnostic Inspection, Car Won't Start Inspection, Plug-in Diagnostic Inspection

A prompt banner at the bottom: "Unsure what's wrong with your car? Use our free diagnostics tool."

---

### Tab: Servicing & MOT

**Services list**
Each row: name | price (with dealer price struck through) | star rating + review count | More info link | Add button

Some rows show a badge label (e.g. "ONLY £19 WHEN BOOKED WITH A SERVICE").

Services: MOT with collection & delivery, Major Service, Full Service, Interim Service, Vehicle Health Check

**More Info — Service Comparison Popup**
Opens as a modal overlay when "More info" is clicked on a service tier.

Modal header: "What does my service include?"
Close (×) button top right.

Content:
- A **View checklist** button at the top
- A comparison table with three columns: Interim | Full | Major
- Table rows grouped by category (e.g. Pre-Engine Checks, Parts Included, Top-ups Included, Vehicle Lowered, Road Test Vehicle)
- Each cell shows a checkmark (included) or a cross (not included)
- At the bottom of the table: price for each tier (Interim / Full / Major) with an Add button under each

Footnotes below the table: * If fitted | ** Petrol only | *** Diesel only

---

### Price Summary

**Desktop (right sidebar):**
- "TOTAL PRICE" label
- Price (large)
- "You save X%" badge (top right of the price block)
- "Quote includes VAT where applicable" note with tooltip icon
- Dealer price (struck through)
- Vehicle info line: Make, Model, Engine, Year · Postcode
- Edit link
- Divider
- "SELECTED WORK" label
- Each selected item: remove (×) icon | name | price | sub-details (labour time, parts included)
- Booking fee line
- Collection & Delivery: FREE
- 12-Month Warranty: FREE (note: Valid on labour & parts)
- Klarna note

**Mobile (sticky bottom bar):**
- Shows: Total price | "You save X%" badge | Next Step button
- Tapping the bar expands to show the full summary above

**Next Step** button (green, full width) — always visible below the summary.

---

## Step 3 — Details

### Order Summary block (dark background, top of page)
- Total price (large, white text)
- "Quote includes VAT" note
- Vehicle info
- Selected work item(s) with labour time and parts
- Booking fee
- Link: "If you have any questions please check our help centre"

### Upsell section
Label: "CUSTOMERS OFTEN BOOK THIS WORK AT THE SAME TIME"
2–3 suggested add-on items, each with: name | price | optional savings badge | star rating + review count | Add button

---

### Section 1 — Your Details
- First Name input
- Last Name input
- Email input
- Checkbox: "Opt in to receive MOT reminders and monthly promotions" (pre-checked)
- Link: "Sign in with an existing account"

### Section 2 — Booking Address & Phone
- Street Address 1 input
- Street Address 2 input (optional)
- City input
- Postcode input (pre-filled from Step 1)
- Phone Number input

### Section 3 — When Is the Vehicle Available?

Info note: "Please select ALL of the times when you are available across multiple days. Once a mechanic has been assigned you will receive a 2-hour arrival window."

Date navigation: < [date range] > arrows to move forward/backward through weeks.

Availability grid:
- Columns: upcoming dates (Mon, Tue, Wed, Thu, Fri…)
- Rows: All day | 8–10 AM | 10–12 AM | 12–2 PM | 2–4 PM | 4–6 PM | 6–8 PM
- Each cell is a tappable button. Selected = filled blue. Unselected = outlined.
- Some dates show a note under the date: "Priority slots +£25"
- Counter above the grid: "You have selected X dates"

### Section 4 — Your Vehicle Details
- Radio/toggle: "Is your vehicle drivable if collected?" — Yes | No
- Textarea: "Additional instructions for the mechanic" (optional)

### Primary button
**Final Step** (green, full width)

---

## Step 4 — Book (Payment)

### Order Summary block (dark background)
Same layout as Step 3 summary block, plus trust badges below:
- ✓ Qualified mechanics
- ✓ No hidden extras
- ✓ 1 year parts & repairs warranty

### Why provide your card details now?
Three points, each with a green checkmark icon:
- **We Won't Charge You** — You won't pay a penny until the work is complete.
- **Extra Protection** — If any issues arise after the booking it's easier to refund you.
- **Free Cancellation** — Up to 24 hours before the booking.

### Payment Form

Card type selector — three clickable logo buttons (select one):
- Visa
- Mastercard
- American Express

Card details form:
- Card Number input
- Expiry Date input
- CVV input
- Cardholder Name input

**Pay Now** button (green, full width) — shows the final total in the button label (e.g. "Pay £238.34")

> API placeholder: Payment processed via card payment gateway (to be integrated).

---

## General Rules

- The progress bar step advances as the user moves forward. It should also update if they go back.
- Users cannot skip steps.
- "More info" links/buttons open inline expanded text or a modal — they do not navigate away.
- All forms validate on submission, not on blur.
- Mobile layout stacks all columns vertically. The sticky price bar on Step 2 does not obscure the Next Step button.
