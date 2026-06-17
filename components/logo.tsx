type Props = { className?: string }

export function WanderlightLogo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 32 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 4-pointed light star */}
      <path
        d="M16 0.5 L17.5 3.2 L20.5 4 L17.5 4.8 L16 7.5 L14.5 4.8 L11.5 4 L14.5 3.2 Z"
        fill="currentColor"
      />

      {/* Stem: star to globe */}
      <line
        x1="16" y1="7.8" x2="16" y2="10.4"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeOpacity="0.4"
      />

      {/* Globe outline */}
      <circle cx="16" cy="22" r="11.5" stroke="currentColor" strokeWidth="1.25" />

      {/* Left longitude arc */}
      <path
        d="M16 10.5 Q8.2 22 16 33.5"
        stroke="currentColor" strokeWidth="1" strokeOpacity="0.45" fill="none"
      />

      {/* Right longitude arc */}
      <path
        d="M16 10.5 Q23.8 22 16 33.5"
        stroke="currentColor" strokeWidth="1" strokeOpacity="0.45" fill="none"
      />

      {/* Equator */}
      <line
        x1="4.5" y1="22" x2="27.5" y2="22"
        stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.45"
      />

      {/* Upper latitude */}
      <path
        d="M7.8 16 Q16 13 24.2 16"
        stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.32" fill="none"
      />

      {/* Lower latitude */}
      <path
        d="M7.8 28 Q16 31 24.2 28"
        stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.32" fill="none"
      />
    </svg>
  )
}
