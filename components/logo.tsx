type Props = { className?: string }

export function WanderlightLogo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Wanderlight"
    >
      <defs>
        <linearGradient id="wlPin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#1b1a5e" />
          <stop offset="50%"  stopColor="#7c3f96" />
          <stop offset="100%" stopColor="#e8902a" />
        </linearGradient>
      </defs>

      {/* ── Location pin body ── */}
      <path
        d="M20,2
           C10,2 2,10 2,20
           C2,28.5 8,35.5 14,39.5
           L20,47
           L26,39.5
           C32,35.5 38,28.5 38,20
           C38,10 30,2 20,2 Z"
        fill="url(#wlPin)"
      />

      {/* ── Airplane silhouette (top-down view, pointing up) ── */}
      {/* Fuselage */}
      <path
        d="M20,6
           C20.9,6 21.8,6.9 21.8,8
           L21.8,14.5
           L33,19.5 L33,22
           L21.8,18.5
           L21.8,27
           L24.5,28.5 L24.5,30.5
           L20,29
           L15.5,30.5 L15.5,28.5
           L18.2,27
           L18.2,18.5
           L7,22 L7,19.5
           L18.2,14.5
           L18.2,8
           C18.2,6.9 19.1,6 20,6 Z"
        fill="white"
        fillOpacity="0.96"
      />
    </svg>
  )
}
