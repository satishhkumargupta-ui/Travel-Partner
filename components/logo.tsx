type Props = { className?: string }

export function WanderlightLogo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Wanderlight"
    >
      {/* Globe grid */}
      <path d="M20 5 Q13 20 20 35" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.28" fill="none"/>
      <path d="M20 5 Q27 20 20 35" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.28" fill="none"/>
      <line x1="5" y1="20" x2="35" y2="20" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.28"/>
      <path d="M8.5 14 Q20 10.5 31.5 14" stroke="currentColor" strokeWidth="0.65" strokeOpacity="0.18" fill="none"/>
      <path d="M8.5 26 Q20 29.5 31.5 26" stroke="currentColor" strokeWidth="0.65" strokeOpacity="0.18" fill="none"/>

      {/* Globe outline */}
      <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1.5"/>

      {/* Dashed flight arc — SW to NE across the globe */}
      <path
        d="M9 29 Q18 5 31 11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray="2.5 2.5"
        fill="none"
        strokeOpacity="0.85"
      />

      {/* Destination dot (NE / arrival) */}
      <circle cx="31" cy="11" r="2.4" fill="currentColor"/>

      {/* Departure dot (SW) */}
      <circle cx="9" cy="29" r="1.6" fill="currentColor" opacity="0.55"/>

      {/* 4-pointed north star above the globe */}
      <path
        d="M20 0.5 L20.85 2.65 L23 3.5 L20.85 4.35 L20 6.5 L19.15 4.35 L17 3.5 L19.15 2.65 Z"
        fill="currentColor"
      />
    </svg>
  )
}
