const services = [
  {
    accent: "#0D7A5F",
    well: "#ECF7EF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]" strokeWidth={1.8}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Repairs",
    desc: "Something not right? We fix the bumps, bangs, leaks and grumbles — big jobs and small — right where your car is parked.",
    bullets: ["Brakes, clutches, timing belts", "Battery, alternator, starter motor", "Suspension, exhaust, electrical"],
    cta: "Book a repair",
    num: "01",
  },
  {
    accent: "#066599",
    well: "#E6F3FA",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
      </svg>
    ),
    title: "Diagnostics",
    desc: "Engine light on? Weird noise? We plug in, figure out exactly what's going on, and explain it to you in words you'll actually understand.",
    bullets: ["Full OBD diagnostic scan", "Written report with next steps", "Quote on the spot — no pressure"],
    cta: "Book diagnostics",
    num: "02",
  },
  {
    accent: "#31A7A8",
    well: "#E4F6F6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]" strokeWidth={1.8}>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Servicing",
    desc: "Keep your car running sweet with interim and full services — carried out to manufacturer standards, without invalidating your warranty.",
    bullets: ["Interim service (every 6 months)", "Full service (every 12 months)", "Service book stamped, warranty safe"],
    cta: "Book a service",
    num: "03",
  },
];

export default function Services() {
  return (
    <section className="bg-[#FBFDFC] border-t border-b border-[#DADCDB] py-24 md:py-16" id="services">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[640px] mb-12 reveal">
          <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
            Our services
          </span>
          <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-3">
            Whatever your car needs, we&apos;ve got a mechanic for it.
          </h2>
          <p className="text-[#595C5B] text-[16px] leading-[1.7]">
            From a strange noise you can&apos;t quite place to your annual full service — book any of the below and we&apos;ll handle the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.num}
              className="relative overflow-hidden bg-white border border-[#DADCDB] rounded-2xl p-7 min-h-[260px] flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.08)] group hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(13,122,95,0.12),0_4px_8px_rgba(0,0,0,0.06)] transition-all duration-200 reveal"
              style={{ ["--accent" as string]: s.accent }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-t-2xl" style={{ background: s.accent }} />

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-[18px] border"
                style={{ background: s.well, borderColor: `color-mix(in srgb, ${s.accent} 15%, transparent)`, color: s.accent }}
              >
                {s.icon}
              </div>

              <h3 className="font-[family-name:var(--font-open-sans)] text-[21px] font-bold mb-2.5">{s.title}</h3>
              <p className="text-[#595C5B] text-[14.5px] leading-[1.6] flex-grow mb-[18px]">{s.desc}</p>

              <ul className="list-none p-0 mb-5 flex flex-col gap-0">
                {s.bullets.map((b) => (
                  <li key={b} className="text-[13.5px] text-[#595C5B] py-1 flex gap-2 items-start">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: s.accent }} />
                    {b}
                  </li>
                ))}
              </ul>

              <span className="inline-flex items-center gap-1.5 font-[family-name:var(--font-rubik)] font-semibold text-[12.5px] uppercase tracking-[0.06em] text-[#8A8D8C] group-hover:text-[var(--accent)] transition-colors">
                {s.cta}
                <span className="transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
              </span>

              <span className="absolute right-[18px] bottom-[-14px] font-[family-name:var(--font-open-sans)] font-extrabold text-[108px] opacity-[0.04] leading-none select-none" style={{ color: s.accent }}>
                {s.num}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
