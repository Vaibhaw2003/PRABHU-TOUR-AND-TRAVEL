import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PackageCard } from './package-card'
import { initialPackages } from '@/lib/data'

export function PackagesSection() {
  const featuredPackages = initialPackages.filter(pkg => pkg.featured).slice(0, 6)

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-gold text-sm font-medium tracking-wider uppercase mb-3">
            Our Packages
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-balance">
            Popular <span className="text-gold">Tour Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose from our carefully curated tour packages to the most 
            beautiful destinations in North India.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPackages.map((pkg, index) => (
            <PackageCard
              key={index}
              title={pkg.title}
              destination={pkg.destination}
              days={pkg.days}
              price={pkg.price}
              image={pkg.image}
              featured={pkg.featured}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-gold/50 text-gold hover:bg-gold/10">
            <Link href="/packages">
              View All Packages
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
