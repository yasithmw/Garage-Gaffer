import { ArrowRightIcon } from "./SupportIcons";

const columnA = [
  { title: "How to post a job and get quotes", category: "Booking & Quotes" },
  { title: "Can I cancel after I've booked?", category: "Booking & Quotes" },
  { title: "What does the 12-month warranty cover?", category: "Warranty & Complaints" },
  { title: "How do I leave a review for my mechanic?", category: "My Mechanic" },
];

const columnB = [
  { title: "When and how do I pay?", category: "Payments" },
  { title: "The work didn't go well — what are my options?", category: "Warranty & Complaints" },
  { title: "How do I contact my mechanic before the job?", category: "My Mechanic" },
  { title: "I want to join as a mechanic — where do I start?", category: "Mechanic Onboarding" },
];

export default function PopularArticles() {
  const renderList = (items: typeof columnA) => (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <a
          key={i}
          href="#"
          className="group flex items-center justify-between py-4 border-b border-[#EAECEA] hover:bg-white/50 transition-all first:border-t"
        >
          <span className="font-[family-name:var(--font-rubik)] text-[15px] font-medium text-[#1A1E1D] group-hover:text-[#0D7A5F] transition-colors">
            {item.title}
          </span>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block font-[family-name:var(--font-rubik)] text-[11px] text-[#595C5B] bg-[#EAECEA] px-2.5 py-1 rounded-full">
              {item.category}
            </span>
            <ArrowRightIcon className="w-4 h-4 text-[#DADCDB] group-hover:text-[#0D7A5F] group-hover:translate-x-0.5 transition-all" />
          </div>
        </a>
      ))}
    </div>
  );

  return (
    <section className="bg-[#F5F7F6] py-24 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal mb-12">
          <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
            Most visited
          </span>
          <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold tracking-[-0.5px] leading-[1.15] text-[#1A1E1D]">
            Popular articles.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-x-16 gap-y-0 reveal">
          {renderList(columnA)}
          {renderList(columnB)}
        </div>
      </div>
    </section>
  );
}
