"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { WanderlightLogo } from "@/components/logo"

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Journeys",     href: "#journeys" },
  { label: "About",        href: "/about" },
  { label: "Stories",      href: "#stories" },
]

type Props = { onBookingOpen: () => void }

export function SiteHeader({ onBookingOpen }: Props) {
  const [open, setOpen]           = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const [activeHash, setActiveHash] = useState("")
  const pathname                  = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Clear hash selection when leaving the home page
  useEffect(() => {
    if (pathname !== "/") setActiveHash("")
  }, [pathname])

  const logoCls = scrolled ? "text-foreground" : "text-white"

  function isActive(href: string) {
    return activeHash === href
  }

  function handleClick(href: string) {
    setActiveHash(href)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-none"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">

        {/* Logo */}
        <a href="/" className={`flex items-center transition-colors duration-300 ${logoCls}`}>
          <WanderlightLogo className="h-20 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`group relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                  active
                    ? "text-amber-400 font-semibold"
                    : scrolled
                      ? "text-foreground/70 hover:text-foreground"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {/* Underline: always visible for active, animates in on hover for others */}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full transition-transform duration-200 ${
                    active
                      ? "scale-x-100 bg-amber-400"
                      : "origin-left scale-x-0 bg-current opacity-60 group-hover:scale-x-100"
                  }`}
                />
              </a>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={onBookingOpen}
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:opacity-90 active:scale-95"
            style={{
              background:
                "linear-gradient(135deg, #1b1a5e 0%, #7c3f96 50%, #e8902a 100%)",
            }}
          >
            Plan a trip
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`rounded-lg p-1.5 transition-colors duration-200 md:hidden ${logoCls}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 mb-3 rounded-2xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => { setOpen(false); handleClick(link.href) }}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-amber-50 text-amber-600 font-semibold"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
            <button
              onClick={() => { setOpen(false); onBookingOpen() }}
              className="mt-3 w-full rounded-full py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, #1b1a5e 0%, #7c3f96 50%, #e8902a 100%)",
              }}
            >
              Plan a trip
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
