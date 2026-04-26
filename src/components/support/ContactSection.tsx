import { ChatIcon, MailIcon } from "./SupportIcons";

export default function ContactSection() {
  return (
    <section className="bg-white py-24 md:py-16" id="help-contact">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[760px] mx-auto text-center mb-16 reveal">
          <span className="inline-block font-[family-name:var(--font-rubik)] text-[11px] font-bold tracking-[0.1em] uppercase text-[#0D7A5F] mb-3">
            Still need help?
          </span>
          <h2 className="font-[family-name:var(--font-open-sans)] text-[34px] font-extrabold tracking-[-0.5px] leading-[1.15] text-[#1A1E1D] mb-4">
            Get in touch.
          </h2>
          <p className="font-[family-name:var(--font-rubik)] text-[16px] text-[#595C5B]">
            We&apos;re a small team and we read every message. Pick the option that works best for you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-8 max-w-[1000px] mx-auto">
          {/* Left: Contact Form */}
          <div className="bg-white border border-[#DADCDB] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] reveal">
            <h3 className="font-[family-name:var(--font-open-sans)] text-[18px] font-bold text-[#1A1E1D] mb-2">
              Send us a message
            </h3>
            <p className="font-[family-name:var(--font-rubik)] text-[13.5px] text-[#595C5B] mb-8">
              We aim to respond within one working day. For booking or payment issues, include your booking reference — it speeds things up.
            </p>

            <form className="space-y-4">
              <div className="space-y-1.5">
                <label className="font-[family-name:var(--font-rubik)] text-[13px] font-semibold text-[#1A1E1D]">Your name</label>
                <input
                  type="text"
                  placeholder="First name and surname"
                  className="w-full bg-white border-[1.5px] border-[#DADCDB] rounded-lg py-2.5 px-3.5 font-[family-name:var(--font-rubik)] text-[14px] focus:outline-none focus:border-[#0D7A5F] focus:ring-3 focus:ring-[#0D7A5F]/12 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-[family-name:var(--font-rubik)] text-[13px] font-semibold text-[#1A1E1D]">Email address</label>
                <input
                  type="email"
                  placeholder="The one you used to sign up"
                  className="w-full bg-white border-[1.5px] border-[#DADCDB] rounded-lg py-2.5 px-3.5 font-[family-name:var(--font-rubik)] text-[14px] focus:outline-none focus:border-[#0D7A5F] focus:ring-3 focus:ring-[#0D7A5F]/12 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-[family-name:var(--font-rubik)] text-[13px] font-semibold text-[#1A1E1D]">What&apos;s it about?</label>
                <select className="w-full bg-white border-[1.5px] border-[#DADCDB] rounded-lg py-2.5 px-3.5 font-[family-name:var(--font-rubik)] text-[14px] focus:outline-none focus:border-[#0D7A5F] focus:ring-3 focus:ring-[#0D7A5F]/12 transition-all appearance-none">
                  <option>Select a topic</option>
                  <option>Booking or cancellation</option>
                  <option>Payment query</option>
                  <option>Problem with a job</option>
                  <option>Complaint about a job</option>
                  <option>Warranty claim</option>
                  <option>Account or sign-in issue</option>
                  <option>Mechanic account or onboarding</option>
                  <option>Something else</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-[family-name:var(--font-rubik)] text-[13px] font-semibold text-[#1A1E1D]">Booking reference (if relevant)</label>
                <input
                  type="text"
                  placeholder="e.g. GG-20260425-001"
                  className="w-full bg-white border-[1.5px] border-[#DADCDB] rounded-lg py-2.5 px-3.5 font-[family-name:var(--font-rubik)] text-[14px] focus:outline-none focus:border-[#0D7A5F] focus:ring-3 focus:ring-[#0D7A5F]/12 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-[family-name:var(--font-rubik)] text-[13px] font-semibold text-[#1A1E1D]">Your message</label>
                <textarea
                  placeholder="Tell us what&apos;s happened and we&apos;ll sort it out"
                  rows={4}
                  className="w-full bg-white border-[1.5px] border-[#DADCDB] rounded-lg py-2.5 px-3.5 font-[family-name:var(--font-rubik)] text-[14px] focus:outline-none focus:border-[#0D7A5F] focus:ring-3 focus:ring-[#0D7A5F]/12 transition-all resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full py-4 bg-[#0D7A5F] text-white font-[family-name:var(--font-rubik)] font-semibold text-[15px] rounded-xl shadow-[0_2px_8px_rgba(13,122,95,0.25)] hover:bg-[#055240] transition-all"
              >
                Send message
              </button>
              
              <p className="text-center font-[family-name:var(--font-rubik)] text-[12px] text-[#9BA0A0]">
                We&apos;ll reply to your email address. Response time: within 1 working day.
              </p>
            </form>
          </div>

          {/* Right: Other Options */}
          <div className="bg-white border border-[#DADCDB] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] reveal h-fit">
            <h3 className="font-[family-name:var(--font-open-sans)] text-[18px] font-bold text-[#1A1E1D] mb-6">
              Other ways to reach us
            </h3>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#ECF7EF] text-[#0D7A5F] flex items-center justify-center flex-shrink-0">
                  <ChatIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-[family-name:var(--font-open-sans)] text-[15px] font-bold text-[#1A1E1D]">Live chat</h4>
                    <span className="bg-[#ECF7EF] text-[#0D7A5F] px-2 py-0.5 rounded-full font-[family-name:var(--font-rubik)] text-[11px] font-medium">Online now</span>
                  </div>
                  <p className="font-[family-name:var(--font-rubik)] text-[13.5px] leading-[1.6] text-[#595C5B] mb-4">
                    If live chat is shown as available below, someone is online and will respond in minutes.
                  </p>
                  <button className="w-full py-2.5 bg-transparent border-[1.5px] border-[#DADCDB] text-[#1A1E1D] font-[family-name:var(--font-rubik)] font-semibold text-[14px] rounded-lg hover:bg-[#F5F7F6] transition-all">
                    Start a chat
                  </button>
                </div>
              </div>

              <hr className="border-[#EAECEA]" />

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#ECF7EF] text-[#0D7A5F] flex items-center justify-center flex-shrink-0">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-open-sans)] text-[15px] font-bold text-[#1A1E1D] mb-1">Email us directly</h4>
                  <p className="font-[family-name:var(--font-rubik)] text-[13.5px] leading-[1.6] text-[#595C5B] mb-3">
                    Prefer to email? Reach us at:
                  </p>
                  <a href="mailto:support@garagegaffer.co.uk" className="font-[family-name:var(--font-rubik)] text-[14px] font-medium text-[#0D7A5F] hover:underline">
                    support@garagegaffer.co.uk
                  </a>
                  <p className="font-[family-name:var(--font-rubik)] text-[12px] text-[#9BA0A0] mt-1">
                    Same 1 working day response as the form.
                  </p>
                </div>
              </div>

              <hr className="border-[#EAECEA]" />

              <div className="bg-[#FBFDFC] border border-[#DADCDB] rounded-xl p-5">
                <p className="font-[family-name:var(--font-rubik)] text-[13px] leading-[1.6] text-[#595C5B]">
                  We&apos;re based in Bristol and keep normal working hours — Monday to Friday, 8am to 6pm. Anything that comes in outside those hours will get a reply the following morning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
