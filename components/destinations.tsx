import Image from "next/image"
import { ArrowUpRight, Star } from "lucide-react"

type Destination = {
  name: string
  country: string
  image: string
  price: string
  rating: string
  tag: string
}

const destinations: Destination[] = [
  {
    name: "Santorini",
    country: "Greece",
    image: "/images/dest-santorini.png",
    price: "$2,400",
    rating: "4.9",
    tag: "Island escape",
  },
  {
    name: "Kyoto",
    country: "Japan",
    image: "/images/dest-kyoto.png",
    price: "$3,150",
    rating: "5.0",
    tag: "Culture & temples",
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    image: "/images/dest-alps.png",
    price: "$2,950",
    rating: "4.8",
    tag: "Mountain adventure",
  },
  {
    name: "Marrakech",
    country: "Morocco",
    image: "/images/dest-marrakech.png",
    price: "$1,890",
    rating: "4.7",
    tag: "Markets & spice",
  },
  {
    name: "Bali",
    country: "Indonesia",
    image: "/images/dest-bali.png",
    price: "$2,100",
    rating: "4.9",
    tag: "Tropical retreat",
  },
  {
    name: "Shimla",
    country: "India",
    image: "/images/dest-shimla.png",
    price: "$1,250",
    rating: "4.8",
    tag: "Himalayan hill station",
  },
  {
    name: "Nainital",
    country: "India",
    image: "/images/dest-nainital.png",
    price: "$1,150",
    rating: "4.7",
    tag: "Lakeside getaway",
  },
  {
    name: "Mussoorie",
    country: "India",
    image: "/images/dest-mussoorie.png",
    price: "$1,180",
    rating: "4.8",
    tag: "Mountain views",
  },
]

export function Destinations() {
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
          href="#"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          View all destinations
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d, i) => (
          <article
            key={d.name}
            className={`group relative overflow-hidden rounded-3xl ${
              i === 0 ? "lg:row-span-2 lg:h-full" : ""
            }`}
          >
            <div className={`relative ${i === 0 ? "h-96 lg:h-full" : "h-72"}`}>
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

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-background">{d.name}</h3>
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
    </section>
  )
}
