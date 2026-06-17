"use client"

import { useState } from "react"
import Image from "next/image"
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

      {/* ── Background photo ── */}
      <Image
        src="/images/dest-alps.png"
        alt="Snow-capped mountain adventure"
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />

      {/* Light tint so photo stays visible */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Bottom-to-top gradient — text legibility only */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* Subtle left-side text shadow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

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
