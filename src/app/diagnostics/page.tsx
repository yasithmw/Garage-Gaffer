import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import DiagnosticsCompactWidget from "@/components/diagnostics/DiagnosticsCompactWidget";
import DiagnosticsFAQ from "@/components/diagnostics/DiagnosticsFAQ";
import { ShieldIcon, ScanIcon, DocIcon, CalendarIcon, ArrowIcon, CheckIcon, StarFilled } from "@/components/diagnostics/icons";

export const metadata: Metadata = {
  title: "Car Diagnostics in Bristol — Vetted Mechanics at Your Door | Garage Gaffer",
  description: "Warning light on? Post your car problem and get a full diagnostic from a vetted Bristol mechanic — at your door. Plain-English report. Free to post.",
};

/* ── Data ─────────────────────────────────────────────────────── */

const trustBlocks = [
  { icon: <ShieldIcon />, headline: "DBS checked. Qualification verified.", body: "Every mechanic is background-checked and must show proof of their qualifications before they appear on the platform." },
  { icon: <ScanIcon />, headline: "Full check, not just a code scan.", body: "Our mechanics use professional diagnostic tools and their own expertise — they don't just read a code and quote you the first thing on the list." },
  { icon: <DocIcon />, headline: "A clear report. No mystery.", body: "You get a plain-English explanation of what's wrong, what's causing it, and what needs to happen next. Nothing hidden." },
  { icon: <CalendarIcon />, headline: "12-month workmanship warranty.", body: "If you go on to book a repair and something isn't right with the work, it's covered for a year. No arguments." },
];

const warningLightTags = ["Engine management light", "ABS warning", "Oil pressure light", "Battery / charging warning", "Traction control light", "Airbag / SRS warning", "Brake warning light", "Coolant temperature warning", "Service due light", "DPF warning"];

const symptomTags = ["Juddering when accelerating", "Rough idle", "Pulling to one side", "Unusual noises", "Poor fuel economy", "Overheating", "Difficulty starting", "Smoke from exhaust", "Loss of power", "Vibration at speed"];

const reviews = [
  { name: "James O.", location: "Clifton", tag: "Engine light", quote: "Engine light came on a Friday. Posted the job that evening, mechanic was there Saturday morning. He explained exactly what the code meant and what needed fixing." },
  { name: "Rachel T.", location: "Redland", tag: "Strange noise", quote: "There was a noise I couldn't describe properly. The mechanic didn't seem bothered — just asked a couple of questions, had a listen, and diagnosed it in about twenty minutes." },
  { name: "Amir P.", location: "Southville", tag: "Pre-MOT check", quote: "Wanted to know what the car needed before the MOT. Got a full report, only needed two things fixing, and both were reasonably priced. No nasty surprises." },
];

const steps = [
  { num: "01", label: "Tell us what's happening", body: "The light, the feeling, the behaviour — in your own words. Make, model, reg, done.", detail: "Under 2 minutes · No card needed" },
  { num: "02", label: "A vetted mechanic runs a full check", body: "Your mechanic comes to you and runs a full diagnostic — OBD scan, physical inspection, the lot.", detail: "Most jobs quoted within the hour" },
  { num: "03", label: "You get a plain-English report", body: "What's wrong, what caused it, what needs fixing — in language that makes sense. No upselling.", detail: "Book the repair if you want it sorted" },
];

/* ── Page ─────────────────────────────────────────────────────── */

