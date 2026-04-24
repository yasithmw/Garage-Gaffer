# Garage Gaffer — Global Design System

Tokens, type, and global CSS primitives for the Garage Gaffer brand. Reference everything here rather than hardcoding values in new components.

---

## 1. Brand Snapshot

- **Voice:** warm, plain-English, jargon-free. Confident but never clinical.
- **Visual tone:** light, open, trustworthy. Dominant brand green used purposefully, not decoratively.
- **Audience:** non-technical UK drivers, 30–50.
- **Avoid:** generic SaaS aesthetics, corporate jargon, pure neutral greys in shadows.

---

## 2. Design Tokens

### 2.1 Colour

```css
:root{
  /* Brand greens */
  --color-brand-primary:      #0D7A5F;  /* primary action, links, focus ring */
  --color-brand-deep:         #055240;  /* primary button hover */
  --color-brand-forest:       #2B4C32;  /* big numerals, deep headings */
  --color-brand-dark:         #0A2B14;  /* dark-green panel bottoms */
  --color-brand-mint:         #ECF7EF;  /* icon wells, pill chips, mint surfaces */
  --color-brand-pale-mint:    #E3FFEF;  /* secondary hover surfaces */
  --color-brand-surface-tint: #F3FFE3;  /* section wash only, never component bg */

  /* Accents */
  --color-accent-blue:   #066599;
  --color-accent-teal:   #31A7A8;
  --color-accent-purple: #6165DD;

  /* Text */
  --color-text-primary:   #1A1E1D;
  --color-text-secondary: #595C5B;
  --color-text-disabled:  #8A8D8C;
  --color-divider:        #DADCDB;

  /* Surfaces */
  --color-bg:        #F5F7F6;   /* page */
  --color-surface:   #FFFFFF;   /* cards */
  --color-surface-2: #FBFDFC;   /* alternating section */

  /* Status */
  --color-success:    #0D7A5F;
  --color-warning:    #F9C339;
  --color-warning-bg: #FFFCE4;
  --color-error:      #AF0808;
}
```

Rules:
- Primary actions use `--color-brand-primary`; hover → `--color-brand-deep`.
- Never use `--color-brand-surface-tint` as a component background — it's a layout wash only.
- Dark panels & footer use gradients of `--color-brand-forest → --color-brand-dark`, and `#0A1412` for the footer; white text sits at `rgba(255,255,255, .45–.75)` tiers.

### 2.2 Radii

```css
:root{
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:  12px;
  --radius-xl:  16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
}
```

Guidance:
- Inputs & standard buttons → `--radius-md`
- Larger buttons (`btn-lg`, `btn-xl`) → `--radius-lg`
- Cards → `--radius-xl`
- Hero-scale containers (widgets, big panels, map) → `--radius-2xl`
- Pills, avatars, dots → `--radius-full`

Never introduce new radii — every round corner should map to one of these six tokens.

### 2.3 Shadows (green-tinted)

```css
:root{
  --shadow-sm: 0 1px 3px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.04);
  --shadow-md: 0 4px 12px rgba(13,122,95,.08), 0 2px 4px rgba(0,0,0,.06);
  --shadow-lg: 0 8px 24px rgba(13,122,95,.12), 0 4px 8px rgba(0,0,0,.06);
  --shadow-xl: 0 16px 48px rgba(13,122,95,.15), 0 8px 16px rgba(0,0,0,.08);
}
```

The green tint is load-bearing — it's what makes neutral UI feel branded. Don't swap for generic grey shadows.

### 2.4 Motion

