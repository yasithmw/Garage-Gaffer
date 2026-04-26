"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need to know what's wrong with my car to post a job?",
    a: "No — and most drivers don't. Just describe what's happening: a noise, a warning light, something that doesn't feel right. Our mechanics are used to working from plain descriptions. You can add photos too, which helps them quote accurately.",
  },
  {
    q: "How quickly will I get quotes?",
    a: "Most jobs get their first quote within the hour. For common repairs, you'll usually have multiple quotes the same day. Posting early in the morning tends to get the fastest response.",
  },
  {
    q: "Is it really free to post?",
    a: "Yes. Posting a job and getting quotes costs you nothing. You only pay when you choose a mechanic and book them.",
  },
  {
    q: "What if I want to ask the mechanic something before I book?",
    a: "You can message any mechanic through the platform before committing. Most are quick to respond — they want the job, so they're motivated to answer your questions.",
  },
  {
    q: "What if the mechanic finds something else wrong mid-job?",
    a: "They'll stop and tell you before doing anything extra. You decide whether to go ahead. Nothing gets added to your bill without your say-so.",
  },
  {
    q: "What if I'm not happy with the work?",
    a: "All work comes with a 12-month workmanship warranty. If there's a problem with what was done, get in touch and we'll sort it out. That's what the warranty is for.",
  },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function HowItWorksFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F5F7F6] border-t border-[#DADCDB] py-24 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[560px] mx-auto text-center mb-12 reveal">
          <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
            Common questions
          </span>
          <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px]">
            Still got questions?
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-white border rounded-2xl px-6 overflow-hidden transition-all duration-300 reveal ${
                  isOpen 
                    ? "border-[#0D7A5F] shadow-[0_4px_12px_rgba(13,122,95,0.08)]" 
                    : "border-[#DADCDB] hover:border-[#b0bab5]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left transition-colors"
                  aria-expanded={isOpen}
                  id={`faq-btn-${i}`}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="font-[family-name:var(--font-open-sans)] text-[15.5px] font-bold text-[#1A1E1D] leading-[1.35]">
                    {faq.q}
                  </span>
                  <span className={`text-[#0D7A5F] transition-colors ${isOpen ? "text-[#0D7A5F]" : "text-[#8A8D8C]"}`}>
                    <ChevronIcon open={isOpen} />
                  </span>
                </button>

                <div 
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="grid transition-[grid-template-rows,opacity] duration-300 ease-in-out"
                  style={{ 
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="pb-5">
                      <div className="w-full h-px bg-[#DADCDB] mb-4" />
                      <p className="text-[14.5px] leading-[1.7] text-[#595C5B]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[13.5px] text-[#8A8D8C] mt-8">
          More questions?{" "}
          <a href="#" className="text-[#0D7A5F] hover:underline font-medium">
            Visit the help centre
          </a>
        </p>
      </div>
    </section>
  );
}
