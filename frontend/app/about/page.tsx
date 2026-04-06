import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { benefits } from '@/lib/data'
import { 
  Car, 
  Users, 
  MapPin, 
  Award, 
  Heart, 
  Target,
  UserCheck,
  BadgeCheck,
  HeadphonesIcon,
  CalendarCheck,
  ShieldCheck,
} from 'lucide-react'
import Image from 'next/image'

const stats = [
  { value: '1000+', label: 'Happy Travelers' },
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Destinations' },
  { value: '24/7', label: 'Support Available' },
]

const iconMap: Record<string, React.ElementType> = {
  'Experienced Drivers': UserCheck,
  'Well-Maintained Vehicles': Car,
  'Transparent Pricing': BadgeCheck,
  '24/7 Support': HeadphonesIcon,
  'Flexible Bookings': CalendarCheck,
  'Safe Travel': ShieldCheck,
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-sm font-medium tracking-wider uppercase mb-3">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-balance">
              Your Trusted <span className="text-gold">Travel Partner</span>
            </h1>
            <p className="text-lg text-foreground/80 text-pretty">
              Learn more about Prabhu Tour & Travel and our commitment 
              to making your journeys memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 lg:py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-gold mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  alt="Prabhu Tour & Travel"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 glass-card p-4 max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-gold">5+ Years</p>
                    <p className="text-xs text-muted-foreground">Of Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-gold text-sm font-medium tracking-wider uppercase mb-3">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-balance">
                Making Travel <span className="text-gold">Accessible</span> & Comfortable
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Prabhu Tour & Travel was founded with a simple vision: to make travel 
                  accessible, comfortable, and affordable for everyone. Based in Delhi NCR, 
                  we specialize in outstation taxi services and curated tour packages to 
                  the most beautiful destinations in North India.
                </p>
                <p>
                  What started as a small family business has grown into a trusted name 
                  in the travel industry. Our experienced drivers know every twist and 
                  turn of the mountain roads, ensuring your safety while you enjoy the 
                  breathtaking scenery.
                </p>
                <p>
                  We believe that every journey should be a memorable experience, not 
                  just a means to reach a destination. {"That's"} why we go the extra mile 
                  to ensure your comfort with well-maintained vehicles, transparent 
                  pricing, and 24/7 customer support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission */}
            <div className="glass-card p-6 lg:p-8">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide safe, reliable, and affordable travel solutions that 
                create lasting memories for our customers. We strive to make every 
                journey comfortable and enjoyable.
              </p>
            </div>

            {/* Vision */}
            <div className="glass-card p-6 lg:p-8">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted travel partner in North India, known 
                for our commitment to customer satisfaction, safety, and excellence 
                in service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-gold text-sm font-medium tracking-wider uppercase mb-3">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-balance">
              What Makes Us <span className="text-gold">Different</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              We go beyond just providing transportation. Here is what sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const Icon = iconMap[benefit.title] || ShieldCheck
              return (
                <div
                  key={benefit.title}
                  className="glass-card p-6 hover:border-gold/30 transition-all duration-300 group"
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

      {/* Team Section */}
      <section className="py-12 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-gold text-sm font-medium tracking-wider uppercase mb-3">
              Our Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-balance">
              Meet the <span className="text-gold">People</span> Behind Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Team Member 1 */}
            <div className="glass-card p-6 text-center">
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">Vaibhaw Singh</h3>
              <p className="text-sm text-gold mb-3">Co-Founder & Operations</p>
              <p className="text-sm text-muted-foreground mb-4">
                Ensuring smooth operations and customer satisfaction for every trip.
              </p>
              <a 
                href="tel:+918874812003" 
                className="text-sm text-gold hover:underline"
              >
                +91 8874812003
              </a>
            </div>

            {/* Team Member 2 */}
            <div className="glass-card p-6 text-center">
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">Satyam Singh</h3>
              <p className="text-sm text-gold mb-3">Co-Founder & Customer Relations</p>
              <p className="text-sm text-muted-foreground mb-4">
                Dedicated to providing personalized travel experiences for all customers.
              </p>
              <a 
                href="tel:+919984029040" 
                className="text-sm text-gold hover:underline"
              >
                +91 9984029040
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-gold text-sm font-medium tracking-wider uppercase mb-3">
                Service Areas
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-balance">
                Where We <span className="text-gold">Operate</span>
              </h2>
            </div>

            <div className="glass-card p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg">Based in Delhi NCR</h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                We provide services from Delhi, Noida, Gurgaon, Ghaziabad, and 
                surrounding NCR areas to all major tourist destinations in North India.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Shimla', 'Manali', 'Haridwar', 'Rishikesh', 'Nainital', 'Mussoorie', 'Chandigarh', 'Agra'].map((dest) => (
                  <div key={dest} className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                    <MapPin className="w-4 h-4 text-gold shrink-0" />
                    <span className="text-sm">{dest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
