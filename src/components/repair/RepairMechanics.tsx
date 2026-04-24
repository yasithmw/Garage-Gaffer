"use client";

import { useState } from "react";

/* ── Types ───────────────────────────────────────────────────── */
interface Mechanic {
  initials: string;
  name: string;
  location: string;
  avatarColor: string; // Tailwind bg colour literal
  rating: number;
  reviews: number;
  primarySkill: string;
  neutralSkills: string[];
  responseTime: string;
}

/* ── Data — 9 illustrative mechanic records (repair.md) ─────── */
const mechanics: Mechanic[] = [
  {
    initials: "JT",
    name: "James T.",
    location: "BS8 · Clifton",
    avatarColor: "#0D7A5F",
    rating: 4.9,
    reviews: 47,
    primarySkill: "Brakes",
    neutralSkills: ["Suspension", "Exhaust"],
    responseTime: "Usually responds in under 1 hr",
  },
  {
    initials: "MO",
    name: "Marcus O.",
    location: "BS3 · Bedminster",
    avatarColor: "#066599",
    rating: 5.0,
    reviews: 31,
    primarySkill: "Clutch",
    neutralSkills: ["Gearbox", "Brakes"],
    responseTime: "Usually responds in under 2 hrs",
  },
  {
    initials: "SK",
    name: "Sophie K.",
    location: "BS6 · Redland",
    avatarColor: "#31A7A8",
    rating: 4.8,
    reviews: 63,
    primarySkill: "Electrical",
    neutralSkills: ["Brakes", "Battery"],
    responseTime: "Usually responds in under 1 hr",
  },
  {
    initials: "RB",
    name: "Ravi B.",
    location: "BS5 · Easton",
    avatarColor: "#0D7A5F",
    rating: 4.9,
    reviews: 29,
    primarySkill: "Exhaust",
    neutralSkills: ["Suspension", "Brakes"],
    responseTime: "Usually responds in under 3 hrs",
  },
  {
    initials: "CW",
    name: "Connor W.",
    location: "BS9 · Stoke Bishop",
    avatarColor: "#6165DD",
    rating: 4.7,
    reviews: 22,
    primarySkill: "Suspension",
    neutralSkills: ["Brakes", "Clutch"],
    responseTime: "Usually responds in under 2 hrs",
  },
  {
    initials: "PA",
    name: "Priya A.",
    location: "BS7 · Bishopston",
    avatarColor: "#066599",
    rating: 5.0,
    reviews: 18,
    primarySkill: "Brakes",
    neutralSkills: ["Electrical", "Exhaust"],
    responseTime: "Usually responds in under 1 hr",
  },
  {
    initials: "DN",
    name: "Dan N.",
    location: "BS4 · Knowle",
    avatarColor: "#31A7A8",
    rating: 4.8,
    reviews: 54,
    primarySkill: "Clutch",
    neutralSkills: ["Gearbox", "Suspension"],
    responseTime: "Usually responds in under 2 hrs",
  },
  {
    initials: "TL",
    name: "Tom L.",
    location: "BS13 · Hartcliffe",
    avatarColor: "#0D7A5F",
    rating: 4.9,
    reviews: 37,
    primarySkill: "Exhaust",
    neutralSkills: ["Clutch", "Brakes"],
    responseTime: "Usually responds in under 3 hrs",
  },
  {
    initials: "EF",
    name: "Elena F.",
    location: "BS16 · Fishponds",
    avatarColor: "#6165DD",
    rating: 4.8,
    reviews: 41,
    primarySkill: "Electrical",
    neutralSkills: ["Battery", "Brakes"],
    responseTime: "Usually responds in under 1 hr",
  },
];

