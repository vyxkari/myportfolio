import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Tour from "@/components/tour"
import Certifications from "@/components/certifications"
import Journal from "@/components/journal"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Tour />
        <Certifications />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
