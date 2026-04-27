"use client";

import { DIAGNOSTIC_OPTIONS } from "../mockData";
import type { SelectedItem } from "../useBookingSession";

interface DiagnosticsTabProps {
  selectedWork: SelectedItem[];
  onAdd: (item: SelectedItem) => void;
  onRemove: (id: string) => void;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="dt-stars" aria-label={`Rated ${rating} out of 5`}>
      {"★".repeat(Math.round(rating))}
      <span className="dt-star-val">{rating}</span>
    </span>
  );
}

export default function DiagnosticsTab({ selectedWork, onAdd, onRemove }: DiagnosticsTabProps) {
  const selectedIds = new Set(selectedWork.map((w) => w.id));

  return (
    <div className="dt-wrap">
      <div className="dt-label-row">
        <span className="dt-section-label">IN-PERSON DIAGNOSTIC</span>
        <p className="dt-section-desc">
          A qualified mechanic visits you and diagnoses your vehicle on-site. You&apos;ll receive a full written report and a no-obligation quote for any recommended repairs.
        </p>
      </div>

      <div className="dt-list">
        {DIAGNOSTIC_OPTIONS.map((option) => {
          const added = selectedIds.has(option.id);
          return (
            <div key={option.id} className={`dt-item${added ? " dt-item--selected" : ""}`}>
              <div className="dt-item-top">
                <div className="dt-item-info">
                  <h4 className="dt-item-name">{option.name}</h4>
                  <p className="dt-item-desc">{option.description}</p>
                  <div className="dt-item-meta">
                    <StarRating rating={option.rating} />
                    <span className="dt-review-count">({option.reviewCount.toLocaleString()} reviews)</span>
                    <a href="#" className="dt-more-info" onClick={(e) => e.preventDefault()}>More info</a>
                  </div>
                </div>
                <div className="dt-item-right">
                  <span className="dt-item-price">£{option.price}</span>
                  <button
                    className={`rt-item-btn${added ? " rt-item-btn--remove" : ""}`}
                    onClick={() => added ? onRemove(option.id) : onAdd({ id: option.id, name: option.name, price: option.price })}
                    type="button"
                    aria-label={added ? `Remove ${option.name}` : `Add ${option.name}`}
                  >
                    {added ? "Remove" : "Add"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Banner */}
      <div className="dt-banner">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
        <span>Unsure what's wrong? Use our <strong>free diagnostics tool</strong> to identify the issue before booking.</span>
      </div>

      <style jsx>{`
        .dt-wrap { display: flex; flex-direction: column; gap: 24px; }
        .dt-label-row { display: flex; flex-direction: column; gap: 8px; }
        .dt-section-label {
          display: inline-block; font-family: var(--font-rubik), sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--color-accent-blue);
          background: #E6F3FA; padding: 4px 10px; border-radius: var(--radius-full); width: fit-content;
        }
        .dt-section-desc { font-size: 14px; color: var(--color-text-secondary); line-height: 1.6; margin: 0; }
        .dt-list { display: flex; flex-direction: column; gap: 12px; }
        .dt-item {
          background: #fff; border: 2px solid var(--color-divider);
          border-radius: var(--radius-lg); padding: 20px;
          transition: border-color var(--t-base), box-shadow var(--t-base);
        }
        .dt-item:hover { border-color: #b0bab5; box-shadow: var(--shadow-sm); }
        .dt-item--selected { border-color: var(--color-brand-primary); background: #ECF7EF; }
        .dt-item-top { display: flex; align-items: flex-start; gap: 16px; justify-content: space-between; }
        .dt-item-info { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 8px; }
        .dt-item-name { font-size: 16px; font-weight: 700; color: var(--color-text-primary); margin: 0; }
        .dt-item-desc { font-size: 13.5px; color: var(--color-text-secondary); line-height: 1.55; margin: 0; }
        .dt-item-meta { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .dt-stars { color: #F9C339; font-size: 12px; display: flex; align-items: center; gap: 4px; }
        .dt-star-val { font-family: var(--font-rubik), sans-serif; font-weight: 700; font-size: 12px; color: var(--color-text-primary); }
        .dt-review-count { font-size: 12px; color: var(--color-text-secondary); }
        .dt-more-info { font-size: 12px; color: var(--color-accent-blue); text-decoration: underline; cursor: pointer; }
        .dt-item-right { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; flex-shrink: 0; }
        .dt-item-price { font-size: 20px; font-weight: 800; color: var(--color-text-primary); }
        :global(.rt-item-btn) {
          padding: 8px 16px; border-radius: var(--radius-md);
          background: var(--color-brand-primary); color: #fff;
          border: none; cursor: pointer; font-family: var(--font-rubik), sans-serif;
          font-size: 13px; font-weight: 600;
          transition: background var(--t-fast), transform var(--t-fast);
          white-space: nowrap;
        }
        :global(.rt-item-btn:hover) { background: var(--color-brand-deep); transform: translateY(-1px); }
        :global(.rt-item-btn--remove) { background: #fff; color: var(--color-error); border: 1.5px solid var(--color-error); }
        :global(.rt-item-btn--remove:hover) { background: #FFF0F0; }
        .dt-banner {
          display: flex; align-items: flex-start; gap: 10px;
          background: var(--color-warning-bg); border: 1px solid rgba(249,195,57,0.4);
          border-radius: var(--radius-md); padding: 14px 16px;
          font-size: 13.5px; color: var(--color-text-primary);
        }
        .dt-banner svg { color: var(--color-warning); flex-shrink: 0; margin-top: 1px; }

        @media (max-width: 560px) {
          .dt-item-top { flex-direction: column; }
          .dt-item-right { flex-direction: row; align-items: center; justify-content: space-between; width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .dt-item { transition: none; }
          :global(.rt-item-btn) { transition: none; }
        }
      `}</style>
    </div>
  );
}
