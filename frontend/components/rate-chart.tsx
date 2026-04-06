import { initialPricing } from '@/lib/data'
import { Car, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function RateChart() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-gold text-sm font-medium tracking-wider uppercase mb-3">
            Transparent Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-balance">
            Outstation <span className="text-gold">Rate Chart</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Clear and competitive pricing for all your travel needs. 
            No hidden charges, just honest rates.
          </p>
        </div>

        {/* Rate Table */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-4 bg-primary/20 border-b border-border">
              <div className="font-display font-semibold text-gold text-sm">Trip Type</div>
              <div className="font-display font-semibold text-gold text-sm text-center">Min. KM</div>
              <div className="font-display font-semibold text-gold text-sm text-center">Rate/KM</div>
              <div className="font-display font-semibold text-gold text-sm text-right">Approx. Cost</div>
            </div>

            {/* Table Body */}
            {initialPricing.map((item, index) => (
              <div
                key={item.category}
                className={`grid grid-cols-4 gap-4 p-4 items-center hover:bg-white/5 transition-colors ${
                  index < initialPricing.length - 1 ? 'border-b border-border/50' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <Car className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-sm">{item.category}</span>
                </div>
                <div className="text-center text-muted-foreground">{item.minKm} km</div>
                <div className="text-center">
                  <span className="text-gold font-semibold">Rs. {item.ratePerKm}</span>
                </div>
                <div className="text-right font-semibold">
                  Rs. {item.approxCost.toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-6 p-4 glass-card">
            <p className="text-sm text-muted-foreground text-center">
              <span className="text-gold font-medium">Note:</span> Driver allowance included. 
              Toll, parking & state permits extra. Night charges after 10 PM: Rs. 300/night.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-gold/50 text-gold hover:bg-gold/10">
              <Link href="/pricing">
                View Full Pricing Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
