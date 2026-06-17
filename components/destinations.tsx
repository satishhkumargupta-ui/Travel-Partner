"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Star } from "lucide-react"

export type Destination = {
  name: string
  country: string
  image: string
  price: string
  rating: string
  tag: string
  category: string
  description: string
  highlights: string[]
  duration: string
  bestTime: string
}

export const allDestinations: Destination[] = [
  {
    name: "Santorini",
    country: "Greece",
    image: "/images/dest-santorini.png",
    price: "₹2,00,000",
    rating: "4.9",
    tag: "Island escape",
    category: "Islands",
    description:
      "Perched on volcanic cliffs above the caldera, Santorini offers some of the world's most dramatic sunsets and pristine blue-domed churches. This Cycladic jewel blends luxury with timeless Aegean beauty.",
    highlights: [
      "Sunset cruise around the caldera",
      "Private cave suite with caldera views",
      "Wine tasting at Assyrtiko vineyards",
      "Oia village at golden hour",
      "Black sand beach at Perissa",
      "Ancient Akrotiri excavation site",
    ],
    duration: "7 nights",
    bestTime: "May – Oct",
  },
  {
    name: "Kyoto",
    country: "Japan",
    image: "/images/dest-kyoto.png",
    price: "₹2,60,000",
    rating: "5.0",
    tag: "Culture & temples",
    category: "Culture",
    description:
      "Japan's ancient imperial capital is a living museum of Zen gardens, golden pavilions, and centuries-old geisha districts. Kyoto offers an unmatched window into traditional Japanese culture and refinement.",
    highlights: [
      "Private tea ceremony in a historic machiya",
      "Fushimi Inari shrine at sunrise",
      "Arashiyama bamboo grove walk",
      "Nishiki Market street food tour",
      "Traditional ryokan with kaiseki dinner",
      "Evening walk through Gion district",
    ],
    duration: "9 nights",
    bestTime: "Mar – May, Oct – Nov",
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    image: "/images/dest-alps.png",
    price: "₹2,45,000",
    rating: "4.8",
    tag: "Mountain adventure",
    category: "Mountains",
    description:
      "The Swiss Alps offer jaw-dropping scenery year-round — from world-class skiing in winter to wildflower meadows and crystal lakes in summer. A destination that redefines the word magnificent.",
    highlights: [
      "Glacier Express scenic train journey",
      "Jungfraujoch Top of Europe visit",
      "Hiking the Haute Route trail",
      "Zermatt village below the Matterhorn",
      "Swiss fondue evening in a mountain chalet",
      "Lake Geneva and Montreux day trip",
    ],
    duration: "8 nights",
    bestTime: "Jun – Sep, Dec – Mar",
  },
  {
    name: "Marrakech",
    country: "Morocco",
    image: "/images/dest-marrakech.png",
    price: "₹1,57,000",
    rating: "4.7",
    tag: "Markets & spice",
    category: "Culture",
    description:
      "A sensory labyrinth of souks, spices, and riads, Marrakech enchants with its blend of Berber, Arab, and French influences. The ancient Medina's narrow streets lead to breathtaking courtyard palaces.",
    highlights: [
      "Private riad stay with rooftop terrace",
      "Guided souk tour with a local expert",
      "Traditional Moroccan cooking class",
      "Day trip to the Atlas Mountains",
      "Djemaa el-Fna square at dusk",
      "Sunset camel trek in Agafay Desert",
    ],
    duration: "6 nights",
    bestTime: "Mar – May, Sep – Nov",
  },
  {
    name: "Bali",
    country: "Indonesia",
    image: "/images/dest-bali.png",
    price: "₹1,75,000",
    rating: "4.9",
    tag: "Tropical retreat",
    category: "Islands",
    description:
      "Bali's spiritual landscape of terraced rice paddies, ornate temples, and tropical beaches make it the island of the gods — and one of the world's most beloved and restorative travel destinations.",
    highlights: [
      "Sunrise hike up Mount Batur volcano",
      "Private villa with jungle infinity pool",
      "Ubud rice terrace cycling tour",
      "Traditional Balinese spa and wellness day",
      "Uluwatu temple clifftop sunset",
      "Cooking class and Ubud market visit",
    ],
    duration: "10 nights",
    bestTime: "Apr – Oct",
  },
]

const FILTERS = ["All", "Islands", "Mountains", "Culture"]

type Props = {
  searchQuery?: string
  onSelectDestination: (d: Destination) => void
}

export function Destinations({ searchQuery = "", onSelectDestination }: Props) {
  const [activeFilter, setActiveFilter] = useState("All")

  const visible = allDestinations.filter((d) => {
    const q = searchQuery.toLowerCase()
    const matchesSearch =
      !q ||
      d.name.toLowerCase().includes(q) ||
      d.country.toLowerCase().includes(q) ||
      d.tag.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q)
    const matchesFilter = activeFilter === "All" || d.category === activeFilter
    return matchesSearch && matchesFilter
  })

  return (
    <section id="destinations" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-primary">
            Featured destinations
          </p>
          <h2 className="max-w-xl text-balance font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Places worth the journey
          </h2>
        </div>
        <a
          href="/#destinations"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          View all destinations
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>

      {/* Filter tabs */}
      <div className="mt-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeFilter === f
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
        {searchQuery && (
          <span className="rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
            Searching: &ldquo;{searchQuery}&rdquo;
          </span>
        )}
      </div>

      {visible.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="font-serif text-2xl text-foreground">No destinations found</p>
          <p className="mt-2 text-muted-foreground">
            Try a different search term or filter.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((d, i) => (
            <article
              key={d.name}
              onClick={() => onSelectDestination(d)}
              className={`group relative cursor-pointer overflow-hidden rounded-3xl ${
                i === 0 && visible.length === allDestinations.length
                  ? "lg:row-span-2 lg:h-full"
                  : ""
              }`}
            >
              <div
                className={`relative ${
                  i === 0 && visible.length === allDestinations.length
                    ? "h-96 lg:h-full"
                    : "h-72"
                }`}
              >
                <Image
                  src={d.image || "/placeholder.svg"}
                  alt={`${d.name}, ${d.country}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  {d.tag}
                </span>

                {/* Hover CTA */}
                <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  View details
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-background">
                      {d.name}
                    </h3>
                    <p className="text-sm text-background/80">{d.country}</p>
                    <div className="mt-2 flex items-center gap-1 text-background/90">
                      <Star className="size-4 fill-current text-accent" aria-hidden="true" />
                      <span className="text-sm font-medium">{d.rating}</span>
                    </div>
                  </div>
                  <div className="text-right text-background">
                    <p className="text-xs text-background/70">from</p>
                    <p className="font-serif text-xl font-semibold">{d.price}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
