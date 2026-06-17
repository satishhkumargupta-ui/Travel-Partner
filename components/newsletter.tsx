"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16">
        <h2 className="mx-auto max-w-2xl text-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          Let&apos;s plan your next adventure
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
          Join our newsletter for travel inspiration, insider guides, and early access to new
          journeys.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (email) setSent(true)
          }}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label className="flex-1">
            <span className="sr-only">Email address</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-full bg-background px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </label>
          <Button
            type="submit"
            size="lg"
            className="rounded-full bg-background text-foreground hover:bg-background/90"
          >
            {sent ? "Subscribed!" : "Subscribe"}
          </Button>
        </form>
        {sent && (
          <p className="mt-4 text-sm text-primary-foreground/85" role="status">
            Thanks for joining — adventure awaits in your inbox.
          </p>
        )}
      </div>
    </section>
  )
}
