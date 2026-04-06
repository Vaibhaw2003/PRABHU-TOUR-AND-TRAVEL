import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { initialPricing, importantNotes } from '@/lib/data'
import { Car, Check, Info, AlertCircle, MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-sm font-medium tracking-wider uppercase mb-3">
              Pricing
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-balance">
              Transparent <span className="text-gold">Pricing</span>
            </h1>
            <p className="text-lg text-foreground/80 text-pretty">
              Clear, competitive rates with no hidden charges. 
              What you see is what you pay.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {initialPricing.map((plan, index) => (
              <div
                key={plan.category}
                className={`glass-card p-6 lg:p-8 relative ${
                  index === 1 ? 'ring-2 ring-gold' : ''
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full gradient-gold text-xs font-semibold text-accent-foreground">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Car className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{plan.category}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="text-center mb-6 py-6 border-y border-border">
                  <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                  <p className="font-display text-4xl font-bold text-gold">
                    Rs. {plan.approxCost.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">approx.</p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Minimum {plan.minKm} KM</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Rs. {plan.ratePerKm}/km rate</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Driver allowance included</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    <span>AC vehicle</span>
                  </li>
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    index === 1
                      ? 'gradient-gold text-accent-foreground glow-gold'
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                >
                  <a
                    href={`https://wa.me/918874812003?text=Hi, I'm interested in the ${plan.category} package. Please share more details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Quote
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Rate Chart */}
      <section className="py-12 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Detailed <span className="text-gold">Rate Chart</span>
              </h2>
              <p className="text-muted-foreground">
                Complete breakdown of our pricing structure
              </p>
            </div>

            {/* Full Rate Table */}
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary/20 border-b border-border">
                      <th className="text-left p-4 font-display font-semibold text-gold">Description</th>
                      <th className="text-center p-4 font-display font-semibold text-gold">Min. KM</th>
                      <th className="text-center p-4 font-display font-semibold text-gold">Rate/KM</th>
                      <th className="text-right p-4 font-display font-semibold text-gold">Approx. Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {initialPricing.map((item, index) => (
                      <tr key={item.category} className={index < initialPricing.length - 1 ? 'border-b border-border/50' : ''}>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                              <Car className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium">{item.category}</span>
                          </div>
                        </td>
                        <td className="p-4 text-center text-muted-foreground">{item.minKm} km</td>
                        <td className="p-4 text-center">
                          <span className="text-gold font-semibold">Rs. {item.ratePerKm}</span>
                        </td>
                        <td className="p-4 text-right font-semibold">Rs. {item.approxCost.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Charges */}
            <div className="mt-8 glass-card p-6 lg:p-8">
              <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-gold" />
                Additional Charges
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <span className="text-muted-foreground">Extra KM (beyond package)</span>
                  <span className="font-semibold text-gold">Rs. 12/km</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <span className="text-muted-foreground">Night charges (after 10 PM)</span>
                  <span className="font-semibold text-gold">Rs. 300/night</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <span className="text-muted-foreground">Toll & Parking</span>
                  <span className="font-semibold">As per actual</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <span className="text-muted-foreground">State Permits</span>
                  <span className="font-semibold">As per actual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                Important <span className="text-gold">Notes</span>
              </h2>
            </div>

            <div className="glass-card p-6 lg:p-8">
              <ul className="space-y-4">
                {importantNotes.map((note, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Need a Custom Quote?
            </h2>
            <p className="text-foreground/80 mb-8">
              Contact us for special packages, group bookings, or custom itineraries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto gradient-gold text-accent-foreground font-semibold glow-gold"
              >
                <a
                  href="https://wa.me/918874812003?text=Hi, I need a custom quote for my trip."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
              >
                <a href="tel:+918874812003">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton message="Hi, I have questions about your pricing." />
    </main>
  )
}
