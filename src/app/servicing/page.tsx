import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceHero from "@/components/ServiceHero";
import ServicingMechanics from "@/components/servicing/ServicingMechanics";
import ServicingFAQ from "@/components/servicing/ServicingFAQ";
import ServicingProblemFinder from "@/components/servicing/ServicingProblemFinder";

export const metadata: Metadata = {
  title: "Car Servicing in Bristol — Vetted Mechanics at Your Door | Garage Gaffer",
  description:
    "Book an interim or full service from a vetted Bristol mechanic — they come to you. Manufacturer guidelines followed. 12-month workmanship warranty. Free to post.",
};

function CalendarTrustIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[22px] h-[22px]"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  );
}

function ShieldTrustIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[22px] h-[22px]"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function DocumentTrustIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[22px] h-[22px]"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

const trustCards = [
  {
    icon: <CalendarTrustIcon />,
    headline: "12-month workmanship warranty.",
    body: "If something isn't right with the work, it's covered for a year. No arguments, no small print.",
    num: "01",
  },
  {
    icon: <ShieldTrustIcon />,
    headline: "DBS checked. Qualification verified.",
    body: "Every mechanic is background-checked and must show proof of their qualifications before appearing on the platform.",
    num: "02",
  },
  {
    icon: <DocumentTrustIcon />,
    headline: "Insured on every job.",
    body: "All mechanics carry public liability insurance. Every job on Garage Gaffer is covered.",
    num: "03",
  },
];

const otherServices = [
  {
    accent: "#0D7A5F",
    well: "#ECF7EF",
    icon: (
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
    ),
    title: "Car repairs",
    desc: "Something's broken and you know what it is? Get a fixed quote from a vetted Bristol mechanic — at your door.",
    bullets: [
      "Brakes, clutch, exhaust, suspension and more",
      "Fixed price upfront — no surprises after the job",
      "12-month workmanship warranty on every repair",
    ],
    cta: "See repairs",
    ctaHref: "/repair",
    num: "01",
  },
  {
    accent: "#066599",
    well: "#E6F3FA",
    icon: (
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
    ),
    title: "Diagnostics",
    desc: "Not sure what's wrong? Get a full diagnostic from a vetted Bristol mechanic and know exactly what needs doing before you commit to anything.",
    bullets: [
      "Full vehicle health check at your door",
      "Plain-English report on what's wrong",
      "Recommended next steps with no pressure",
    ],
    cta: "Find out more",
    ctaHref: "/diagnostics",
    num: "02",
  },
];

export default function ServicingPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>

        <ServiceHero
          breadcrumb={{ parent: "Services", current: "Car servicing · Bristol" }}
          title={<>Keep your car in good shape. <em className="italic not-italic text-[#0D7A5F] bg-gradient-to-b from-transparent from-62% to-[rgba(13,122,95,0.15)] to-62% px-0.5 font-extrabold">Before it becomes a problem.</em></>}
          subtitle="Book an interim or full service from a vetted Bristol mechanic — they come to you, work on your schedule, and keep your car running exactly as it should."
          meta={{ mechanicCount: 127, quoteTime: "7 mins" }}
          defaultService="Full service"
          idSuffix="servicing-hero"
        />

        <section className="bg-[#FBFDFC] border-t border-b border-[#DADCDB] py-16 md:py-12">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {trustCards.map((card) => (
                <article
                  key={card.headline}
                  className="relative overflow-hidden bg-white border border-[#DADCDB] rounded-2xl p-7 min-h-[200px] flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.08)] group hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(13,122,95,0.12),0_4px_8px_rgba(0,0,0,0.06)] transition-all duration-200 reveal"
                  style={{ ["--accent" as string]: "#0D7A5F" }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-t-2xl" style={{ background: "#0D7A5F" }} />

                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-[18px] border"
                    style={{ background: "#ECF7EF", borderColor: "color-mix(in srgb, #0D7A5F 15%, transparent)", color: "#0D7A5F" }}
                  >
                    {card.icon}
                  </div>

                  <h3 className="font-[family-name:var(--font-open-sans)] text-[21px] font-bold mb-2.5 text-[#1A1E1D]">
                    {card.headline}
                  </h3>
                  <p className="text-[#595C5B] text-[14.5px] leading-[1.6] flex-grow">
                    {card.body}
                  </p>

                  <span
                    className="absolute right-[18px] bottom-[-14px] font-[family-name:var(--font-open-sans)] font-extrabold text-[108px] opacity-[0.04] leading-none select-none"
                    style={{ color: "#0D7A5F" }}
                  >
                    {card.num}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ServicingMechanics />

        <ServicingFAQ />

        <ServicingProblemFinder />

        <section className="bg-[#FBFDFC] border-t border-b border-[#DADCDB] py-24 md:py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[640px] mb-12 reveal">
              <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
                Our other services
              </span>
              <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-3">
                Need something else?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {otherServices.map((s) => (
                <article
                  key={s.num}
                  className="relative overflow-hidden bg-white border border-[#DADCDB] rounded-2xl p-7 min-h-[260px] flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.08)] group hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(13,122,95,0.12),0_4px_8px_rgba(0,0,0,0.06)] transition-all duration-200 reveal"
                  style={{ ["--accent" as string]: s.accent }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-t-2xl"
                    style={{ background: s.accent }}
                  />

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

                  <h3 className="font-[family-name:var(--font-open-sans)] text-[21px] font-bold mb-2.5 text-[#1A1E1D]">
                    {s.title}
                  </h3>

                  <p className="text-[#595C5B] text-[14.5px] leading-[1.6] flex-grow mb-[18px]">
                    {s.desc}
                  </p>

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

                  <Link
                    href={s.ctaHref}
                    className="inline-flex items-center gap-1.5 font-[family-name:var(--font-rubik)] font-semibold text-[12.5px] uppercase tracking-[0.06em] text-[#8A8D8C] group-hover:text-[var(--accent)] transition-colors"
                  >
                    {s.cta}
                    <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                      →
                    </span>
                  </Link>

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

      <Footer />
    </>
  );
}
