"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useBookingSession } from "./useBookingSession";

const STEPS = [
  { label: "Car", path: "/booking/step-1", step: 1 },
  { label: "Select Work", path: "/booking/step-2", step: 2 },
  { label: "Details", path: "/booking/step-3", step: 3 },
  { label: "Book", path: "/booking/step-4", step: 4 },
];

function getActiveStep(pathname: string): number {
  if (pathname.startsWith("/booking/step-1")) return 1;
  if (pathname.startsWith("/booking/choose-service")) return 1;
  if (pathname.startsWith("/booking/service-select")) return 2;
  if (pathname.startsWith("/booking/step-2")) return 2;
  if (pathname.startsWith("/booking/step-3")) return 3;
  if (pathname.startsWith("/booking/step-4")) return 4;
  if (pathname.startsWith("/booking/confirmation")) return 4;
  return 1;
}

export default function BookingProgressBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { getSession } = useBookingSession();
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    const session = getSession();
    setCompletedSteps(session.completedSteps ?? []);
  }, [pathname]);

  const activeStep = getActiveStep(pathname);

  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar-inner">
        {STEPS.map((s, idx) => {
          const isCompleted = completedSteps.includes(s.step);
          const isActive = activeStep === s.step;
          const isClickable = isCompleted && !isActive;

          return (
            <div key={s.step} className="progress-step">
              {idx > 0 && (
                <div
                  className={`progress-connector${isCompleted || isActive ? " progress-connector--done" : ""}`}
                />
              )}

              <button
                className={`progress-circle${isCompleted ? " progress-circle--done" : ""}${isActive ? " progress-circle--active" : ""}${isClickable ? " progress-circle--clickable" : ""}`}
                onClick={() => isClickable && router.push(s.path)}
                aria-label={`Step ${s.step}: ${s.label}${isCompleted ? " (completed)" : ""}${isActive ? " (current)" : ""}`}
                aria-current={isActive ? "step" : undefined}
                disabled={!isClickable}
                type="button"
              >
                {isCompleted ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <span className="progress-circle-num">{s.step}</span>
                )}
              </button>

              <span
                className={`progress-label${isCompleted ? " progress-label--done" : ""}${isActive ? " progress-label--active" : ""}`}
              >
                {s.label}
              </span>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .progress-bar-wrapper {
          background: var(--color-surface);
          border-bottom: 1px solid var(--color-divider);
          padding: 16px 24px;
        }

        .progress-bar-inner {
          max-width: 640px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .progress-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          position: relative;
          flex: 1;
        }


        .progress-connector {
          position: absolute;
          top: 16px;
          right: 50%;
          left: calc(-50% + 16px);
          height: 2px;
          background: var(--color-divider);
          z-index: 0;
          transform: translateY(-50%);
          transition: background var(--t-base);
        }

        .progress-connector--done {
          background: var(--color-success);
        }

        .progress-circle {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-full);
          border: 2px solid var(--color-divider);
          background: var(--color-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: default;
          position: relative;
          z-index: 1;
          transition:
            background var(--t-base),
            border-color var(--t-base),
            color var(--t-base),
            box-shadow var(--t-base);
        }

        .progress-circle-num {
          font-family: var(--font-rubik), sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: var(--color-text-disabled);
          transition: color var(--t-base);
        }

        .progress-circle--done {
          background: var(--color-success);
          border-color: var(--color-success);
          color: var(--color-surface);
        }

        .progress-circle--active {
          border-color: var(--color-brand-primary);
          box-shadow: 0 0 0 4px rgba(13, 122, 95, 0.15);
          background: var(--color-surface);
        }

        .progress-circle--active .progress-circle-num {
          color: var(--color-brand-primary);
          font-weight: 800;
        }

        .progress-circle--clickable {
          cursor: pointer;
        }

        .progress-circle--clickable:hover {
          box-shadow: 0 0 0 4px rgba(13, 122, 95, 0.2);
          transform: translateY(-1px);
        }

        .progress-label {
          font-family: var(--font-rubik), sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: var(--color-text-disabled);
          white-space: nowrap;
          text-align: center;
          transition: color var(--t-base);
        }

        .progress-label--done {
          color: var(--color-success);
          font-weight: 600;
        }

        .progress-label--active {
          color: var(--color-brand-primary);
          font-weight: 700;
        }

        @media (max-width: 500px) {
          .progress-bar-wrapper {
            padding: 12px 16px;
          }

          .progress-circle {
            width: 28px;
            height: 28px;
          }

          .progress-connector {
            top: 14px;
            left: calc(-50% + 14px);
          }

          .progress-label {
            font-size: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .progress-circle,
          .progress-connector,
          .progress-circle-num,
          .progress-label {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
