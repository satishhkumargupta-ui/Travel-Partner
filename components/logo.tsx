type Props = { className?: string }

export function WanderlightLogo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 72 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Wanderlight"
    >
      <defs>
        {/* Golden dome gradient — light top, rich base */}
        <linearGradient id="wlDome" x1="36" y1="6" x2="36" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#F0DC80"/>
          <stop offset="55%"  stopColor="#C9A84C"/>
          <stop offset="100%" stopColor="#9A7428"/>
        </linearGradient>
      </defs>

      {/* ════════════════════════════════════
          HIMALAYAS — medium navy, peek from
          left and right behind the Taj dome
      ════════════════════════════════════ */}
      {/* Left range: 3 peaks */}
      <path
        d="M0,56 L8,28 L14,38 L20,20 L26,32 L28,56 Z"
        fill="#1A3561" opacity="0.80"
      />
      {/* Right range (mirror) */}
      <path
        d="M44,56 L46,32 L52,20 L58,38 L64,28 L72,56 Z"
        fill="#1A3561" opacity="0.80"
      />
      {/* Snow cap dots on highest peaks */}
      <circle cx="20" cy="20" r="2"   fill="#DDEEFF" opacity="0.70"/>
      <circle cx="52" cy="20" r="2"   fill="#DDEEFF" opacity="0.70"/>
      <circle cx="8"  cy="28" r="1.4" fill="#DDEEFF" opacity="0.50"/>
      <circle cx="64" cy="28" r="1.4" fill="#DDEEFF" opacity="0.50"/>

      {/* ════════════════════════════════════
          PLATFORM / PLINTH (3 tiers)
      ════════════════════════════════════ */}
      <rect x="6"  y="60" width="60" height="4" rx="0.8" fill="#0B1F3A"/>
      <rect x="12" y="56" width="48" height="4" rx="0.6" fill="#0B1F3A"/>

      {/* ════════════════════════════════════
          TAJ MAHAL BODY with iwān arch cutout
      ════════════════════════════════════ */}
      <path
        fillRule="evenodd"
        d="M22,56 L22,44 L50,44 L50,56 Z
           M30,56 L30,50 C30,46 33,44 36,43.2
           C39,44 42,46 42,50 L42,56 Z"
        fill="#0B1F3A"
      />

      {/* ════════════════════════════════════
          LEFT MINARET
      ════════════════════════════════════ */}
      <rect x="12" y="22" width="3" height="34" fill="#0B1F3A"/>
      {/* Octagonal minaret dome */}
      <path d="M12,22 C12,19 13.5,16 13.5,15 C13.5,16 15,19 15,22 Z" fill="#0B1F3A"/>
      {/* Balcony ring */}
      <rect x="10.5" y="37" width="6" height="1.5" rx="0.6" fill="#0B1F3A"/>

      {/* ════════════════════════════════════
          RIGHT MINARET
      ════════════════════════════════════ */}
      <rect x="57" y="22" width="3" height="34" fill="#0B1F3A"/>
      <path d="M57,22 C57,19 58.5,16 58.5,15 C58.5,16 60,19 60,22 Z" fill="#0B1F3A"/>
      <rect x="55.5" y="37" width="6" height="1.5" rx="0.6" fill="#0B1F3A"/>

      {/* ════════════════════════════════════
          MAIN TAJ DOME (iconic onion shape)
          Gold gradient fill
      ════════════════════════════════════ */}
      <path
        d="M26,44
           C22,38 18,32 20,24
           C22,16 28,10 36,6
           C44,10 50,16 52,24
           C54,32 50,38 46,44 Z"
        fill="url(#wlDome)"
      />
      {/* Dome sheen line */}
      <path
        d="M26,44 C22,38 18,32 20,24 C22,16 28,10 36,6 C44,10 50,16 52,24 C54,32 50,38 46,44"
        stroke="#F8ECA0" strokeWidth="0.45" fill="none" strokeOpacity="0.40"
      />

      {/* ════════════════════════════════════
          AIRPLANE FINIAL at dome apex
          (replaces traditional thamam —
           saffron, top-down airplane silhouette)
      ════════════════════════════════════ */}
      {/* Fuselage */}
      <line x1="36" y1="1.5" x2="36" y2="6"
            stroke="#E8902A" strokeWidth="1.8" strokeLinecap="round"/>
      {/* Main wings */}
      <line x1="32" y1="3.8" x2="40" y2="3.8"
            stroke="#E8902A" strokeWidth="1.1" strokeLinecap="round"/>
      {/* Tail fins */}
      <line x1="34.3" y1="5.6" x2="37.7" y2="5.6"
            stroke="#E8902A" strokeWidth="0.7" strokeLinecap="round"/>

      {/* ════════════════════════════════════
          SAFFRON FLIGHT ARC
          Dashed arc from city to city —
          sweeps over the full composition
      ════════════════════════════════════ */}
      <path
        d="M7,62 Q36,10 65,62"
        stroke="#E8902A" strokeWidth="1.2"
        strokeDasharray="3 2.2" fill="none"
      />
      {/* Departure city dot */}
      <circle cx="7" cy="62" r="1.8" fill="#E8902A"/>
      {/* Arrival arrowhead / plane */}
      <polygon points="68.5,62 63.5,59.5 63.5,64.5" fill="#E8902A"/>

      {/* ════════════════════════════════════
          KERALA BACKWATERS — teal wave pair
          at the very bottom of composition
      ════════════════════════════════════ */}
      <path
        d="M2,66 Q18,63 36,66 Q54,69 70,66"
        stroke="#009688" strokeWidth="1.3" fill="none"
      />
      <path
        d="M6,68.2 Q22,66 36,68.2 Q50,70.4 66,68.2"
        stroke="#009688" strokeWidth="0.6" fill="none" strokeOpacity="0.55"
      />
    </svg>
  )
}
