"use client";

import { useState } from "react";

const WrenchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 transition-transform duration-200">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    iconBg: "bg-[#ECF7EF] text-[#0D7A5F]",
    title: "Repairs",
    desc: "Fix anything from a dodgy starter to a noisy clutch.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
    iconBg: "bg-[#E6F3FA] text-[#066599]",
    title: "Diagnostics",
    desc: "Warning light on? We'll tell you exactly what's up.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    iconBg: "bg-[#E4F6F6] text-[#31A7A8]",
    title: "Servicing",
    desc: "Keep your car happy with interim and full services.",
  },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/88 backdrop-saturate-180 backdrop-blur-[14px] border-b border-[#DADCDB]">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-6 h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 font-[family-name:var(--font-open-sans)] font-extrabold text-[17px] tracking-[-0.3px] text-[#1A1E1D]">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0D7A5F] to-[#055240] flex items-center justify-center shadow-[0_4px_10px_rgba(13,122,95,0.3)] text-white">
            <WrenchIcon />
          </span>
          Garage Gaffer
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 ml-7" aria-label="Primary">
          {/* Services dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg font-[family-name:var(--font-rubik)] font-medium text-[13.5px] text-[#595C5B] hover:bg-[#F5F7F6] hover:text-[#1A1E1D] transition-colors">
              Our Services
              <span className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}>
                <ChevronDown />
              </span>
            </button>
            {servicesOpen && (
              <div className="absolute top-[calc(100%+8px)] left-0 bg-white border border-[#DADCDB] rounded-xl shadow-[0_8px_24px_rgba(13,122,95,0.12),0_4px_8px_rgba(0,0,0,0.06)] min-w-[240px] p-2">
                {services.map((s) => (
                  <a key={s.title} href="#services" className="flex gap-3 items-start p-2.5 rounded-lg hover:bg-[#ECF7EF] transition-colors">
                    <span className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${s.iconBg}`}>
                      {s.icon}
                    </span>
                    <span>
                      <strong className="block text-[13.5px] font-semibold text-[#1A1E1D] font-[family-name:var(--font-rubik)]">{s.title}</strong>
                      <span className="block text-[12.5px] text-[#595C5B] mt-0.5">{s.desc}</span>
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {["How It Works", "About Us", "Become a Mechanic", "Support"].map((label) => {
            const hrefs: Record<string, string> = {
              "How It Works": "#how",
              "About Us": "#about",
              "Become a Mechanic": "#mechanics",
              "Support": "#support",
            };
            return (
              <a key={label} href={hrefs[label]} className="px-3 py-2 rounded-lg font-[family-name:var(--font-rubik)] font-medium text-[13.5px] text-[#595C5B] hover:bg-[#F5F7F6] hover:text-[#1A1E1D] transition-colors">
                {label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2 ml-auto">
          <button className="px-3.5 py-1.5 rounded-lg text-[13px] font-semibold font-[family-name:var(--font-rubik)] text-[#595C5B] hover:bg-[#F5F7F6] hover:text-[#1A1E1D] transition-colors">
            Sign In
          </button>
          <a href="#quote" className="px-3.5 py-1.5 rounded-lg text-[13px] font-semibold font-[family-name:var(--font-rubik)] bg-[#0D7A5F] text-white shadow-[0_2px_8px_rgba(13,122,95,0.25)] hover:bg-[#055240] hover:shadow-[0_6px_18px_rgba(13,122,95,0.3)] hover:-translate-y-px transition-all">
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto w-10 h-10 flex items-center justify-center rounded-lg text-[#1A1E1D] hover:bg-[#F5F7F6] transition-colors"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#DADCDB] bg-white px-6 py-4 flex flex-col gap-2">
          <a href="#services" className="py-2 text-[15px] font-medium text-[#1A1E1D]" onClick={() => setMobileOpen(false)}>Our Services</a>
          <a href="#how" className="py-2 text-[15px] font-medium text-[#1A1E1D]" onClick={() => setMobileOpen(false)}>How It Works</a>
          <a href="#about" className="py-2 text-[15px] font-medium text-[#1A1E1D]" onClick={() => setMobileOpen(false)}>About Us</a>
          <a href="#mechanics" className="py-2 text-[15px] font-medium text-[#1A1E1D]" onClick={() => setMobileOpen(false)}>Become a Mechanic</a>
          <a href="#support" className="py-2 text-[15px] font-medium text-[#1A1E1D]" onClick={() => setMobileOpen(false)}>Support</a>
          <div className="flex gap-3 mt-2 pt-2 border-t border-[#DADCDB]">
            <button className="flex-1 py-2.5 rounded-lg text-[14px] font-semibold text-[#595C5B] border border-[#DADCDB]">Sign In</button>
            <a href="#quote" className="flex-1 py-2.5 rounded-lg text-[14px] font-semibold text-center bg-[#0D7A5F] text-white" onClick={() => setMobileOpen(false)}>Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
