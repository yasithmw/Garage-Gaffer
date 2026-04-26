import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import MechanicHero from "@/components/mechanics/MechanicHero";
import MechanicFAQ from "@/components/mechanics/MechanicFAQ";

export const metadata: Metadata = {
  title: "Join as a Mechanic — Garage Gaffer | Build Your Mobile Business in Bristol",
  description:
    "Apply to join Bristol's vetted mobile mechanic marketplace. Get a steady stream of jobs, manage your own schedule, and keep 100% of your quote. No lead fees.",
};

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const benefits = [
  {
    title: "Zero lead fees",
    desc: "Unlike other platforms, we don't charge you for seeing or bidding on jobs. You only pay a small flat monthly platform fee — no hidden costs.",
  },
  {
    title: "You keep 100%",
    desc: "What you quote is what you get paid. We don't take a percentage cut from your labour or parts. Your business, your margins.",
  },
  {
    title: "Bristol focused",
    desc: "We only operate in Bristol. No more driving 50 miles for a job. Build a dense, efficient route in the city you know.",
  },
  {
    title: "Weekly payouts",
    desc: "No waiting 30 days for your money. All completed jobs are processed and paid out to your bank account every Friday.",
  },
];

const processSteps = [
  {
    num: "01",
    label: "Quick application",
    body: "Tell us about your experience, qualifications, and the areas of Bristol you cover. Takes about 10 minutes.",
    detail: "Online only · No fee",
  },
  {
    num: "02",
    label: "Vetting call",
    body: "A brief chat with our team to verify your documents (IMI/City & Guilds, Insurance, DBS) and set up your profile.",
    detail: "Completed in ~24 hours",
  },
  {
    num: "03",
    label: "Start quoting",
    body: "Once approved, you'll get instant alerts for jobs that match your skills. Pick the ones you want, skip the ones you don't.",
    detail: "First job same-day",
  },
];

const requirements = [
  "Level 3 City & Guilds or IMI equivalent",
  "Valid Public Liability Insurance (min £1m)",
  "Clean DBS check (we can help you get one)",
  "Your own van and professional tools",
  "Right to work in the UK",
];

export default function BecomeMechanicPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        <MechanicHero />

        {/* ── Section 2: Benefits ────────────────────────────── */}
        <section className="bg-white py-24 md:py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[640px] mb-16 reveal">
              <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
                Why join us
              </span>
              <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] text-[#1A1E1D]">
                A platform built for mobile mechanics, not just for drivers.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#DADCDB] rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.08)] reveal"
                >
                  <h3 className="font-[family-name:var(--font-open-sans)] text-[18px] font-bold text-[#1A1E1D] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-[family-name:var(--font-rubik)] text-[14px] leading-[1.6] text-[#595C5B]">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 3: How it Works (Process) ────────────────── */}
        <section className="bg-[#F5F7F6] border-t border-b border-[#DADCDB] py-24 md:py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-[640px] mx-auto mb-16 reveal">
              <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
                The onboarding
              </span>
              <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] text-[#1A1E1D]">
                From application to first job in 3 days.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="relative bg-white border border-[#DADCDB] rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.08)] reveal"
                >
                  {/* Connector line (desktop, between steps) */}
                  {i < processSteps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-[44px] right-[-24px] w-12 border-t-2 border-dashed border-[#DADCDB] z-10"
                      aria-hidden="true"
                    />
                  )}
                  {/* Step number */}
                  <span className="font-[family-name:var(--font-open-sans)] text-[40px] font-extrabold leading-none text-[#0D7A5F] opacity-20 mb-4 block select-none">
                    {step.num}
                  </span>
                  <h3 className="font-[family-name:var(--font-open-sans)] text-[18px] font-bold leading-[1.25] mb-2.5 text-[#1A1E1D]">
                    {step.label}
                  </h3>
                  <p className="text-[14.5px] leading-[1.65] text-[#595C5B] mb-4">
                    {step.body}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-[family-name:var(--font-rubik)] text-[#0D7A5F] font-medium">
                    <span className="w-4 h-4 rounded-full bg-[#ECF7EF] flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </span>
                    {step.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: Requirements ─────────────────────────── */}
        <section className="bg-white py-24 md:py-16" id="apply">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
                  Requirements
                </span>
                <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] text-[#1A1E1D] mb-6">
                  What you need to get started.
                </h2>
                <p className="font-[family-name:var(--font-rubik)] text-[16px] leading-[1.7] text-[#595C5B] mb-8">
                  We take vetting seriously. It&apos;s why drivers trust us and why 
                  the mechanics on our platform can command professional prices. 
                  To join, you must meet these minimum standards:
                </p>
                <ul className="space-y-4">
                  {requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 font-[family-name:var(--font-rubik)] text-[15px] text-[#1A1E1D]">
                      <span className="w-5 h-5 rounded-full bg-[#ECF7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0D7A5F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="reveal">
                <div className="bg-[#FBFDFC] border border-[#DADCDB] rounded-2xl p-10 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <h3 className="font-[family-name:var(--font-open-sans)] text-[22px] font-bold text-[#1A1E1D] mb-6">
                    Register your interest
                  </h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-bold uppercase tracking-wider text-[#8A8D8C] mb-1.5">First Name</label>
                        <input type="text" className="w-full bg-white border border-[#DADCDB] rounded-lg px-4 py-2.5 text-[15px] focus:outline-none focus:border-[#0D7A5F]" placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold uppercase tracking-wider text-[#8A8D8C] mb-1.5">Last Name</label>
                        <input type="text" className="w-full bg-white border border-[#DADCDB] rounded-lg px-4 py-2.5 text-[15px] focus:outline-none focus:border-[#0D7A5F]" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold uppercase tracking-wider text-[#8A8D8C] mb-1.5">Email</label>
                      <input type="email" className="w-full bg-white border border-[#DADCDB] rounded-lg px-4 py-2.5 text-[15px] focus:outline-none focus:border-[#0D7A5F]" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold uppercase tracking-wider text-[#8A8D8C] mb-1.5">Phone Number</label>
                      <input type="tel" className="w-full bg-white border border-[#DADCDB] rounded-lg px-4 py-2.5 text-[15px] focus:outline-none focus:border-[#0D7A5F]" placeholder="07123 456789" />
                    </div>
                    <button type="submit" className="w-full bg-[#0D7A5F] text-white font-[family-name:var(--font-rubik)] font-bold py-3.5 rounded-xl mt-4 hover:bg-[#055240] transition-colors shadow-[0_4px_12px_rgba(13,122,95,0.25)]">
                      Submit application
                    </button>
                    <p className="text-[12px] text-[#8A8D8C] text-center mt-4">
                      By submitting, you agree to our Terms and Privacy Policy. 
                      We&apos;ll be in touch within 24 hours.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 5: FAQ ──────────────────────────────────── */}
        <MechanicFAQ />
      </main>
      <Footer />
    </>
  );
}
