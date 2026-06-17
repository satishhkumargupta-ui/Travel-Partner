"use client"

import Image from "next/image"
import { Compass, ShieldCheck, HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Compass,
    title: "Handcrafted itineraries",
    description: "Every journey is designed around you — your pace, your interests, your dreams.",
  },
  {
    icon: ShieldCheck,
    title: "Local experts on the ground",
    description: "Trusted guides who know the hidden corners no guidebook will ever reveal.",
  },
  {
    icon: HeartHandshake,
    title: "Travel that gives back",
    description: "We partner with local communities so your trip leaves a positive footprint.",
  },
]

type Props = { onBookingOpen: () => void }

export function FeatureSection({ onBookingOpen }: Props) {
  return (
    <section id="journeys" className="bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
        <div className="relative h-80 overflow-hidden rounded-3xl lg:h-[32rem]">
          <Image
            src="/images/feature-trip.jpg"
            alt="Friends jumping with joy in the snow-capped mountains"
            fill
            className="object-cover object-center"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-primary">
            Why Wanderlight
          </p>
          <h2 className="max-w-lg text-balance font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Journeys designed with intention
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            We believe travel should be more than a checklist. It should move you. Here&apos;s how we
            make every trip extraordinary.
          </p>

          <ul className="mt-10 flex flex-col gap-8">
            {features.map((f) => (
              <li key={f.title} className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <f.icon className="size-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Button size="lg" onClick={onBookingOpen} className="mt-10 rounded-full">
            Start planning your journey
          </Button>
        </div>
      </div>
    </section>
  )
}
