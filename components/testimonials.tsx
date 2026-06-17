import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "The most seamless trip we've ever taken. Every detail was anticipated before we even thought to ask. Truly unforgettable.",
    name: "Amara Olsen",
    trip: "Kyoto & Hakone, Japan",
  },
  {
    quote:
      "Wanderlight found us experiences we never would have discovered alone. Our guide in Marrakech felt like an old friend.",
    name: "Daniel Reyes",
    trip: "Marrakech, Morocco",
  },
  {
    quote:
      "From the cliffside dinners to the private boat at sunset — it exceeded every expectation. We're already booking the next one.",
    name: "Priya Nair",
    trip: "Santorini, Greece",
  },
]

export function Testimonials() {
  return (
    <section id="stories" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-primary">
          Traveler stories
        </p>
        <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          Loved by travelers worldwide
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8"
          >
            <div>
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-5 text-pretty leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
            <figcaption className="mt-6">
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.trip}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
