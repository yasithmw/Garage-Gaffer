"use client";

import { useRouter } from "next/navigation";
import { useBookingSession, BookingSession } from "@/components/booking/useBookingSession";

const SERVICE_CARDS = [
  {
    id: "repairs" as BookingSession["service"],
    title: "Repairs",
    description: "Fix a specific issue — from brakes and batteries to clutches and starter motors.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    iconBg: "#ECF7EF",
    iconColor: "var(--color-brand-primary)",
    examples: ["Brake pads", "Battery", "Timing belt", "Clutch"],
  },
  {
    id: "diagnostics" as BookingSession["service"],
    title: "Diagnostics",
    description: "Warning light on or something doesn't feel right? We'll identify the problem.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
    iconBg: "#E6F3FA",
    iconColor: "var(--color-accent-blue)",
    examples: ["Engine warning light", "Car won't start", "Plug-in OBD scan"],
  },
  {
    id: "servicing" as BookingSession["service"],
    title: "Servicing & MOT",
    description: "Keep your car healthy with an interim service, full service, or MOT with collection.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    iconBg: "#E4F6F6",
    iconColor: "var(--color-accent-teal)",
    examples: ["Interim service", "Full service", "MOT + collection"],
  },
];

export default function ServiceSelectPage() {
  const router = useRouter();
  const { updateSession } = useBookingSession();

  function handleSelect(service: BookingSession["service"]) {
    updateSession({ service });
    router.push("/booking/step-2");
  }

  return (
    <div className="ss-outer">
      <div className="ss-inner">
        <div className="ss-header">
          <span className="eyebrow">Almost there</span>
          <h1 className="ss-title">What do you need help with?</h1>
          <p className="ss-subtitle">Select a category to see your options and pricing.</p>
        </div>

        <div className="ss-cards">
          {SERVICE_CARDS.map((card) => (
            <button
              key={card.id}
              className="ss-card"
              onClick={() => handleSelect(card.id)}
              type="button"
              aria-label={`Select ${card.title}`}
            >
              <div
                className="ss-card-icon"
                style={{ background: card.iconBg, color: card.iconColor }}
              >
                {card.icon}
              </div>
              <h2 className="ss-card-title">{card.title}</h2>
              <p className="ss-card-desc">{card.description}</p>
              <ul className="ss-card-examples">
                {card.examples.map((ex) => (
                  <li key={ex} className="ss-card-example">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {ex}
                  </li>
                ))}
              </ul>
              <div className="ss-card-cta">
                See prices
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ss-outer {
          padding: 48px 24px 80px;
        }
        .ss-inner {
          max-width: 960px;
          margin: 0 auto;
        }
        .ss-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .ss-title {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-bottom: 10px;
        }
        .ss-subtitle {
          color: var(--color-text-secondary);
          font-size: 16px;
          margin: 0;
        }
        .ss-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .ss-card {
          background: #fff;
          border: 2px solid var(--color-divider);
          border-radius: var(--radius-xl);
          padding: 32px 28px;
          text-align: left;
          cursor: pointer;
          transition:
            border-color var(--t-base),
            box-shadow var(--t-base),
            transform var(--t-base);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ss-card:hover {
          border-color: var(--color-brand-primary);
          box-shadow: var(--shadow-lg);
          transform: translateY(-3px);
        }
        .ss-card-icon {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ss-card-icon :global(svg) {
          width: 24px;
          height: 24px;
        }
        .ss-card-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--color-text-primary);
          margin: 0;
        }
        .ss-card-desc {
          font-size: 14px;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin: 0;
          flex: 1;
        }
        .ss-card-examples {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .ss-card-example {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          color: var(--color-text-secondary);
        }
        .ss-card-example :global(svg) {
          color: var(--color-brand-primary);
          flex-shrink: 0;
        }
        .ss-card-cta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-rubik), sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: var(--color-brand-primary);
          margin-top: 4px;
        }

        @media (max-width: 860px) {
          .ss-cards {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 0 auto;
          }
          .ss-card {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .ss-card-icon {
            width: 44px;
            height: 44px;
          }
          .ss-card-title {
            font-size: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ss-card {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
