"use client";

import React, { useState } from "react";

const TIME_SLOTS = [
  "All day",
  "8–10 AM",
  "10–12 PM",
  "12–2 PM",
  "2–4 PM",
  "4–6 PM",
  "6–8 PM",
];

// Format: "YYYY-MM-DD_HH:MM"
function dateSlotKey(date: Date, slot: string): string {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const slotCode = slot.replace(/[^0-9]/g, "").slice(0, 4).padEnd(4, "0");
  return `${yyyy}-${mm}-${dd}_${slotCode.slice(0, 2)}:${slotCode.slice(2, 4)}`;
}

function getWeekDays(startOffset: number): Date[] {
  const days: Date[] = [];
  const base = new Date();
  base.setHours(0, 0, 0, 0);
  base.setDate(base.getDate() + startOffset);
  // Show 5 weekdays
  let count = 0;
  let d = new Date(base);
  while (count < 5) {
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) {
      days.push(new Date(d));
      count++;
    }
    d.setDate(d.getDate() + 1);
  }
  return days;
}

function formatDay(date: Date): { short: string; num: string; priority: boolean } {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const diff = Math.round((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return {
    short: days[date.getDay()],
    num: String(date.getDate()),
    priority: diff <= 2,
  };
}

interface AvailabilityGridProps {
  selected: string[];
  onToggle: (key: string) => void;
}

export default function AvailabilityGrid({ selected, onToggle }: AvailabilityGridProps) {
  const [weekOffset, setWeekOffset] = useState(1); // start from tomorrow
  const days = getWeekDays(weekOffset);
  const selectedSet = new Set(selected);

  function prevWeek() {
    setWeekOffset((o) => Math.max(1, o - 5));
  }
  function nextWeek() {
    setWeekOffset((o) => o + 5);
  }

  return (
    <div className="ag-wrap">
      <div className="ag-info">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <span>Please select <strong>all</strong> the times when you are available across multiple days. Once a mechanic has been assigned you will receive a 2-hour arrival window.</span>
      </div>

      <p className="ag-counter">
        You have selected <strong>{selected.length}</strong> slot{selected.length !== 1 ? "s" : ""}
      </p>

      {/* Week navigation */}
      <div className="ag-nav">
        <button className="ag-nav-btn" onClick={prevWeek} disabled={weekOffset <= 1} type="button" aria-label="Previous week">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <span className="ag-nav-label">
          {days[0] && days[0].toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
          {" — "}
          {days[4] && days[4].toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
        </span>
        <button className="ag-nav-btn" onClick={nextWeek} type="button" aria-label="Next week">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Grid */}
      <div className="ag-grid-wrap">
        <div className="ag-grid" style={{ gridTemplateColumns: `80px repeat(${days.length}, 1fr)` }}>
          {/* Column headers */}
          <div className="ag-cell ag-corner" />
          {days.map((day, di) => {
            const info = formatDay(day);
            return (
              <div key={di} className="ag-cell ag-col-header">
                <span className="ag-day-name">{info.short}</span>
                <span className="ag-day-num">{info.num}</span>
                {info.priority && (
                  <span className="ag-priority">Priority +£25</span>
                )}
              </div>
            );
          })}

          {/* Slot rows */}
          {TIME_SLOTS.map((slot) => (
            <React.Fragment key={slot}>
              <div className="ag-cell ag-row-label">{slot}</div>
              {days.map((day, di) => {
                const key = dateSlotKey(day, slot);
                const isSelected = selectedSet.has(key);
                return (
                  <button
                    key={`${di}-${slot}`}
                    className={`ag-cell ag-slot${isSelected ? " ag-slot--selected" : ""}`}
                    onClick={() => onToggle(key)}
                    type="button"
                    aria-label={`${slot} on ${day.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}${isSelected ? " (selected)" : ""}`}
                    aria-pressed={isSelected}
                  >
                    {isSelected && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ag-wrap { display: flex; flex-direction: column; gap: 16px; }
        .ag-info {
          display: flex; align-items: flex-start; gap: 8px;
          background: #E6F3FA; border-radius: var(--radius-md); padding: 12px 14px;
          font-size: 13px; color: var(--color-text-secondary); line-height: 1.5;
        }
        .ag-info svg { color: var(--color-accent-blue); flex-shrink: 0; margin-top: 1px; }
        .ag-counter { font-size: 14px; color: var(--color-text-secondary); margin: 0; }
        .ag-nav {
          display: flex; align-items: center; gap: 12px; justify-content: center;
        }
        .ag-nav-btn {
          width: 32px; height: 32px; border-radius: var(--radius-md);
          background: var(--color-bg); border: 1px solid var(--color-divider);
          display: flex; align-items: center; justify-content: center; cursor: pointer;
          color: var(--color-text-primary); transition: background var(--t-fast);
        }
        .ag-nav-btn:hover:not(:disabled) { background: var(--color-brand-mint); color: var(--color-brand-primary); }
        .ag-nav-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .ag-nav-label { font-size: 13px; font-weight: 600; color: var(--color-text-primary); }
        .ag-grid-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .ag-grid {
          display: grid;
          min-width: 400px;
          border: 1px solid var(--color-divider);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .ag-cell {
          border-right: 1px solid var(--color-divider);
          border-bottom: 1px solid var(--color-divider);
        }
        .ag-cell:last-child,
        .ag-grid > :nth-child(6n) { border-right: 0; } /* handled by border radius */
        .ag-corner {
          background: var(--color-bg);
        }
        .ag-col-header {
          background: var(--color-bg); text-align: center; padding: 10px 4px;
          display: flex; flex-direction: column; align-items: center; gap: 2px;
        }
        .ag-day-name { font-size: 11px; font-weight: 600; color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 0.05em; }
        .ag-day-num { font-size: 15px; font-weight: 800; color: var(--color-text-primary); }
        .ag-priority { font-size: 9px; color: var(--color-warning); font-weight: 700; text-align: center; line-height: 1.2; }
        .ag-row-label {
          background: var(--color-bg); padding: 0 10px;
          display: flex; align-items: center;
          font-size: 11.5px; font-weight: 600; color: var(--color-text-secondary);
          min-height: 44px;
        }
        .ag-slot {
          background: #fff; cursor: pointer; border: none; min-height: 44px;
          display: flex; align-items: center; justify-content: center;
          transition: background var(--t-fast);
        }
        .ag-slot:hover { background: var(--color-brand-mint); }
        .ag-slot--selected { background: var(--color-accent-blue); color: #fff; }
        .ag-slot--selected:hover { background: #055280; }

        @media (prefers-reduced-motion: reduce) {
          .ag-nav-btn, .ag-slot { transition: none; }
        }
      `}</style>
    </div>
  );
}
