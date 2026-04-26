"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Will a service by one of your mechanics void my manufacturer warranty?",
    a: "No — as long as the service is carried out to manufacturer guidelines using approved parts and fluids, your warranty stays intact. This is a legal requirement under UK competition law. Our mechanics follow the manufacturer schedule exactly. If you're unsure, ask the mechanic in your quote — they'll confirm it for your specific make and model.",
  },
  {
    q: "What's the difference between an interim and a full service?",
    a: "An interim service covers the basics — oil and filter change, top-up of key fluids, tyre check, lights, and a general look over. It's designed for drivers who cover higher mileage and want a check every 6 months between full services. A full service goes further: it covers everything in an interim plus brakes, steering, suspension, filters, spark plugs (where due), and a more detailed inspection. Most manufacturers recommend a full service once a year or every 12,000 miles — whichever comes first.",
  },
  {
    q: "What parts and fluids are included — and where do they come from?",
    a: "Your mechanic sources the parts and fluids and includes them in the upfront quote. You see the full cost — labour, parts, and VAT — before you commit. Parts are OEM-equivalent or manufacturer-approved where required. If you want a specific brand of oil or filter, mention it when you post the job.",
  },
  {
    q: "How do I know the price is accurate before I commit?",
    a: "Every mechanic sends a full itemised quote — labour, parts, and VAT included. What you see is what you pay. If anything unexpected comes up during the service, your mechanic asks before doing anything extra.",
  },
  {
    q: "Are the mechanics actually vetted, or just registered?",
    a: "Vetted. Every mechanic on Garage Gaffer is DBS-checked, must show proof of their qualifications, and carries their own insurance. They're not listed until they've passed. This isn't a directory where anyone can sign up.",
  },
  {
    q: "What if something goes wrong after the service?",
    a: "All work comes with a 12-month workmanship warranty. If there's a problem with the service itself, it's covered. Get in touch and we'll sort it out.",
  },
  {
    q: "Is it really free to post a job?",
    a: "Yes. Posting a job and getting quotes costs you nothing. You only pay when you book a mechanic.",
  },
];

export default function ServicingFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#FBFDFC] border-t border-[#DADCDB] py-24 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[560px] mx-auto text-center mb-12 reveal">
          <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
            Common questions
          </span>
          <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px]">
            Good questions. Here are the answers.
          </h2>
        </div>

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
