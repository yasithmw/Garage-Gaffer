"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need to know what the warning light means before I post a job?",
    a: "No — you just need to describe what you're seeing. The colour of the light, any symbol you can make out, and anything you've noticed about how the car's been behaving. Your mechanic will identify the fault from there.",
  },
  {
    q: "What's the difference between a diagnostic and just reading the fault codes?",
    a: "A code reading tells you a code. A diagnostic tells you what it means, why it's happening, and what needs fixing. Our mechanics use the codes as a starting point, not the whole answer — they cross-check with a physical inspection and their own judgement.",
  },
  {
    q: "How much does a diagnostic cost?",
    a: "You'll see each mechanic's diagnostic fee in their quote before you commit to anything. Pricing varies between mechanics — typically it's a flat fee, and it's often deducted from the repair cost if you go ahead with the same mechanic.",
  },
  {
    q: "What if the mechanic finds multiple things wrong?",
    a: "They'll tell you everything they find, in order of urgency. You decide what to fix and when — they won't start any work until you've agreed to it. No surprise repair lists, no pressure.",
  },
  {
    q: "Do I have to book a repair through Garage Gaffer after the diagnostic?",
    a: "No — the diagnostic report is yours. You can take it anywhere. But most drivers find it easier to book the repair through the platform since the mechanic already knows the car.",
  },
  {
    q: "Can a mobile mechanic actually do a proper diagnostic at my home?",
    a: "Yes. Modern professional diagnostic tools are portable, and our mechanics bring everything they need. A driveway diagnostic is just as thorough as one done in a workshop.",
  },
  {
    q: "What if the car isn't driveable?",
    a: "Post the job anyway and describe the situation — the mechanic will come to wherever the car is. They don't need it to be running to do a diagnostic.",
  },
  {
    q: "Is it really free to post?",
    a: "Yes. Posting a diagnostic job and getting quotes costs you nothing. You only pay when you choose a mechanic and confirm the booking.",
  },
];

export default function DiagnosticsFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#FBFDFC] border-t border-[#DADCDB] py-24 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[560px] mx-auto text-center mb-12 reveal">
          <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#066599] mb-3">
            Common questions
          </span>
          <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px]">
            Not sure? We get that.
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
                  ? "border-[#066599] shadow-[0_4px_12px_rgba(6,101,153,0.10)]"
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
                      ? "bg-[#066599] text-white rotate-45"
                      : "bg-[#E6F3FA] text-[#066599]"
                  }`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-3.5 h-3.5">
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
          <a href="#" className="text-[#066599] font-semibold underline underline-offset-2 hover:text-[#055280] transition-colors">
            Visit the help centre
          </a>
        </p>
      </div>
    </section>
  );
}
