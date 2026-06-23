"use client"

import { useEffect, useState } from "react"
import { Globe, MapPin, Plane } from "lucide-react"

const baseStats = [
  {
    label: "Travelers visited",
    defaultValue: 45000,
    suffix: "+",
    icon: Globe,
    accent: "from-amber-400 via-fuchsia-500 to-violet-500",
    isVisitorCount: true,
    value: 45000,
  },
  {
    label: "Destinations unlocked",
    defaultValue: 128,
    suffix: "+",
    icon: MapPin,
    accent: "from-sky-400 to-teal-400",
    isVisitorCount: false,
    value: 128,
  },
  {
    label: "Journeys curated",
    defaultValue: 520,
    suffix: "+",
    icon: Plane,
    accent: "from-violet-400 to-amber-400",
    isVisitorCount: false,
    value: 520,
  },
]

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function VisitorCounter() {
  const [stats, setStats] = useState(baseStats)
  const [counts, setCounts] = useState<number[]>(baseStats.map(() => 0))

  useEffect(() => {
    // Fetch visitor count from API
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitors')
        const data = await response.json()
        console.log('[VisitorCounter] Fetched count:', data.count)
        setStats(baseStats.map(stat => ({
          ...stat,
          value: stat.isVisitorCount ? data.count : stat.defaultValue
        })))
      } catch (error) {
        console.error('Failed to fetch visitor count:', error)
        setStats(baseStats)
      }
    }

    fetchVisitorCount()
  }, [])

  useEffect(() => {
    const duration = 1600
    const start = performance.now()
    let animationId = 0

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      setCounts(stats.map((stat) => Math.round(stat.value * easeOutCubic(progress))))

      if (progress < 1) {
        animationId = requestAnimationFrame(tick)
      }
    }

    animationId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animationId)
  }, [stats])

  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(232,144,42,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(52,211,153,0.16),_transparent_34%)]" />
      <div className="relative mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-black/30 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300/90">
              Travelers visited
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Premium journeys powered by real-world explorers.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Every trip is designed to feel effortless and unforgettable — from destination discovery to the final flight home.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                const rawValue = counts[index]
                const displayValue = rawValue >= stat.value ? `${stat.value.toLocaleString()}${stat.suffix}` : `${rawValue.toLocaleString()}${stat.suffix}`

                return (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm"
                  >
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.accent} text-white shadow-lg shadow-[0_18px_40px_rgba(0,0,0,0.15)]`}>
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <p className="text-3xl font-semibold text-white sm:text-4xl">
                      {displayValue}
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/45">
                      {stat.label}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_40%)]" />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div>
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.30em] text-amber-200/90">
                  Visitor count
                </span>
                <p className="mt-6 text-5xl font-semibold text-white sm:text-6xl">
                  {counts[0].toLocaleString()}<span className="text-4xl font-medium text-amber-300">+</span>
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm">
                  <p className="text-sm text-white/60">Curated local immersions</p>
                  <p className="mt-2 text-lg font-semibold text-white">Handpicked experiences in 45+ countries</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm">
                  <p className="text-sm text-white/60">Luxury travel confidence</p>
                  <p className="mt-2 text-lg font-semibold text-white">24/7 concierge support on every journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
