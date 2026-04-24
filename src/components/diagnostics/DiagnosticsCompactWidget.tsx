"use client";

import { useState } from "react";

const SYMPTOM_OPTIONS = [
  "Engine management light",
  "ABS warning",
  "Oil pressure light",
  "Battery / charging warning",
  "Traction control light",
  "Brake warning light",
  "Coolant temperature warning",
  "DPF warning",
  "Juddering when accelerating",
  "Rough idle",
  "Loss of power",
  "Unusual noises",
  "Poor fuel economy",
  "Overheating",
  "Difficulty starting",
  "Something else",
];

export default function DiagnosticsCompactWidget({
  id = "diag-widget",
  darkBg = false,
}: {
  id?: string;
  darkBg?: boolean;
}) {
  const [symptom, setSymptom] = useState("");

  return (
    <form
      id={id}
      onSubmit={(e) => e.preventDefault()}
      className={`flex flex-col md:flex-row items-stretch md:items-center rounded-2xl overflow-hidden border ${
        darkBg
          ? "border-white/15 bg-white/5 backdrop-blur-sm"
          : "border-[#DADCDB] bg-white shadow-[0_8px_24px_rgba(13,122,95,0.12),0_4px_8px_rgba(0,0,0,0.06)]"
      }`}
    >
      {/* Field: What's the symptom? */}
      <div className={`flex flex-col px-5 py-4 flex-1 border-b md:border-b-0 md:border-r ${darkBg ? "border-white/10" : "border-[#DADCDB]"}`}>
        <label
          htmlFor={`${id}-symptom`}
          className={`text-[10px] font-[family-name:var(--font-rubik)] font-bold tracking-[0.1em] uppercase mb-1 ${
            darkBg ? "text-white/45" : "text-[#8A8D8C]"
          }`}
        >
          What&apos;s the symptom?
        </label>
        <div className="relative">
          <select
            id={`${id}-symptom`}
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
            className={`w-full appearance-none font-[family-name:var(--font-open-sans)] font-bold text-[14px] bg-transparent border-none outline-none cursor-pointer pr-5 ${
              symptom
                ? darkBg ? "text-white" : "text-[#1A1E1D]"
                : darkBg ? "text-white/40" : "text-[#8A8D8C]"
            }`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238A8D8C' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 2px center",
            }}
          >
            <option value="" disabled>Warning light or symptom</option>
            {SYMPTOM_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Field: Postcode */}
      <div className={`flex flex-col px-5 py-4 w-full md:w-44 border-b md:border-b-0 md:border-r ${darkBg ? "border-white/10" : "border-[#DADCDB]"}`}>
        <label
          htmlFor={`${id}-postcode`}
          className={`text-[10px] font-[family-name:var(--font-rubik)] font-bold tracking-[0.1em] uppercase mb-1 ${
            darkBg ? "text-white/45" : "text-[#8A8D8C]"
          }`}
        >
          Postcode
        </label>
        <input
          id={`${id}-postcode`}
          type="text"
          placeholder="BS8 1TH"
          autoComplete="postal-code"
          className={`font-[family-name:var(--font-open-sans)] font-bold text-[14px] bg-transparent border-none outline-none w-full ${
            darkBg
              ? "text-white placeholder:text-white/35"
              : "text-[#1A1E1D] placeholder:text-[#8A8D8C]"
          }`}
        />
      </div>

      {/* Field: Car reg */}
      <div className={`flex flex-col px-5 py-4 w-full md:w-40 border-b md:border-b-0 md:border-r ${darkBg ? "border-white/10" : "border-[#DADCDB]"}`}>
        <label
          htmlFor={`${id}-reg`}
          className={`text-[10px] font-[family-name:var(--font-rubik)] font-bold tracking-[0.1em] uppercase mb-1 ${
            darkBg ? "text-white/45" : "text-[#8A8D8C]"
          }`}
        >
          Car Reg
        </label>
        <input
          id={`${id}-reg`}
          type="text"
          placeholder="AB12 CDE"
          maxLength={8}
          className={`font-[family-name:var(--font-open-sans)] font-bold text-[14px] bg-transparent border-none outline-none w-full uppercase tracking-wider ${
            darkBg
              ? "text-white placeholder:text-white/35 placeholder:normal-case placeholder:tracking-normal"
              : "text-[#1A1E1D] placeholder:text-[#8A8D8C] placeholder:normal-case placeholder:tracking-normal"
          }`}
          onChange={(e) => (e.target.value = e.target.value.toUpperCase())}
        />
      </div>

      {/* CTA button */}
      <button
        type="submit"
        className="flex items-center justify-center gap-2 px-7 py-5 bg-[#0D7A5F] text-white font-[family-name:var(--font-rubik)] font-semibold text-[15px] hover:bg-[#055240] transition-colors whitespace-nowrap flex-shrink-0"
        aria-label="Get a diagnostic quote"
      >
        Get a diagnostic
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </form>
  );
}
