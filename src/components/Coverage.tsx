const zones = [
  "Clifton", "Redland", "Bedminster", "Southville",
  "Henleaze", "Bishopston", "Brislington", "Totterdown",
  "Fishponds", "St Werburghs",
];

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Coverage() {
  return (
    <section className="py-24 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-14 items-center">
          {/* Copy */}
          <div className="reveal">
            <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
              Our coverage
            </span>
            <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold tracking-[-0.5px] leading-[1.15]">
              Covering every corner of Bristol.
            </h2>
            <p className="text-[#595C5B] text-[16px] leading-[1.7] mt-3.5">
              From Clifton to Brislington, Henleaze to Bedminster — our mechanics are never more than a short drive away. We&apos;re adding new postcodes across BS1–BS16 every month, so if we&apos;re not in your street yet, we soon will be.
            </p>

            <ul className="mt-6 list-none p-0 grid grid-cols-2 gap-2" aria-label="Coverage zones">
              {zones.map((zone) => (
                <li key={zone} className="flex items-center gap-2 px-2.5 py-1.5 bg-[#ECF7EF] rounded-full text-[12.5px] font-semibold text-[#0D7A5F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D7A5F] flex-shrink-0" />
                  {zone}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex gap-3 flex-wrap">
              <a href="#quote" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D7A5F] text-white font-[family-name:var(--font-rubik)] font-semibold text-[14px] rounded-lg shadow-[0_2px_8px_rgba(13,122,95,0.25)] hover:bg-[#055240] hover:-translate-y-px transition-all">
                Check my postcode
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent text-[#0D7A5F] font-[family-name:var(--font-rubik)] font-semibold text-[14px] rounded-lg border-[1.5px] border-[#0D7A5F] hover:bg-[#ECF7EF] transition-all">
                See full coverage list
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative aspect-[1.1] bg-white border border-[#DADCDB] rounded-3xl p-6 shadow-[0_8px_24px_rgba(13,122,95,0.12),0_4px_8px_rgba(0,0,0,0.06)] overflow-hidden reveal" aria-label="Map of Bristol showing Garage Gaffer coverage">
            {/* Grid background */}
            <div className="absolute inset-0 opacity-35" style={{ backgroundImage: "linear-gradient(#DADCDB 1px, transparent 1px), linear-gradient(90deg, #DADCDB 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

            <svg className="relative w-full h-full z-10" viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="coverageGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0D7A5F" stopOpacity="0.18" />
                  <stop offset="70%" stopColor="#0D7A5F" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#0D7A5F" stopOpacity="0" />
                </radialGradient>
              </defs>
              {/* River */}
              <path d="M40 220 C 120 200, 180 240, 240 210 S 340 180, 380 200" stroke="#31A7A8" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.35" />
              <path d="M40 220 C 120 200, 180 240, 240 210 S 340 180, 380 200" stroke="#31A7A8" strokeWidth="2" strokeLinecap="round" fill="none" />
              {/* Coverage blob */}
              <path d="M90 140 C 80 100, 130 70, 180 75 S 290 60, 320 110 C 350 140, 340 200, 310 230 S 250 280, 200 285 S 120 270, 95 230 C 70 200, 100 180, 90 140 Z" fill="url(#coverageGrad)" stroke="#0D7A5F" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.85" />
              {/* Labels */}
              <g fontFamily="Rubik" fontSize="10" fontWeight="600" fill="#2B4C32">
                <text x="135" y="130">Clifton</text>
                <text x="215" y="115">Redland</text>
                <text x="260" y="165">Bishopston</text>
                <text x="150" y="250">Bedminster</text>
                <text x="230" y="245">Totterdown</text>
                <text x="290" y="215">Brislington</text>
                <text x="105" y="200">Southville</text>
              </g>
              {/* Dots */}
              <g fill="#0D7A5F" opacity="0.7">
                <circle cx="155" cy="140" r="3" /><circle cx="230" cy="125" r="3" /><circle cx="280" cy="175" r="3" />
                <circle cx="175" cy="260" r="3" /><circle cx="250" cy="255" r="3" /><circle cx="305" cy="225" r="3" />
                <circle cx="125" cy="210" r="3" />
              </g>
              {/* City marker */}
              <circle cx="200" cy="180" r="10" fill="#0D7A5F" opacity="0.15" />
              <circle cx="200" cy="180" r="5" fill="#0D7A5F" />
              <text x="210" y="184" fontFamily="Open Sans" fontSize="11" fontWeight="700" fill="#0A2B14">Bristol</text>
            </svg>

            {/* Animated pins */}
            {[
              { cls: "top-[32%] left-[42%]", delay: "animate-pin-pulse" },
              { cls: "top-[58%] left-[30%]", delay: "animate-pin-pulse-1" },
              { cls: "top-[48%] left-[62%]", delay: "animate-pin-pulse-2" },
            ].map((pin, i) => (
              <div key={i} className={`absolute ${pin.cls} z-20 w-8 h-8 rounded-full bg-[#0D7A5F] text-white flex items-center justify-center ${pin.delay}`} aria-hidden="true">
                <PinIcon />
              </div>
            ))}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 z-30 bg-white/94 backdrop-blur-sm border border-[#DADCDB] rounded-lg px-3 py-2 text-[11.5px] font-semibold text-[#595C5B] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0D7A5F]" />
              Garage Gaffer coverage zone
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
