type Props = { className?: string }

export function WanderlightLogo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 56 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Wanderlight"
    >
      <defs>
        <clipPath id="wlG">
          <circle cx="28" cy="33" r="22" />
        </clipPath>
      </defs>

      {/* ── 4-pointed north star (the "light") ── */}
      <path
        d="M28,1 L29.2,3.7 L32,4.5 L29.2,5.3 L28,8 L26.8,5.3 L24,4.5 L26.8,3.7 Z"
        fill="#C9A84C"
      />

      {/* Thin gold stem: star → globe */}
      <line
        x1="28" y1="8.2" x2="28" y2="10.8"
        stroke="#C9A84C" strokeWidth="0.55" strokeOpacity="0.5"
      />

      {/* ── Outer gold ring ── */}
      <circle cx="28" cy="33" r="23" stroke="#C9A84C" strokeWidth="1" />

      {/* ── Deep navy globe fill ── */}
      <circle cx="28" cy="33" r="22.4" fill="#0B1F3A" />

      {/* ── Gold grid lines (clipped to globe) ── */}
      <g clipPath="url(#wlG)">

        {/* Equator — prominent horizontal */}
        <line
          x1="6" y1="33" x2="50" y2="33"
          stroke="#C9A84C" strokeWidth="0.9" strokeOpacity="0.80"
        />

        {/* Left meridian arc */}
        <path
          d="M28,11 Q15,33 28,55"
          stroke="#C9A84C" strokeWidth="0.55" strokeOpacity="0.50" fill="none"
        />
        {/* Right meridian arc */}
        <path
          d="M28,11 Q41,33 28,55"
          stroke="#C9A84C" strokeWidth="0.55" strokeOpacity="0.50" fill="none"
        />

        {/* Upper latitude curve */}
        <path
          d="M8,24 Q28,18 48,24"
          stroke="#C9A84C" strokeWidth="0.45" strokeOpacity="0.38" fill="none"
        />
        {/* Lower latitude curve */}
        <path
          d="M8,42 Q28,48 48,42"
          stroke="#C9A84C" strokeWidth="0.45" strokeOpacity="0.38" fill="none"
        />

        {/* North pole accent dot */}
        <circle cx="28" cy="11" r="1.4" fill="#C9A84C" fillOpacity="0.90" />
        {/* East / West equator dots */}
        <circle cx="6"  cy="33" r="1.1" fill="#C9A84C" fillOpacity="0.65" />
        <circle cx="50" cy="33" r="1.1" fill="#C9A84C" fillOpacity="0.65" />

      </g>

      {/* ── Inner decorative ring (drawn on top of navy) ── */}
      <circle
        cx="28" cy="33" r="20.5"
        stroke="#C9A84C" strokeWidth="0.3" strokeOpacity="0.35"
      />

    </svg>
  )
}