/* ── Star SVG ────────────────────────────────────────────────── */
function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5"
      fill={filled ? "#F9C339" : "none"}
      stroke={filled ? "#F9C339" : "#DADCDB"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/* ── Verified checkmark SVG ──────────────────────────────────── */
function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-3 h-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

/* ── Single mechanic card ────────────────────────────────────── */
function MechanicCard({ mechanic }: { mechanic: Mechanic }) {
  const filledStars = Math.round(mechanic.rating);

  return (
    /* Mechanic Profile Card — DESIGN.md spec */
    <article className="bg-white border border-[#DADCDB] rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(13,122,95,0.12),0_4px_8px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] transition-all duration-200 overflow-hidden reveal">
      <div className="p-5">
        {/* Header: avatar + mechanic info */}
        <div className="flex gap-3 items-flex-start mb-4">
          {/* Avatar — 48×48 circle with initials */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-[family-name:var(--font-open-sans)] font-extrabold text-[16px] text-white"
            style={{ backgroundColor: mechanic.avatarColor }}
            aria-hidden="true"
          >
            {mechanic.initials}
          </div>

          {/* Mechanic info stack */}
          <div className="flex-1 min-w-0">
            <p className="font-[family-name:var(--font-open-sans)] font-bold text-[15px] text-[#1A1E1D] leading-tight">
              {mechanic.name}
            </p>
            <p className="font-[family-name:var(--font-rubik)] text-[12px] text-[#595C5B] mt-0.5">
              {mechanic.location}
            </p>
            {/* Verified badge */}
            <span className="inline-flex items-center gap-1 font-[family-name:var(--font-rubik)] font-semibold text-[11px] text-[#0D7A5F] mt-1">
              <CheckIcon />
              Verified mechanic
            </span>
          </div>
        </div>

        {/* Star rating row */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-0.5" aria-label={`${mechanic.rating} stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} filled={i < filledStars} />
            ))}
          </div>
          <span className="font-[family-name:var(--font-rubik)] font-bold text-[13px] text-[#1A1E1D]">
            {mechanic.rating.toFixed(1)}
          </span>
          <span className="font-[family-name:var(--font-rubik)] text-[12px] text-[#595C5B]">
            ({mechanic.reviews} reviews)
          </span>
        </div>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2 mb-0">
          {/* Primary skill — brand-green pill */}
          <span className="bg-[#ECF7EF] text-[#0D7A5F] font-[family-name:var(--font-rubik)] font-semibold text-[12px] px-2.5 py-1 rounded-full">
            {mechanic.primarySkill}
          </span>
          {/* Neutral secondary skills */}
          {mechanic.neutralSkills.map((skill) => (
            <span
              key={skill}
              className="bg-[#F5F7F6] text-[#595C5B] font-[family-name:var(--font-rubik)] font-semibold text-[12px] px-2.5 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Card footer */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#DADCDB]">
          <span className="font-[family-name:var(--font-rubik)] text-[13px] text-[#595C5B]">
            {mechanic.responseTime}
          </span>
          <button
            type="button"
            className="bg-[#0D7A5F] text-white font-[family-name:var(--font-rubik)] text-[13px] font-semibold px-3 py-1.5 rounded-lg hover:bg-[#055240] transition-colors"
          >
            Request Quote
          </button>
        </div>
      </div>
    </article>
  );
}

/* ── Section component ───────────────────────────────────────── */
const INITIAL_VISIBLE = 9;

export default function RepairMechanics() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? mechanics : mechanics.slice(0, INITIAL_VISIBLE);

  return (
    <section className="bg-white border-t border-[#DADCDB] py-24 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-[640px] mb-12 reveal">
          <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
            Top mechanics
          </span>
          <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-3 text-[#1A1E1D]">
            Bristol&apos;s top repair mechanics.
          </h2>
          <p className="text-[#595C5B] text-[16px] leading-[1.7]">
            Vetted, rated, and ready to come to you.
          </p>
        </div>

        {/* Mechanic card grid — 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1">
          {visible.map((mechanic) => (
            <MechanicCard key={mechanic.initials} mechanic={mechanic} />
          ))}
        </div>

        {/* View-more ghost button — only shown when cards are hidden */}
        {!showAll && mechanics.length > INITIAL_VISIBLE && (
          <div className="flex justify-center mt-10 reveal">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="border border-[#DADCDB] text-[#595C5B] hover:bg-[#F5F7F6] hover:text-[#1A1E1D] px-6 py-2.5 rounded-xl text-[14px] font-[family-name:var(--font-rubik)] font-semibold transition-all"
            >
              View more mechanics →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
