"use client";

import { useEffect, useRef, useState } from "react";

const MAKES = ["Audi", "BMW", "Citroën", "Ford", "Honda", "Hyundai", "Kia", "Mazda", "Mercedes-Benz", "Nissan", "Peugeot", "Renault", "Seat", "Skoda", "Toyota", "Vauxhall", "Volkswagen", "Volvo"];

const MODELS_BY_MAKE: Record<string, string[]> = {
  "Audi": ["A1", "A3", "A4", "A5", "A6", "Q3", "Q5", "Q7", "TT"],
  "BMW": ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "X1", "X3", "X5"],
  "Ford": ["Fiesta", "Focus", "Kuga", "Mondeo", "Puma", "Ranger", "Transit"],
  "Toyota": ["Aygo", "Corolla", "GR Yaris", "RAV4", "Yaris"],
  "Volkswagen": ["Golf", "Passat", "Polo", "T-Cross", "T-Roc", "Tiguan", "Up"],
  "Vauxhall": ["Astra", "Corsa", "Crossland", "Grandland", "Insignia", "Mokka"],
  "Honda": ["Civic", "CR-V", "HR-V", "Jazz"],
  "Hyundai": ["i10", "i20", "i30", "Ioniq", "Kona", "Tucson"],
  "Kia": ["Ceed", "Niro", "Picanto", "Rio", "Sportage", "Stonic"],
  "Mercedes-Benz": ["A-Class", "B-Class", "C-Class", "CLA", "E-Class", "GLA", "GLC"],
  "Nissan": ["Juke", "Leaf", "Micra", "Qashqai", "X-Trail"],
  "Peugeot": ["108", "208", "2008", "308", "3008", "508"],
  "Renault": ["Captur", "Clio", "Megane", "Zoe"],
  "Seat": ["Arona", "Ateca", "Ibiza", "Leon", "Tarraco"],
  "Skoda": ["Fabia", "Kamiq", "Karoq", "Kodiaq", "Octavia", "Superb"],
  "Citroën": ["C1", "C3", "C3 Aircross", "C4", "C5 Aircross"],
  "Mazda": ["CX-3", "CX-5", "CX-30", "Mazda2", "Mazda3"],
  "Volvo": ["S60", "S90", "V40", "V60", "V90", "XC40", "XC60", "XC90"],
};

const FUEL_TYPES = ["Petrol", "Diesel", "Hybrid", "Plug-in Hybrid", "Electric", "LPG"];
const ENGINE_SIZES = ["1.0L", "1.2L", "1.4L", "1.5L", "1.6L", "1.8L", "2.0L", "2.5L", "3.0L", "Other"];
const YEARS = Array.from({ length: 26 }, (_, i) => String(2025 - i));

export interface CarDetailsValues {
  make: string;
  model: string;
  fuelType: string;
  engineCapacity: string;
  year: string;
  postcode: string;
}

interface CarDetailsTabProps {
  values: CarDetailsValues;
  onChange: (field: keyof CarDetailsValues, value: string) => void;
}

/* ── Custom dropdown ── */
interface CustomSelectProps {
  id: string;
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder: string;
  disabled?: boolean;
}

