"use client";

import { useState } from "react";

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

// PLACEHOLDER: All 9 cards are illustrative sample data.
// Names, BS postcode areas, ratings, and review counts must be
// replaced with live mechanic records before launch.
const mechanics: Mechanic[] = [
  {
    initials: "NP",
    name: "Natalie P.",
    location: "BS8 · Clifton",
    avatarColor: "#31A7A8",
    rating: 4.9,
    reviews: 52,
    primarySkill: "Full service",
    neutralSkills: ["Interim", "Oil & filter"],
    responseTime: "Responds within 1 hr",
  },
  {
    initials: "DH",
    name: "David H.",
    location: "BS6 · Redland",
    avatarColor: "#0D7A5F",
    rating: 5.0,
    reviews: 38,
    primarySkill: "Full service",
    neutralSkills: ["Timing belt", "MOT prep"],
    responseTime: "Responds within 2 hrs",
  },
  {
    initials: "AO",
    name: "Amara O.",
    location: "BS3 · Southville",
    avatarColor: "#066599",
    rating: 4.8,
    reviews: 67,
    primarySkill: "Interim",
    neutralSkills: ["Full service", "Brake fluid"],
    responseTime: "Responds within 1 hr",
  },
  {
    initials: "LW",
    name: "Lewis W.",
    location: "BS7 · Bishopston",
    avatarColor: "#31A7A8",
    rating: 4.9,
    reviews: 44,
    primarySkill: "Full service",
    neutralSkills: ["Spark plugs", "Air filter"],
    responseTime: "Responds within 2 hrs",
  },
  {
    initials: "FN",
    name: "Fatima N.",
    location: "BS5 · Easton",
    avatarColor: "#6165DD",
    rating: 4.7,
    reviews: 29,
    primarySkill: "Interim",
    neutralSkills: ["Oil & filter", "Coolant flush"],
    responseTime: "Responds within 3 hrs",
  },
  {
    initials: "GC",
    name: "George C.",
    location: "BS9 · Westbury-on-Trym",
    avatarColor: "#0D7A5F",
    rating: 5.0,
    reviews: 21,
    primarySkill: "Full service",
    neutralSkills: ["Timing belt", "Interim"],
    responseTime: "Responds within 1 hr",
  },
  {
    initials: "KB",
    name: "Kezia B.",
    location: "BS4 · Knowle",
    avatarColor: "#066599",
    rating: 4.8,
    reviews: 58,
    primarySkill: "Interim",
    neutralSkills: ["Full service", "MOT prep"],
    responseTime: "Responds within 2 hrs",
  },
  {
    initials: "RM",
    name: "Ryan M.",
    location: "BS13 · Bedminster Down",
    avatarColor: "#31A7A8",
    rating: 4.9,
    reviews: 35,
    primarySkill: "Full service",
    neutralSkills: ["Brake fluid", "Air filter"],
    responseTime: "Responds within 3 hrs",
  },
  {
    initials: "JT",
    name: "Jo T.",
    location: "BS16 · Fishponds",
    avatarColor: "#6165DD",
    rating: 4.8,
    reviews: 46,
    primarySkill: "Timing belt",
    neutralSkills: ["Full service", "Spark plugs"],
    responseTime: "Responds within 2 hrs",
  },
];

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

function MechanicCard({ mechanic }: { mechanic: Mechanic }) {
  const filledStars = Math.round(mechanic.rating);

  return (
    <article className="bg-white border border-[#DADCDB] rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(13,122,95,0.12),0_4px_8px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] transition-all duration-200 overflow-hidden reveal">
      <div className="p-5">
        <div className="flex gap-3 items-start mb-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-[family-name:var(--font-open-sans)] font-extrabold text-[16px] text-white"
            style={{ backgroundColor: mechanic.avatarColor }}
            aria-hidden="true"
          >
            {mechanic.initials}
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-[family-name:var(--font-open-sans)] font-bold text-[15px] text-[#1A1E1D] leading-tight">
              {mechanic.name}
            </p>
            <p className="font-[family-name:var(--font-rubik)] text-[12px] text-[#595C5B] mt-0.5">
              {mechanic.location}
            </p>
            <span className="inline-flex items-center gap-1 font-[family-name:var(--font-rubik)] font-semibold text-[11px] text-[#0D7A5F] mt-1">
              <CheckIcon />
              Verified mechanic
            </span>
          </div>
        </div>

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

        <div className="flex flex-wrap gap-2">
          <span className="bg-[#ECF7EF] text-[#0D7A5F] font-[family-name:var(--font-rubik)] font-semibold text-[12px] px-2.5 py-1 rounded-full">
            {mechanic.primarySkill}
          </span>
          {mechanic.neutralSkills.map((skill) => (
            <span
              key={skill}
              className="bg-[#F5F7F6] text-[#595C5B] font-[family-name:var(--font-rubik)] font-semibold text-[12px] px-2.5 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

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

const INITIAL_VISIBLE = 9;

export default function ServicingMechanics() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? mechanics : mechanics.slice(0, INITIAL_VISIBLE);

  return (
    <section className="bg-white border-t border-[#DADCDB] py-24 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[640px] mb-12 reveal">
          <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
            Top mechanics
          </span>
          <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-3 text-[#1A1E1D]">
            Bristol&apos;s top servicing mechanics.
          </h2>
          <p className="text-[#595C5B] text-[16px] leading-[1.7]">
            Vetted, rated, and ready to come to you.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1">
          {visible.map((mechanic) => (
            <MechanicCard key={mechanic.initials} mechanic={mechanic} />
          ))}
        </div>

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
