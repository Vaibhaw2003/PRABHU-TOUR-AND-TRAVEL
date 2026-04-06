'use client'

import { useState, useMemo } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { PackageCard } from '@/components/package-card'
import { initialPackages } from '@/lib/data'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const destinations = ['All', 'Shimla', 'Manali', 'Haridwar', 'Nainital']
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'days-low', label: 'Duration: Short to Long' },
  { value: 'days-high', label: 'Duration: Long to Short' },
]

export default function PackagesPage() {
  const [search, setSearch] = useState('')
  const [destination, setDestination] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  const filteredPackages = useMemo(() => {
    let result = [...initialPackages]

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase()
      result = result.filter(
        (pkg) =>
          pkg.title.toLowerCase().includes(searchLower) ||
          pkg.destination.toLowerCase().includes(searchLower) ||
          pkg.description.toLowerCase().includes(searchLower)
      )
    }

    // Destination filter
    if (destination !== 'All') {
      result = result.filter((pkg) => pkg.destination === destination)
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'days-low':
        result.sort((a, b) => a.days - b.days)
        break
      case 'days-high':
        result.sort((a, b) => b.days - a.days)
        break
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    return result
  }, [search, destination, sortBy])

  const clearFilters = () => {
    setSearch('')
    setDestination('All')
    setSortBy('featured')
  }

  const hasActiveFilters = search || destination !== 'All' || sortBy !== 'featured'

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-sm font-medium tracking-wider uppercase mb-3">
              Our Packages
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-balance">
              Explore Our <span className="text-gold">Tour Packages</span>
            </h1>
            <p className="text-lg text-foreground/80 text-pretty">
              Find the perfect package for your next adventure. 
              From the hills of Shimla to the spiritual Haridwar.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border bg-background sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search packages..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-secondary/50"
              />
            </div>

            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              className="lg:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>

            {/* Desktop Filters */}
            <div className={`flex flex-col lg:flex-row items-stretch lg:items-center gap-4 ${showFilters ? 'block' : 'hidden lg:flex'}`}>
              <Select value={destination} onValueChange={setDestination}>
                <SelectTrigger className="w-full lg:w-40 bg-secondary/50">
                  <SelectValue placeholder="Destination" />
                </SelectTrigger>
                <SelectContent>
                  {destinations.map((dest) => (
                    <SelectItem key={dest} value={dest}>
                      {dest}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-48 bg-secondary/50">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground hover:text-gold">
                  <X className="w-4 h-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {filteredPackages.length > 0 ? (
            <>
              <p className="text-sm text-muted-foreground mb-6">
                Showing {filteredPackages.length} package{filteredPackages.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPackages.map((pkg, index) => (
                  <PackageCard
                    key={index}
                    id={index.toString()}
                    title={pkg.title}
                    destination={pkg.destination}
                    days={pkg.days}
                    price={pkg.price}
                    image={pkg.image}
                    featured={pkg.featured}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No packages found matching your criteria.</p>
              <Button variant="outline" onClick={clearFilters} className="border-gold/50 text-gold hover:bg-gold/10">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
