"use client";

import { useState } from "react";
import CompactQuoteWidget from "@/components/CompactQuoteWidget";

/* ── Problem-area pill data — diagnostics.md Section 5 ─────────── */
const PROBLEM_PILLS = [
  "Warning light on",
  "Unusual noise",
  "Won't start",
  "Poor fuel economy",
  "Engine misfiring",
  "Overheating",
  "Rough idle",
  "Failed emissions",
  "Other",
];

export default function DiagnosticsProblemFinder() {
  /* One active pill at a time — deselect on second click */
  const [activePill, setActivePill] = useState<string | null>(null);

  function handlePillClick(pill: string) {
    setActivePill((prev) => (prev === pill ? null : pill));
  }

  return (
    /* Full-width section, bg-[#F5F7F6], centred content max-w-900px */
    <section className="bg-[#F5F7F6] py-24 md:py-16">
      <div className="max-w-[900px] mx-auto px-6">
        {/* Section header — centred */}
        <div className="text-center mb-10 reveal">
          {/* Eyebrow — Rubik 11px 700 uppercase brand-green */}
          <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
            Still figuring it out?
          </span>
          {/* H2 — Open Sans 800 34px */}
          <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-3 text-[#1A1E1D]">
            Start here.
          </h2>
          {/* Subheadline — Rubik 16px #595C5B */}
          <p className="text-[#595C5B] text-[16px] leading-[1.7]">
            Pick the area that sounds closest — we&apos;ll show you who can help.
          </p>
        </div>

        {/* Problem-area pill grid — diagnostics-specific set */}
        <div
          className="flex flex-wrap gap-3 justify-center mb-10 reveal"
          role="group"
          aria-label="Problem area selector"
        >
          {PROBLEM_PILLS.map((pill) => {
            const isActive = activePill === pill;
            return (
              <button
                key={pill}
                type="button"
                onClick={() => handlePillClick(pill)}
                aria-pressed={isActive}
                /* Rest: white bg, border-[#DADCDB], radius-full, Rubik 13px, padding 8px 16px */
                /* Active: border-[#0D7A5F], bg-[#ECF7EF], text-[#0D7A5F] — transition var(--t-fast) */
                className={`px-4 py-2 rounded-full border text-[13px] font-[family-name:var(--font-rubik)] font-medium cursor-pointer transition-all duration-[120ms] ease-linear ${
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

        {/* Compact widget — same UI as the hero */}
        <div className="border-t border-[#DADCDB] pt-10 mt-4 reveal">
          <CompactQuoteWidget
            idSuffix="diagnostics-problem-finder"
            defaultService="Diagnostic check"
          />
        </div>
      </div>
    </section>
  );
}