function CustomSelect({ id, label, value, onChange, options, placeholder, disabled }: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Escape") setOpen(false);
  }

  return (
    <div className="cs-wrap" ref={wrapRef} onKeyDown={handleKey}>
      <label htmlFor={id} className="cs-label">{label}</label>
      <button
        id={id}
        type="button"
        className={[
          "cs-trigger",
          open ? "cs-trigger--open" : "",
          disabled ? "cs-trigger--disabled" : "",
          value ? "cs-trigger--filled" : "",
        ].join(" ")}
        onClick={() => !disabled && setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        disabled={disabled}
      >
        <span className="cs-trigger-text">{value || placeholder}</span>
        <svg
          className={`cs-chevron${open ? " cs-chevron--up" : ""}`}
          width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="cs-dropdown" role="listbox" aria-label={label}>
          {options.map((opt) => {
            const selected = value === opt;
            return (
              <button
                key={opt}
                type="button"
                role="option"
                aria-selected={selected}
                className={`cs-option${selected ? " cs-option--selected" : ""}`}
                onClick={() => { onChange(opt); setOpen(false); }}
              >
                <span>{opt}</span>
                {selected && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}

      <style jsx>{`
        .cs-wrap { position: relative; display: flex; flex-direction: column; gap: 3px; }

        .cs-label {
          font-size: 11px;
          font-weight: 700;
          color: var(--color-text-primary);
          letter-spacing: 0.03em;
          font-family: var(--font-rubik), sans-serif;
          text-transform: uppercase;
        }

        .cs-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 0 10px;
          height: 34px;
          border-radius: var(--radius-md);
          border: 1.5px solid var(--color-divider);
          background: #fff;
          cursor: pointer;
          text-align: left;
          transition: border-color var(--t-fast), box-shadow var(--t-fast);
          font-family: var(--font-rubik), sans-serif;
        }
        .cs-trigger:hover:not(:disabled) { border-color: #b0bab5; }
        .cs-trigger--open {
          border-color: var(--color-brand-primary);
          box-shadow: 0 0 0 3px rgba(13, 122, 95, 0.12);
        }
        .cs-trigger--disabled {
          background: #f5f7f6;
          cursor: not-allowed;
          opacity: 0.55;
        }

        .cs-trigger-text {
          font-size: 13px;
          color: var(--color-text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1;
        }
        .cs-trigger:not(.cs-trigger--filled) .cs-trigger-text {
          color: var(--color-text-secondary);
        }

        .cs-chevron {
          flex-shrink: 0;
          color: var(--color-text-secondary);
          transition: transform var(--t-base);
        }
        .cs-chevron--up { transform: rotate(180deg); }

        .cs-dropdown {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          right: 0;
          z-index: 100;
          background: #fff;
          border: 1.5px solid var(--color-brand-primary);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          max-height: 200px;
          overflow-y: auto;
          padding: 4px;
          animation: cs-drop 140ms ease;
        }

        .cs-option {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 8px 10px;
          border: none;
          background: transparent;
          cursor: pointer;
          border-radius: 6px;
          font-family: var(--font-rubik), sans-serif;
          font-size: 13.5px;
          color: var(--color-text-primary);
          text-align: left;
          transition: background var(--t-fast);
        }
        .cs-option:hover { background: var(--color-brand-mint); }
        .cs-option--selected {
          color: var(--color-brand-primary);
          font-weight: 600;
          background: var(--color-brand-mint);
        }
        .cs-option--selected svg { color: var(--color-brand-primary); }

        @keyframes cs-drop {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .cs-chevron, .cs-trigger, .cs-option { transition: none; }
          .cs-dropdown { animation: none; }
        }
      `}</style>
    </div>
  );
}

/* ── Main component ── */
export default function CarDetailsTab({ values, onChange }: CarDetailsTabProps) {
  const models = values.make ? (MODELS_BY_MAKE[values.make] ?? []) : [];

  return (
    <div className="cdt-stack">
      <CustomSelect
        id="cdt-make"
        label="Make"
        value={values.make}
        placeholder="Select make"
        options={MAKES}
        onChange={(v) => { onChange("make", v); onChange("model", ""); }}
      />

      <CustomSelect
        id="cdt-model"
        label="Model"
        value={values.model}
        placeholder="Select model"
        options={models}
        disabled={!values.make}
        onChange={(v) => onChange("model", v)}
      />

      <CustomSelect
        id="cdt-fuel"
        label="Fuel type"
        value={values.fuelType}
        placeholder="Select fuel type"
        options={FUEL_TYPES}
        disabled={!values.model}
        onChange={(v) => onChange("fuelType", v)}
      />

      <CustomSelect
        id="cdt-engine"
        label="Engine size"
        value={values.engineCapacity}
        placeholder="Select engine size"
        options={ENGINE_SIZES}
        disabled={!values.fuelType}
        onChange={(v) => onChange("engineCapacity", v)}
      />

      <CustomSelect
        id="cdt-year"
        label="Year"
        value={values.year}
        placeholder="Select year"
        options={YEARS}
        disabled={!values.engineCapacity}
        onChange={(v) => onChange("year", v)}
      />

      <div className="cdt-field">
        <label htmlFor="cdt-postcode" className="cdt-label">Postcode</label>
        <input
          id="cdt-postcode"
          type="text"
          placeholder="e.g. BS1 4DJ"
          autoComplete="postal-code"
          className="cdt-input"
          value={values.postcode}
          onChange={(e) => onChange("postcode", e.target.value.toUpperCase())}
        />
      </div>

      <style jsx>{`
        .cdt-stack {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .cdt-field {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .cdt-label {
          font-size: 11px;
          font-weight: 700;
          color: var(--color-text-primary);
          letter-spacing: 0.03em;
          text-transform: uppercase;
          font-family: var(--font-rubik), sans-serif;
        }
        .cdt-input {
          height: 34px;
          padding: 0 10px;
          border-radius: var(--radius-md);
          border: 1.5px solid var(--color-divider);
          background: #fff;
          font-family: var(--font-rubik), sans-serif;
          font-size: 13px;
          color: var(--color-text-primary);
          outline: none;
          transition: border-color var(--t-fast), box-shadow var(--t-fast);
          width: 100%;
          box-sizing: border-box;
        }
        .cdt-input::placeholder { color: var(--color-text-secondary); }
        .cdt-input:hover { border-color: #b0bab5; }
        .cdt-input:focus {
          border-color: var(--color-brand-primary);
          box-shadow: 0 0 0 3px rgba(13, 122, 95, 0.12);
        }

        @media (prefers-reduced-motion: reduce) {
          .cdt-input { transition: none; }
        }
      `}</style>
    </div>
  );
}
