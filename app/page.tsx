"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Destinations } from "@/components/destinations"
import { FeatureSection } from "@/components/feature-section"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { SiteFooter } from "@/components/site-footer"
import { ContactModal } from "@/components/contact-modal"

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("")
  const [contactOpen, setContactOpen] = useState(false)

  function handleSearch(query: string) {
    setSearchQuery(query)
    setTimeout(() => {
      document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" })
    }, 50)
  }

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader onBookingOpen={() => {}} />
      <Hero onSearch={handleSearch} />
      <Destinations searchQuery={searchQuery} />
      <FeatureSection />
      <Testimonials />
      <Newsletter />
      <SiteFooter onContactOpen={() => setContactOpen(true)} />

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </main>
  )
}
