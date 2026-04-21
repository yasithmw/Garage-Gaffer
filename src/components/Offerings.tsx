const offerings = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px] text-[#0D7A5F]" strokeWidth={1.8}>
        <path d="M9 12l2 2 4-4" /><path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
      </svg>
    ),
    title: "Vetted, not just listed",
    desc: "Every Garage Gaffer mechanic is background-checked, qualification-verified, and insured. We rate them after every job — the ones who don't keep drivers smiling don't stay.",
    num: "01",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px] text-[#0D7A5F]" strokeWidth={1.8}>
        <path d="M3 9h2l3-6h8l3 6h2v9h-4a2 2 0 1 1-4 0H11a2 2 0 1 1-4 0H3V9z" /><circle cx="8" cy="18" r="1.5" /><circle cx="16" cy="18" r="1.5" />
      </svg>
    ),
    title: "At your door, on your schedule",
    desc: "Pick a time that suits your day. Your mechanic arrives at your home, office or kerb with everything they need — so your life doesn't grind to a halt around a garage appointment.",
    num: "02",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px] text-[#0D7A5F]" strokeWidth={1.8}>
        <path d="M3 7h18v3H3zM3 14h18v3H3z" /><path d="M7 4v3M17 4v3M7 17v3M17 17v3" />
      </svg>
    ),
    title: "Transparent pricing, zero surprises",
    desc: "You see the full price up front — parts, labour, VAT, the lot. If something changes on the day, we'll tell you before we lift a spanner. What we quote is what you pay.",
    num: "03",
  },
];

export default function Offerings() {
  return (
    <section className="py-24 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[640px] mb-12 reveal">
          <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
            Why Garage Gaffer
          </span>
          <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-3">
            A better way to look after your car.
          </h2>
          <p className="text-[#595C5B] text-[16px] leading-[1.7]">
            We&apos;ve stripped out the hassle you don&apos;t need — the awkward drop-offs, the jargon, the guessing games — and left the good stuff: trusted mechanics, clear prices, and work done where you are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {offerings.map((item) => (
            <article
              key={item.num}
              className="relative overflow-hidden bg-white border border-[#DADCDB] rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(13,122,95,0.12),0_4px_8px_rgba(0,0,0,0.06)] hover:border-[#0D7A5F] transition-all duration-200 reveal"
            >
              <div className="w-[52px] h-[52px] rounded-xl bg-[#ECF7EF] flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="font-[family-name:var(--font-open-sans)] text-[20px] font-bold mb-2.5">{item.title}</h3>
              <p className="text-[#595C5B] text-[14.5px] leading-[1.65]">{item.desc}</p>
              <span className="absolute right-4 bottom-[-8px] font-[family-name:var(--font-open-sans)] font-extrabold text-[96px] text-[#0D7A5F] opacity-[0.04] leading-none select-none">
                {item.num}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
