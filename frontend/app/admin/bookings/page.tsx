'use client'

import useSWR, { mutate } from 'swr'
import { format } from 'date-fns'
import { Calendar, User, Phone, Mail, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { AdminSidebar } from '@/components/admin-sidebar'

interface BookingData {
  _id: string
  name: string
  phone: string
  email: string
  packageTitle?: string
  travelDate: string
  passengers: number
  message: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const statusColors = {
  pending: 'bg-yellow-500/20 text-yellow-500',
  confirmed: 'bg-blue-500/20 text-blue-500',
  completed: 'bg-green-500/20 text-green-500',
  cancelled: 'bg-red-500/20 text-red-500',
}

export default function AdminBookingsPage() {
  const { data: bookings, error, isLoading } = useSWR<BookingData[]>('/api/bookings', fetcher)

  const updateStatus = async (bookingId: string, newStatus: string) => {
    try {
      await fetch('/api/bookings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: bookingId, status: newStatus }),
      })
      mutate('/api/bookings')
    } catch (error) {
      console.error('Failed to update booking status:', error)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />
      <main className="lg:ml-64 min-h-screen pt-16 lg:pt-0">
        <div className="p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
              Manage <span className="text-gold">Bookings</span>
            </h1>
            <p className="text-muted-foreground">
              View and manage customer bookings
            </p>
          </div>

          {/* Bookings List */}
          {isLoading ? (
            <div className="text-center py-12 text-muted-foreground">Loading bookings...</div>
          ) : error ? (
            <div className="text-center py-12 text-destructive">Failed to load bookings</div>
          ) : bookings?.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">No Bookings Yet</h3>
              <p className="text-muted-foreground">
                When customers book through the website, their bookings will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {bookings?.map((booking) => (
                <div key={booking._id} className="glass-card p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-semibold">
                          {booking.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="font-semibold">{booking.name}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[booking.status]}`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="w-4 h-4" />
                          <a href={`tel:${booking.phone}`} className="hover:text-gold">
                            {booking.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="w-4 h-4" />
                          <a href={`mailto:${booking.email}`} className="hover:text-gold truncate">
                            {booking.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>
                            Travel: {format(new Date(booking.travelDate), 'dd MMM yyyy')}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <User className="w-4 h-4" />
                          <span>{booking.passengers} Passenger(s)</span>
                        </div>
                      </div>

                      {booking.packageTitle && (
                        <div className="flex items-center gap-2 text-sm">
                          <Package className="w-4 h-4 text-gold" />
                          <span className="text-gold">{booking.packageTitle}</span>
                        </div>
                      )}

                      {booking.message && (
                        <p className="text-sm text-muted-foreground bg-secondary/50 p-3 rounded-lg">
                          {booking.message}
                        </p>
                      )}

                      <p className="text-xs text-muted-foreground">
                        Booked on {format(new Date(booking.createdAt), 'dd MMM yyyy, hh:mm a')}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Select
                        value={booking.status}
                        onValueChange={(value) => updateStatus(booking._id, value)}
                      >
                        <SelectTrigger className="w-36">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="confirmed">Confirmed</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-green-500/50 text-green-500 hover:bg-green-500/10"
                        asChild
                      >
                        <a
                          href={`https://wa.me/${booking.phone.replace(/\D/g, '')}?text=Hello ${booking.name}, regarding your booking...`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
