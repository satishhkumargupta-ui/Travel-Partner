"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WanderlightLogo } from "@/components/logo"

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Journeys", href: "#journeys" },
  { label: "About", href: "#about" },
  { label: "Stories", href: "#stories" },
]

type Props = {
  onBookingOpen: () => void
}

export function SiteHeader({ onBookingOpen }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 lg:px-8">
        <a href="/" className="flex items-center gap-2 text-background">
          <WanderlightLogo className="h-8 w-auto" />
          <span className="font-serif text-xl font-semibold tracking-tight">Wanderlight</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-background/90 transition-colors hover:text-background"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            onClick={onBookingOpen}
            className="rounded-full bg-background text-foreground hover:bg-background/90"
          >
            Plan a trip
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-background md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 rounded-2xl bg-card p-6 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => { setOpen(false); onBookingOpen() }}
              className="mt-2 rounded-full"
            >
              Plan a trip
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
