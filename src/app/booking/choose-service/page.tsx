"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useBookingSession, BookingSession } from "@/components/booking/useBookingSession";

// ---------------------------------------------------------------------------
// Service card data
// ---------------------------------------------------------------------------

type ServiceCard = {
  id: BookingSession["service"];
  title: string;
  description: string;
  icon: ReactNode;
};

const SERVICE_CARDS: ServiceCard[] = [
  {
    id: "repairs",
    title: "Repairs",
    description:
      "Fix a specific issue — from brakes and batteries to clutches and starter motors.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        width="28"
        height="28"
      >
        {/* Wrench body — left side */}
        <path d="M10 38 L22 26" />
        {/* Wrench head — circle with opening */}
        <path d="M14 10 C8 10 4 14.5 4 20 C4 22.2 4.9 24.2 6.4 25.7 L8 27.3 L6 29.3 L8.5 31.8 L10.5 29.8 L12 31.4 C13.5 32.9 15.7 34 18 34 C24 34 28 29.5 28 24 C28 18.5 24 14 18 14 L16 16.4 L13.5 14 Z" />
        {/* Screwdriver shaft — right side */}
        <line x1="26" y1="22" x2="44" y2="40" />
        {/* Screwdriver tip — flat head */}
        <path d="M41.5 37.5 L46 42 L43.5 44.5 L39 40" />
        {/* Screwdriver handle */}
        <rect x="23" y="14" width="8" height="13" rx="3" transform="rotate(-45 27 20.5)" />
        {/* Handle grip lines */}
        <line x1="23.5" y1="21.5" x2="27" y2="18" />
        <line x1="25.5" y1="23.5" x2="29" y2="20" />
      </svg>
    ),
  },
  {
    id: "diagnostics",
    title: "Diagnostics",
    description:
      "Warning light on? Something doesn't feel right? We'll identify the problem fast.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        width="28"
        height="28"
      >
        {/* Monitor outer shell */}
        <rect x="4" y="6" width="40" height="26" rx="3.5" />
        {/* Screen inner bezel */}
        <rect x="7" y="9" width="34" height="20" rx="2" fill="none" />
        {/* EKG / heartbeat line on screen */}
        <polyline points="9,19 14,19 17,13 20,25 24,16 27,22 30,19 35,19 39,19" />
        {/* Monitor stand */}
        <line x1="24" y1="32" x2="24" y2="39" />
        {/* Base */}
        <path d="M17 39 Q24 41 31 39" />
        {/* OBD dongle — small plug below screen centre */}
        <rect x="20" y="40" width="8" height="5" rx="1.5" />
        <line x1="24" y1="45" x2="24" y2="47" />
        <circle cx="22.5" cy="42.5" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="25.5" cy="42.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "servicing",
    title: "Servicing",
    description:
      "Keep your car healthy with an interim service, full service, or major service.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        width="28"
        height="28"
      >
        {/* Clipboard body */}
        <rect x="8" y="9" width="26" height="34" rx="2.5" />
        {/* Clipboard top clip */}
        <path d="M16 9 L16 7 C16 5.3 17.3 4 19 4 L23 4 C24.7 4 26 5.3 26 7 L26 9" />
        <rect x="17" y="4" width="8" height="6" rx="1.5" />
        {/* Tick row 1 */}
        <polyline points="13,20 16,23 21,17" />
        <line x1="24" y1="20" x2="30" y2="20" />
        {/* Tick row 2 */}
        <polyline points="13,29 16,32 21,26" />
        <line x1="24" y1="29" x2="30" y2="29" />
        {/* Tick row 3 — partial (in progress feel) */}
        <polyline points="13,38 16,41 21,35" />
        <line x1="24" y1="38" x2="28" y2="38" />
        {/* Cog badge — bottom right corner overlay */}
        <circle cx="38" cy="38" r="8" fill="white" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="38" cy="38" r="3.5" />
        {/* Cog teeth — 6 teeth */}
        <line x1="38" y1="30.5" x2="38" y2="32.5" />
        <line x1="38" y1="43.5" x2="38" y2="45.5" />
        <line x1="30.5" y1="38" x2="32.5" y2="38" />
        <line x1="43.5" y1="38" x2="45.5" y2="38" />
        <line x1="33.2" y1="33.2" x2="34.6" y2="34.6" />
        <line x1="41.4" y1="41.4" x2="42.8" y2="42.8" />
        <line x1="42.8" y1="33.2" x2="41.4" y2="34.6" />
        <line x1="34.6" y1="41.4" x2="33.2" y2="42.8" />
      </svg>
    ),
  },
];

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function ChooseServicePage() {
  const router = useRouter();
  const { getSession, updateSession } = useBookingSession();
  const [carLabel] = useState(() => {
    const session = getSession();
    const { make, model } = session.car;
    return make && model ? `${make} ${model}` : "";
  });

  function handleSelect(serviceId: BookingSession["service"]) {
    updateSession({ service: serviceId });
    router.push("/booking/step-2");
  }

  const heading = carLabel
    ? `What does your ${carLabel} need?`
    : "What does your car need?";

  return (
    <div className="cs-outer">
      <div className="cs-inner">
        {/* Page header */}
        <header className="cs-header">
          <h1 className="cs-heading">{heading}</h1>
          <p className="cs-subtitle">
            You&rsquo;re just seconds away from getting a fixed price quote for your car.
          </p>
        </header>

        {/* Service cards */}
        <div className="cs-cards">
          {SERVICE_CARDS.map((card) => (
            <button
              key={card.id}
              className="cs-card"
              type="button"
              onClick={() => handleSelect(card.id)}
              aria-label={`Select ${card.title}`}
            >
              <div className="cs-card-icon-wrap">
                <div className="cs-card-icon">{card.icon}</div>
              </div>
              <div className="cs-card-body">
                <h2 className="cs-card-title">{card.title}</h2>
                <p className="cs-card-desc">{card.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* ------------------------------------------------------------------ */
        /* Page shell                                                          */
        /* ------------------------------------------------------------------ */
        .cs-outer {
          padding: 64px 24px 96px;
          background: var(--color-bg);
          min-height: calc(100vh - 64px);
        }

        .cs-inner {
          max-width: 860px;
          margin: 0 auto;
        }

        /* ------------------------------------------------------------------ */
        /* Header                                                              */
        /* ------------------------------------------------------------------ */
        .cs-header {
          text-align: center;
          margin-bottom: 44px;
        }

        .cs-heading {
          font-family: var(--font-open-sans), "Open Sans", sans-serif;
          font-size: 36px;
          font-weight: 800;
          color: var(--color-text-primary);
          letter-spacing: -0.6px;
          line-height: 1.1;
          margin: 0 0 14px;
        }

        .cs-subtitle {
          font-family: var(--font-rubik), "Rubik", sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin: 0;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ------------------------------------------------------------------ */
        /* Cards grid                                                          */
        /* ------------------------------------------------------------------ */
        .cs-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* ------------------------------------------------------------------ */
        /* Individual card                                                     */
        /* ------------------------------------------------------------------ */
        .cs-card {
          background: #ffffff;
          border: 2px solid var(--color-divider);
          border-radius: var(--radius-lg);
          padding: 40px 24px 36px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0;
          transition:
            border-color var(--t-base),
            box-shadow var(--t-base),
            transform var(--t-base);
          /* Reset button defaults */
          font-family: inherit;
          appearance: none;
          -webkit-appearance: none;
        }

        .cs-card:hover {
          border-color: var(--color-brand-primary);
          box-shadow: 0 6px 24px rgba(13, 122, 95, 0.13);
          transform: translateY(-3px);
        }

        .cs-card:focus-visible {
          outline: 3px solid var(--color-brand-primary);
          outline-offset: 2px;
        }

        .cs-card:active {
          transform: translateY(-1px);
          box-shadow: 0 3px 12px rgba(13, 122, 95, 0.1);
        }

        /* ------------------------------------------------------------------ */
        /* Icon container                                                      */
        /* ------------------------------------------------------------------ */
        .cs-card-icon-wrap {
          margin-bottom: 20px;
          flex-shrink: 0;
        }

        .cs-card-icon {
          width: 76px;
          height: 76px;
          border-radius: var(--radius-full);
          background: #ECF7EF;
          color: var(--color-brand-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background var(--t-fast), color var(--t-fast);
        }

        .cs-card:hover .cs-card-icon {
          background: #d6eedd;
          color: #055240;
        }

        /* ------------------------------------------------------------------ */
        /* Card body — title + description                                     */
        /* ------------------------------------------------------------------ */
        .cs-card-body {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }

        .cs-card-title {
          font-family: var(--font-open-sans), "Open Sans", sans-serif;
          font-size: 17px;
          font-weight: 800;
          color: var(--color-text-primary);
          letter-spacing: -0.2px;
          line-height: 1.2;
          margin: 0;
        }

        .cs-card-desc {
          font-family: var(--font-rubik), "Rubik", sans-serif;
          font-size: 13.5px;
          font-weight: 400;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        /* ------------------------------------------------------------------ */
        /* Mobile — ≤ 680px                                                    */
        /* ------------------------------------------------------------------ */
        @media (max-width: 680px) {
          .cs-outer {
            padding: 40px 16px 64px;
          }

          .cs-heading {
            font-size: 26px;
          }

          .cs-cards {
            grid-template-columns: 1fr;
            max-width: 420px;
            margin: 0 auto;
          }

          .cs-card {
            flex-direction: row;
            align-items: center;
            text-align: left;
            padding: 20px 20px;
            gap: 16px;
          }

          .cs-card-icon-wrap {
            margin-bottom: 0;
            flex-shrink: 0;
          }

          .cs-card-icon {
            width: 56px;
            height: 56px;
          }

          .cs-card-body {
            align-items: flex-start;
            gap: 4px;
          }

          .cs-card-desc {
            font-size: 13px;
          }
        }

        /* ------------------------------------------------------------------ */
        /* Reduced motion                                                      */
        /* ------------------------------------------------------------------ */
        @media (prefers-reduced-motion: reduce) {
          .cs-card,
          .cs-card-icon {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