```css
:root{
  --t-fast: 120ms ease;
  --t-base: 200ms ease;
  --t-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

- `--t-fast` — hover colour/background changes
- `--t-base` — transforms, box-shadow, scroll reveals
- `--t-slow` — larger layout transitions

### 2.5 Layout

```css
:root{
  --container: 1200px;
}
.container{ max-width: var(--container); margin: 0 auto; padding: 0 24px; }
```

Vertical rhythm:
- Desktop section padding: `96px 0`
- Small-screen section padding: `64px 0`

---

## 3. Typography

Two Google Fonts, loaded in `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Rubik:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
```

### 3.1 Families & Roles

| Family | Role | Default weight |
|---|---|---|
| **Open Sans** | Display — all `h1–h4`, logo wordmark, blockquotes, big numerals | 800 |
| **Rubik** | UI & body — paragraphs, buttons, nav, form controls, eyebrows, labels | 400 body / 600 interactive |

```css
body{ font-family:'Rubik', sans-serif; font-size:15px; line-height:1.6; color:var(--color-text-primary); }
h1,h2,h3,h4{ font-family:'Open Sans', sans-serif; color:var(--color-text-primary); margin:0; font-weight:800; }
```

### 3.2 Type Scale

| Role | Family | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Hero H1 | Open Sans | 56px (≤960 → 40px) | 800 | 1.05 | -1.5px |
| Section H2 | Open Sans | 34px | 800 | 1.15 | -0.5px |
| Dark panel H2 | Open Sans | 36px (≤960 → 28px) | 800 | 1.15 | -0.8px |
| Card title H3 | Open Sans | 18–21px | 700 | 1.25 | -0.3px |
| Body (hero sub) | Rubik | 17px | 400 | 1.6 | — |
| Body (card) | Rubik | 14.5px | 400 | 1.6–1.65 | — |
| Body (base) | Rubik | 15px | 400 | 1.6 | — |
| Eyebrow | Rubik | 11px | 700 | 1 | 0.1em, UPPERCASE |
| Form label | Rubik | 13px | 600 | — | — |
| Button | Rubik | 14px (sm 13 / lg 15 / xl 16) | 600 | 1 | — |
| Footnote | Rubik | 12.5px | 400 | 1.5 | — |

### 3.3 Shared utilities

```css
.eyebrow{
  display:inline-block;
  font-family:'Rubik',sans-serif;
  font-size:11px; font-weight:700;
  letter-spacing:0.1em; text-transform:uppercase;
  color:var(--color-brand-primary);
  margin-bottom:12px;
}
.section-head{ max-width:640px; margin-bottom:48px; }
.section-head h2{ font-size:34px; font-weight:800; line-height:1.15; letter-spacing:-0.5px; margin-bottom:12px; }
.section-head p { color:var(--color-text-secondary); font-size:16px; line-height:1.7; margin:0; }
```

---

## 4. Buttons

```css
.btn{
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  font-family:'Rubik',sans-serif; font-weight:600; font-size:14px;
  border-radius:var(--radius-md); padding:10px 20px;
  transition:transform var(--t-base), box-shadow var(--t-base),
             background var(--t-fast), color var(--t-fast), border-color var(--t-fast);
  white-space:nowrap; position:relative; overflow:hidden;
}
.btn:active{ transform:translateY(1px); }

