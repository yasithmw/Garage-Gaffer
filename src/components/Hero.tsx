import QuoteWidget from "./QuoteWidget";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F3FFE3] to-[#F5F7F6] py-[72px] pb-24 md:py-12 md:pb-16">
      {/* radial glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-[50%] h-[50%] top-[0%] left-[-5%] bg-[radial-gradient(circle,rgba(13,122,95,0.08)_0%,transparent_60%)]" />
        <div className="absolute w-[50%] h-[50%] top-[40%] right-[-5%] bg-[radial-gradient(circle,rgba(49,167,168,0.06)_0%,transparent_60%)]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-14 items-center">
          {/* Copy */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 bg-white border border-[#DADCDB] pl-1.5 pr-3.5 py-1.5 rounded-full text-[12.5px] font-semibold text-[#1A1E1D] mb-5 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
              <span className="inline-flex items-center gap-1 bg-[#0D7A5F] text-white text-[10.5px] font-bold uppercase tracking-[0.05em] px-2 py-0.5 rounded-full">
                New
              </span>
              Now serving all of Bristol &amp; surrounds
            </div>

            <h1 className="font-[family-name:var(--font-open-sans)] text-[56px] md:text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] md:tracking-[-1px] mb-5">
              A trusted{" "}
              <span className="relative text-[#0D7A5F]">
                local mechanic
                <span className="absolute left-0 right-0 bottom-1 h-2.5 bg-[#F3FFE3] -z-10 rounded skew-x-[-4deg]" />
              </span>
              , parked on your driveway.
            </h1>

            <p className="text-[17px] md:text-[15.5px] leading-[1.6] text-[#595C5B] max-w-[520px] mb-7">
              Garage Gaffer brings carefully vetted mobile mechanics to your door across Bristol. No garage waiting rooms, no surprise bills — just honest work from people who actually know your car.
            </p>

            <div className="flex gap-3 items-center mb-8 flex-wrap">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 px-7 py-[14px] bg-[#0D7A5F] text-white font-[family-name:var(--font-rubik)] font-semibold text-[15px] rounded-xl shadow-[0_2px_8px_rgba(13,122,95,0.25)] hover:bg-[#055240] hover:shadow-[0_6px_18px_rgba(13,122,95,0.3)] hover:-translate-y-px active:translate-y-px transition-all"
              >
                Get my price
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 px-7 py-[14px] bg-transparent text-[#0D7A5F] font-[family-name:var(--font-rubik)] font-semibold text-[15px] rounded-xl border-[1.5px] border-[#0D7A5F] hover:bg-[#ECF7EF] transition-all"
              >
                See how it works
              </a>
            </div>

            <div className="flex gap-7 pt-6 border-t border-[#DADCDB] flex-wrap gap-y-4">
              <div className="flex flex-col gap-0.5">
                <strong className="font-[family-name:var(--font-open-sans)] text-[22px] font-extrabold text-[#2B4C32]">
                  4.9<span className="text-[#F9C339] ml-1 tracking-[1px]">★</span>
                </strong>
                <span className="text-[12.5px] text-[#595C5B]">From 1,200+ Bristol drivers</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <strong className="font-[family-name:var(--font-open-sans)] text-[22px] font-extrabold text-[#2B4C32]">100%</strong>
                <span className="text-[12.5px] text-[#595C5B]">DVSA-checked mechanics</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <strong className="font-[family-name:var(--font-open-sans)] text-[22px] font-extrabold text-[#2B4C32]">12-month</strong>
                <span className="text-[12.5px] text-[#595C5B]">Warranty on every fix</span>
              </div>
            </div>
          </div>

          {/* Quote widget */}
          <div className="reveal" id="quote">
            <QuoteWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
