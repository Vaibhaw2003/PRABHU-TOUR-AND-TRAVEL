import { benefits } from '@/lib/data'
import { UserCheck, Car, BadgeCheck, HeadphonesIcon, CalendarCheck, ShieldCheck } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  'Experienced Drivers': UserCheck,
  'Well-Maintained Vehicles': Car,
  'Transparent Pricing': BadgeCheck,
  '24/7 Support': HeadphonesIcon,
  'Flexible Bookings': CalendarCheck,
  'Safe Travel': ShieldCheck,
}

export function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-gold text-sm font-medium tracking-wider uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-balance">
            Your Comfort is Our <span className="text-gold">Priority</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            We go the extra mile to ensure your travel experience is safe, comfortable, and memorable.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.title] || ShieldCheck
            return (
              <div
                key={benefit.title}
                className="group glass-card p-6 hover:border-gold/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:glow-red transition-all">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-gold transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
