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
    <section id="stories" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p
          className="mb-3 text-sm font-medium uppercase tracking-[0.25em]"
          style={{
            background: "linear-gradient(90deg,#fbbf24,#e8902a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Traveler stories
        </p>
        <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Loved by travelers worldwide
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between rounded-3xl border border-white/10 p-8"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <div>
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-5 text-pretty leading-relaxed text-white/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
            <figcaption className="mt-6">
              <p className="font-semibold text-white">{t.name}</p>
              <p className="text-sm text-white/50">{t.trip}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
