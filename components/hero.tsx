"use client"

import { useState } from "react"
import { MapPin, Calendar, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {
  onSearch: (query: string) => void
}

export function Hero({ onSearch }: Props) {
  const [destination, setDestination] = useState("")
  const [when, setWhen] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSearch(destination.trim())
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* ── Sky gradient ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg,#06091a 0%,#0d1238 10%,#1b1a5e 22%,#3b2d82 32%,#7c3f96 40%,#c45f38 50%,#e8902a 57%,#c47820 61%,#0e3352 72%,#061a30 88%,#020b18 100%)",
        }}
      />

      {/* ── Sun glow ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 22% at 52% 57%,rgba(255,195,80,0.85) 0%,rgba(230,120,40,0.55) 28%,rgba(180,70,20,0.2) 55%,transparent 72%)",
        }}
      />

      {/* ── Wide atmospheric bloom ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 130% 18% at 50% 59%,rgba(255,155,40,0.28) 0%,transparent 65%)",
        }}
      />

      {/* ── Ocean reflection beneath horizon ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg,transparent 54%,rgba(14,55,90,0.55) 68%,rgba(4,18,38,0.85) 100%)",
        }}
      />

      {/* ── Stars (tiny radial dots in sky area) ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(1.2px 1.2px at  8% 10%,rgba(255,255,255,.65) 0%,transparent 100%)",
            "radial-gradient(1px   1px   at 18%  6%,rgba(255,255,255,.5)  0%,transparent 100%)",
            "radial-gradient(1px   1px   at 30% 14%,rgba(255,255,255,.4)  0%,transparent 100%)",
            "radial-gradient(1.5px 1.5px at 42%  4%,rgba(255,255,255,.6)  0%,transparent 100%)",
            "radial-gradient(1px   1px   at 55%  9%,rgba(255,255,255,.45) 0%,transparent 100%)",
            "radial-gradient(1px   1px   at 63% 18%,rgba(255,255,255,.35) 0%,transparent 100%)",
            "radial-gradient(1.2px 1.2px at 74%  7%,rgba(255,255,255,.55) 0%,transparent 100%)",
            "radial-gradient(1px   1px   at 82% 20%,rgba(255,255,255,.4)  0%,transparent 100%)",
            "radial-gradient(1px   1px   at 90% 12%,rgba(255,255,255,.5)  0%,transparent 100%)",
            "radial-gradient(1px   1px   at 48% 24%,rgba(255,255,255,.3)  0%,transparent 100%)",
            "radial-gradient(1px   1px   at 22% 28%,rgba(255,255,255,.25) 0%,transparent 100%)",
            "radial-gradient(1px   1px   at 70% 30%,rgba(255,255,255,.2)  0%,transparent 100%)",
          ].join(","),
        }}
      />

      {/* ── SVG mountain silhouettes ── */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 360"
        preserveAspectRatio="none"
        style={{ height: "45%" }}
        aria-hidden="true"
      >
        {/* Distant range */}
        <path
          d="M0,360 L0,240 L90,195 L180,215 L270,165 L360,185 L450,140 L540,168 L630,125 L720,152 L810,108 L900,138 L990,95 L1080,122 L1170,88 L1260,112 L1350,96 L1440,118 L1440,360 Z"
          fill="rgba(12,28,60,0.55)"
        />
        {/* Mid range */}
        <path
          d="M0,360 L0,290 L110,248 L220,272 L340,218 L460,252 L560,200 L660,238 L760,188 L860,222 L960,175 L1060,208 L1160,170 L1270,200 L1370,182 L1440,195 L1440,360 Z"
          fill="rgba(8,20,48,0.75)"
        />
        {/* Foreground land */}
        <path
          d="M0,360 L0,320 L120,288 L240,308 L380,272 L500,300 L620,262 L740,292 L860,255 L980,285 L1100,248 L1220,275 L1340,258 L1440,270 L1440,360 Z"
          fill="rgba(4,12,30,0.92)"
        />
      </svg>

      {/* ── Left-side text-contrast overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      {/* ── Content ── */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-16 lg:px-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/70">
          Curated journeys since 2009
        </p>
        <h1 className="max-w-3xl text-balance font-serif text-5xl font-semibold leading-[1.05] text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
          Travel beyond the ordinary
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/80 drop-shadow">
          We design unforgettable trips to the world&apos;s most extraordinary places — handcrafted
          itineraries, local experts, and moments you&apos;ll carry forever.
        </p>

        <div className="mt-10 w-full max-w-3xl rounded-2xl bg-white/10 p-3 shadow-2xl backdrop-blur-md border border-white/20 sm:rounded-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 sm:flex-row sm:items-center"
          >
            <label className="flex flex-1 items-center gap-3 rounded-full px-4 py-2">
              <MapPin className="size-5 shrink-0 text-amber-300" aria-hidden="true" />
              <span className="sr-only">Destination</span>
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where to? (e.g. Bali, Japan…)"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
            </label>
            <div className="hidden h-8 w-px bg-white/20 sm:block" />
            <label className="flex flex-1 items-center gap-3 rounded-full px-4 py-2">
              <Calendar className="size-5 shrink-0 text-amber-300" aria-hidden="true" />
              <span className="sr-only">When</span>
              <input
                type="date"
                value={when}
                onChange={(e) => setWhen(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none [color-scheme:dark]"
              />
            </label>
            <Button
              type="submit"
              size="lg"
              className="rounded-full bg-amber-400 text-amber-950 hover:bg-amber-300 font-semibold"
            >
              <Search className="size-4" aria-hidden="true" />
              Explore
            </Button>
          </form>
        </div>

        <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-white">
          {[
            ["120+", "Destinations"],
            ["45k", "Happy travelers"],
            ["4.9", "Average rating"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="font-serif text-3xl font-semibold drop-shadow">{value}</dt>
              <dd className="text-sm text-white/65">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
