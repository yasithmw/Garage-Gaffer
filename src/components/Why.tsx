const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const whyItems = [
  {
    title: "Bristol-born, Bristol-focused",
    desc: "We know the city's roads, postcodes and car parks. Our mechanics live and work here too.",
  },
  {
    title: "Trust, earned every job",
    desc: "Vetting gets a mechanic onto the platform. Ratings and re-bookings are what keep them here.",
  },
  {
    title: "Plain-English answers",
    desc: "No technical waffle. We tell you what's wrong, what it costs, and why — before we start.",
  },
];

export default function Why() {
  return (
    <section className="relative bg-gradient-to-b from-[#F5F7F6] to-[#F3FFE3] py-24 md:py-16" id="about">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-16 items-center">
          {/* Visual */}
          <div className="relative aspect-square max-w-[440px] bg-white rounded-3xl p-6 border border-[#DADCDB] shadow-[0_8px_24px_rgba(13,122,95,0.12),0_4px_8px_rgba(0,0,0,0.06)] overflow-hidden mx-auto md:mx-0 reveal" aria-hidden="true">
            {/* Mechanic illustration */}
            <div className="absolute inset-6 rounded-2xl bg-gradient-to-br from-[#ECF7EF] to-[#F3FFE3] flex items-center justify-center">
              <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
                <circle cx="80" cy="80" r="78" stroke="#0D7A5F" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                <circle cx="80" cy="60" r="22" fill="#0D7A5F" />
                <path d="M40 130c0-22 18-36 40-36s40 14 40 36" fill="#055240" />
                <rect x="66" y="58" width="28" height="4" rx="2" fill="#fff" />
                <circle cx="73" cy="58" r="2" fill="#fff" />
                <circle cx="87" cy="58" r="2" fill="#fff" />
                <path d="M58 98l8 8M102 98l-8 8" stroke="#F9C339" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Floating stats */}
            <div className="absolute top-5 left-5 bg-white border border-[#DADCDB] rounded-xl px-4 py-3 shadow-[0_4px_12px_rgba(13,122,95,0.08)] flex items-center gap-2.5 animate-float-1">
              <span className="w-8 h-8 rounded-lg bg-[#0D7A5F] flex items-center justify-center text-white flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20 6L9 17l-5-5" /></svg>
              </span>
              <div>
                <strong className="font-[family-name:var(--font-open-sans)] text-[14px] font-bold block">DBS checked</strong>
                <span className="text-[11.5px] text-[#595C5B]">Every mechanic</span>
              </div>
            </div>

            <div className="absolute bottom-7 right-5 bg-white border border-[#DADCDB] rounded-xl px-4 py-3 shadow-[0_4px_12px_rgba(13,122,95,0.08)] flex items-center gap-2.5 animate-float-2">
              <span className="w-8 h-8 rounded-lg bg-[#066599] flex items-center justify-center text-white flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </span>
              <div>
                <strong className="font-[family-name:var(--font-open-sans)] text-[14px] font-bold block">Fixed prices</strong>
                <span className="text-[11.5px] text-[#595C5B]">No surprise bills</span>
              </div>
            </div>

            <div className="absolute top-1/2 right-[-10px] bg-white border border-[#DADCDB] rounded-xl px-4 py-3 shadow-[0_4px_12px_rgba(13,122,95,0.08)] flex items-center gap-2.5 animate-float-3">
              <span className="w-8 h-8 rounded-lg bg-[#31A7A8] flex items-center justify-center text-white flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
              </span>
              <div>
                <strong className="font-[family-name:var(--font-open-sans)] text-[14px] font-bold block">Same-day</strong>
                <span className="text-[11.5px] text-[#595C5B]">Bookings available</span>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="reveal">
            <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
              About us
            </span>
            <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold tracking-[-0.5px] leading-[1.15]">
              We&apos;re mechanics and neighbours first, a platform second.
            </h2>
            <p className="text-[#595C5B] text-[16px] leading-[1.7] mt-3.5">
              Garage Gaffer started in Bristol with one simple idea: find the mechanics already doing brilliant work in their communities, and give local drivers an easy way to book them. No call centres. No pushy upsells. Just real people, fair prices, and proper workmanship.
            </p>

            <ul className="mt-7 list-none p-0 flex flex-col">
              {whyItems.map((item, i) => (
                <li key={i} className={`flex gap-3.5 py-4 ${i < whyItems.length - 1 ? "border-b border-[#DADCDB]" : ""}`}>
                  <span className="w-7 h-7 rounded-full bg-[#ECF7EF] text-[#0D7A5F] flex items-center justify-center flex-shrink-0">
                    <CheckIcon />
                  </span>
                  <div>
                    <strong className="font-[family-name:var(--font-open-sans)] block text-[16px] font-bold mb-0.5">{item.title}</strong>
                    <span className="text-[14px] text-[#595C5B] leading-[1.55]">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
