"use client"

import Image from "next/image"
import { Compass, ShieldCheck, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Compass,
    title: "Handcrafted itineraries",
    description: "Every journey is designed around you — your pace, your interests, your dreams.",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.08)",
    border: "rgba(251,191,36,0.22)",
    glow: "rgba(251,191,36,0.18)",
    iconBg: "linear-gradient(135deg, rgba(251,191,36,0.18), rgba(232,144,42,0.28))",
  },
  {
    icon: ShieldCheck,
    title: "Local experts on the ground",
    description: "Trusted guides who know the hidden corners no guidebook will ever reveal.",
    color: "#c084fc",
    bg: "rgba(192,132,252,0.08)",
    border: "rgba(192,132,252,0.22)",
    glow: "rgba(192,132,252,0.18)",
    iconBg: "linear-gradient(135deg, rgba(124,63,150,0.20), rgba(192,132,252,0.28))",
  },
  {
    icon: HeartHandshake,
    title: "Travel that gives back",
    description: "We partner with local communities so your trip leaves a positive footprint.",
    color: "#34d399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.22)",
    glow: "rgba(52,211,153,0.18)",
    iconBg: "linear-gradient(135deg, rgba(16,185,129,0.18), rgba(52,211,153,0.28))",
  },
]

type Props = { onBookingOpen: () => void }

export function FeatureSection({ onBookingOpen }: Props) {
  return (
    <section
      id="journeys"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(140deg, #0d0b1e 0%, #1b1040 30%, #2e1b50 55%, #160d28 100%)" }}
    >
      {/* Ambient color blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/4 top-0 h-96 w-96 rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #7c3f96 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full opacity-18 blur-3xl"
          style={{ background: "radial-gradient(circle, #e8902a 0%, transparent 70%)" }}
        />
        <div
          className="absolute left-0 top-1/2 h-64 w-64 rounded-full opacity-12 blur-3xl"
          style={{ background: "radial-gradient(circle, #34d399 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8">

        {/* Image with glowing gradient frame */}
        <div className="relative">
          <div
            className="absolute -inset-1 rounded-3xl opacity-70 blur-md"
            style={{ background: "linear-gradient(135deg, #7c3f96 0%, #e8902a 50%, #fbbf24 100%)" }}
          />
          <div className="relative h-80 overflow-hidden rounded-3xl lg:h-[32rem]">
            <Image
              src="/images/feature-trip.jpg"
              alt="Friends jumping with joy in the snow-capped mountains"
              fill
              className="object-cover object-center"
            />
            {/* Subtle inner overlay for depth */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(13,11,30,0.35) 0%, transparent 50%)" }}
            />
          </div>
        </div>

        {/* Content */}
        <div>
          {/* Eyebrow */}
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.30em]"
            style={{
              background: "linear-gradient(90deg, #fbbf24, #e8902a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Why Wanderlight
          </p>

          {/* Heading */}
          <h2 className="max-w-lg text-balance font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Journeys designed{" "}
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #c084fc, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              with intention
            </span>
          </h2>

          <p className="mt-5 max-w-md text-pretty leading-relaxed text-white/55">
            We believe travel should be more than a checklist. It should move you. Here&apos;s how we
            make every trip extraordinary.
          </p>

          {/* Feature tabs */}
          <ul className="mt-10 flex flex-col gap-4">
            {features.map((f) => (
              <li
                key={f.title}
                className="flex gap-4 rounded-2xl border p-5 transition-all duration-300 hover:scale-[1.015] hover:brightness-110"
                style={{
                  background: f.bg,
                  borderColor: f.border,
                  boxShadow: `0 4px 24px ${f.glow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
                }}
              >
                {/* Icon bubble */}
                <div
                  className="flex size-12 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: f.iconBg,
                    border: `1px solid ${f.border}`,
                    boxShadow: `0 0 12px ${f.glow}`,
                  }}
                >
                  <f.icon className="size-5" aria-hidden="true" style={{ color: f.color }} />
                </div>

                <div>
                  <h3 className="font-serif text-lg font-semibold" style={{ color: f.color }}>
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/50">{f.description}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={onBookingOpen}
            className="mt-10 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:opacity-90 hover:shadow-xl active:scale-95"
            style={{
              background: "linear-gradient(135deg, #1b1a5e 0%, #7c3f96 50%, #e8902a 100%)",
              boxShadow: "0 4px 24px rgba(124,63,150,0.40)",
            }}
          >
            Start planning your journey
          </button>
        </div>
      </div>
    </section>
  )
}
