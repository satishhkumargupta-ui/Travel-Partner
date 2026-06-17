import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Destinations } from "@/components/destinations"
import { FeatureSection } from "@/components/feature-section"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Destinations />
      <FeatureSection />
      <Testimonials />
      <Newsletter />
      <SiteFooter />
    </main>
  )
}
