import Link from 'next/link'
import { Car, Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/packages', label: 'Tour Packages' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

const destinations = [
  'Shimla',
  'Manali',
  'Haridwar',
  'Rishikesh',
  'Nainital',
  'Mussoorie',
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-gold leading-tight">
                  Prabhu
                </span>
                <span className="text-xs text-muted-foreground -mt-1">
                  Tour & Travel
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Your trusted partner for comfortable and affordable outstation travel. 
              We make your journey memorable with experienced drivers and well-maintained vehicles.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/918874812003"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-green-600/20 flex items-center justify-center text-muted-foreground hover:text-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-blue-600/20 flex items-center justify-center text-muted-foreground hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-pink-600/20 flex items-center justify-center text-muted-foreground hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-gold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-display font-semibold text-gold mb-4">Popular Destinations</h3>
            <ul className="space-y-3">
              {destinations.map((dest) => (
                <li key={dest}>
                  <Link
                    href={`/packages?destination=${dest.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-gold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="text-muted-foreground">Vaibhaw Singh</p>
                  <a href="tel:+918874812003" className="text-foreground hover:text-gold transition-colors">
                    +91 8874812003
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="text-muted-foreground">Satyam Singh</p>
                  <a href="tel:+919984029040" className="text-foreground hover:text-gold transition-colors">
                    +91 9984029040
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href="mailto:prabhutourtravel@gmail.com"
                  className="text-sm text-foreground hover:text-gold transition-colors break-all"
                >
                  prabhutourtravel@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  24/7 Available
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Delhi NCR, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Prabhu Tour & Travel. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/admin" className="hover:text-gold transition-colors">
              Admin
            </Link>
            <span>|</span>
            <span>Made with care in India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
