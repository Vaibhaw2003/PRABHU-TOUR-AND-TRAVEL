import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { initialPackages } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Check, X, ArrowLeft, MessageCircle, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PackageDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function PackageDetailPage({ params }: PackageDetailPageProps) {
  const { id } = await params
  const packageIndex = parseInt(id)
  const pkg = initialPackages[packageIndex]

  if (!pkg) {
    notFound()
  }

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${pkg.title} (${pkg.days} Days) package at Rs. ${pkg.price.toLocaleString()}. Please share more details and availability.`
  )

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero with Image */}
      <section className="relative pt-20 lg:pt-24">
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Back Button */}
        <div className="absolute top-24 lg:top-28 left-4 lg:left-8">
          <Button asChild variant="outline" size="sm" className="glass border-white/20 hover:bg-white/10">
            <Link href="/packages">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Packages
            </Link>
          </Button>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-12 lg:py-16 -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title & Meta */}
              <div className="glass-card p-6 lg:p-8">
                {pkg.featured && (
                  <span className="inline-block px-3 py-1 rounded-full gradient-gold text-xs font-semibold text-accent-foreground mb-4">
                    Popular Package
                  </span>
                )}
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  {pkg.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gold" />
                    <span>{pkg.destination}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gold" />
                    <span>{pkg.days} Days</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="glass-card p-6 lg:p-8">
                <h2 className="font-display text-xl font-semibold mb-4 text-gold">
                  About This Package
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Itinerary */}
              <div className="glass-card p-6 lg:p-8">
                <h2 className="font-display text-xl font-semibold mb-6 text-gold">
                  Itinerary
                </h2>
                <div className="space-y-4">
                  {pkg.itinerary.map((day, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-sm font-semibold shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-foreground/80">{day}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Includes & Excludes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Includes */}
                <div className="glass-card p-6">
                  <h3 className="font-display font-semibold mb-4 text-green-500 flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    Package Includes
                  </h3>
                  <ul className="space-y-3">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excludes */}
                <div className="glass-card p-6">
                  <h3 className="font-display font-semibold mb-4 text-destructive flex items-center gap-2">
                    <X className="w-5 h-5" />
                    Package Excludes
                  </h3>
                  <ul className="space-y-3">
                    {pkg.excludes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                        <X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="glass-card p-6 lg:p-8 sticky top-24">
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                  <p className="font-display text-4xl font-bold text-gold">
                    Rs. {pkg.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">per car</p>
                </div>

                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full gradient-gold text-accent-foreground font-semibold glow-gold"
                    size="lg"
                  >
                    <a
                      href={`https://wa.me/918874812003?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Book on WhatsApp
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-gold/50 text-gold hover:bg-gold/10"
                    size="lg"
                  >
                    <a href="tel:+918874812003">
                      <Phone className="w-5 h-5 mr-2" />
                      Call to Book
                    </a>
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    Free cancellation up to 24 hours before departure. 
                    20% booking amount required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton message={`Hi, I'm viewing the ${pkg.title} package. I have some questions.`} />
    </main>
  )
}

export function generateStaticParams() {
  return initialPackages.map((_, index) => ({
    id: index.toString(),
  }))
}
