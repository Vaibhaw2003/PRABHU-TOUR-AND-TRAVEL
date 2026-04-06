'use client'

import { useState } from 'react'
import { X, Calendar, User, Phone, Loader2, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  packageTitle: string
  packagePrice: number
  packageDays: number
}

export function BookingModal({
  isOpen,
  onClose,
  packageTitle,
  packagePrice,
  packageDays,
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    travelDate: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const res = await fetch('http://localhost:5000/api/bookings/guest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          travelDate: formData.travelDate,
          packageTitle: packageTitle,
          totalAmount: packagePrice,
        }),
      })

      const data = await res.json()

      if (!data.success) {
        throw new Error(data.error || 'Failed to submit booking')
      }

      setIsSuccess(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({ name: '', phone: '', travelDate: '' })
        onClose()
      }, 3000)
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md mx-4 bg-background border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="gradient-primary p-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-display text-xl font-bold text-white">Book Your Trip</h2>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center justify-between text-sm text-white/80">
            <span>{packageTitle}</span>
            <span className="font-semibold text-gold">Rs. {packagePrice.toLocaleString()}</span>
          </div>
          <span className="text-xs text-white/60">{packageDays} Days</span>
        </div>

        {/* Success View */}
        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Booking Submitted!</h3>
            <p className="text-sm text-muted-foreground">
              We will contact you soon at <strong>{formData.phone}</strong> to confirm your booking.
            </p>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {error && (
              <div className="text-sm text-red-500 bg-red-500/10 p-3 rounded-lg">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80" htmlFor="booking-name">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="booking-name"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="pl-10 bg-secondary/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80" htmlFor="booking-phone">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="booking-phone"
                  required
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="pl-10 bg-secondary/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80" htmlFor="booking-date">
                Travel Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="booking-date"
                  required
                  type="date"
                  value={formData.travelDate}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  className="pl-10 bg-secondary/50"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1 border-border"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 gradient-gold text-accent-foreground font-semibold hover:opacity-90"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Confirm Booking'
                )}
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              By booking, you agree to our terms. We will call you to confirm.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
