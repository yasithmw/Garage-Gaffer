"use client";

import { useEffect, useRef } from "react";
import { SERVICE_COMPARISON, SERVICING_OPTIONS } from "../mockData";
import type { SelectedItem } from "../useBookingSession";

interface ServiceComparisonModalProps {
  onClose: () => void;
  onAdd: (item: SelectedItem) => void;
  selectedIds: Set<string>;
}

const TIERS = [
  { key: "interim", label: "Interim", serviceId: "s-interim" },
  { key: "full", label: "Full", serviceId: "s-full" },
  { key: "major", label: "Major", serviceId: "s-major" },
] as const;

export default function ServiceComparisonModal({ onClose, onAdd, selectedIds }: ServiceComparisonModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    modalRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function handleBackdrop(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div className="scm-backdrop" onClick={handleBackdrop} role="dialog" aria-modal="true" aria-labelledby="scm-title">
      <div className="scm-modal" ref={modalRef} tabIndex={-1}>
        {/* Header */}
        <div className="scm-header">
          <h2 id="scm-title" className="scm-title">What does my service include?</h2>
          <button className="scm-close" onClick={onClose} aria-label="Close modal" type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="scm-body">
          {/* Table */}
          <div className="scm-table-wrap">
            <table className="scm-table">
              <thead>
                <tr>
                  <th className="scm-th scm-th--feature"></th>
                  {TIERS.map((t) => (
                    <th key={t.key} className="scm-th scm-th--tier">{t.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SERVICE_COMPARISON.map((cat) => (
                  <>
                    <tr key={`cat-${cat.name}`} className="scm-cat-row">
                      <td colSpan={4} className="scm-cat-label">{cat.name}</td>
                    </tr>
                    {cat.rows.map((row) => (
                      <tr key={row.name} className="scm-row">
                        <td className="scm-td scm-td--feature">
                          {row.name}
                          {row.footnote && <sup className="scm-footnote">{row.footnote.charAt(0)}</sup>}
                        </td>
                        {TIERS.map((t) => (
                          <td key={t.key} className="scm-td scm-td--check">
                            {row[t.key] ? (
                              <svg className="scm-tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-label="Included">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            ) : (
                              <svg className="scm-cross" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-label="Not included">
                                <path d="M18 6L6 18M6 6l12 12" />
                              </svg>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer prices */}
          <div className="scm-footer">
            {TIERS.map((t) => {
              const option = SERVICING_OPTIONS.find((s) => s.id === t.serviceId);
              if (!option) return null;
              const added = selectedIds.has(option.id);
              return (
                <div key={t.key} className="scm-footer-col">
                  <span className="scm-footer-label">{t.label} Service</span>
                  <span className="scm-footer-price">£{option.price}</span>
                  <span className="scm-footer-dealer">£{option.dealerPrice} at dealer</span>
                  <button
                    className={`scm-add-btn${added ? " scm-add-btn--added" : ""}`}
                    onClick={() => !added && onAdd({ id: option.id, name: option.name, price: option.price })}
                    type="button"
                    aria-label={added ? `${t.label} Service already added` : `Add ${t.label} Service`}
                    disabled={added}
                  >
                    {added ? "Added" : "Add"}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Footnotes */}
          <div className="scm-footnotes">
            <p>* If fitted &nbsp; ** Petrol only &nbsp; *** Diesel only</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scm-backdrop {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(10,43,20,0.5); backdrop-filter: blur(4px);
          display: flex; align-items: center; justify-content: center; padding: 16px;
        }
        .scm-modal {
          background: #fff; border-radius: var(--radius-xl);
          max-width: 680px; width: 100%; max-height: 90vh; overflow: hidden;
          display: flex; flex-direction: column;
          box-shadow: var(--shadow-xl); outline: none;
        }
        .scm-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 24px; border-bottom: 1px solid var(--color-divider); flex-shrink: 0;
        }
        .scm-title { font-size: 18px; font-weight: 800; margin: 0; }
        .scm-close {
          width: 36px; height: 36px; border-radius: var(--radius-md);
          display: flex; align-items: center; justify-content: center;
          background: var(--color-bg); border: none; cursor: pointer;
          color: var(--color-text-secondary);
          transition: background var(--t-fast), color var(--t-fast);
        }
        .scm-close:hover { background: #FFF0F0; color: var(--color-error); }
        .scm-body { overflow-y: auto; flex: 1; padding: 0; }
        .scm-table-wrap { overflow-x: auto; }
        .scm-table { width: 100%; border-collapse: collapse; }
        .scm-th { padding: 12px 16px; font-family: var(--font-rubik), sans-serif; font-size: 13px; font-weight: 700; }
        .scm-th--feature { text-align: left; width: 55%; background: var(--color-bg); }
        .scm-th--tier { text-align: center; background: var(--color-brand-mint); color: var(--color-brand-primary); }
        .scm-cat-row { background: var(--color-bg); }
        .scm-cat-label {
          padding: 10px 16px; font-size: 11px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-text-secondary);
        }
        .scm-row { border-bottom: 1px solid var(--color-divider); }
        .scm-row:hover { background: #FAFCFB; }
        .scm-td { padding: 10px 16px; }
        .scm-td--feature { font-size: 13px; color: var(--color-text-primary); }
        .scm-td--check { text-align: center; }
        .scm-tick { width: 16px; height: 16px; color: var(--color-success); display: inline-block; }
        .scm-cross { width: 14px; height: 14px; color: #DADCDB; display: inline-block; }
        .scm-footnote { font-size: 9px; color: var(--color-text-secondary); }
        .scm-footer {
          display: grid; grid-template-columns: repeat(3, 1fr);
          border-top: 2px solid var(--color-divider); padding: 20px 16px; gap: 12px;
        }
        .scm-footer-col {
          display: flex; flex-direction: column; align-items: center; gap: 4px;
          padding: 16px 12px; background: var(--color-bg); border-radius: var(--radius-lg);
        }
        .scm-footer-label { font-size: 12px; font-weight: 700; color: var(--color-text-secondary); }
        .scm-footer-price { font-size: 22px; font-weight: 800; color: var(--color-text-primary); }
        .scm-footer-dealer { font-size: 11px; color: var(--color-text-disabled); text-decoration: line-through; }
        .scm-add-btn {
          margin-top: 6px; padding: 8px 20px; border-radius: var(--radius-md);
          background: var(--color-brand-primary); color: #fff;
          border: none; cursor: pointer; font-family: var(--font-rubik), sans-serif;
          font-size: 13px; font-weight: 600;
          transition: background var(--t-fast);
        }
        .scm-add-btn:hover:not(:disabled) { background: var(--color-brand-deep); }
        .scm-add-btn--added { background: var(--color-success); cursor: default; }
        .scm-add-btn:disabled { opacity: 0.7; }
        .scm-footnotes { padding: 8px 20px 16px; }
        .scm-footnotes p { font-size: 11px; color: var(--color-text-disabled); margin: 0; }

        @media (max-width: 500px) {
          .scm-footer { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .scm-close, .scm-add-btn { transition: none; }
        }
      `}</style>
    </div>
  );
}
