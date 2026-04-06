import { Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary opacity-90" />
      <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center mix-blend-overlay opacity-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Ready for Your Next <span className="text-gold">Adventure?</span>
          </h2>
          <p className="text-lg text-foreground/80 mb-10 leading-relaxed text-pretty">
            Book your trip today and experience the joy of hassle-free travel. 
            Our team is available 24/7 to assist you with your booking.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto gradient-gold text-accent-foreground font-semibold text-base px-8 hover:opacity-90 transition-opacity glow-gold"
            >
              <a
                href="https://wa.me/918874812003?text=Hi, I want to book a trip. Please assist me."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8"
            >
              <a href="tel:+918874812003">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 max-w-xl mx-auto">
            <div className="glass-card p-4 text-left">
              <p className="text-sm text-foreground/70 mb-1">Vaibhaw Singh</p>
              <a href="tel:+918874812003" className="font-semibold text-gold hover:underline">
                +91 8874812003
              </a>
            </div>
            <div className="glass-card p-4 text-left">
              <p className="text-sm text-foreground/70 mb-1">Satyam Singh</p>
              <a href="tel:+919984029040" className="font-semibold text-gold hover:underline">
                +91 9984029040
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
