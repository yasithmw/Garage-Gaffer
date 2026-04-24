const ic = "w-6 h-6";
const s = { fill: "none" as const, stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className={ic} aria-hidden="true" {...s}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const ScanIcon = () => (
  <svg viewBox="0 0 24 24" className={ic} aria-hidden="true" {...s}>
    <rect x="2" y="2" width="20" height="20" rx="2" />
    <path d="M7 10h10M7 14h6" />
    <circle cx="17" cy="14" r="1" />
  </svg>
);

export const DocIcon = () => (
  <svg viewBox="0 0 24 24" className={ic} aria-hidden="true" {...s}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

export const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className={ic} aria-hidden="true" {...s}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const ArrowIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const StarFilled = () => (
  <svg viewBox="0 0 24 24" fill="#F9C339" className="w-4 h-4" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
