type Props = { className?: string }

export function WanderlightLogo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 80 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Wanderlight"
    >
      <defs>
        {/* Warm tropical sunset sky */}
        <linearGradient id="wlSky" x1="0" y1="0" x2="0" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#B03520"/>
          <stop offset="45%"  stopColor="#E8621A"/>
          <stop offset="100%" stopColor="#F5A000"/>
        </linearGradient>
        {/* Radial sun-glow bloom over sky */}
        <radialGradient id="wlBloom" cx="40" cy="42" r="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FFE680" stopOpacity="0.85"/>
          <stop offset="35%"  stopColor="#FFB300" stopOpacity="0.40"/>
          <stop offset="100%" stopColor="#E8621A" stopOpacity="0"/>
        </radialGradient>
        {/* Deep tropical ocean */}
        <linearGradient id="wlSea" x1="0" y1="42" x2="0" y2="66" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#007C91"/>
          <stop offset="100%" stopColor="#00414E"/>
        </linearGradient>
        {/* Clip sun rays to sky */}
        <clipPath id="wlSky">
          <rect x="0" y="0" width="80" height="42"/>
        </clipPath>
      </defs>

      {/* ════ SKY ════ */}
      <rect x="0" y="0" width="80" height="42" fill="url(#wlSky)"/>
      {/* Warm glow bloom centred on sun */}
      <rect x="0" y="0" width="80" height="42" fill="url(#wlBloom)"/>

      {/* ── Sunrays (clipped, golden, subtle) ── */}
      <g clipPath="url(#wlSky)" stroke="#FFD700" strokeWidth="1.3" strokeOpacity="0.36" strokeLinecap="round">
        <line x1="40" y1="42" x2="40" y2="2"/>
        <line x1="40" y1="42" x2="16" y2="10"/>
        <line x1="40" y1="42" x2="64" y2="10"/>
        <line x1="40" y1="42" x2="4"  y2="24"/>
        <line x1="40" y1="42" x2="76" y2="24"/>
        <line x1="40" y1="42" x2="0"  y2="38"/>
        <line x1="40" y1="42" x2="80" y2="38"/>
      </g>

      {/* ════ SETTING SUN (golden semicircle at horizon) ════ */}
      {/* Outer corona ring */}
      <path d="M18,42 A22,22 0 0 1 62,42 Z" fill="#FFB300" opacity="0.45"/>
      {/* Main sun disc */}
      <path d="M22,42 A18,18 0 0 1 58,42 Z" fill="#FFD700"/>
      {/* Inner bright highlight */}
      <path d="M26,42 A14,14 0 0 1 54,42 Z" fill="#FFF9C4" opacity="0.55"/>

      {/* ════ OCEAN ════ */}
      <rect x="0" y="42" width="80" height="24" fill="url(#wlSea)"/>

      {/* Sun reflection shimmer on water (tapered golden pillar) */}
      <path d="M37,42 L34,62 L40,66 L46,62 L43,42 Z" fill="#FFD700" opacity="0.13"/>

      {/* ── Wave 1 — light cyan band just below horizon ── */}
      <path
        d="M0,50 Q10,46 20,50 Q30,54 40,50 Q50,46 60,50 Q70,54 80,50
           L80,42 L0,42 Z"
        fill="#4DD0E1" opacity="0.55"
      />
      <path
        d="M0,50 Q10,46 20,50 Q30,54 40,50 Q50,46 60,50 Q70,54 80,50"
        stroke="white" strokeWidth="0.55" fill="none" strokeOpacity="0.50"
      />

      {/* ── Wave 2 — medium teal, lower ── */}
      <path
        d="M0,58 Q10,54 20,58 Q30,62 40,58 Q50,54 60,58 Q70,62 80,58
           L80,66 L0,66 Z"
        fill="#0097A7" opacity="0.65"
      />
      <path
        d="M0,58 Q10,54 20,58 Q30,62 40,58 Q50,54 60,58 Q70,62 80,58"
        stroke="white" strokeWidth="0.45" fill="none" strokeOpacity="0.40"
      />

      {/* ════════════════════════════════════
          LEFT PALM TREE (leans right)
          Trunk base ≈ (10,58), crown ≈ (22,20)
      ════════════════════════════════════ */}
      {/* Trunk — tapered curved silhouette */}
      <path
        d="M8,58 C10,48 14,36 19,24 L23,20
           C21,20 17,32 13,46 C11,52 9,56 8,58 Z"
        fill="#243B12"
      />

      {/* Palm fronds — dark silhouettes, 7 fronds fanning out */}
      {/* NW → tip (2,8) */}
      <path d="M22,20 C16,15 9,11 2,8 C7,11 13,15 18,19 Z"   fill="#1A3010"/>
      {/* NNW → tip (12,4) */}
      <path d="M22,20 C18,14 16,8 12,4 C14,8 17,14 20,19 Z"  fill="#1E3810"/>
      {/* N → tip (22,3) */}
      <path d="M22,20 C21,13 21,7 22,3 C23,7 23,13 22,20 Z"  fill="#1A3010"/>
      {/* NNE → tip (30,5) */}
      <path d="M22,20 C24,14 27,8 30,5 C28,9 25,15 22,20 Z"  fill="#1E3810"/>
      {/* NE → tip (36,10) */}
      <path d="M22,20 C26,17 32,13 36,10 C32,14 26,18 22,20 Z" fill="#1A3010"/>
      {/* E (droop) → tip (38,20) */}
      <path d="M22,20 C28,19 34,19 38,20 C34,21 28,21 22,20 Z" fill="#1E3810"/>
      {/* SW (droop down) → tip (6,28) */}
      <path d="M22,20 C16,22 10,26 6,28 C10,26 15,23 22,20 Z" fill="#1A3010"/>

      {/* Coconut clusters */}
      <circle cx="22" cy="24" r="2.2" fill="#4E2A00"/>
      <circle cx="25" cy="26" r="1.9" fill="#3E2000"/>
      <circle cx="19" cy="26" r="1.7" fill="#5C3200"/>

      {/* ════════════════════════════════════
          RIGHT PALM TREE (leans left)
          Trunk base ≈ (70,58), crown ≈ (58,20)
      ════════════════════════════════════ */}
      {/* Trunk */}
      <path
        d="M72,58 C70,48 66,36 61,24 L57,20
           C59,20 63,32 67,46 C69,52 71,56 72,58 Z"
        fill="#243B12"
      />

      {/* Fronds (mirror of left) */}
      {/* NE → tip (78,8) */}
      <path d="M58,20 C64,15 71,11 78,8 C73,11 67,15 62,19 Z"   fill="#1A3010"/>
      {/* NNE → tip (68,4) */}
      <path d="M58,20 C62,14 64,8 68,4 C66,8 63,14 60,19 Z"     fill="#1E3810"/>
      {/* N → tip (58,3) */}
      <path d="M58,20 C59,13 59,7 58,3 C57,7 57,13 58,20 Z"     fill="#1A3010"/>
      {/* NNW → tip (50,5) */}
      <path d="M58,20 C56,14 53,8 50,5 C52,9 55,15 58,20 Z"     fill="#1E3810"/>
      {/* NW → tip (44,10) */}
      <path d="M58,20 C54,17 48,13 44,10 C48,14 54,18 58,20 Z"  fill="#1A3010"/>
      {/* W (droop) → tip (42,20) */}
      <path d="M58,20 C52,19 46,19 42,20 C46,21 52,21 58,20 Z"  fill="#1E3810"/>
      {/* SE (droop down) → tip (74,28) */}
      <path d="M58,20 C64,22 70,26 74,28 C70,26 65,23 58,20 Z"  fill="#1A3010"/>

      {/* Coconut clusters */}
      <circle cx="58" cy="24" r="2.2" fill="#4E2A00"/>
      <circle cx="55" cy="26" r="1.9" fill="#3E2000"/>
      <circle cx="61" cy="26" r="1.7" fill="#5C3200"/>

      {/* ════ FLIGHT PATH ARC (white dashed, subtle) ════ */}
      <path
        d="M6,40 Q40,4 74,40"
        stroke="white" strokeWidth="0.90" strokeDasharray="2.8 2" fill="none" strokeOpacity="0.65"
      />
      {/* Departure city dot */}
      <circle cx="6" cy="40" r="1.5" fill="white" opacity="0.80"/>

      {/* ── Airplane (top-down, at arc midpoint heading right) ── */}
      <g transform="translate(40,22) rotate(90)">
        {/* Fuselage */}
        <rect x="-0.7" y="-4" width="1.4" height="8.5" rx="0.7" fill="white" fillOpacity="0.88"/>
        {/* Main wings */}
        <path d="M-0.5,0 L-4.5,-2 L-4,0 L-4.5,2 L-0.5,0 Z" fill="white" fillOpacity="0.88"/>
        <path d="M0.5,0 L4.5,-2 L4,0 L4.5,2 L0.5,0 Z"   fill="white" fillOpacity="0.88"/>
        {/* Tail fins */}
        <path d="M-0.4,-4 L-2.5,-6 L-2,-4.5 Z" fill="white" fillOpacity="0.88"/>
        <path d="M0.4,-4 L2.5,-6 L2,-4.5 Z"    fill="white" fillOpacity="0.88"/>
      </g>

      {/* Arrival dot at arc end */}
      <circle cx="74" cy="40" r="1.5" fill="white" opacity="0.75"/>

      {/* ════ HORIZON LINE (faint golden) ════ */}
      <line
        x1="0" y1="42" x2="80" y2="42"
        stroke="#FFE082" strokeWidth="0.45" strokeOpacity="0.40"
      />
    </svg>
  )
}
