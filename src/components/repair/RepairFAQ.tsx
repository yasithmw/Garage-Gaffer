"use client";

import { useState } from "react";

const faqs = [
  {
    q: "I don't know exactly what's wrong. Can I still post a job?",
    a: "Yes — that's exactly what most drivers do. Just describe what's happening: the noise, the warning light, how it's behaving. Mechanics will review your job and quote if they can help. You can add photos too, which helps.",
  },
  {
    q: "What if the repair needs parts? How does that work?",
    a: "Your mechanic will source the parts and include them in the quote upfront. You see the parts cost broken out before you commit — labour, parts, and VAT, all listed separately. Nothing gets added without your go-ahead.",
  },
  {
    q: "Do I need a diagnostic first, or can I just book a repair?",
    a: "You can book a repair directly if you know what needs fixing. If you're not sure what's wrong, our Diagnostics service is the right starting point — a mechanic will run a full check and tell you exactly what's needed before any work begins.",
  },
  {
    q: "How do I know the price is accurate before I commit?",
    a: "Every mechanic sends a full itemised quote — labour, parts, and VAT included. What you see is what you pay. If anything unexpected comes up during the job, your mechanic asks before doing anything extra.",
  },
  {
    q: "Are the mechanics actually vetted, or just registered?",
    a: "Vetted. Every mechanic on Garage Gaffer is DBS-checked, must show proof of their qualifications, and carries their own insurance. They're not listed until they've passed. This isn't a directory where anyone can sign up.",
  },
  {
    q: "What if something goes wrong after the repair?",
    a: "All work comes with a 12-month workmanship warranty. If there's a problem with the work itself, it's covered. Get in touch and we'll sort it out.",
  },
  {
    q: "Do you cover my area of Bristol?",
    a: "We cover Bristol and the surrounding areas — Clifton, Southville, Redland, Bedminster, Stoke Bishop, Bishopston, and more. Enter your postcode when you post your job and we'll show you who's nearby.",
  },
  {
    q: "Is it really free to post a job?",
    a: "Yes. Posting a job and getting quotes costs you nothing. You only pay when you book a mechanic.",
  },
];

export default function RepairFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#FBFDFC] border-t border-[#DADCDB] py-24 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-[560px] mx-auto text-center mb-12 reveal">
          <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
            Common questions
          </span>
          <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px]">
            Got a question? Good.
          </h2>
        </div>

        {/* FAQ structured data + accordion */}
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

        {/* Help centre link */}
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
