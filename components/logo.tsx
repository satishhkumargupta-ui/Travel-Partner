type Props = { className?: string }

export function WanderlightLogo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Wanderlight"
    >
      <defs>
        {/* Brand gradient — mountains */}
        <linearGradient id="wlMtn" x1="32" y1="56" x2="32" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#1b1a5e" />
          <stop offset="55%"  stopColor="#7c3f96" />
          <stop offset="100%" stopColor="#c45f38" />
        </linearGradient>
        {/* Clip inner circle */}
        <clipPath id="wlClip">
          <circle cx="32" cy="32" r="22" />
        </clipPath>
      </defs>

      {/* ── Compass outer ring ── */}
      <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1.8" />

      {/* Cardinal tick marks (protruding outside ring) */}
      {/* N — bold */}
      <line x1="32" y1="1"  x2="32" y2="7"  stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
      {/* S */}
      <line x1="32" y1="57" x2="32" y2="63" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* E */}
      <line x1="57" y1="32" x2="63" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* W */}
      <line x1="1"  y1="32" x2="7"  y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Diagonal minor ticks */}
      <line x1="52.4" y1="11.6" x2="50.3" y2="13.7" stroke="currentColor" strokeWidth="1"   strokeLinecap="round" strokeOpacity="0.45"/>
      <line x1="11.6" y1="11.6" x2="13.7" y2="13.7" stroke="currentColor" strokeWidth="1"   strokeLinecap="round" strokeOpacity="0.45"/>
      <line x1="52.4" y1="52.4" x2="50.3" y2="50.3" stroke="currentColor" strokeWidth="1"   strokeLinecap="round" strokeOpacity="0.45"/>
      <line x1="11.6" y1="52.4" x2="13.7" y2="50.3" stroke="currentColor" strokeWidth="1"   strokeLinecap="round" strokeOpacity="0.45"/>

      {/* North diamond (classic compass north indicator) */}
      <polygon points="32,1 34.2,6 32,5 29.8,6" fill="currentColor" />

      {/* Inner thin ring */}
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3"/>

      {/* ── Inner content (clipped) ── */}
      <g clipPath="url(#wlClip)">

        {/* Mountain range — 3 peaks */}
        <path
          d="M2,58 L17,32 L24,40 L32,18 L40,40 L47,32 L62,58 Z"
          fill="url(#wlMtn)"
        />

        {/* Snow caps */}
        <path d="M32,18 L36.5,27 L27.5,27 Z" fill="white" fillOpacity="0.90"/>
        <path d="M17,32 L20.5,38 L13.5,38 Z" fill="white" fillOpacity="0.60"/>
        <path d="M47,32 L50.5,38 L43.5,38 Z" fill="white" fillOpacity="0.60"/>

        {/* Flight path arc — amber dashed, swoops above peaks */}
        <path
          d="M11,50 Q32,6 53,16"
          stroke="#e8902a"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="3.5 2.8"
          fill="none"
        />

        {/* Departure dot */}
        <circle cx="11" cy="50" r="2.4" fill="#e8902a" fillOpacity="0.65"/>

        {/* Airplane at destination — small top-down silhouette */}
        <g transform="translate(53,16) rotate(28)">
          <path
            d="M0,-4 C0.6,-4 1,-3.4 1,-2.5 L1,0 L4.5,2 L4.5,3 L1,1.5 L1,4.5 L2.5,5 L2.5,5.8 L0,5 L-2.5,5.8 L-2.5,5 L-1,4.5 L-1,1.5 L-4.5,3 L-4.5,2 L-1,0 L-1,-2.5 C-1,-3.4 -0.6,-4 0,-4 Z"
            fill="#e8902a"
          />
        </g>

      </g>

      {/* Centre dot — compass pivot */}
      <circle cx="32" cy="32" r="1.8" fill="currentColor" fillOpacity="0.5"/>
    </svg>
  )
}
