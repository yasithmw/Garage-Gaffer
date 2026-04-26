"use client";

import { useState } from "react";

const driverFaqs = [
  {
    q: "How do I post a job on Garage Gaffer?",
    a: "Go to the home page and click \"Get quotes.\" Describe your car problem in your own words — make, model, registration, and what's happening. You don't need to know the fault or the part name. Mechanics review your job and send you a quote if they can help. Posting is free and you don't need a card.",
  },
  {
    q: "Can I cancel my booking after I've confirmed it?",
    a: "Yes — you can cancel through your account dashboard. Check the cancellation policy on your booking confirmation for any fees that may apply depending on how close to the appointment you cancel. If your circumstances have changed, it's always worth messaging the mechanic directly first — they may be able to rearrange.",
  },
  {
    q: "When do I pay, and how?",
    a: "Payment is taken when the job is completed and confirmed. You'll be prompted through the platform — you don't hand cash to the mechanic on the day. If there's a deposit requirement for a specific job, it will be shown clearly in the quote before you confirm.",
  },
  {
    q: "The amount I was charged doesn't match my quote. What do I do?",
    a: "That shouldn't happen — your quoted price is what you pay. If the charge is different, contact us through the \"Get in touch\" section below and include your booking reference. We'll look into it and sort it out.",
  },
  {
    q: "What if my mechanic doesn't show up?",
    a: "Get in touch with your mechanic through the platform first — delays happen and most are easily resolved. If you can't reach them and the appointment time has passed, contact us directly using the form below. We take reliability seriously and will follow up on your behalf.",
  },
  {
    q: "The work has a problem. What does the 12-month warranty actually cover?",
    a: "The warranty covers workmanship — meaning the quality of the work the mechanic carried out. If the same fault has returned and it's related to the job that was done, contact us and we'll arrange for it to be looked at again. The warranty does not cover new faults unrelated to the original job, wear-and-tear, or parts the mechanic sourced on your instruction against their recommendation.",
  },
  {
    q: "I'm not happy with how the job went. How do I raise a complaint?",
    a: "Use the contact form below — select \"Complaint about a job\" as the subject. Give us the booking reference, a description of the issue, and any photos if relevant. We aim to come back to you within one working day. We investigate every complaint properly, not just acknowledge receipt.",
  },
  {
    q: "Is Garage Gaffer available outside Bristol?",
    a: "Right now, we're focused on Bristol and the areas immediately surrounding it. That's intentional — we built this for Bristol drivers, with Bristol mechanics. If you're in a neighbouring area, enter your postcode and we'll let you know whether you're covered.",
  },
];

export default function SupportFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 md:py-16" id="help-booking">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[760px] mx-auto text-center mb-12 reveal">
          <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
            For drivers
          </span>
          <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold tracking-[-0.5px] leading-[1.15] text-[#1A1E1D] mb-4">
            Driver questions.
          </h2>
          <p className="font-[family-name:var(--font-rubik)] text-[16px] text-[#595C5B]">
            The most common questions from Bristol drivers. Quick answers, no waffle.
          </p>
        </div>

        <div className="max-w-[760px] mx-auto flex flex-col gap-3">
          <div id="help-payments" className="scroll-mt-32" />
          <div id="help-mechanic" className="scroll-mt-32" />
          <div id="help-warranty" className="scroll-mt-32" />
          <div id="help-account" className="scroll-mt-32" />
          
          {driverFaqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white border rounded-2xl px-6 overflow-hidden transition-all duration-200 reveal ${
                open === i 
                  ? "border-[#0D7A5F] shadow-[0_4px_12px_rgba(13,122,95,0.08)]" 
                  : "border-[#DADCDB] hover:border-[#b0bab5]"
              }`}
            >
              <button
                className="w-full flex justify-between items-center gap-4 py-5 text-left font-[family-name:var(--font-open-sans)] font-bold text-[16px] text-[#1A1E1D]"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {faq.q}
                <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  open === i ? "bg-[#0D7A5F] text-white rotate-45" : "bg-[#ECF7EF] text-[#0D7A5F]"
                }`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-3.5 h-3.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div 
                className={`grid transition-all duration-200 ${
                  open === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="font-[family-name:var(--font-rubik)] text-[14.5px] leading-[1.7] text-[#595C5B]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <p className="font-[family-name:var(--font-rubik)] text-[15px] text-[#595C5B]">
            More questions? <a href="#help-contact" className="text-[#0D7A5F] font-semibold hover:underline">Contact us</a> — scroll down for the contact form and live chat.
          </p>
        </div>
      </div>
    </section>
  );
}