export default function DiagnosticsPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        {/* ── S1: Hero ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#0A1412] py-[72px] pb-[88px] md:py-14 md:pb-16">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute w-[55%] h-[80%] top-[-15%] left-[-5%] bg-[radial-gradient(circle,rgba(6,101,153,0.18)_0%,transparent_60%)]" />
            <div className="absolute w-[35%] h-[50%] bottom-0 right-0 bg-[radial-gradient(circle,rgba(6,101,153,0.10)_0%,transparent_65%)]" />
          </div>

          <div className="relative max-w-[1200px] mx-auto px-6">
            <div className="max-w-[680px] mb-10 reveal">
              <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#066599] mb-4">Diagnostics</span>
              <h1 className="font-[family-name:var(--font-open-sans)] text-[48px] md:text-[36px] font-extrabold leading-[1.08] tracking-[-1.5px] md:tracking-[-1px] text-white mb-5">
                Warning light on?{" "}<span className="text-[#066599]">Let&apos;s find out what it means.</span>
              </h1>
              <p className="text-[17px] md:text-[15px] leading-[1.65] text-white/70 mb-2">Post your car problem, get a full diagnostic from a vetted Bristol mechanic — at your door. Plain-English report on exactly what&apos;s wrong.</p>
              <p className="text-[14px] text-white/45">Free to post. No card needed to see quotes.</p>
            </div>

            {/* Compact widget */}
            <div className="max-w-[860px] reveal">
              <DiagnosticsCompactWidget id="hero-diag" darkBg />
              <span className="block text-[12.5px] text-white/35 mt-3 text-center md:text-left">Takes under 2 minutes · No commitment until you choose</span>
            </div>
          </div>
        </section>

        {/* ── S2: Reassurance — 3 horizontal cards ───────────────── */}
        <section className="bg-[#066599] py-12 md:py-8">
          <div className="max-w-[1200px] mx-auto px-6 reveal">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "You describe it", body: "Tell us what you see or hear. No jargon needed." },
                { title: "We diagnose it", body: "A vetted mechanic runs a proper check — not a quick code scan." },
                { title: "You decide", body: "Get a clear report. Book a repair if you want — no pressure." },
              ].map((card) => (
                <div key={card.title} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-6 py-5">
                  <h3 className="font-[family-name:var(--font-open-sans)] text-[16px] font-bold text-white mb-1.5">{card.title}</h3>
                  <p className="text-[14px] leading-[1.6] text-white/70">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── S3: How Diagnostics Works ──────────────────────────── */}
        <section className="bg-[#F5F7F6] py-24 md:py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[560px] mx-auto text-center mb-14 reveal">
              <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#066599] mb-3">How it works</span>
              <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px]">Post it. We check it. You know.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {steps.map((step, i) => (
                <div key={step.num} className="relative bg-white border border-[#DADCDB] rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.08)] reveal">
                  {i < steps.length - 1 && <div className="hidden md:block absolute top-[44px] right-[-24px] w-12 border-t-2 border-dashed border-[#DADCDB] z-10" aria-hidden="true" />}
                  <span className="font-[family-name:var(--font-open-sans)] text-[40px] font-extrabold leading-none text-[#066599] opacity-20 mb-4 block select-none">{step.num}</span>
                  <h3 className="font-[family-name:var(--font-open-sans)] text-[18px] font-bold leading-[1.25] mb-2.5 text-[#1A1E1D]">{step.label}</h3>
                  <p className="text-[14.5px] leading-[1.65] text-[#595C5B] mb-4">{step.body}</p>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-[family-name:var(--font-rubik)] text-[#066599] font-medium">
                    <span className="w-4 h-4 rounded-full bg-[#E6F3FA] flex items-center justify-center flex-shrink-0"><CheckIcon /></span>
                    {step.detail}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-2 reveal">
              <a href="#" className="inline-flex items-center gap-2 px-7 py-[14px] bg-[#0D7A5F] text-white font-[family-name:var(--font-rubik)] font-semibold text-[15px] rounded-xl shadow-[0_2px_8px_rgba(13,122,95,0.25)] hover:bg-[#055240] hover:shadow-[0_6px_18px_rgba(13,122,95,0.3)] hover:-translate-y-px active:translate-y-px transition-all">Get a diagnostic <ArrowIcon /></a>
              <span className="text-[13px] text-[#8A8D8C]">Free to post — no card needed to see quotes</span>
            </div>
          </div>
        </section>

        {/* ── S4: What We Check ──────────────────────────────────── */}
        <section className="bg-[#FBFDFC] border-t border-[#DADCDB] py-24 md:py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[560px] mx-auto text-center mb-10 reveal">
              <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#066599] mb-3">What we diagnose</span>
              <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-3">If something&apos;s off, we&apos;ll find it.</h2>
              <p className="text-[#595C5B] text-[16px] leading-[1.7]">Whether it&apos;s a light on the dash or something you can only feel, our mechanics run the full check.</p>
            </div>

            {/* Warning lights cluster */}
            <div className="max-w-[860px] mx-auto mb-8 reveal">
              <span className="block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.08em] uppercase text-[#066599] mb-3 text-center">Warning lights</span>
              <div className="flex flex-wrap gap-3 justify-center">
                {warningLightTags.map((tag) => (
                  <span key={tag} className="inline-flex items-center px-4 py-2 bg-white border border-[#DADCDB] rounded-full text-[14px] font-[family-name:var(--font-rubik)] font-medium text-[#1A1E1D] shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:border-[#066599] hover:bg-[#E6F3FA] hover:text-[#066599] transition-all cursor-default">{tag}</span>
                ))}
              </div>
            </div>

            {/* Symptoms cluster */}
            <div className="max-w-[860px] mx-auto mb-8 reveal">
              <span className="block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.08em] uppercase text-[#066599] mb-3 text-center">Symptoms &amp; behaviours</span>
              <div className="flex flex-wrap gap-3 justify-center">
                {symptomTags.map((tag) => (
                  <span key={tag} className="inline-flex items-center px-4 py-2 bg-white border border-[#DADCDB] rounded-full text-[14px] font-[family-name:var(--font-rubik)] font-medium text-[#1A1E1D] shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:border-[#066599] hover:bg-[#E6F3FA] hover:text-[#066599] transition-all cursor-default">{tag}</span>
                ))}
              </div>
            </div>

            <div className="text-center reveal">
              <p className="text-[14.5px] text-[#595C5B] mb-6">Not on the list? Post it anyway. Describe what&apos;s happening and your mechanic will work it out.</p>
              <a href="#" className="inline-flex items-center gap-2 px-7 py-[14px] bg-[#0D7A5F] text-white font-[family-name:var(--font-rubik)] font-semibold text-[15px] rounded-xl shadow-[0_2px_8px_rgba(13,122,95,0.25)] hover:bg-[#055240] hover:shadow-[0_6px_18px_rgba(13,122,95,0.3)] hover:-translate-y-px active:translate-y-px transition-all">Post your diagnostic job</a>
            </div>
          </div>
        </section>

        {/* ── S5: Trust Signals ──────────────────────────────────── */}
        <section className="bg-[#F5F7F6] border-t border-[#DADCDB] py-24 md:py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[560px] mx-auto text-center mb-12 reveal">
              <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#066599] mb-3">Why trust our mechanics</span>
              <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-3">Not just a code reader and a guess.</h2>
              <p className="text-[#595C5B] text-[16px] leading-[1.7]">Every mechanic on Garage Gaffer is vetted — and our diagnostic mechanics know how to interpret what they find.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
              {trustBlocks.map((b) => (
                <div key={b.headline} className="bg-white border border-[#DADCDB] rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(13,122,95,0.12),0_4px_8px_rgba(0,0,0,0.06)] hover:-translate-y-[3px] transition-all duration-200 reveal">
                  <span className="w-11 h-11 rounded-xl bg-[#E6F3FA] text-[#066599] flex items-center justify-center mb-4">{b.icon}</span>
                  <h3 className="font-[family-name:var(--font-open-sans)] text-[16px] font-bold leading-[1.3] mb-2 text-[#1A1E1D]">{b.headline}</h3>
                  <p className="text-[13.5px] leading-[1.6] text-[#595C5B]">{b.body}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-[14px] text-[#595C5B] max-w-[540px] mx-auto reveal">A diagnostic job isn&apos;t a guess — it&apos;s a qualified mechanic doing their job properly.</p>
          </div>
        </section>

        {/* ── S6: What Happens After ─────────────────────────────── */}
        <section className="bg-[#FBFDFC] border-t border-[#DADCDB] py-24 md:py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              <div className="reveal">
                <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#066599] mb-3">After the check</span>
                <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-4">You&apos;ll know exactly what&apos;s wrong — and what to do next.</h2>
                <p className="text-[#595C5B] text-[16px] leading-[1.7] mb-3">When the diagnostic is done, your mechanic gives you a full rundown — what they found, what caused it, and what they recommend. In plain English.</p>
                <p className="text-[#595C5B] text-[16px] leading-[1.7] mb-6">If a repair is needed, you can book it directly through the platform. Same mechanic, same transparency, same fixed price.</p>
                <ul className="flex flex-col gap-2.5 list-none p-0">
                  {["No pressure to book a repair", "Full written summary of findings", "Repair quote included if work is needed"].map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-[14.5px] text-[#595C5B]">
                      <span className="w-5 h-5 rounded-full bg-[#E6F3FA] text-[#066599] flex items-center justify-center flex-shrink-0"><CheckIcon /></span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Diagnostic report card mockup */}
              <div className="reveal">
                <div className="bg-white border border-[#DADCDB] rounded-2xl shadow-[0_8px_24px_rgba(6,101,153,0.12),0_4px_8px_rgba(0,0,0,0.06)] overflow-hidden max-w-[420px] mx-auto md:mx-0">
                  <div className="bg-[#E6F3FA] border-b border-[#DADCDB] px-6 py-4 flex items-center justify-between">
                    <span className="font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#066599]">Diagnostic summary</span>
                    <span className="inline-flex items-center gap-1.5 bg-[#F9C339] text-[#1A1E1D] text-[11px] font-bold px-2.5 py-1 rounded-full">Fault found</span>
                  </div>
                  <div className="px-6 py-5">
                    <div className="mb-4">
                      <span className="block text-[11px] font-bold text-[#8A8D8C] uppercase tracking-wider mb-1">Finding</span>
                      <p className="text-[14px] font-semibold text-[#1A1E1D]">Engine management light — P0420</p>
                      <p className="text-[13px] text-[#595C5B] mt-1">Catalytic converter efficiency below threshold</p>
                    </div>
                    <div className="mb-4 pb-4 border-b border-[#DADCDB]">
                      <span className="block text-[11px] font-bold text-[#8A8D8C] uppercase tracking-wider mb-1">In plain English</span>
                      <p className="text-[14px] leading-[1.6] text-[#595C5B]">&ldquo;Your catalytic converter is worn and not working as efficiently as it should. It won&apos;t stop the car, but it&apos;ll fail an MOT and worsen fuel economy if left.&rdquo;</p>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="block text-[11px] font-bold text-[#8A8D8C] uppercase tracking-wider mb-1">Recommended</span>
                        <p className="text-[14px] font-semibold text-[#1A1E1D]">Cat converter replacement</p>
                      </div>
                      <span className="font-[family-name:var(--font-open-sans)] text-[20px] font-extrabold text-[#0D7A5F]">£220–£280</span>
                    </div>
                    <a href="#" className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#0D7A5F] text-white font-[family-name:var(--font-rubik)] font-semibold text-[14px] rounded-xl shadow-[0_2px_8px_rgba(13,122,95,0.25)] hover:bg-[#055240] hover:-translate-y-px active:translate-y-px transition-all">Book repair</a>
                    <p className="text-[12px] text-[#8A8D8C] text-center mt-2.5">Same mechanic. Fixed price. No surprises.</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-[14px] text-[#8A8D8C] mt-10 reveal">You only pay for the repair if you choose to go ahead. The diagnostic report is yours regardless.</p>
          </div>
        </section>

        {/* ── S7: Social Proof ──────────────────────────────────── */}
        <section className="bg-[#F5F7F6] border-t border-[#DADCDB] py-24 md:py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-10 reveal">
              <span className="inline-flex items-center gap-2 bg-white border border-[#DADCDB] px-5 py-2.5 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.08)] font-[family-name:var(--font-rubik)] text-[14px] font-semibold text-[#1A1E1D]">
                <span className="text-[#F9C339] text-[15px]">★★★★★</span>
                4.9 average across all completed Bristol diagnostics
              </span>
            </div>
            <div className="max-w-[560px] mx-auto text-center mb-10 reveal">
              <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#066599] mb-3">What Bristol drivers say</span>
              <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px]">They didn&apos;t know what was wrong. Now they do.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {reviews.map((r) => (
                <article key={r.name} className="bg-white border border-[#DADCDB] rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(13,122,95,0.12),0_4px_8px_rgba(0,0,0,0.06)] hover:-translate-y-[3px] transition-all duration-200 reveal">
                  <div className="flex gap-0.5 mb-3" aria-label="5 stars">{Array.from({ length: 5 }).map((_, i) => <StarFilled key={i} />)}</div>
                  <blockquote className="text-[14.5px] leading-[1.7] text-[#595C5B] mb-4">&ldquo;{r.quote}&rdquo;</blockquote>
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div>
                      <span className="font-[family-name:var(--font-open-sans)] text-[14px] font-bold text-[#1A1E1D] block">{r.name}</span>
                      <span className="text-[12.5px] text-[#8A8D8C]">{r.location}</span>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 bg-[#E6F3FA] text-[#066599] text-[12px] font-semibold font-[family-name:var(--font-rubik)] rounded-full">{r.tag}</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center reveal">
              <a href="#" className="inline-flex items-center gap-2 px-7 py-[14px] bg-[#0D7A5F] text-white font-[family-name:var(--font-rubik)] font-semibold text-[15px] rounded-xl shadow-[0_2px_8px_rgba(13,122,95,0.25)] hover:bg-[#055240] hover:shadow-[0_6px_18px_rgba(13,122,95,0.3)] hover:-translate-y-px active:translate-y-px transition-all">Get a diagnostic <ArrowIcon /></a>
            </div>
          </div>
        </section>

        {/* ── S8: FAQ ───────────────────────────────────────────── */}
        <DiagnosticsFAQ />

        {/* ── S9: Final CTA with compact widget ─────────────────── */}
        <section className="relative overflow-hidden bg-[#0A1412] py-20 md:py-14">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute w-[50%] h-[100%] top-0 left-1/2 -translate-x-1/2 bg-[radial-gradient(circle,rgba(6,101,153,0.15)_0%,transparent_65%)]" />
          </div>
          <div className="relative max-w-[1200px] mx-auto px-6 text-center">
            <div className="mb-8 reveal">
              <h2 className="font-[family-name:var(--font-open-sans)] text-[38px] md:text-[28px] font-extrabold leading-[1.1] tracking-[-1px] text-white mb-3">
                Not sure what&apos;s wrong? <span className="text-[#066599]">Let&apos;s find out.</span>
              </h2>
              <p className="text-white/60 text-[16px] md:text-[14.5px] leading-[1.65] max-w-[500px] mx-auto">Post your diagnostic job in two minutes. A vetted Bristol mechanic will come to you, run a full check, and give you a clear answer.</p>
            </div>
            <div className="max-w-[860px] mx-auto reveal">
              <DiagnosticsCompactWidget id="cta-diag" darkBg />
              <span className="block text-[12.5px] text-white/35 mt-3">Free to post · No card needed · Same-day slots available</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
