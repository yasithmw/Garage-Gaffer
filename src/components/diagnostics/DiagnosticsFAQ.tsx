"use client";

import { useState } from "react";

/* ── FAQ data — diagnostics.md Section 4 (8 questions) ────────── */
const faqs = [
  {
    q: "Do I need to know what the warning light means before I post a job?",
    a: "No — just describe what you're seeing. The colour of the light, any symbol you can make out, and anything you've noticed about how the car's been behaving. Your mechanic identifies the fault from there. You don't need to speak their language.",
  },
  {
    q: "What's the difference between a diagnostic and just reading the fault codes?",
    a: "A code reading tells you a code. A diagnostic tells you what it means, why it's happening, and what needs fixing. Our mechanics use the codes as a starting point — they cross-check with a physical inspection and their own judgement. It's not a plug-in-and-guess job.",
  },
  {
    q: "What does a diagnostic actually involve?",
    a: "Your mechanic comes to you and runs a full check — including an OBD scan where relevant — to identify exactly what's causing the problem. They check systems, listen for symptoms, and look at the car as a whole. Most diagnostics take 45–90 minutes depending on the issue.",
  },
  {
    q: "Will the mechanic fix it on the spot, or do I need to book separately?",
    a: "The diagnostic job is the check only. If a repair is needed, your mechanic gives you a quote on the day. You then decide whether to book the repair — through the same mechanic on the platform, or elsewhere. There's no pressure either way.",
  },
  {
    q: "How much does a diagnostic cost?",
    a: "Each mechanic sets their own diagnostic fee — you'll see it in their quote before you commit to anything. It's typically a flat rate, and many mechanics deduct it from the repair cost if you go ahead with the same person.",
  },
  {
    q: "Can a mobile mechanic do a proper diagnostic at my home?",
    a: "Yes. Professional diagnostic tools are portable. Our mechanics bring everything they need — you don't need to be near a garage. A driveway diagnostic is just as thorough as one done in a workshop.",
  },
  {
    q: "What if the car isn't driveable?",
    a: "Post the job and describe the situation. The mechanic comes to wherever the car is — your driveway, a car park, or kerbside. They don't need it to be running to run a diagnostic.",
  },
  {
    q: "Is it really free to post a diagnostic job?",
    a: "Yes. Posting a job and getting quotes costs nothing. You only pay when you choose a mechanic and confirm the booking.",
  },
];

export default function DiagnosticsFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    /* bg-[#FBFDFC] matches repair FAQ pattern — alternating surface */
    <section className="bg-[#FBFDFC] border-t border-[#DADCDB] py-24 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header — centred, max-w-560px, brand-green eyebrow */}
        <div className="max-w-[560px] mx-auto text-center mb-12 reveal">
          <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
            Common questions
          </span>
          <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px]">
            Not sure? We get that.
          </h2>
        </div>

        {/* Accordion — max-w-760px, FAQPage schema microdata */}
        <div
          className="max-w-[760px] mx-auto flex flex-col gap-3"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white border rounded-2xl px-5 overflow-hidden transition-all duration-200 reveal ${
                open === i
                  ? "border-[#0D7A5F] shadow-[0_4px_12px_rgba(13,122,95,0.08)]"
                  : "border-[#DADCDB] hover:border-[#b0bab5]"
              }`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="w-full flex justify-between items-center gap-4 py-4 text-left font-[family-name:var(--font-open-sans)] font-bold text-[16px] text-[#1A1E1D]"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span itemProp="name">{faq.q}</span>
                {/* Plus icon — rotates to × on expand via rotate-45 */}
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                    open === i
                      ? "bg-[#0D7A5F] text-white rotate-45"
                      : "bg-[#ECF7EF] text-[#0D7A5F]"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              {open === i && (
                <div
                  className="pb-5 text-[14.5px] leading-[1.7] text-[#595C5B]"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <span itemProp="text">{faq.a}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Help centre link — placeholder href confirmed before launch */}
        <p className="text-center mt-10 text-[14.5px] text-[#595C5B] reveal">
          More questions?{" "}
          <a
            href="#"
            className="text-[#0D7A5F] font-semibold underline underline-offset-2 hover:text-[#055240] transition-colors"
          >
            Visit the help centre
          </a>
        </p>
      </div>
    </section>
  );
}
