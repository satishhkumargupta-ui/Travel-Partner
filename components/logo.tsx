type Props = { className?: string }

export function WanderlightLogo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 216 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Wanderlight"
    >
      <defs>
        <linearGradient id="wlG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#1b1a5e" />
          <stop offset="48%"  stopColor="#7c3f96" />
          <stop offset="100%" stopColor="#e8902a" />
        </linearGradient>
        <clipPath id="wlHead">
          <circle cx="32" cy="26" r="20" />
        </clipPath>
        <filter id="wlDrop" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="3"
            floodColor="#7c3f96" floodOpacity="0.30" />
        </filter>
      </defs>

      {/* ── Icon: location pin + globe grid + airplane ── */}
      <path
        d="M32,6
           C21,6 12,15 12,26
           C12,36.5 18.5,45 26.5,52
           L32,62
           L37.5,52
           C45.5,45 52,36.5 52,26
           C52,15 43,6 32,6 Z"
        fill="url(#wlG)"
        filter="url(#wlDrop)"
      />
      <g clipPath="url(#wlHead)">
        <line x1="12" y1="26" x2="52" y2="26"
          stroke="white" strokeWidth="0.7" strokeOpacity="0.30"/>
        <path d="M32,6 Q20,26 32,52"
          stroke="white" strokeWidth="0.6" strokeOpacity="0.28" fill="none"/>
        <path d="M32,6 Q44,26 32,52"
          stroke="white" strokeWidth="0.6" strokeOpacity="0.28" fill="none"/>
        <path d="M17,17 Q32,12 47,17"
          stroke="white" strokeWidth="0.5" strokeOpacity="0.20" fill="none"/>
        <path d="M14,35 Q32,41 50,35"
          stroke="white" strokeWidth="0.5" strokeOpacity="0.20" fill="none"/>
      </g>
      <g clipPath="url(#wlHead)">
        <path
          d="M32,13
             C33,13 34,13.8 34,15.2
             L34,21.5
             L43,25 L43,27.5
             L34,24
             L34,30
             L37,31.5 L37,33
             L32,31.5
             L27,33  L27,31.5
             L30,30
             L30,24
             L21,27.5 L21,25
             L30,21.5
             L30,15.2
             C30,13.8 31,13 32,13 Z"
          fill="white"
          fillOpacity="0.96"
        />
      </g>

      {/* ── Separator ── */}
      <line
        x1="68" y1="18" x2="68" y2="50"
        stroke="#7c3f96" strokeWidth="0.8" strokeOpacity="0.22"
      />

      {/* ── Wordmark ── */}
      {/* "Wander" inherits currentColor → adapts to header (white) / footer (foreground) */}
      <text
        x="77"
        y="41"
        fontFamily="'Segoe UI', -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
        fontSize="27"
        letterSpacing="0.4"
      >
        <tspan fontWeight="700" fill="currentColor">Wander</tspan>
        <tspan fontWeight="300" fill="#e8902a">light</tspan>
      </text>

      {/* ── Tagline ── */}
      <text
        x="79"
        y="53"
        fontFamily="'Segoe UI', -apple-system, Helvetica, Arial, sans-serif"
        fontSize="6.5"
        fontWeight="500"
        letterSpacing="2.6"
        fill="#7c3f96"
        fillOpacity="0.65"
      >CURATED TRAVEL</text>
    </svg>
  )
}
