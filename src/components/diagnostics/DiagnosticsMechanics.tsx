"use client";

import { useState } from "react";

/* ── Types ───────────────────────────────────────────────────── */
interface Mechanic {
  initials: string;
  name: string;
  location: string;
  avatarColor: string;
  rating: number;
  reviews: number;
  primarySkill: string;
  neutralSkills: string[];
  responseTime: string;
}

/* ── Data — diagnostics.md Section 3 (9 placeholder records) ─── */
// PLACEHOLDER: All 9 cards are illustrative sample data.
// Names, BS postcode areas, ratings, and review counts must be
// replaced with live mechanic records before launch.
const mechanics: Mechanic[] = [
  {
    initials: "MK",
    name: "Marcus Kelly",
    location: "BS6 · Redland",
    avatarColor: "#0D7A5F", // .avatar-green
    rating: 4.9,
    reviews: 47,
    primarySkill: "Diagnostics",
    neutralSkills: ["Engine", "OBD scan"],
    responseTime: "Responds within 1 hr",
  },
  {
    initials: "SB",
    name: "Sam Brislington",
    location: "BS4 · Brislington",
    avatarColor: "#066599", // .avatar-blue
    rating: 5.0,
    reviews: 31,
    primarySkill: "Diagnostics",
    neutralSkills: ["Fault finding", "Engine"],
    responseTime: "Responds within 2 hrs",
  },
  {
    initials: "RP",
    name: "Rachel Parris",
    location: "BS3 · Bedminster",
    avatarColor: "#31A7A8", // .avatar-teal
    rating: 4.8,
    reviews: 62,
    primarySkill: "Diagnostics",
    neutralSkills: ["OBD scan", "Fault finding"],
    responseTime: "Responds within 1 hr",
  },
  {
    initials: "TO",
    name: "Tom Oliveira",
    location: "BS7 · Horfield",
    avatarColor: "#6165DD", // .avatar-purple
    rating: 4.9,
    reviews: 28,
    primarySkill: "Diagnostics",
    neutralSkills: ["Engine", "OBD scan"],
    responseTime: "Responds within 3 hrs",
  },
  {
    initials: "DM",
    name: "Dan Merchant",
    location: "BS8 · Clifton",
    avatarColor: "#0D7A5F", // .avatar-green
    rating: 4.7,
    reviews: 54,
    primarySkill: "Diagnostics",
    neutralSkills: ["Fault finding", "Engine"],
    responseTime: "Responds within 2 hrs",
  },
  {
    initials: "AL",
    name: "Ash Liddiard",
    location: "BS5 · Easton",
    avatarColor: "#066599", // .avatar-blue
    rating: 4.8,
    reviews: 39,
    primarySkill: "Diagnostics",
    neutralSkills: ["OBD scan", "Fault finding"],
    responseTime: "Responds within 1 hr",
  },
  {
    initials: "CN",
    name: "Claire Nkosi",
    location: "BS1 · City Centre",
    avatarColor: "#31A7A8", // .avatar-teal
    rating: 5.0,
    reviews: 19,
    primarySkill: "Diagnostics",
    neutralSkills: ["Engine", "OBD scan"],
    responseTime: "Responds within 2 hrs",
  },
  {
    initials: "JW",
    name: "Jake Whitmore",
    location: "BS14 · Hengrove",
    avatarColor: "#0D7A5F", // .avatar-green
    rating: 4.9,
    reviews: 33,
    primarySkill: "Diagnostics",
    neutralSkills: ["Fault finding", "Engine"],
    responseTime: "Responds within 3 hrs",
  },
  {
    initials: "PH",
    name: "Priya Hendry",
    location: "BS9 · Westbury-on-Trym",
    avatarColor: "#6165DD", // .avatar-purple
    rating: 4.8,
    reviews: 44,
    primarySkill: "Diagnostics",
    neutralSkills: ["OBD scan", "Fault finding"],
    responseTime: "Responds within 2 hrs",
  },
];

/* ── Star SVG — DESIGN.md star-row spec ─────────────────────── */
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

/* ── Verified checkmark — DESIGN.md mechanic-verified spec ──── */
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

