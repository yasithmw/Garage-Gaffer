import { 
  CalendarCheckIcon, 
  CreditCardIcon, 
  MechanicIcon, 
  ShieldCheckIcon, 
  UserIcon, 
  ToolboxIcon,
  ArrowRightIcon 
} from "./SupportIcons";

const categories = [
  {
    title: "Booking & Quotes",
    description: "How to post a job, read quotes, book a mechanic, and change or cancel a booking.",
    icon: CalendarCheckIcon,
    href: "#help-booking",
  },
  {
    title: "Payments",
    description: "How payment works, what you're charged, invoices, and what to do if something doesn't look right.",
    icon: CreditCardIcon,
    href: "#help-payments",
  },
  {
    title: "My Mechanic",
    description: "Contacting your mechanic, understanding their profile, leaving a review, and reporting a problem.",
    icon: MechanicIcon,
    href: "#help-mechanic",
  },
  {
    title: "Warranty & Complaints",
    description: "What our 12-month workmanship warranty covers, how to make a claim, and how to raise a dispute.",
    icon: ShieldCheckIcon,
    href: "#help-warranty",
  },
  {
    title: "Account & Profile",
    description: "Updating your details, managing notifications, deleting your account, and sign-in issues.",
    icon: UserIcon,
    href: "#help-account",
  },
  {
    title: "Mechanic Onboarding",
    description: "For mechanics: how to join Garage Gaffer, what vetting involves, setting up your profile, and getting your first job.",
    icon: ToolboxIcon,
    href: "#help-onboarding",
    isMechanic: true,
  },
];

export default function SupportCategories() {
  return (
    <section className="bg-white py-24 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal mb-12">
          <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
            Browse by topic
          </span>
          <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold tracking-[-0.5px] leading-[1.15] text-[#1A1E1D]">
            Find what you need.
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {categories.map((cat, i) => (
            <a
              key={i}
              href={cat.href}
              className="group flex flex-col p-7 bg-white border border-[#DADCDB] rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(13,122,95,0.08),0_2px_4px_rgba(0,0,0,0.06)] transition-all duration-200 reveal"
            >
              <div className="mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#ECF7EF] text-[#0D7A5F] flex items-center justify-center">
                  <cat.icon className="w-6 h-6" />
                </div>
              </div>

              {cat.isMechanic && (
                <span className="font-[family-name:var(--font-rubik)] text-[11px] text-[#595C5B] mb-1 block">
                  For mechanics
                </span>
              )}

              <h3 className="font-[family-name:var(--font-open-sans)] text-[16px] font-bold text-[#1A1E1D] mb-2">
                {cat.title}
              </h3>
              <p className="font-[family-name:var(--font-rubik)] text-[13.5px] leading-[1.6] text-[#595C5B] mb-5 flex-grow">
                {cat.description}
              </p>
              
              <div className="flex items-center gap-1.5 font-[family-name:var(--font-rubik)] text-[14px] font-medium text-[#0D7A5F] group-hover:gap-2 transition-all">
                Browse articles
                <ArrowRightIcon className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
