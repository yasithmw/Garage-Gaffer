"use client";

import { useState } from "react";
import QuoteWidget from "@/components/QuoteWidget";

/* ── Problem-area pill data (repair.md Section 5) ────────────── */
const PROBLEM_PILLS = [
  "Brakes",
  "Tyres",
  "Suspension",
  "Battery",
  "Engine noise",
  "Exhaust",
  "Electrics",
  "Cooling",
  "Steering",
  "Clutch",
  "Gearbox",
  "Oil leak",
  "Warning light",
  "Other",
];

export default function RepairProblemFinder() {
  /* One active pill at a time; second click deselects */
  const [activePill, setActivePill] = useState<string | null>(null);

  function handlePillClick(pill: string) {
    setActivePill((prev) => (prev === pill ? null : pill));
  }

  return (
    <section className="bg-[#F5F7F6] py-24 md:py-16">
      <div className="max-w-[900px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10 reveal">
          <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
            Not sure where to start?
          </span>
          <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-3 text-[#1A1E1D]">
            Still figuring it out? Start here.
          </h2>
          <p className="text-[#595C5B] text-[16px] leading-[1.7]">
            Pick the area that sounds closest — we&apos;ll show you who can help.
          </p>
        </div>

        {/* Problem-area pill grid */}
        <div className="flex flex-wrap gap-3 justify-center mb-10 reveal" role="group" aria-label="Problem area selector">
          {PROBLEM_PILLS.map((pill) => {
            const isActive = activePill === pill;
            return (
              <button
                key={pill}
                type="button"
                onClick={() => handlePillClick(pill)}
                aria-pressed={isActive}
                className={`px-4 py-2 rounded-full border text-[14px] font-[family-name:var(--font-rubik)] font-medium cursor-pointer transition-all ${
                  isActive
                    ? "bg-[#ECF7EF] border-[#0D7A5F] text-[#0D7A5F]"
                    : "bg-white border-[#DADCDB] text-[#1A1E1D] hover:border-[#0D7A5F] hover:text-[#0D7A5F]"
                }`}
              >
                {pill}
              </button>
            );
          })}
        </div>

        {/* QuoteWidget — separated by a top border on mobile */}
        <div className="border-t border-[#DADCDB] pt-10 mt-4 reveal">
          <div className="max-w-[480px] mx-auto">
            <QuoteWidget
              idSuffix="repair-finder"
              defaultService="Repair a specific issue"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