/* ── Single mechanic card — DESIGN.md Mechanic Profile Card ─── */
function MechanicCard({ mechanic }: { mechanic: Mechanic }) {
  const filledStars = Math.round(mechanic.rating);

  return (
    <article className="bg-white border border-[#DADCDB] rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(13,122,95,0.12),0_4px_8px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] transition-all duration-200 overflow-hidden reveal">
      <div className="p-5">
        {/* Header: avatar + mechanic info — .mechanic-header */}
        <div className="flex gap-3 items-start mb-4">
          {/* Avatar — 48×48 circle, initials, Open Sans 800, white text */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-[family-name:var(--font-open-sans)] font-extrabold text-[16px] text-white"
            style={{ backgroundColor: mechanic.avatarColor }}
            aria-hidden="true"
          >
            {mechanic.initials}
          </div>

          {/* Mechanic info stack — .mechanic-info */}
          <div className="flex-1 min-w-0">
            {/* .mechanic-name — Open Sans 700 15px #1A1E1D */}
            <p className="font-[family-name:var(--font-open-sans)] font-bold text-[15px] text-[#1A1E1D] leading-tight">
              {mechanic.name}
            </p>
            {/* .mechanic-location — Rubik 400 12px #595C5B */}
            <p className="font-[family-name:var(--font-rubik)] text-[12px] text-[#595C5B] mt-0.5">
              {mechanic.location}
            </p>
            {/* .mechanic-verified — Rubik 600 11px #0D7A5F + checkmark */}
            <span className="inline-flex items-center gap-1 font-[family-name:var(--font-rubik)] font-semibold text-[11px] text-[#0D7A5F] mt-1">
              <CheckIcon />
              Verified mechanic
            </span>
          </div>
        </div>

        {/* Star rating row — .star-row */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-0.5" aria-label={`${mechanic.rating} stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} filled={i < filledStars} />
            ))}
          </div>
          {/* .rating-val — Rubik 700 13px #1A1E1D */}
          <span className="font-[family-name:var(--font-rubik)] font-bold text-[13px] text-[#1A1E1D]">
            {mechanic.rating.toFixed(1)}
          </span>
          {/* .rating-cnt — Rubik 400 12px #595C5B */}
          <span className="font-[family-name:var(--font-rubik)] text-[12px] text-[#595C5B]">
            ({mechanic.reviews} reviews)
          </span>
        </div>

        {/* Skill tags — .skill-tags: primary green + neutral grey */}
        <div className="flex flex-wrap gap-2">
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

        {/* Card footer — .card-footer: flex space-between */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#DADCDB]">
          {/* Left: response time */}
          <span className="font-[family-name:var(--font-rubik)] text-[13px] text-[#595C5B]">
            {mechanic.responseTime}
          </span>
          {/* Right: btn-primary-sm */}
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

/* ── Section — 9 cards visible by default, "View more" reveals rest */
const INITIAL_VISIBLE = 9;

export default function DiagnosticsMechanics() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? mechanics : mechanics.slice(0, INITIAL_VISIBLE);

  return (
    <section className="bg-white border-t border-[#DADCDB] py-24 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-[640px] mb-12 reveal">
          {/* Eyebrow — Rubik 11px 700 uppercase brand-green */}
          <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
            Top mechanics
          </span>
          {/* H2 — Open Sans 800 34px tracking-[-0.5px] */}
          <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-3 text-[#1A1E1D]">
            Bristol&apos;s top diagnostic mechanics
          </h2>
          {/* Subheadline — Rubik 16px #595C5B */}
          <p className="text-[#595C5B] text-[16px] leading-[1.7]">
            Vetted, rated, and ready to come to you.
          </p>
        </div>

        {/* Card grid — 3 cols desktop, 2 cols tablet (≤860px), 1 col mobile (≤560px) */}
        <div className="grid grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1">
          {visible.map((mechanic) => (
            <MechanicCard key={mechanic.initials} mechanic={mechanic} />
          ))}
        </div>

        {/* View more ghost button — btn-ghost pattern, reveals remaining cards in-grid */}
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