.btn-primary  { background:var(--color-brand-primary); color:#fff; box-shadow:0 2px 8px rgba(13,122,95,.25); }
.btn-primary:hover { background:var(--color-brand-deep); box-shadow:0 6px 18px rgba(13,122,95,.3); transform:translateY(-1px); }

.btn-secondary{ background:var(--color-brand-mint); color:var(--color-brand-primary); }
.btn-secondary:hover{ background:#d4ede0; }

.btn-outline { background:transparent; color:var(--color-brand-primary); border:1.5px solid var(--color-brand-primary); }
.btn-outline:hover{ background:var(--color-brand-mint); }

.btn-ghost   { background:transparent; color:var(--color-text-secondary); }
.btn-ghost:hover{ background:var(--color-bg); color:var(--color-text-primary); }

.btn-sm{ padding:7px 14px;  font-size:13px; border-radius:var(--radius-sm); }
.btn-lg{ padding:14px 28px; font-size:15px; border-radius:var(--radius-lg); }
.btn-xl{ padding:18px 32px; font-size:16px; border-radius:var(--radius-lg); }
```

Trailing icons are inline SVG, 14–16px, stroke-width 2.5, inheriting `currentColor`.

---

## 5. Forms

```css
.form-group{ margin-bottom:14px; }
.form-label{ display:block; font-size:13px; font-weight:600; color:var(--color-text-primary); margin-bottom:6px; }

.form-input,
.form-select{
  width:100%; background:#fff;
  border:1.5px solid var(--color-divider); border-radius:var(--radius-md);
  padding:12px 14px; font-size:14px; color:var(--color-text-primary);
  transition:border var(--t-fast), box-shadow var(--t-fast);
}
.form-input::placeholder{ color:var(--color-text-disabled); }
.form-input:hover, .form-select:hover{ border-color:#b0bab5; }
.form-input:focus, .form-select:focus{
  outline:0;
  border-color:var(--color-brand-primary);
  box-shadow:0 0 0 3px rgba(13,122,95,0.12);
}
```

Focus ring `0 0 0 3px rgba(13,122,95,0.12)` is the global pattern — reuse for any focusable element.

---

## 6. Motion & Reveal

```css
/* Scroll reveal */
.reveal{ opacity:0; transform:translateY(24px);
  transition:opacity 700ms ease-out, transform 700ms cubic-bezier(0.4,0,0.2,1); }
.reveal.in{ opacity:1; transform:none; }

/* Shared pulse (live dots) */
@keyframes pulse{
  0%,100%{ opacity:1; transform:scale(1); }
  50%    { opacity:.5; transform:scale(1.5); }
}

/* Float (gentle idle motion) */
@keyframes float{
  0%,100%{ transform:translateY(0); }
  50%    { transform:translateY(-8px); }
}

/* Respect user preference — ALWAYS include this guard */
@media (prefers-reduced-motion: reduce){
  *,*::before,*::after{
    animation-duration:0.01ms !important;
    animation-iteration-count:1 !important;
    transition-duration:0.01ms !important;
  }
  .reveal{ opacity:1; transform:none; }
}
```

Trigger `.in` via a small `IntersectionObserver` in JS. Never skip the reduced-motion guard.

---

## 7. Iconography

All icons are inline SVGs:

- `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`
- `stroke-width` 1.8–2.5, `stroke-linecap="round"`, `stroke-linejoin="round"`
- Inherit `color` from the parent — that's how brand recolouring works

| Context | Size | Stroke |
|---|---|---|
| Nav chevron | 12×12 | 2.5 |
| Icon well (card) | 22–26 | 1.8 |
| Dropdown item | 18 | 1.8 |
| Button trailing | 14–16 | 2.5 |
| Bullet / tick | 14 | 2 |

---

## General Cards

The base card is the foundational surface used across the platform. All card variants extend from this base.

**Structure:** `background: #FFFFFF` · `border: 1px solid #DADCDB` · `border-radius: var(--radius-xl)` (16px) · `overflow: hidden` · `box-shadow: var(--shadow-sm)` at rest

**Hover state:** `box-shadow: var(--shadow-lg)` + `translateY(-2px)` — never more than 2–3px of lift

**Card grid:** 2-column, `grid-template-columns: 1fr 1fr`, `gap: 20px`

**Internal elements:**

| Element | Spec |
|---|---|
| `.card-body` | `padding: 20px` |
| `.card-title` | Open Sans 700 · 15px · `#1A1E1D` · `margin-bottom: 4px` |
| `.card-subtitle` | Rubik 400 · 13px · `#595C5B` · `margin-bottom: 12px` |
| `.card-footer` | `display: flex` · `justify-content: space-between` · `align-items: center` · `padding-top: 12px` · `border-top: 1px solid #DADCDB` |
| `.card-price` | Rubik 700 · 15px · `#0D7A5F` |

---

## Mechanic Profile Cards

Extends `.card`. Used wherever a mechanic is presented as a bookable entity.

**Outer shell:** Inherits all base card styles — `#FFFFFF` background, 16px radius, `1px solid #DADCDB` border, `--shadow-sm` rest / `--shadow-lg` hover.

**Body padding:** `20px` (via `.mechanic-card .card-body`)

---

### Header block — `.mechanic-header`

`display: flex` · `gap: 12px` · `align-items: flex-start` · `margin-bottom: 16px`

Contains the avatar on the left and mechanic info stack on the right.

**Avatar system — `.avatar`**

Circular pill container. Displays text initials in Open Sans 800. White text on coloured background.

| Class | Size | Font size |
|---|---|---|
| `.avatar` (default) | 48 × 48px | 16px |
| `.avatar-lg` | 56 × 56px | 20px |
| `.avatar-sm` | 36 × 36px | 13px |

Colour variants — apply alongside `.avatar`:

| Class | Background |
|---|---|
| `.avatar-green` | `#0D7A5F` |
| `.avatar-teal` | `#31A7A8` |
| `.avatar-blue` | `#066599` |
| `.avatar-purple` | `#6165DD` |

**Stacked avatars:** Overlap by `margin-left: -10px` with `box-shadow: 0 0 0 2px #FFFFFF` as a separation ring. Overflow count uses `.avatar-sm` with `background: #F5F7F6`, `color: #595C5B`, `border: 1px solid #DADCDB`, and `font-size: 11px`.

**Mechanic info stack — `.mechanic-info`**

`flex: 1` — fills remaining header width

| Element | Spec |
|---|---|
| `.mechanic-name` | Open Sans 700 · 15px · `#1A1E1D` |
| `.mechanic-location` | Rubik 400 · 12px · `#595C5B` · `margin-top: 2px` |
| `.mechanic-verified` | `display: inline-flex` · `align-items: center` · `gap: 4px` · Rubik 600 · 11px · `#0D7A5F` · `margin-top: 4px` · accompanied by a 12×12px checkmark SVG (`stroke-width: 3`, `currentColor`) |

---

### Star rating row — `.star-row`

`display: flex` · `align-items: center` · `gap: 8px` · `margin-bottom: 12px`

| Element | Spec |
|---|---|
| `.stars` | `display: flex` · `gap: 2px` |
| `.star` | 14px |
| `.star.filled` | `color: #F9C339` |
| `.star.empty` | `color: #DADCDB` |
| `.rating-val` | Rubik 700 · 13px · `#1A1E1D` |
| `.rating-cnt` | Rubik 400 · 12px · `#595C5B` |

---

### Skill tags — `.skill-tags`

`display: flex` · `flex-wrap: wrap` · `gap: 8px`

Uses the standard badge system (pill radius, Rubik 600 12px, `padding: 3px 10px`). Typical combinations: one coloured badge for primary specialism + neutral badges for secondary skills.

---

### Card footer — `.card-footer`

`display: flex` · `align-items: center` · `justify-content: space-between` · `margin-top: 12px` · `padding-top: 12px` · `border-top: 1px solid #DADCDB`

Left slot: either a response time note (`font-size: 13px` · `#595C5B` with `#0D7A5F` strong) or a status badge (e.g. `badge-yellow` for Top Rated).  
Right slot: always a primary SM button — `Request Quote`.

---

## 8. Responsive Breakpoints

Use these — don't invent new ones.

| Width | Behaviour |
|---|---|
| ≤ 960px | Two-column sections stack; nav links hide; mobile toggle appears. |
| ≤ 860px | 3–4 column grids collapse to 1–2; section padding → `64px 0`. |
| ≤ 560px | Footer / multi-column info lists collapse to 1 column. |
| ≤ 500px | Any remaining multi-column grids go single column. |

---

## 9. Rules

- **Always** reference tokens — never hardcode hex, radii, shadow, or motion values.
- **Always** keep the green tint on shadows (`rgba(13,122,95,…)`).
- **Always** include the `prefers-reduced-motion` guard.
- **Never** use `--color-brand-surface-tint` as a component background.
- **Never** introduce new radii or new shadow tiers.
- **Never** swap Open Sans / Rubik — the pairing is load-bearing.
