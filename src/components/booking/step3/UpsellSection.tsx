"use client";

import { useState } from "react";
import { UPSELL_ITEMS } from "../mockData";
import type { SelectedItem } from "../useBookingSession";

interface UpsellSectionProps {
  existingWork: SelectedItem[];
  onAdd: (item: SelectedItem) => void;
}

export default function UpsellSection({ existingWork, onAdd }: UpsellSectionProps) {
  const [added, setAdded] = useState<Set<string>>(new Set());
  const existingIds = new Set(existingWork.map((w) => w.id));

  function handleAdd(item: typeof UPSELL_ITEMS[0]) {
    setAdded((prev) => new Set(prev).add(item.id));
    onAdd({ id: item.id, name: item.name, price: item.price });
  }

  return (
    <div className="us-wrap">
      <p className="us-label eyebrow">Customers often book this work at the same time</p>
      <div className="us-cards">
        {UPSELL_ITEMS.map((item) => {
          const isAdded = added.has(item.id) || existingIds.has(item.id);
          return (
            <div key={item.id} className={`us-card${isAdded ? " us-card--added" : ""}`}>
              {item.savingsBadge && (
                <span className="us-saving">{item.savingsBadge}</span>
              )}
              <h4 className="us-card-name">{item.name}</h4>
              <div className="us-card-meta">
                <span className="us-stars" aria-label={`Rated ${item.rating} out of 5`}>
                  {"★".repeat(Math.round(item.rating))}
                  <span className="us-star-val">{item.rating}</span>
                </span>
                <span className="us-reviews">({item.reviewCount.toLocaleString()})</span>
              </div>
              <div className="us-card-bottom">
                <div className="us-pricing">
                  <span className="us-price">£{item.price}</span>
                  {item.dealerPrice && (
                    <span className="us-dealer">£{item.dealerPrice} at dealer</span>
                  )}
                </div>
                <button
                  className={`us-add-btn${isAdded ? " us-add-btn--added" : ""}`}
                  onClick={() => !isAdded && handleAdd(item)}
                  type="button"
                  disabled={isAdded}
                  aria-label={isAdded ? `${item.name} added` : `Add ${item.name}`}
                >
                  {isAdded ? (
                    <>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Added
                    </>
                  ) : "Add"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .us-wrap { display: flex; flex-direction: column; gap: 16px; }
        .us-label { margin-bottom: 0; }
        .us-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .us-card {
          background: #fff; border: 2px solid var(--color-divider);
          border-radius: var(--radius-lg); padding: 16px;
          display: flex; flex-direction: column; gap: 8px;
          position: relative; transition: border-color var(--t-base), box-shadow var(--t-base);
        }
        .us-card:hover { border-color: #b0bab5; box-shadow: var(--shadow-sm); }
        .us-card--added { border-color: var(--color-success); background: #ECF7EF; }
        .us-saving {
          position: absolute; top: -1px; right: 12px;
          background: var(--color-success); color: #fff;
          font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 0 0 6px 6px;
        }
        .us-card-name { font-size: 14px; font-weight: 700; color: var(--color-text-primary); margin: 0; }
        .us-card-meta { display: flex; align-items: center; gap: 4px; }
        .us-stars { color: #F9C339; font-size: 11px; display: flex; align-items: center; gap: 3px; }
        .us-star-val { font-family: var(--font-rubik), sans-serif; font-weight: 700; font-size: 11px; color: var(--color-text-primary); }
        .us-reviews { font-size: 11px; color: var(--color-text-secondary); }
        .us-card-bottom { display: flex; align-items: center; justify-content: space-between; margin-top: 4px; }
        .us-pricing { display: flex; flex-direction: column; }
        .us-price { font-size: 18px; font-weight: 800; color: var(--color-text-primary); }
        .us-dealer { font-size: 11px; color: var(--color-text-disabled); text-decoration: line-through; }
        .us-add-btn {
          padding: 7px 14px; border-radius: var(--radius-md);
          background: var(--color-brand-primary); color: #fff;
          border: none; cursor: pointer; font-family: var(--font-rubik), sans-serif;
          font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 4px;
          transition: background var(--t-fast);
        }
        .us-add-btn:hover:not(:disabled) { background: var(--color-brand-deep); }
        .us-add-btn--added { background: var(--color-success); cursor: default; }
        .us-add-btn:disabled { opacity: 1; }

        @media (max-width: 760px) { .us-cards { grid-template-columns: 1fr; } }
        @media (prefers-reduced-motion: reduce) {
          .us-card, .us-add-btn { transition: none; }
        }
      `}</style>
    </div>
  );
}
