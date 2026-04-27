"use client";

import { useState } from "react";
import { SERVICING_OPTIONS } from "../mockData";
import ServiceComparisonModal from "./ServiceComparisonModal";
import type { SelectedItem } from "../useBookingSession";

interface ServicingTabProps {
  selectedWork: SelectedItem[];
  onAdd: (item: SelectedItem) => void;
  onRemove: (id: string) => void;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span aria-label={`Rated ${rating} out of 5`} style={{ color: "#F9C339", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: 3 }}>
      {"★".repeat(Math.round(rating))}
      <span style={{ fontFamily: "var(--font-rubik)", fontWeight: 700, fontSize: 12, color: "var(--color-text-primary)" }}>{rating}</span>
    </span>
  );
}

export default function ServicingTab({ selectedWork, onAdd, onRemove }: ServicingTabProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const selectedIds = new Set(selectedWork.map((w) => w.id));

  return (
    <div className="svt-wrap">
      <div className="svt-list">
        {SERVICING_OPTIONS.map((option) => {
          const added = selectedIds.has(option.id);
          const isFree = option.price === 0;

          return (
            <div key={option.id} className={`svt-item${added ? " svt-item--selected" : ""}`}>
              <div className="svt-item-main">
                <div className="svt-item-info">
                  <div className="svt-name-row">
                    <h4 className="svt-item-name">{option.name}</h4>
                    {option.badge && (
                      <span className={`svt-badge${option.badge === "FREE" ? " svt-badge--free" : option.badge === "MOST POPULAR" ? " svt-badge--popular" : " svt-badge--promo"}`}>
                        {option.badge}
                      </span>
                    )}
                  </div>
                  <p className="svt-item-desc">{option.description}</p>
                  <div className="svt-item-meta">
                    <StarRating rating={option.rating} />
                    <span className="svt-review-count">({option.reviewCount.toLocaleString()} reviews)</span>
                    <button className="svt-more-info" onClick={() => setModalOpen(true)} type="button">
                      More info
                    </button>
                  </div>
                </div>

                <div className="svt-item-right">
                  <div className="svt-pricing">
                    <span className="svt-price">{isFree ? "FREE" : `£${option.price}`}</span>
                    {option.dealerPrice > 0 && (
                      <span className="svt-dealer-price">£{option.dealerPrice} at a dealer</span>
                    )}
                  </div>
                  <button
                    className={`svt-add-btn${added ? " svt-add-btn--remove" : ""}`}
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

      {modalOpen && <ServiceComparisonModal onClose={() => setModalOpen(false)} onAdd={onAdd} selectedIds={selectedIds} />}

      <style jsx>{`
        .svt-wrap { display: flex; flex-direction: column; gap: 12px; }
        .svt-list { display: flex; flex-direction: column; gap: 10px; }
        .svt-item {
          background: #fff; border: 2px solid var(--color-divider);
          border-radius: var(--radius-lg); padding: 20px;
          transition: border-color var(--t-base), box-shadow var(--t-base);
        }
        .svt-item:hover { border-color: #b0bab5; box-shadow: var(--shadow-sm); }
        .svt-item--selected { border-color: var(--color-brand-primary); background: #ECF7EF; }
        .svt-item-main { display: flex; align-items: flex-start; gap: 16px; justify-content: space-between; }
        .svt-item-info { flex: 1; min-width: 0; }
        .svt-name-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 6px; }
        .svt-item-name { font-size: 15px; font-weight: 700; color: var(--color-text-primary); margin: 0; }
        .svt-badge {
          font-family: var(--font-rubik), sans-serif; font-size: 10px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          padding: 2px 8px; border-radius: var(--radius-full);
        }
        .svt-badge--popular { background: var(--color-brand-primary); color: #fff; }
        .svt-badge--free { background: var(--color-success); color: #fff; }
        .svt-badge--promo { background: var(--color-warning-bg); color: #7A6200; border: 1px solid rgba(249,195,57,0.5); }
        .svt-item-desc { font-size: 13px; color: var(--color-text-secondary); line-height: 1.5; margin: 0 0 8px; }
        .svt-item-meta { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .svt-review-count { font-size: 12px; color: var(--color-text-secondary); }
        .svt-more-info {
          font-size: 12px; color: var(--color-accent-blue); background: none; border: none;
          text-decoration: underline; cursor: pointer; padding: 0; font-family: inherit;
        }
        .svt-item-right { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; flex-shrink: 0; }
        .svt-pricing { display: flex; flex-direction: column; align-items: flex-end; gap: 2px; }
        .svt-price { font-size: 20px; font-weight: 800; color: var(--color-text-primary); }
        .svt-dealer-price { font-size: 12px; color: var(--color-text-disabled); text-decoration: line-through; }
        .svt-add-btn {
          padding: 8px 18px; border-radius: var(--radius-md);
          background: var(--color-brand-primary); color: #fff;
          border: none; cursor: pointer; font-family: var(--font-rubik), sans-serif;
          font-size: 13px; font-weight: 600; white-space: nowrap;
          transition: background var(--t-fast), transform var(--t-fast);
        }
        .svt-add-btn:hover { background: var(--color-brand-deep); transform: translateY(-1px); }
        .svt-add-btn--remove { background: #fff; color: var(--color-error); border: 1.5px solid var(--color-error); }
        .svt-add-btn--remove:hover { background: #FFF0F0; }

        @media (max-width: 560px) {
          .svt-item-main { flex-direction: column; }
          .svt-item-right { flex-direction: row; align-items: center; justify-content: space-between; width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .svt-item, .svt-add-btn { transition: none; }
        }
      `}</style>
    </div>
  );
}
