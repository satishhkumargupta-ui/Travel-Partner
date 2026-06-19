"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Search, MapPin } from "lucide-react"
import { WanderlightLogo } from "@/components/logo"
import { allDestinations } from "@/components/destinations"

const navLinks = [
  { label: "Destinations", href: "/#destinations" },
  { label: "Journeys",     href: "/#journeys"     },
  { label: "About",        href: "/about"         },
  { label: "Stories",      href: "/#stories"      },
]

type Props = { onBookingOpen: () => void }

export function SiteHeader({ onBookingOpen }: Props) {
  const [open,       setOpen]       = useState(false)
  const [hidden,     setHidden]     = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const [activeTab,  setActiveTab]  = useState("")
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchVal,  setSearchVal]  = useState("")
  const pathname         = usePathname()
  const router           = useRouter()
  const idleTimer        = useRef<ReturnType<typeof setTimeout> | null>(null)
  const searchRef        = useRef<HTMLInputElement>(null)
  const mobileSearchRef  = useRef<HTMLInputElement>(null)
  const desktopContainer = useRef<HTMLDivElement>(null)
  const mobileContainer  = useRef<HTMLDivElement>(null)

  // Hide while scrolling, show when idle; track if scrolled past hero
  useEffect(() => {
    const handler = () => {
      setHidden(true)
      setScrolled(window.scrollY > 60)
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => setHidden(false), 500)
    }
    setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handler, { passive: true })
    return () => {
      window.removeEventListener("scroll", handler)
      if (idleTimer.current) clearTimeout(idleTimer.current)
    }
  }, [])

  // Active hash tab sync
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

  // Close dropdown on outside click
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      const target = e.target as Node
      if (
        desktopContainer.current && !desktopContainer.current.contains(target) &&
        mobileContainer.current  && !mobileContainer.current.contains(target)
      ) {
        closeSearch()
      }
    }
    if (searchOpen) document.addEventListener("mousedown", onMouseDown)
    return () => document.removeEventListener("mousedown", onMouseDown)
  }, [searchOpen])

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") closeSearch() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  function isActive(href: string) {
    if (!href.includes("#")) return pathname === href
    return activeTab === href
  }

  function handleNavClick(href: string) {
    setActiveTab(href.includes("#") ? href : "")
  }

  function openSearch() {
    setSearchOpen(true)
    setTimeout(() => searchRef.current?.focus(), 60)
  }

  function closeSearch() {
    setSearchOpen(false)
    setSearchVal("")
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    router.push("/destinations")
    closeSearch()
  }

  function goToDestination(name: string) {
    router.push(`/destinations/${name.toLowerCase().replace(/\s+/g, "-")}`)
    closeSearch()
  }

  // Live suggestions — name-only matching for precision
  const query = searchVal.trim().toLowerCase()
  const suggestions = query.length > 0
    ? allDestinations.filter((d) => d.name.toLowerCase().includes(query)).slice(0, 6)
    : []
  const noResults = query.length > 0 && suggestions.length === 0

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={scrolled ? {
        background: "rgba(13,11,30,0.22)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      } : {
        background: "linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, transparent 100%)",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => { setActiveTab(""); closeSearch() }}
          className="flex shrink-0 items-center text-white transition-opacity duration-300 hover:opacity-80"
        >
          <WanderlightLogo className="h-12 w-auto sm:h-16 lg:h-20" />
        </Link>

        {/* Desktop centre: nav links ↔ search */}
        <div className="relative hidden flex-1 items-center justify-center md:flex">

          {/* Nav links — fade out when search open */}
          <div
            className="flex items-center transition-all duration-300"
            style={{ opacity: searchOpen ? 0 : 1, pointerEvents: searchOpen ? "none" : "auto" }}
          >
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`group relative px-4 py-2 text-sm tracking-wide transition-all duration-300 hover:-translate-y-px ${
                    active ? "font-semibold text-amber-400" : "font-medium text-white/80 hover:text-amber-400"
                  }`}
                >
                  <span
                    className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "radial-gradient(ellipse 80% 70% at 50% 100%, rgba(251,191,36,0.13) 0%, transparent 70%)" }}
                  />
                  <span className="relative z-10">{link.label}</span>
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

          {/* Search bar + dropdown — slides in when open */}
          <div
            ref={desktopContainer}
            className="absolute left-1/2 w-full max-w-md -translate-x-1/2 transition-all duration-300"
            style={{ opacity: searchOpen ? 1 : 0, pointerEvents: searchOpen ? "auto" : "none" }}
          >
            <form onSubmit={handleSearch}>
              <div
                className="flex items-center gap-3 rounded-full border border-white/25 px-5 py-2.5 backdrop-blur-md"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <Search className="size-4 shrink-0 text-white/55" />
                <input
                  ref={searchRef}
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  placeholder="Search destinations… e.g. Bali, Kyoto"
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-white/38 focus:outline-none"
                />
                {searchVal && (
                  <button type="button" onClick={() => setSearchVal("")} className="shrink-0 text-white/45 transition-colors hover:text-white">
                    <X className="size-3.5" />
                  </button>
                )}
                <button type="button" onClick={closeSearch} className="shrink-0 text-white/45 transition-colors hover:text-white">
                  <X className="size-4" />
                </button>
              </div>
            </form>

            {/* Suggestions dropdown */}
            {(suggestions.length > 0 || noResults) && (
              <div
                className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-2xl border border-white/12 shadow-2xl"
                style={{ background: "rgba(13,11,30,0.97)", backdropFilter: "blur(24px)" }}
              >
                {suggestions.length > 0 ? (
                  <ul className="py-2">
                    {suggestions.map((d) => (
                      <li key={d.name}>
                        <button
                          type="button"
                          onClick={() => goToDestination(d.name)}
                          className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-white/7"
                        >
                          <div className="relative size-10 shrink-0 overflow-hidden rounded-xl">
                            <Image src={d.image} alt={d.name} fill className="object-cover" sizes="40px" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-white">{d.name}</p>
                            <p className="truncate text-xs text-white/45">{d.country} · {d.tag}</p>
                          </div>
                          <span className="shrink-0 text-xs text-white/25">→</span>
                        </button>
                      </li>
                    ))}
                    <li className="border-t border-white/8 px-4 py-2.5">
                      <button
                        type="button"
                        onClick={() => { router.push("/destinations"); closeSearch() }}
                        className="w-full text-left text-xs text-white/40 transition-colors hover:text-white/70"
                      >
                        View all destinations →
                      </button>
                    </li>
                  </ul>
                ) : (
                  <div className="px-5 py-8 text-center">
                    <MapPin className="mx-auto mb-3 size-8 text-white/20" />
                    <p className="text-sm font-semibold text-white/75">
                      Didn&apos;t find what you&apos;re looking for?
                    </p>
                    <p className="mt-1 text-xs text-white/35">
                      No destination named &ldquo;{searchVal}&rdquo; found.
                    </p>
                    <button
                      type="button"
                      onClick={() => { router.push("/destinations"); closeSearch() }}
                      className="mt-4 inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                      style={{ background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 50%,#e8902a 100%)" }}
                    >
                      Explore all destinations →
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Desktop right: search icon + CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={searchOpen ? closeSearch : openSearch}
            aria-label="Search destinations"
            className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:scale-110"
          >
            {searchOpen ? <X className="size-4" /> : <Search className="size-4" />}
          </button>
          <Link
            href="/plan"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg, #1b1a5e 0%, #7c3f96 50%, #e8902a 100%)" }}
          >
            Plan a trip
          </Link>
        </div>

        {/* Mobile right: search + hamburger */}
        <div className="ml-auto flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={searchOpen ? closeSearch : openSearch}
            aria-label="Search"
            className="rounded-lg p-1.5 text-white"
          >
            {searchOpen ? <X className="size-5" /> : <Search className="size-5" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-1.5 text-white"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile search bar + dropdown */}
      {searchOpen && (
        <div ref={mobileContainer} className="px-4 pb-3 md:hidden">
          <form onSubmit={handleSearch}>
            <div
              className="flex items-center gap-3 rounded-2xl border border-white/20 px-4 py-3 backdrop-blur-md"
              style={{ background: "rgba(255,255,255,0.10)" }}
            >
              <Search className="size-4 shrink-0 text-white/55" />
              <input
                ref={mobileSearchRef}
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Search destinations…"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
                autoFocus
              />
              {searchVal && (
                <button type="button" onClick={() => setSearchVal("")} className="text-white/40 hover:text-white">
                  <X className="size-4" />
                </button>
              )}
            </div>
          </form>

          {/* Mobile suggestions */}
          {(suggestions.length > 0 || noResults) && (
            <div
              className="mt-2 overflow-hidden rounded-2xl border border-white/12 shadow-2xl"
              style={{ background: "rgba(13,11,30,0.97)", backdropFilter: "blur(24px)" }}
            >
              {suggestions.length > 0 ? (
                <ul className="py-2">
                  {suggestions.map((d) => (
                    <li key={d.name}>
                      <button
                        type="button"
                        onClick={() => goToDestination(d.name)}
                        className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-white/7"
                      >
                        <div className="relative size-9 shrink-0 overflow-hidden rounded-xl">
                          <Image src={d.image} alt={d.name} fill className="object-cover" sizes="36px" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-white">{d.name}</p>
                          <p className="truncate text-xs text-white/45">{d.country} · {d.tag}</p>
                        </div>
                        <span className="shrink-0 text-xs text-white/25">→</span>
                      </button>
                    </li>
                  ))}
                  <li className="border-t border-white/8 px-4 py-2.5">
                    <button
                      type="button"
                      onClick={() => { router.push("/destinations"); closeSearch() }}
                      className="text-xs text-white/40 hover:text-white/70"
                    >
                      View all destinations →
                    </button>
                  </li>
                </ul>
              ) : (
                <div className="px-5 py-7 text-center">
                  <MapPin className="mx-auto mb-3 size-7 text-white/20" />
                  <p className="text-sm font-semibold text-white/75">
                    Didn&apos;t find what you&apos;re looking for?
                  </p>
                  <p className="mt-1 text-xs text-white/35">
                    No destination named &ldquo;{searchVal}&rdquo; found.
                  </p>
                  <button
                    type="button"
                    onClick={() => { router.push("/destinations"); closeSearch() }}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                    style={{ background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 50%,#e8902a 100%)" }}
                  >
                    Explore all destinations →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Mobile nav menu */}
      {open && (
        <div
          className="mx-4 mb-3 rounded-2xl border border-white/12 p-5 shadow-2xl md:hidden"
          style={{ background: "rgba(13,11,30,0.96)", backdropFilter: "blur(24px)" }}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => { setOpen(false); handleNavClick(link.href) }}
                  className={`group relative flex items-center overflow-hidden rounded-xl px-4 py-3.5 text-sm transition-all duration-200 ${
                    active ? "font-semibold text-amber-400" : "font-medium text-white/80 hover:text-amber-400"
                  }`}
                  style={active ? {
                    background: "linear-gradient(135deg, rgba(251,191,36,0.12) 0%, rgba(232,144,42,0.08) 100%)",
                    boxShadow: "inset 3px 0 0 #fbbf24, 0 0 0 1px rgba(251,191,36,0.18)",
                  } : undefined}
                >
                  {!active && (
                    <span
                      className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.08) 0%, rgba(124,63,150,0.05) 100%)" }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              )
            })}
            <div className="my-2 h-px bg-white/8" />
            <Link
              href="/plan"
              onClick={() => setOpen(false)}
              className="block w-full rounded-full py-3.5 text-center text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90 active:scale-95"
              style={{ background: "linear-gradient(135deg, #1b1a5e 0%, #7c3f96 50%, #e8902a 100%)" }}
            >
              Plan a trip
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @keyframes luxuryGlow {
          0%, 100% { box-shadow: 0 0 6px rgba(251,191,36,0.55), 0 0 12px rgba(124,63,150,0.30); }
          50%       { box-shadow: 0 0 12px rgba(251,191,36,0.95), 0 0 24px rgba(232,144,42,0.55), 0 0 40px rgba(124,63,150,0.25); }
        }
      `}</style>
    </header>
  )
}
