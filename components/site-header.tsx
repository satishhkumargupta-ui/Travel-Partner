"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { WanderlightLogo } from "@/components/logo"

const navLinks = [
  { label: "Destinations", href: "/#destinations" },
  { label: "Journeys",     href: "/#journeys"     },
  { label: "About",        href: "/about"         },
  { label: "Stories",      href: "/#stories"      },
]

type Props = { onBookingOpen: () => void }

export function SiteHeader({ onBookingOpen }: Props) {
  const [open, setOpen]           = useState(false)
  const [hidden, setHidden]       = useState(false)
  const [activeTab, setActiveTab] = useState("")
  const pathname                  = usePathname()
  const idleTimer                 = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Hide while scrolling, show when idle
  useEffect(() => {
    const handler = () => {
      setHidden(true)
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => setHidden(false), 500)
    }
    window.addEventListener("scroll", handler, { passive: true })
    return () => {
      window.removeEventListener("scroll", handler)
      if (idleTimer.current) clearTimeout(idleTimer.current)
    }
  }, [])

  useEffect(() => {
    const sync = () => {
      if (window.location.pathname === "/" && window.location.hash) {
        setActiveTab("/" + window.location.hash)
      }
    }
    sync()
    window.addEventListener("hashchange", sync)
    return () => window.removeEventListener("hashchange", sync)
  }, [])

  useEffect(() => {
    if (pathname !== "/") setActiveTab("")
  }, [pathname])

  function isActive(href: string) {
    if (!href.includes("#")) return pathname === href
    return activeTab === href
  }

  function handleNavClick(href: string) {
    setActiveTab(href.includes("#") ? href : "")
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.32) 0%, transparent 100%)" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">

        <Link
          href="/"
          onClick={() => setActiveTab("")}
          className="flex items-center text-white transition-opacity duration-300 hover:opacity-80"
        >
          <WanderlightLogo className="h-20 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`group relative px-4 py-2 text-sm tracking-wide transition-all duration-300 hover:-translate-y-px ${
                  active
                    ? "font-semibold text-amber-400"
                    : "font-medium text-white/80 hover:text-amber-400"
                }`}
              >
                {/* Ambient warm glow halo on hover */}
                <span
                  className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(ellipse 80% 70% at 50% 100%, rgba(251,191,36,0.13) 0%, transparent 70%)" }}
                />
                <span className="relative z-10">{link.label}</span>
                {/* Gradient underline — pulses when active */}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-px rounded-full transition-all duration-300 ${
                    active ? "scale-x-100" : "origin-left scale-x-0 group-hover:scale-x-100"
                  }`}
                  style={{
                    background: "linear-gradient(90deg, #7c3f96, #fbbf24, #e8902a)",
                    ...(active ? { animation: "luxuryGlow 2.5s ease-in-out infinite" } : {}),
                  }}
                />
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/plan"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg, #1b1a5e 0%, #7c3f96 50%, #e8902a 100%)" }}
          >
            Plan a trip
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-1.5 text-white transition-colors duration-200 md:hidden"
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
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => { setOpen(false); handleNavClick(link.href) }}
                  className={`group relative flex items-center overflow-hidden rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
                    active
                      ? "font-semibold text-amber-600"
                      : "font-medium text-foreground hover:text-amber-600"
                  }`}
                  style={active ? {
                    background: "linear-gradient(135deg, rgba(251,191,36,0.10) 0%, rgba(232,144,42,0.06) 100%)",
                    boxShadow: "inset 3px 0 0 #fbbf24, 0 0 0 1px rgba(251,191,36,0.15)",
                  } : undefined}
                >
                  {!active && (
                    <span
                      className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.07) 0%, rgba(124,63,150,0.04) 100%)" }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              )
            })}
            <Link
              href="/plan"
              onClick={() => setOpen(false)}
              className="mt-3 block w-full rounded-full py-3 text-center text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #1b1a5e 0%, #7c3f96 50%, #e8902a 100%)" }}
            >
              Plan a trip
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @keyframes luxuryGlow {
          0%, 100% {
            box-shadow: 0 0 6px rgba(251,191,36,0.55), 0 0 12px rgba(124,63,150,0.30);
          }
          50% {
            box-shadow: 0 0 12px rgba(251,191,36,0.95), 0 0 24px rgba(232,144,42,0.55), 0 0 40px rgba(124,63,150,0.25);
          }
        }
      `}</style>
    </header>
  )
}
