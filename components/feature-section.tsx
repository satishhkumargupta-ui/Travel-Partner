"use client"

import Image from "next/image"
import Link from "next/link"
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

export function FeatureSection() {
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

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-6 sm:gap-14 sm:py-24 lg:grid-cols-2 lg:px-8">

        {/* Image — editorial redesign */}
        <div className="relative pb-8 pr-4 pt-4 lg:pb-10 lg:pr-6 lg:pt-6">

          {/* Rotated back card — depth layer */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: "linear-gradient(135deg,#7c3f96 0%,#2e1b50 100%)",
              transform: "rotate(-3deg) scale(0.96)",
              opacity: 0.45,
            }}
          />

          {/* Main image card */}
          <div
            className="relative overflow-hidden rounded-3xl"
            style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07)" }}
          >
            <div className="relative h-80 lg:h-[30rem]">
              <Image
                src="/images/feature-trip.jpg"
                alt="Friends jumping with joy in the snow-capped mountains"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>

            {/* Frosted glass bottom overlay */}
            <div
              className="absolute inset-x-4 bottom-4 rounded-2xl px-5 py-4"
              style={{
                background: "rgba(13,11,30,0.78)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <p
                className="mb-2 text-xs font-semibold uppercase tracking-[0.22em]"
                style={{
                  background: "linear-gradient(90deg,#fbbf24,#e8902a)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}
              >
                Real adventures. Real memories.
              </p>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-serif text-base font-semibold text-white">Spiti Valley, India</p>
                  <p className="text-xs text-white/45">Group of 5 · 8 days · Mountains</p>
                </div>
                <div
                  className="flex shrink-0 items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/12 px-3 py-1.5"
                >
                  <span className="text-sm text-amber-400">★</span>
                  <span className="text-sm font-semibold text-white">5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating stat — top right */}
          <div
            className="absolute right-0 top-0 rounded-2xl px-4 py-3 text-center shadow-2xl"
            style={{
              background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 100%)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 12px 32px rgba(124,63,150,0.45)",
            }}
          >
            <p className="font-serif text-2xl font-bold text-white">500+</p>
            <p className="text-xs text-white/55">trips planned</p>
          </div>

          {/* Floating stat — bottom left */}
          <div
            className="absolute bottom-0 left-0 rounded-2xl px-4 py-3 shadow-2xl"
            style={{
              background: "rgba(13,11,30,0.92)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <p className="font-serif text-2xl font-bold text-white">
              4.9 <span className="text-amber-400">★</span>
            </p>
            <p className="text-xs text-white/45">avg. rating</p>
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
          <Link
            href="/plan"
            className="mt-10 inline-block rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:opacity-90 hover:shadow-xl active:scale-95"
            style={{
              background: "linear-gradient(135deg, #1b1a5e 0%, #7c3f96 50%, #e8902a 100%)",
              boxShadow: "0 4px 24px rgba(124,63,150,0.40)",
            }}
          >
            Start planning your journey
          </Link>
        </div>
      </div>
    </section>
  )
}
