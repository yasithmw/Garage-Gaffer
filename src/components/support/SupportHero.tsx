"use client";

import { SearchIcon } from "./SupportIcons";

const quickLinks = [
  { label: "Booking a mechanic", href: "#help-booking" },
  { label: "Cancellations", href: "#help-booking" },
  { label: "Warranty claims", href: "#help-warranty" },
  { label: "Mechanic onboarding", href: "#help-onboarding" },
];

export default function SupportHero() {
  return (
    <section className="suph-hero">
      <div className="suph-container">
        {/* Centred content block */}
        <div className="suph-head reveal">
          {/* Breadcrumb — mirrors .sh-breadcrumb from ServiceHero */}
          <div className="suph-breadcrumb">
            <span>Garage Gaffer</span>
            <span className="suph-dot" />
            <span className="suph-here">Help centre</span>
          </div>

          {/* H1 with <em> highlight — mirrors .sh-h1 em from ServiceHero */}
          <h1 className="suph-h1">
            How can we <em>help</em>?
          </h1>

          {/* Subheadline */}
          <p className="suph-sub">
            Search for answers, browse by topic, or get in touch. Most questions are answered below — no waiting required.
          </p>

          {/* Search bar — light theme */}
          <div className="suph-search-wrap">
            <div className="suph-search-inner">
              <span className="suph-search-icon" aria-hidden="true">
                <SearchIcon className="w-5 h-5" />
              </span>
              <input
                type="search"
                role="search"
                aria-label="Search help articles"
                placeholder='Search — e.g. "cancel a booking", "warranty", "how to get paid"'
                className="suph-input"
              />
            </div>

            {/* Popular-search chips — light mint */}
            <div className="suph-chips">
              <span className="suph-chips-label">Popular:</span>
              {quickLinks.map((link, i) => (
                <a key={i} href={link.href} className="suph-chip">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Meta row — mirrors .sh-meta from ServiceHero */}
          <div className="suph-meta">
            <span>
              Avg reply within <strong>1 working day</strong>
            </span>
            <span className="suph-meta-dot" />
            <span>Bristol-based team</span>
            <span className="suph-meta-dot" />
            <span>Support <strong>Mon–Fri, 8am–6pm</strong></span>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ── Section shell ── */
        .suph-hero {
          position: relative;
          background:
            radial-gradient(1200px 500px at 75% -5%, rgba(13,122,95,0.06), transparent 60%),
            radial-gradient(700px 400px at 15% 100%, rgba(49,167,168,0.05), transparent 60%),
            #F8FAF9;
          overflow: hidden;
          padding: 64px 0 80px;
        }

        /* Dotted grid mask — same as ServiceHero ::before */
        .suph-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(13,122,95,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13,122,95,0.03) 1px, transparent 1px);
          background-size: 32px 32px;
          -webkit-mask-image: radial-gradient(ellipse at center, black 20%, transparent 75%);
          mask-image: radial-gradient(ellipse at center, black 20%, transparent 75%);
          pointer-events: none;
        }

        /* ── Layout container ── */
        .suph-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* ── Centred content block ── */
        .suph-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
        }

        /* ── Breadcrumb ── */
        .suph-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-rubik), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #595C5B;
          margin-bottom: 22px;
        }
        .suph-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #595C5B;
          display: inline-block;
          flex-shrink: 0;
        }
        .suph-here {
          color: #0D7A5F;
        }

        /* ── H1 ── */
        .suph-h1 {
          font-family: var(--font-open-sans), sans-serif;
          font-size: 60px;
          line-height: 1.02;
          letter-spacing: -1.8px;
          font-weight: 800;
          color: #1A1E1D;
          margin: 0 0 16px;
        }
        /* <em> highlight — identical to .sh-h1 em in ServiceHero */
        .suph-h1 :global(em) {
          font-style: normal;
          color: #0D7A5F;
          font-family: var(--font-open-sans), sans-serif;
          font-weight: 800;
          background: linear-gradient(180deg, transparent 62%, rgba(13,122,95,0.15) 62%);
          padding: 0 2px;
        }

        /* ── Subheadline ── */
        .suph-sub {
          font-family: var(--font-rubik), sans-serif;
          font-size: 16px;
          line-height: 1.55;
          color: #595C5B;
          max-width: 560px;
          margin: 0 auto 32px;
        }

        /* ── Search bar ── */
        .suph-search-wrap {
          max-width: 560px;
          margin: 0 auto;
        }
        .suph-search-inner {
          position: relative;
          margin-bottom: 16px;
        }
        .suph-search-icon {
          position: absolute;
          top: 50%;
          left: 16px;
          transform: translateY(-50%);
          pointer-events: none;
          color: #9BA0A0;
          display: flex;
          align-items: center;
          transition: color var(--t-fast, 120ms ease);
        }
        /* Shift icon to green when input is focused — targets sibling input's focus */
        .suph-search-inner:focus-within .suph-search-icon {
          color: #0D7A5F;
        }
        .suph-input {
          width: 100%;
          background: #FFFFFF;
          border: 1.5px solid #DADCDB;
          border-radius: var(--radius-xl, 16px);
          padding: 14px 20px 14px 48px;
          font-family: var(--font-rubik), sans-serif;
          font-size: 15px;
          color: #1A1E1D;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
          transition: border var(--t-fast, 120ms ease), box-shadow var(--t-fast, 120ms ease);
          outline: none;
          display: block;
        }
        .suph-input::placeholder {
          color: #9BA0A0;
        }
        .suph-input:hover {
          border-color: #b0bab5;
        }
        .suph-input:focus {
          outline: 0;
          border-color: #0D7A5F;
          box-shadow: 0 0 0 3px rgba(13,122,95,0.25);
        }

        /* ── Popular-search chips ── */
        .suph-chips {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;
        }
        .suph-chips-label {
          font-family: var(--font-rubik), sans-serif;
          font-size: 13px;
          color: #595C5B;
          margin-right: 4px;
          white-space: nowrap;
        }
        .suph-chip {
          background: #ECF7EF;
          border: 1px solid rgba(13,122,95,0.2);
          border-radius: var(--radius-full, 9999px);
          padding: 6px 14px;
          font-family: var(--font-rubik), sans-serif;
          font-size: 13px;
          color: #0D7A5F;
          font-weight: 500;
          text-decoration: none;
          transition: background var(--t-fast, 120ms ease), border-color var(--t-fast, 120ms ease);
          white-space: nowrap;
        }
        .suph-chip:hover {
          background: #d4ede0;
          border-color: rgba(13,122,95,0.35);
        }

        /* ── Meta row — mirrors .sh-meta from ServiceHero ── */
        .suph-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 20px;
          flex-wrap: wrap;
          font-family: var(--font-rubik), sans-serif;
          font-size: 12.5px;
          color: #595C5B;
        }
        .suph-meta-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #8A8D8C;
          display: inline-block;
          flex-shrink: 0;
        }
        .suph-meta strong {
          color: #1A1E1D;
          font-weight: 600;
        }

        /* ── Responsive ── */
        @media (max-width: 820px) {
          .suph-hero {
            padding: 48px 0 64px;
          }
          .suph-h1 {
            font-size: 40px;
            letter-spacing: -1.2px;
          }
        }
        @media (max-width: 560px) {
          .suph-container {
            padding: 0 20px;
          }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .suph-input,
          .suph-chip,
          .suph-search-icon {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
