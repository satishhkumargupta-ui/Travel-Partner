"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Calendar, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [destination, setDestination] = useState("")
  const [when, setWhen] = useState("")

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/images/hero-coast.png"
        alt="Aerial view of a dramatic Mediterranean coastline at golden hour"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/20 to-foreground/60" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-16 lg:px-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-background/80">
          Curated journeys since 2009
        </p>
        <h1 className="max-w-3xl text-balance font-serif text-5xl font-semibold leading-[1.05] text-background sm:text-6xl lg:text-7xl">
          Travel beyond the ordinary
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/85">
          We design unforgettable trips to the world&apos;s most extraordinary places — handcrafted
          itineraries, local experts, and moments you&apos;ll carry forever.
        </p>

        <div className="mt-10 w-full max-w-3xl rounded-2xl bg-card/95 p-3 shadow-xl backdrop-blur sm:rounded-full">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-2 sm:flex-row sm:items-center"
          >
            <label className="flex flex-1 items-center gap-3 rounded-full px-4 py-2">
              <MapPin className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="sr-only">Destination</span>
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where to?"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </label>
            <div className="hidden h-8 w-px bg-border sm:block" />
            <label className="flex flex-1 items-center gap-3 rounded-full px-4 py-2">
              <Calendar className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="sr-only">When</span>
              <input
                value={when}
                onChange={(e) => setWhen(e.target.value)}
                placeholder="When?"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </label>
            <Button type="submit" size="lg" className="rounded-full">
              <Search className="size-4" aria-hidden="true" />
              Explore
            </Button>
          </form>
        </div>

        <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-background">
          {[
            ["120+", "Destinations"],
            ["45k", "Happy travelers"],
            ["4.9", "Average rating"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="font-serif text-3xl font-semibold">{value}</dt>
              <dd className="text-sm text-background/75">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
