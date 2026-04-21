import QuoteWidget from "./QuoteWidget";

const checks = ["30-second quote", "Same-day slots", "12-month warranty"];

export default function CTARepeat() {
  return (
    <section className="py-24 md:py-16 bg-gradient-to-b from-[#F5F7F6] to-[#F3FFE3]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#2B4C32] to-[#0A2B14] rounded-3xl p-14 md:p-8 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-12 items-center text-white">
          {/* Background glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-1/2 h-full top-0 right-0 bg-[radial-gradient(circle_at_100%_0%,rgba(49,167,168,0.25)_0%,transparent_50%)]" />
            <div className="absolute w-1/2 h-full bottom-0 left-0 bg-[radial-gradient(circle_at_0%_100%,rgba(13,122,95,0.3)_0%,transparent_50%)]" />
          </div>

          {/* Copy */}
          <div className="relative">
            <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#95D9B8] mb-3">
              Ready when you are
            </span>
            <h2 className="font-[family-name:var(--font-open-sans)] text-[36px] md:text-[28px] font-extrabold leading-[1.15] tracking-[-0.8px] text-white mb-3.5">
              Your car, sorted — without leaving your driveway.
            </h2>
            <p className="text-[16px] leading-[1.65] text-white/80">
              Pop in your details and see what a vetted Garage Gaffer mechanic would charge. No card, no commitment, no awkward phone calls.
            </p>
            <div className="flex gap-[18px] mt-6 flex-wrap">
              {checks.map((c) => (
                <div key={c} className="flex items-center gap-1.5 text-[#95D9B8] text-[13px]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {c}
                </div>
              ))}
            </div>
          </div>

          {/* Quote widget */}
          <div className="relative z-10">
            <QuoteWidget idSuffix="2" />
          </div>
        </div>
      </div>
    </section>
  );
}
