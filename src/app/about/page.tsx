import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us — Garage Gaffer | Bristol's Vetted Mechanic Marketplace",
  description:
    "We're a small Bristol team that got tired of the way finding a mechanic works. Garage Gaffer connects drivers with vetted local mobile mechanics — honest quotes, transparent vetting, no jargon.",
};

/* ─── Inline SVG icons — Vetting section ────────────────────── */

const ShieldIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[24px] h-[24px]"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const CertificateIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[24px] h-[24px]"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const DocumentIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[24px] h-[24px]"
    aria-hidden="true"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[24px] h-[24px]"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
  </svg>
);

/* ─── Inline SVG icons — Services section ────────────────────── */

const WrenchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[22px] h-[22px]"
    strokeWidth={1.8}
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[22px] h-[22px]"
    strokeWidth={1.8}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
  </svg>
);

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[22px] h-[22px]"
    strokeWidth={1.8}
  >
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

/* ─── Section data ───────────────────────────────────────────── */

const vetCards = [
  {
    icon: <ShieldIcon />,
    headline: "DBS checked.",
    body: "Every mechanic undergoes a Disclosure and Barring Service check before they can take jobs on the platform. We see the result. If it's not clean, they don't appear.",
  },
  {
    icon: <CertificateIcon />,
    headline: "Qualifications verified.",
    body: "Mechanics must provide proof of their qualifications — City & Guilds, IMI, or equivalent — before appearing on the platform. We don't take their word for it.",
  },
  {
    icon: <DocumentIcon />,
    headline: "Public liability insurance confirmed.",
    body: "Every mechanic on Garage Gaffer holds their own public liability insurance. We confirm this before they take a job. If something goes wrong, it's covered.",
  },
  {
    icon: <CalendarIcon />,
    headline: "12-month workmanship warranty.",
    body: "All work booked through Garage Gaffer carries a 12-month workmanship warranty. If something isn't right with the job itself, it's covered — no arguments, no small print.",
  },
];

const postcodes = [
  "BS1", "BS2", "BS3", "BS4", "BS5", "BS6", "BS7", "BS8", "BS9", "BS10",
  "BS11", "BS13", "BS14", "BS15", "BS16", "BS30", "BS31", "BS32", "BS34",
  "BS36", "BS37",
];

const wontDoItems = [
  {
    headline: "We don't take a cut from your quote.",
    clarifier:
      "What you're quoted is what the mechanic charges. We don't add a margin on top of their price.",
  },
  {
    headline: "We don't list mechanics we haven't checked.",
    clarifier:
      "If a mechanic hasn't passed our vetting process, they don't appear on the platform. There's no paid listing, no 'boost your visibility' tier.",
  },
  {
    headline: "We don't hide who's doing the job.",
    clarifier:
      "Every quote comes from a named, identifiable mechanic with a real profile. You know who's coming before you book.",
  },
  {
    headline: "We don't operate nationally.",
    clarifier:
      "We're Bristol. Specifically Bristol. We don't have a version of this in twelve cities where no one knows who the mechanics are. When we expand, we'll vet each city properly.",
  },
  {
    headline: "We don't take sides if something goes wrong.",
    clarifier:
      "If there's a dispute, we'll look into it properly. We're not going to tell you to 'take it up with the mechanic' and disappear. The 12-month workmanship warranty exists because we want there to be a clear route to resolution.",
  },
];

/* Exact same <article> structure as Services.tsx */
const services = [
  {
    accent: "#0D7A5F",
    well: "#ECF7EF",
    icon: <WrenchIcon />,
    title: "Repairs",
    desc: "Something's wrong and you know it needs fixing. Post the job, get quotes from mechanics near you, pick one. They come to you.",
    bullets: [
      "Any make or model",
      "Itemised quote before you commit",
      "12-month workmanship warranty",
    ],
    cta: "Get repair quotes",
    ctaHref: "/repair",
    num: "01",
  },
  {
    accent: "#066599",
    well: "#E6F3FA",
    icon: <ClockIcon />,
    title: "Diagnostics",
    desc: "Not sure what's wrong? A diagnostic gives you a clear answer before you spend money on anything.",
    bullets: [
      "Full vehicle health check",
      "Fault codes explained in plain English",
      "Recommended next steps with no pressure",
    ],
    cta: "Book a diagnostic",
    ctaHref: "/diagnostics",
    num: "02",
  },
  {
    accent: "#31A7A8",
    well: "#E4F6F6",
    icon: <SunIcon />,
    title: "Servicing",
    desc: "Interim or full service, at your door. Keep the car healthy and the warranty intact.",
    bullets: [
      "Interim and full service options",
      "Oil, filters, fluids, and full inspection",
      "Same-day slots available",
    ],
    cta: "Book a service",
    ctaHref: "/servicing",
    num: "03",
  },
];

