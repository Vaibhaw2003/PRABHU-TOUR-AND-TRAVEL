'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Car } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/packages', label: 'Packages' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center glow-red group-hover:scale-110 transition-transform">
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918874812003"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 8874812003</span>
            </a>
            <Button
              asChild
              className="gradient-gold text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <a
                href="https://wa.me/918874812003?text=Hi, I'm interested in booking a tour package."
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-foreground/80 hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4 px-4">
              <a
                href="tel:+918874812003"
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Phone className="w-4 h-4" />
                <span>+91 8874812003</span>
              </a>
              <Button
                asChild
                className="w-full gradient-gold text-accent-foreground font-semibold"
              >
                <a
                  href="https://wa.me/918874812003?text=Hi, I'm interested in booking a tour package."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
