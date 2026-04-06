'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BookingModal } from './booking-modal'

interface PackageCardProps {
  id?: string
  title: string
  destination: string
  days: number
  price: number
  image: string
  featured?: boolean
}

export function PackageCard({
  id,
  title,
  destination,
  days,
  price,
  image,
  featured,
}: PackageCardProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <div className="group glass-card overflow-hidden hover:border-gold/30 transition-all duration-300 hover:glow-gold">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          
          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full gradient-gold text-xs font-semibold text-accent-foreground">
              Popular
            </div>
          )}

          {/* Price Tag */}
          <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg glass font-semibold">
            <span className="text-gold">Rs. {price.toLocaleString()}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-gold transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-gold" />
              <span>{destination}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gold" />
              <span>{days} Days</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="flex-1 gradient-gold text-accent-foreground font-medium hover:opacity-90"
              onClick={() => setIsBookingOpen(true)}
            >
              Book Now
            </Button>
            {id && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-border hover:border-gold/50 hover:text-gold"
              >
                <Link href={`/packages/${id}`}>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        packageTitle={title}
        packagePrice={price}
        packageDays={days}
      />
    </>
  )
}
