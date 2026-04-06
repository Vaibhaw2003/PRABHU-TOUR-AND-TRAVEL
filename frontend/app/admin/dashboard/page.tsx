import { Package, DollarSign, Calendar, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const stats = [
  {
    label: 'Total Packages',
    value: '6',
    icon: Package,
    href: '/admin/packages',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/20',
  },
  {
    label: 'Pricing Plans',
    value: '3',
    icon: DollarSign,
    href: '/admin/pricing',
    color: 'text-green-500',
    bgColor: 'bg-green-500/20',
  },
  {
    label: 'Bookings',
    value: '0',
    icon: Calendar,
    href: '/admin/bookings',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/20',
  },
  {
    label: 'This Month',
    value: 'Active',
    icon: TrendingUp,
    href: '#',
    color: 'text-gold',
    bgColor: 'bg-gold/20',
  },
]

const quickActions = [
  { label: 'Add New Package', href: '/admin/packages', icon: Package },
  { label: 'Update Pricing', href: '/admin/pricing', icon: DollarSign },
  { label: 'View Bookings', href: '/admin/bookings', icon: Calendar },
]

export default function AdminDashboardPage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
          Welcome to <span className="text-gold">Admin Dashboard</span>
        </h1>
        <p className="text-muted-foreground">
          Manage your packages, pricing, and bookings from here.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="glass-card p-6 hover:border-gold/30 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="glass-card p-6">
        <h2 className="font-display font-semibold text-lg mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon
            return (
              <Link
                key={action.label}
                href={action.href}
                className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
              >
                <Icon className="w-5 h-5 text-gold" />
                <span className="font-medium">{action.label}</span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-8 glass-card p-6">
        <h2 className="font-display font-semibold text-lg mb-4">Getting Started</h2>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <strong className="text-foreground">Packages:</strong> Add, edit, or remove tour packages. 
            Each package includes details like destination, duration, price, and itinerary.
          </p>
          <p>
            <strong className="text-foreground">Pricing:</strong> Update the rate chart for different 
            trip types including local trips, long trips, and weekly packages.
          </p>
          <p>
            <strong className="text-foreground">Bookings:</strong> View and manage customer bookings. 
            Update booking status as pending, confirmed, completed, or cancelled.
          </p>
        </div>
      </div>
    </div>
  )
}
