const steps = [
  {
    num: "1",
    title: "Tell us about your car",
    desc: "Pop in your postcode, reg, and what you think is wrong. Takes about 30 seconds, no sign-up needed.",
  },
  {
    num: "2",
    title: "See your fixed price",
    desc: "We'll match you with a vetted local mechanic and show you the all-in price — parts, labour, VAT.",
  },
  {
    num: "3",
    title: "Pick a time that suits",
    desc: "Same day, weekends, early mornings — whatever fits. Your mechanic confirms within the hour.",
  },
  {
    num: "4",
    title: "Sit back, we'll sort it",
    desc: "Your mechanic arrives kitted out, gets the job done on your drive, and sends you a receipt. Sorted.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-16" id="how">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[640px] mb-12 reveal">
          <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
            How it works
          </span>
          <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold leading-[1.15] tracking-[-0.5px] mb-3">
            From problem to fixed, in four simple steps.
          </h2>
          <p className="text-[#595C5B] text-[16px] leading-[1.7]">
            Booking a mobile mechanic should feel as easy as ordering a takeaway. Here&apos;s exactly what happens after you tap &quot;Get my price&quot;.
          </p>
        </div>

        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-7">
          {/* Dashed connector line (desktop only) */}
          <div className="hidden md:block absolute left-[5%] right-[5%] top-8 h-0.5 bg-[repeating-linear-gradient(to_right,#0D7A5F_0,#0D7A5F_7px,transparent_7px,transparent_14px)] opacity-30 z-0" />

          {steps.map((step) => (
            <div key={step.num} className="relative z-10 text-left group reveal">
              <div className="w-16 h-16 rounded-full bg-white text-[#0D7A5F] border-2 border-[#0D7A5F] flex items-center justify-center font-[family-name:var(--font-open-sans)] font-extrabold text-[22px] mb-5 shadow-[0_0_0_6px_#F5F7F6] group-hover:bg-[#0D7A5F] group-hover:text-white group-hover:scale-105 transition-all duration-200">
                {step.num}
              </div>
              <h3 className="font-[family-name:var(--font-open-sans)] text-[18px] font-bold mb-2">{step.title}</h3>
              <p className="text-[14px] leading-[1.6] text-[#595C5B]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
