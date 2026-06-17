"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Star, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Destination } from "@/components/destinations"

type Props = {
  destination: Destination | null
  onClose: () => void
}

export function DestinationModal({ destination, onClose }: Props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [guests, setGuests] = useState("2")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (destination) {
      document.body.style.overflow = "hidden"
      setSubmitted(false)
      setName("")
      setEmail("")
      setDate("")
      setGuests("2")
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [destination])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  if (!destination) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${destination.name} details`}
        className="relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-background shadow-2xl"
      >
        {/* Hero image */}
        <div className="relative h-64 w-full shrink-0">
          <Image
            src={destination.image}
            alt={`${destination.name}, ${destination.country}`}
            fill
            className="object-cover rounded-t-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent rounded-t-3xl" />

          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 rounded-full bg-card/80 p-2 backdrop-blur transition-colors hover:bg-card"
          >
            <X className="size-5 text-foreground" />
          </button>

          <div className="absolute bottom-4 left-5">
            <span className="rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
              {destination.tag}
            </span>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-background">
              {destination.name}
            </h2>
            <p className="text-background/80">{destination.country}</p>
          </div>
        </div>

        <div className="p-6">
          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-4 text-sm mb-5">
            <div className="flex items-center gap-1.5 text-foreground">
              <Star className="size-4 fill-current text-accent" />
              <span className="font-medium">{destination.rating} rating</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="size-4" />
              {destination.duration}
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Calendar className="size-4" />
              Best: {destination.bestTime}
            </div>
            <div className="ml-auto text-right">
              <span className="text-xs text-muted-foreground">from</span>
              <p className="font-serif text-2xl font-semibold text-foreground leading-none">
                {destination.price}
                <span className="text-sm font-sans font-normal text-muted-foreground ml-1">
                  / person
                </span>
              </p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">{destination.description}</p>

          {/* Highlights */}
          <div className="mb-6">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
              Trip highlights
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {destination.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Enquiry form */}
          {!submitted ? (
            <div className="rounded-2xl border border-border bg-secondary p-5">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Enquire about this trip
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  if (name && email) setSubmitted(true)
                }}
                className="flex flex-col gap-3"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                      Full name
                    </label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                      Travel date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                      Travelers
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "person" : "people"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <Button type="submit" size="lg" className="rounded-full mt-1 w-full">
                  Send enquiry
                </Button>
              </form>
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-secondary p-8 text-center">
              <p className="text-4xl mb-3" aria-hidden="true">✈️</p>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Enquiry sent!
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                We&apos;ll be in touch within 24 hours to start planning your perfect trip to{" "}
                {destination.name}.
              </p>
              <Button onClick={onClose} className="mt-5 rounded-full" variant="outline">
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
