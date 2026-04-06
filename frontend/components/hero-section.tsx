import Link from 'next/link'
import { ArrowRight, MapPin, Clock, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Trusted by 1000+ Happy Travelers
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up text-balance" style={{ animationDelay: '0.1s' }}>
            Your Journey to{' '}
            <span className="text-gold">Memorable Adventures</span>{' '}
            Starts Here
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-in-up text-pretty" style={{ animationDelay: '0.2s' }}>
            Experience hassle-free travel with Prabhu Tour & Travel. 
            Affordable rates, experienced drivers, and comfortable vehicles 
            for your perfect getaway to Shimla, Manali, Haridwar & more.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto gradient-gold text-accent-foreground font-semibold text-base px-8 hover:opacity-90 transition-opacity glow-gold"
            >
              <a
                href="https://wa.me/918874812003?text=Hi, I want to book a tour package."
                target="_blank"
                rel="noopener noreferrer"
              >
                Book on WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-gold/50 text-gold hover:bg-gold/10 font-semibold text-base px-8"
            >
              <Link href="/packages">
                View Packages
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-3 glass-card px-4 py-3">
              <MapPin className="w-5 h-5 text-gold shrink-0" />
              <span className="text-sm text-foreground/80">Delhi NCR Based</span>
            </div>
            <div className="flex items-center justify-center gap-3 glass-card px-4 py-3">
              <Clock className="w-5 h-5 text-gold shrink-0" />
              <span className="text-sm text-foreground/80">24/7 Available</span>
            </div>
            <div className="flex items-center justify-center gap-3 glass-card px-4 py-3">
              <Shield className="w-5 h-5 text-gold shrink-0" />
              <span className="text-sm text-foreground/80">Safe & Reliable</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-gold animate-pulse" />
        </div>
      </div>
    </section>
  )
}
