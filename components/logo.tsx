type Props = { className?: string }

export function WanderlightLogo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 40 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Wanderlight"
    >
      <defs>
        {/* Brand gradient — matches buttons, banners, CTAs */}
        <linearGradient id="wlGrad" x1="20" y1="36" x2="20" y2="6" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#1b1a5e"/>
          <stop offset="55%"  stopColor="#7c3f96"/>
          <stop offset="100%" stopColor="#c45f38"/>
        </linearGradient>
      </defs>

      {/* Mountain range — 3 peaks, centre tallest */}
      <path
        d="M0,36 L10,20 L15,25 L20,8 L25,25 L30,20 L40,36 Z"
        fill="url(#wlGrad)"
      />

      {/* Snow cap on centre peak */}
      <path
        d="M20,8 L24,17 L16,17 Z"
        fill="white"
        fillOpacity="0.88"
      />

      {/* Amber 4-pointed star — the "light" */}
      <path
        d="M20,0.5 L21,2.9 L23.8,3.7 L21,4.5 L20,6.9 L19,4.5 L16.2,3.7 L19,2.9 Z"
        fill="#e8902a"
      />
    </svg>
  )
}
