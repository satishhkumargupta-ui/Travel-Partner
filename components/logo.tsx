type Props = { className?: string }

export function WanderlightLogo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 260 295"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Wanderlight"
    >
      <defs>
        <linearGradient id="wlG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#1b1a5e"/>
          <stop offset="48%"  stopColor="#7c3f96"/>
          <stop offset="100%" stopColor="#e8902a"/>
        </linearGradient>
      </defs>

      {/* ════ ORBIT RING — drawn first so pin sits on top ════ */}
      <ellipse
        cx="130" cy="222" rx="60" ry="16"
        stroke="url(#wlG)" strokeWidth="8" fill="none"
      />

      {/* ════ DASHED FLIGHT ARC — behind pin, sweeps counterclockwise ════ */}
      {/*
        Starts near airplane (inside pin's upper-right),
        swoops outward → right → bottom → left → ends upper-left.
        Drawn BEFORE pin so pin covers the interior portion.
      */}
      <path
        d="M186,82
           C222,44 258,124 224,178
           C200,216 152,238 106,226
           C64,214 46,170 60,130
           C70,100 96,80 114,76"
        stroke="#1b1a5e"
        strokeWidth="4.5"
        strokeDasharray="9 7"
        strokeLinecap="round"
        fill="none"
        opacity="0.80"
      />

      {/* ════ PIN BODY (gradient, covers interior of arc) ════ */}
      <path
        d="M130,38
           C94,38 68,65 68,108
           C68,135 80,156 98,172
           L130,222
           L162,172
           C180,156 192,135 192,108
           C192,65 166,38 130,38 Z"
        fill="url(#wlG)"
      />

      {/* ════ CLOUD — left, inside pin ════ */}
      <path
        d="M94,88
           C94,83 97,80 102,81
           C103,77 109,75 113,78
           C116,75 122,77 122,81
           C125,82 125,88 122,89
           L94,89 Z"
        fill="white" opacity="0.88"
      />

      {/* ════ CLOUD — right, inside pin ════ */}
      <path
        d="M140,68
           C140,64 143,61 147,62
           C148,58 154,56 158,59
           C161,56 167,58 167,62
           C170,63 170,68 167,69
           L140,69 Z"
        fill="white" opacity="0.88"
      />

      {/* ════ PAPER AIRPLANE — upper-right of pin, pointing NE ════ */}
      {/* Main triangular body */}
      <path
        d="M190,76 L158,98 L172,88 Z"
        fill="white" fillOpacity="0.97"
      />
      {/* Lower wing fold (gives 3-D paper depth) */}
      <path
        d="M172,88 L158,98 L163,108 Z"
        fill="white" fillOpacity="0.60"
      />
      {/* Centre fold crease */}
      <line
        x1="190" y1="76" x2="168" y2="100"
        stroke="#1b1a5e" strokeWidth="1.2" strokeOpacity="0.18"
      />

      {/* ════ WORDMARK ════ */}
      <text
        x="130" y="258"
        textAnchor="middle"
        fontFamily="'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
        fontSize="38"
        letterSpacing="0.5"
      >
        <tspan fontWeight="700" fill="#1b1a5e">Wander</tspan>
        <tspan fontWeight="300" fill="#e8902a">light</tspan>
      </text>

      {/* ════ TAGLINE ════ */}
      <text
        x="130" y="278"
        textAnchor="middle"
        fontFamily="'Segoe UI', -apple-system, Helvetica, Arial, sans-serif"
        fontSize="13"
        fontWeight="400"
        letterSpacing="3.5"
        fill="#7c3f96"
        fillOpacity="0.72"
      >travel agency</text>
    </svg>
  )
}
