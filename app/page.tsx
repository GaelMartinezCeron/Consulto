import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { ProjectsSection } from "@/components/projects-section"


export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ContactForm />
        <ProjectsSection />

      </main>
      <Footer />
    </div>
  )
}