/* ─── Page ───────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* Organisation / LocalBusiness structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness"],
            name: "Garage Gaffer",
            url: "https://garagegaffer.co.uk",
            description:
              "Bristol's vetted mobile mechanic marketplace. Post a job, get quotes from checked local mechanics, and book the one that suits you.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bristol",
              addressCountry: "GB",
            },
            areaServed: {
              "@type": "City",
              name: "Bristol",
            },
          }),
        }}
      />

      <ScrollReveal />
      <Nav />
      <main>

        {/* ── Section 1 — Hero ─────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#0A1412] py-[88px] pb-[104px] md:py-16 md:pb-20">
          {/* Subtle single radial glow — quieter than service pages */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute w-[60%] h-[90%] top-[-10%] left-1/2 -translate-x-1/2 bg-[radial-gradient(circle,rgba(13,122,95,0.38)_0%,transparent_60%)] opacity-40" />
          </div>

          <div className="relative max-w-[1200px] mx-auto px-6 text-center">
            <div className="max-w-[760px] mx-auto reveal">
              <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-5">
                About Garage Gaffer
              </span>
              <h1 className="font-[family-name:var(--font-open-sans)] text-[52px] md:text-[38px] font-extrabold leading-[1.05] tracking-[-1.5px] md:tracking-[-1px] text-white mb-5">
                We&apos;re a small Bristol team that got tired of the way finding a mechanic works.
              </h1>
              <p className="text-[17px] md:text-[16px] leading-[1.65] text-white/70 max-w-[560px] mx-auto">
                So we built something that fixes the worst parts of it.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 2 — The Problem We Saw ───────────────────── */}
        <section className="bg-white py-24 md:py-16">
          <div className="max-w-[720px] mx-auto px-6">
            <div className="reveal">
              <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
                Why we built this
              </span>
              <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-8 text-[#1A1E1D]">
                Finding a good mechanic in Bristol is harder than it should be.
              </h2>
            </div>

            <p className="font-[family-name:var(--font-rubik)] text-[16px] leading-[1.75] text-[#595C5B] mb-6 reveal">
              If your car breaks down or starts making a noise you don&apos;t recognise, the first thing most people do is ask around. Because the alternative — just ringing garages — is a bad experience. You ring. They&apos;re busy. You leave a voicemail. They don&apos;t ring back. Or they do, give you a number off the top of their head with no breakdown, and you have no idea whether it&apos;s fair.
            </p>

            <p className="font-[family-name:var(--font-rubik)] text-[16px] leading-[1.75] text-[#595C5B] mb-8 reveal">
              Mobile mechanics are a better answer for a lot of jobs. They come to you, their overheads are lower, and the good ones are genuinely excellent. But finding a vetted one in Bristol who does your type of repair, is available when you need them, and will give you a straight quote upfront? That&apos;s a lottery. Word-of-mouth if you&apos;re lucky. A directory listing if you&apos;re not.
            </p>

            {/* Pull-quote — inline typographic treatment, no card or border */}
            <p
              className="font-[family-name:var(--font-open-sans)] text-[22px] font-extrabold leading-[1.3] text-[#0D7A5F] max-w-[560px] mx-auto text-center my-10 reveal"
              aria-label="Pull quote"
            >
              &ldquo;A directory listing isn&apos;t a vetting. Anyone can pay to appear on a list.&rdquo;
            </p>

            <p className="font-[family-name:var(--font-rubik)] text-[16px] leading-[1.75] text-[#595C5B] reveal">
              That&apos;s the gap Garage Gaffer is for. A place where drivers can post a job and hear from mechanics who&apos;ve actually been checked — not just listed. Where the quote is itemised before you commit. Where the person doing the work is accountable, not anonymous.
            </p>
          </div>
        </section>

        {/* ── Section 3 — What We Actually Do ──────────────────── */}
        <section className="bg-[#F5F7F6] border-t border-[#DADCDB] py-24 md:py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[560px] mx-auto text-center mb-14 reveal">
              <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
                How it works
              </span>
              <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] text-[#1A1E1D]">
                We&apos;re a marketplace. Here&apos;s the plain version.
              </h2>
            </div>

            {/* 3-step row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

              {/* Step 1 */}
              <div className="relative bg-white border border-[#DADCDB] rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.08)] reveal">
                {/* Connector line — desktop only, between steps 1→2 */}
                <div
                  className="hidden md:block absolute top-[52px] right-[-24px] w-12 border-t border-dashed border-[rgba(13,122,95,0.3)] z-10"
                  aria-hidden="true"
                />
                {/* Large decorative numeral */}
                <span
                  className="font-[family-name:var(--font-open-sans)] text-[80px] font-extrabold leading-none select-none block mb-1"
                  style={{ color: "rgba(13,122,95,0.12)" }}
                  aria-hidden="true"
                >
                  01
                </span>
                <h3 className="font-[family-name:var(--font-open-sans)] text-[18px] font-bold leading-[1.25] mb-2.5 text-[#1A1E1D]">
                  You post your job
                </h3>
                <p className="text-[14.5px] leading-[1.65] text-[#595C5B]">
                  Tell us what&apos;s happening with your car and where you&apos;re based. Takes under two minutes. No card needed.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative bg-white border border-[#DADCDB] rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.08)] reveal">
                {/* Connector line — desktop only, between steps 2→3 */}
                <div
                  className="hidden md:block absolute top-[52px] right-[-24px] w-12 border-t border-dashed border-[rgba(13,122,95,0.3)] z-10"
                  aria-hidden="true"
                />
                <span
                  className="font-[family-name:var(--font-open-sans)] text-[80px] font-extrabold leading-none select-none block mb-1"
                  style={{ color: "rgba(13,122,95,0.12)" }}
                  aria-hidden="true"
                >
                  02
                </span>
                <h3 className="font-[family-name:var(--font-open-sans)] text-[18px] font-bold leading-[1.25] mb-2.5 text-[#1A1E1D]">
                  Vetted mechanics quote
                </h3>
                <p className="text-[14.5px] leading-[1.65] text-[#595C5B]">
                  Bristol mechanics who&apos;ve passed our checks see your job and send an itemised price. You see who they are, their ratings, and their qualifications before you commit.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative bg-white border border-[#DADCDB] rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.08)] reveal">
                <span
                  className="font-[family-name:var(--font-open-sans)] text-[80px] font-extrabold leading-none select-none block mb-1"
                  style={{ color: "rgba(13,122,95,0.12)" }}
                  aria-hidden="true"
                >
                  03
                </span>
                <h3 className="font-[family-name:var(--font-open-sans)] text-[18px] font-bold leading-[1.25] mb-2.5 text-[#1A1E1D]">
                  You pick one and they come to you
                </h3>
                <p className="text-[14.5px] leading-[1.65] text-[#595C5B]">
                  Choose the mechanic that suits you — on price, reviews, or availability. They turn up at your door. You don&apos;t move the car.
                </p>
              </div>

            </div>

            {/* Microcopy beneath steps */}
            <p className="font-[family-name:var(--font-rubik)] text-[13.5px] text-[#595C5B] text-center reveal">
              Free to post &middot; No commitment until you book &middot; Same-day slots available
            </p>
          </div>
        </section>

        {/* ── Section 4 — How We Vet Mechanics ─────────────────── */}
        <section className="bg-white border-t border-[#DADCDB] py-24 md:py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[640px] mx-auto text-center mb-12 reveal">
              <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
                How we check our mechanics
              </span>
              <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-3 text-[#1A1E1D]">
                Every mechanic is checked before they take a job.
              </h2>
              <p className="font-[family-name:var(--font-rubik)] text-[16px] leading-[1.7] text-[#595C5B]">
                Not at sign-up — before their first job on the platform. Here&apos;s what that actually involves.
              </p>
            </div>

            {/* 2×2 icon-well grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {vetCards.map((card) => (
                <article
                  key={card.headline}
                  className="bg-white border border-[#DADCDB] rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(13,122,95,0.12),0_4px_8px_rgba(0,0,0,0.06)] hover:-translate-y-[3px] transition-all duration-200 reveal"
                >
                  {/* Icon well — 48×48, brand-green */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border"
                    style={{
                      background: "#ECF7EF",
                      borderColor: "color-mix(in srgb, #0D7A5F 15%, transparent)",
                      color: "#0D7A5F",
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-open-sans)] text-[16px] font-bold leading-[1.3] mb-2 text-[#1A1E1D]">
                    {card.headline}
                  </h3>
                  <p className="font-[family-name:var(--font-rubik)] text-[13.5px] leading-[1.6] text-[#595C5B]">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>

            {/* Supporting copy below grid */}
            <p className="font-[family-name:var(--font-rubik)] text-[14px] text-[#595C5B] max-w-[600px] mx-auto text-center reveal">
              We&apos;re not a directory. Anyone can pay to appear in a directory. We check every mechanic individually, and we take responsibility for who&apos;s on the platform.
            </p>
          </div>
        </section>

        {/* ── Section 5 — Where We Operate ─────────────────────── */}
        <section className="bg-[#F5F7F6] border-t border-[#DADCDB] py-24 md:py-16">
          <div className="max-w-[680px] mx-auto px-6">
            <div className="text-center mb-8 reveal">
              <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
                Where we operate
              </span>
              <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-4 text-[#1A1E1D]">
                Bristol. Properly covered.
              </h2>
              <p className="font-[family-name:var(--font-rubik)] text-[16px] leading-[1.75] text-[#595C5B]">
                We operate in Bristol and the areas directly around it. The mechanics on the platform are based here — they&apos;re not driving in from somewhere else to cover a job.
              </p>
            </div>

            {/* Postcode chip cluster — display only, not interactive */}
            <div
              className="flex flex-wrap gap-2 justify-center mb-6 reveal"
              aria-label="Covered Bristol postcodes"
            >
              {postcodes.map((pc) => (
                <span
                  key={pc}
                  className="font-[family-name:var(--font-rubik)] text-[13px] font-semibold text-[#0D7A5F] px-3 py-1.5 rounded-full"
                  style={{
                    background: "#ECF7EF",
                    border: "1px solid rgba(13,122,95,0.2)",
                  }}
                >
                  {pc}
                </span>
              ))}
            </div>

            {/* PLACEHOLDER note — remove before publishing */}
            <p className="font-[family-name:var(--font-rubik)] text-[12px] text-center text-[#8A8D8C] mb-5 italic reveal">
              [PLACEHOLDER — confirm exact coverage postcodes with founder before publishing]
            </p>

            {/* Coverage note */}
            <p className="font-[family-name:var(--font-rubik)] text-[13.5px] leading-[1.6] text-[#595C5B] text-center reveal">
              Not sure if we cover your area? Enter your postcode when you post a job and we&apos;ll show you who&apos;s nearby.
            </p>
          </div>
        </section>

        {/* ── Section 6 — Who's Behind It ──────────────────────── */}
        <section className="bg-white border-t border-[#DADCDB] py-24 md:py-16">
          <div className="max-w-[640px] mx-auto px-6">
            <div className="reveal">
              <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
                The people behind it
              </span>
              <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-8 text-[#1A1E1D]">
                We&apos;re small. That&apos;s the point.
              </h2>
            </div>

            <p className="font-[family-name:var(--font-rubik)] text-[16px] leading-[1.75] text-[#595C5B] mb-6 reveal">
              Garage Gaffer was started in 2024 by{" "}
              <span className="text-[#1A1E1D] font-medium">[FOUNDER NAME — PLACEHOLDER]</span>
              {" "}and{" "}
              <span className="text-[#1A1E1D] font-medium">[CO-FOUNDER NAME — PLACEHOLDER]</span>
              , both based in Bristol. The short version: one of them had a car problem, couldn&apos;t find a mechanic they trusted, and spent two days ringing garages that didn&apos;t call back. The platform came from that.
            </p>

            <p className="font-[family-name:var(--font-rubik)] text-[16px] leading-[1.75] text-[#595C5B] mb-6 reveal">
              We&apos;re not a large company trying to enter Bristol. We&apos;re based here. We use this platform ourselves when something goes wrong with our cars. That&apos;s not a marketing line — it&apos;s just true, and it shapes how we&apos;ve built it.
            </p>

            <p className="font-[family-name:var(--font-rubik)] text-[16px] leading-[1.75] text-[#595C5B] reveal">
              The team is small, which means decisions get made quickly and we&apos;re reachable. If something on the platform doesn&apos;t work the way it should, we want to know. The contact details are at the bottom of every page.
            </p>
          </div>
        </section>

        {/* ── Section 7 — What We Won't Do ─────────────────────── */}
        <section className="bg-[#F5F7F6] border-t border-[#DADCDB] py-24 md:py-16">
          <div className="max-w-[680px] mx-auto px-6">
            <div className="reveal">
              <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
                What we don&apos;t do
              </span>
              <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-4 text-[#1A1E1D]">
                A few things we&apos;ve deliberately left out.
              </h2>
              <p className="font-[family-name:var(--font-rubik)] text-[16px] leading-[1.7] text-[#595C5B] mb-10">
                These are things a lot of platforms do. We don&apos;t, and we won&apos;t.
              </p>
            </div>

            <ul className="flex flex-col gap-7" role="list">
              {wontDoItems.map((item) => (
                <li key={item.headline} className="flex gap-4 items-start reveal">
                  {/* × marker — aria-hidden, decorative only */}
                  <span
                    className="font-[family-name:var(--font-open-sans)] font-extrabold text-[18px] leading-[1.4] flex-shrink-0 select-none"
                    style={{ color: "#0D7A5F" }}
                    aria-hidden="true"
                  >
                    ×
                  </span>
                  <div>
                    <p className="font-[family-name:var(--font-rubik)] text-[15px] font-medium text-[#1A1E1D] mb-1">
                      {item.headline}
                    </p>
                    <p className="font-[family-name:var(--font-rubik)] text-[13.5px] leading-[1.65] text-[#595C5B]">
                      {item.clarifier}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Closing line */}
            <p className="font-[family-name:var(--font-rubik)] text-[14px] text-[#595C5B] text-center mt-10 reveal">
              We&apos;re not claiming to be perfect. We&apos;re claiming to be honest about it when we&apos;re not.
            </p>
          </div>
        </section>

        {/* ── Section 8 — Our Services ──────────────────────────── */}
        {/* Exact <article> structure from Services.tsx — 3-col desktop, 2-col tablet, 1-col mobile */}
        <section className="bg-[#FBFDFC] border-t border-b border-[#DADCDB] py-24 md:py-16">
          <div className="max-w-[1200px] mx-auto px-6">

            {/* Section header */}
            <div className="max-w-[640px] mb-12 reveal">
              <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
                Our services
              </span>
              <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-3 text-[#1A1E1D]">
                Ready to get sorted?
              </h2>
              <p className="font-[family-name:var(--font-rubik)] text-[16px] leading-[1.7] text-[#595C5B]">
                Three services. All at your door. All carried out by vetted Bristol mechanics.
              </p>
            </div>

            {/* 3-column grid — same <article> structure as Services.tsx */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <article
                  key={s.num}
                  className="relative overflow-hidden bg-white border border-[#DADCDB] rounded-2xl p-7 min-h-[260px] flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.08)] group hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(13,122,95,0.12),0_4px_8px_rgba(0,0,0,0.06)] transition-all duration-200 reveal"
                  style={{ ["--accent" as string]: s.accent }}
                >
                  {/* Top accent bar — opacity-0 → opacity-100 on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-t-2xl"
                    style={{ background: s.accent }}
                  />

                  {/* Icon well — 44×44, radius-xl */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-[18px] border"
                    style={{
                      background: s.well,
                      borderColor: `color-mix(in srgb, ${s.accent} 15%, transparent)`,
                      color: s.accent,
                    }}
                  >
                    {s.icon}
                  </div>

                  {/* Title — Open Sans 700 21px */}
                  <h3 className="font-[family-name:var(--font-open-sans)] text-[21px] font-bold mb-2.5 text-[#1A1E1D]">
                    {s.title}
                  </h3>

                  {/* Description — Rubik 400 14.5px #595C5B */}
                  <p className="text-[#595C5B] text-[14.5px] leading-[1.6] flex-grow mb-[18px]">
                    {s.desc}
                  </p>

                  {/* Bullet list — coloured dot + Rubik 13.5px #595C5B */}
                  <ul className="list-none p-0 mb-5 flex flex-col gap-0">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-[13.5px] text-[#595C5B] py-1 flex gap-2 items-start"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ background: s.accent }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* CTA — same Link pattern as Services.tsx */}
                  <Link
                    href={s.ctaHref}
                    className="inline-flex items-center gap-1.5 font-[family-name:var(--font-rubik)] font-semibold text-[12.5px] uppercase tracking-[0.06em] text-[#8A8D8C] group-hover:text-[var(--accent)] transition-colors"
                  >
                    {s.cta}
                    <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                      →
                    </span>
                  </Link>

                  {/* Decorative large numeral */}
                  <span
                    className="absolute right-[18px] bottom-[-14px] font-[family-name:var(--font-open-sans)] font-extrabold text-[108px] opacity-[0.04] leading-none select-none"
                    style={{ color: s.accent }}
                  >
                    {s.num}
                  </span>
                </article>
              ))}
            </div>

          </div>
        </section>

      </main>

      {/* ── Section 9 — Footer ───────────────────────────────── */}
      <Footer />
    </>
  );
}
