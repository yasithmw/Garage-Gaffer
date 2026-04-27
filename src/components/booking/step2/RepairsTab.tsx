"use client";

import { useState } from "react";
import { POPULAR_REPAIRS, REPAIR_CATEGORIES } from "../mockData";
import type { SelectedItem } from "../useBookingSession";

interface RepairsTabProps {
  selectedWork: SelectedItem[];
  onAdd: (item: SelectedItem) => void;
  onRemove: (id: string) => void;
}

export default function RepairsTab({ selectedWork, onAdd, onRemove }: RepairsTabProps) {
  const [search, setSearch] = useState("");
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const selectedIds = new Set(selectedWork.map((w) => w.id));

  const filtered = search.trim()
    ? POPULAR_REPAIRS.filter((r) => r.name.toLowerCase().includes(search.toLowerCase()))
    : POPULAR_REPAIRS;

  function toggleCategory(id: string) {
    setOpenCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  }

  function isOpen(id: string) {
    return openCategories.includes(id);
  }

  return (
    <div className="rt-wrap">
      {/* Search */}
      <div className="rt-search-wrap">
        <svg className="rt-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="search"
          placeholder="Search available repairs"
          className="form-input rt-search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search repairs"
        />
      </div>

      {/* Popular repairs */}
      <div className="rt-section">
        <h3 className="rt-section-title">Popular Repairs</h3>
        <div className="rt-list">
          {filtered.map((item) => {
            const added = selectedIds.has(item.id);
            return (
              <div key={item.id} className="rt-item">
                <div className="rt-item-info">
                  <span className="rt-item-name">{item.name}</span>
                  <span className="rt-item-meta">
                    {item.labourTime && <span>{item.labourTime}</span>}
                    {item.partsIncluded && <span>Parts included</span>}
                  </span>
                </div>
                <div className="rt-item-right">
                  <span className="rt-item-price">£{item.price}</span>
                  <button
                    className={`rt-item-btn${added ? " rt-item-btn--remove" : ""}`}
                    onClick={() => added ? onRemove(item.id) : onAdd(item)}
                    type="button"
                    aria-label={added ? `Remove ${item.name}` : `Add ${item.name}`}
                  >
                    {added ? "Remove" : "Add"}
                  </button>
                </div>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <p className="rt-empty">No repairs matching "{search}"</p>
          )}
        </div>
      </div>

      {/* Browse by category */}
      {!search && (
        <div className="rt-section">
          <h3 className="rt-section-title">Browse by Category</h3>
          <div className="rt-categories">
            {REPAIR_CATEGORIES.map((cat) => (
              <div key={cat.id} className="rt-category">
                <button
                  className="rt-category-header"
                  onClick={() => toggleCategory(cat.id)}
                  aria-expanded={isOpen(cat.id)}
                  type="button"
                >
                  <span className="rt-category-name">{cat.name}</span>
                  <svg
                    className={`rt-category-chevron${isOpen(cat.id) ? " rt-category-chevron--open" : ""}`}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {isOpen(cat.id) && (
                  <div className="rt-category-body">
                    {cat.subCategories.map((sub) => (
                      <div key={sub.name} className="rt-subcategory">
                        <p className="rt-subcategory-name">{sub.name}</p>
                        <div className="rt-list">
                          {sub.items.map((item) => {
                            const added = selectedIds.has(item.id);
                            return (
                              <div key={item.id} className="rt-item rt-item--sub">
                                <div className="rt-item-info">
                                  <span className="rt-item-name">{item.name}</span>
                                  <span className="rt-item-meta">
                                    {item.labourTime && <span>{item.labourTime}</span>}
                                    {item.partsIncluded && <span>Parts included</span>}
                                  </span>
                                </div>
                                <div className="rt-item-right">
                                  <span className="rt-item-price">£{item.price}</span>
                                  <button
                                    className={`rt-item-btn${added ? " rt-item-btn--remove" : ""}`}
                                    onClick={() => added ? onRemove(item.id) : onAdd(item)}
                                    type="button"
                                    aria-label={added ? `Remove ${item.name}` : `Add ${item.name}`}
                                  >
                                    {added ? "Remove" : "Add"}
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Banner */}
      <div className="rt-banner">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
        </svg>
        <span>Unsure what's wrong with your car? <strong>Switch to Diagnostics</strong> to add a diagnostic inspection.</span>
      </div>

      <style jsx>{`
        .rt-wrap { display: flex; flex-direction: column; gap: 24px; }
        .rt-search-wrap { position: relative; }
        .rt-search-icon {
          position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
          width: 16px; height: 16px; color: #8A8D8C; pointer-events: none;
        }
        .rt-search-input { padding-left: 40px !important; }
        .rt-section { display: flex; flex-direction: column; gap: 12px; }
        .rt-section-title {
          font-family: var(--font-open-sans), sans-serif;
          font-size: 15px; font-weight: 800; color: var(--color-text-primary);
        }
        .rt-list { display: flex; flex-direction: column; gap: 2px; }
        .rt-item {
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          padding: 12px 14px; border-radius: var(--radius-md);
          background: var(--color-bg); transition: background var(--t-fast);
        }
        .rt-item:hover { background: #ECF7EF; }
        .rt-item--sub { background: #fff; border: 1px solid var(--color-divider); }
        .rt-item--sub:hover { background: #ECF7EF; }
        .rt-item-info { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
        .rt-item-name { font-size: 14px; font-weight: 600; color: var(--color-text-primary); }
        .rt-item-meta { display: flex; gap: 10px; }
        .rt-item-meta span {
          font-size: 12px; color: var(--color-text-secondary);
          padding: 1px 6px; background: var(--color-surface-2);
          border-radius: var(--radius-sm); border: 1px solid var(--color-divider);
        }
        .rt-item-right { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
        .rt-item-price { font-size: 15px; font-weight: 700; color: var(--color-text-primary); }
        .rt-item-btn {
          padding: 6px 14px; border-radius: var(--radius-md);
          background: var(--color-brand-primary); color: #fff;
          border: none; cursor: pointer; font-family: var(--font-rubik), sans-serif;
          font-size: 12px; font-weight: 600;
          transition: background var(--t-fast), transform var(--t-fast);
        }
        .rt-item-btn:hover { background: var(--color-brand-deep); transform: translateY(-1px); }
        .rt-item-btn--remove { background: #fff; color: var(--color-error); border: 1.5px solid var(--color-error); }
        .rt-item-btn--remove:hover { background: #FFF0F0; }
        .rt-empty { font-size: 14px; color: var(--color-text-secondary); padding: 16px 0; }
        .rt-categories { display: flex; flex-direction: column; gap: 8px; }
        .rt-category { border: 1px solid var(--color-divider); border-radius: var(--radius-md); overflow: hidden; }
        .rt-category-header {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 14px 16px; background: #fff; border: none; cursor: pointer;
          transition: background var(--t-fast);
        }
        .rt-category-header:hover { background: var(--color-bg); }
        .rt-category-name { font-size: 14px; font-weight: 700; color: var(--color-text-primary); font-family: var(--font-rubik), sans-serif; }
        .rt-category-chevron { width: 16px; height: 16px; color: #8A8D8C; transition: transform var(--t-base); }
        .rt-category-chevron--open { transform: rotate(180deg); }
        .rt-category-body { padding: 12px 16px 16px; background: var(--color-bg); display: flex; flex-direction: column; gap: 16px; }
        .rt-subcategory { display: flex; flex-direction: column; gap: 8px; }
        .rt-subcategory-name { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-text-secondary); margin: 0; }
        .rt-banner {
          display: flex; align-items: flex-start; gap: 10px;
          background: var(--color-warning-bg); border: 1px solid rgba(249,195,57,0.4);
          border-radius: var(--radius-md); padding: 14px 16px;
          font-size: 13.5px; color: var(--color-text-primary);
        }
        .rt-banner svg { color: var(--color-warning); flex-shrink: 0; margin-top: 1px; }

        @media (prefers-reduced-motion: reduce) {
          .rt-item, .rt-item-btn, .rt-category-header, .rt-category-chevron { transition: none; }
        }
      `}</style>
    </div>
  );
}
