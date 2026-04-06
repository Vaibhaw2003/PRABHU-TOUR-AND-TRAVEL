import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { HeroSection } from '@/components/hero-section'
import { RateChart } from '@/components/rate-chart'
import { PackagesSection } from '@/components/packages-section'
import { BenefitsSection } from '@/components/benefits-section'
import { NotesSection } from '@/components/notes-section'
import { CTASection } from '@/components/cta-section'
import { Testimonials } from '@/components/testimonials'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <RateChart />
      <PackagesSection />
      <BenefitsSection />
      <Testimonials />
      <NotesSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
