'use client'

import { useState } from 'react'
import useSWR, { mutate } from 'swr'
import { Pencil, Car } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { AdminSidebar } from '@/components/admin-sidebar'

interface PricingData {
  _id: string
  category: string
  minKm: number
  ratePerKm: number
  approxCost: number
  description: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function AdminPricingPage() {
  const { data: pricing, error, isLoading } = useSWR<PricingData[]>('/api/pricing', fetcher)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedPricing, setSelectedPricing] = useState<PricingData | null>(null)
  const [formData, setFormData] = useState({
    category: '',
    minKm: 0,
    ratePerKm: 0,
    approxCost: 0,
    description: '',
  })
  const [saving, setSaving] = useState(false)

  const handleEdit = (item: PricingData) => {
    setSelectedPricing(item)
    setFormData({
      category: item.category,
      minKm: item.minKm,
      ratePerKm: item.ratePerKm,
      approxCost: item.approxCost,
      description: item.description,
    })
    setDialogOpen(true)
  }

  const handleSave = async () => {
    if (!selectedPricing) return
    
    setSaving(true)
    try {
      await fetch('/api/pricing', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedPricing._id, ...formData }),
      })
      mutate('/api/pricing')
      setDialogOpen(false)
    } catch (error) {
      console.error('Failed to save pricing:', error)
    } finally {
      setSaving(false)
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
              Manage <span className="text-gold">Pricing</span>
            </h1>
            <p className="text-muted-foreground">
              Update rate chart and pricing information
            </p>
          </div>

          {/* Pricing Table */}
          {isLoading ? (
            <div className="text-center py-12 text-muted-foreground">Loading pricing...</div>
          ) : error ? (
            <div className="text-center py-12 text-destructive">Failed to load pricing</div>
          ) : (
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary/20 border-b border-border">
                      <th className="text-left p-4 font-display font-semibold text-gold">Category</th>
                      <th className="text-center p-4 font-display font-semibold text-gold">Min. KM</th>
                      <th className="text-center p-4 font-display font-semibold text-gold">Rate/KM</th>
                      <th className="text-center p-4 font-display font-semibold text-gold">Approx. Cost</th>
                      <th className="text-right p-4 font-display font-semibold text-gold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricing?.map((item, index) => (
                      <tr key={item._id} className={index < (pricing?.length ?? 0) - 1 ? 'border-b border-border/50' : ''}>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                              <Car className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <span className="font-medium">{item.category}</span>
                              <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-center text-muted-foreground">{item.minKm} km</td>
                        <td className="p-4 text-center">
                          <span className="text-gold font-semibold">Rs. {item.ratePerKm}</span>
                        </td>
                        <td className="p-4 text-center font-semibold">Rs. {item.approxCost.toLocaleString()}</td>
                        <td className="p-4 text-right">
                          <Button size="sm" variant="outline" onClick={() => handleEdit(item)}>
                            <Pencil className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-8 glass-card p-6">
            <h2 className="font-display font-semibold text-lg mb-4">Pricing Notes</h2>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Category:</strong> The type of trip (Local, Long, Weekly)
              </p>
              <p>
                <strong className="text-foreground">Min. KM:</strong> Minimum kilometers included in the base price
              </p>
              <p>
                <strong className="text-foreground">Rate/KM:</strong> Cost per kilometer
              </p>
              <p>
                <strong className="text-foreground">Approx. Cost:</strong> Estimated cost based on minimum kilometers
              </p>
            </div>
          </div>

          {/* Edit Dialog */}
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-display">Edit Pricing</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Input
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="Local Trip"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Minimum KM</label>
                    <Input
                      type="number"
                      value={formData.minKm}
                      onChange={(e) => setFormData({ ...formData, minKm: parseInt(e.target.value) || 0 })}
                      min={0}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Rate per KM (Rs.)</label>
                    <Input
                      type="number"
                      step="0.5"
                      value={formData.ratePerKm}
                      onChange={(e) => setFormData({ ...formData, ratePerKm: parseFloat(e.target.value) || 0 })}
                      min={0}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Approx. Cost (Rs.)</label>
                  <Input
                    type="number"
                    value={formData.approxCost}
                    onChange={(e) => setFormData({ ...formData, approxCost: parseInt(e.target.value) || 0 })}
                    min={0}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={2}
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <Button variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave} disabled={saving} className="gradient-gold text-accent-foreground">
                    {saving ? 'Saving...' : 'Save Changes'}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </div>
  )
}
