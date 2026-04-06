'use client'

import { useState } from 'react'
import useSWR, { mutate } from 'swr'
import { Plus, Pencil, Trash2, MapPin, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Switch } from '@/components/ui/switch'
import { AdminSidebar } from '@/components/admin-sidebar'

interface PackageData {
  _id: string
  title: string
  destination: string
  days: number
  price: number
  description: string
  itinerary: string[]
  includes: string[]
  excludes: string[]
  image: string
  featured: boolean
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const emptyPackage: Omit<PackageData, '_id'> = {
  title: '',
  destination: '',
  days: 1,
  price: 0,
  description: '',
  itinerary: [''],
  includes: [''],
  excludes: [''],
  image: '/images/default-package.jpg',
  featured: false,
}

export default function AdminPackagesPage() {
  const { data: packages, error, isLoading } = useSWR<PackageData[]>('/api/packages', fetcher)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<PackageData | null>(null)
  const [formData, setFormData] = useState<Omit<PackageData, '_id'>>(emptyPackage)
  const [saving, setSaving] = useState(false)

  const handleEdit = (pkg: PackageData) => {
    setSelectedPackage(pkg)
    setFormData({
      title: pkg.title,
      destination: pkg.destination,
      days: pkg.days,
      price: pkg.price,
      description: pkg.description,
      itinerary: pkg.itinerary.length > 0 ? pkg.itinerary : [''],
      includes: pkg.includes.length > 0 ? pkg.includes : [''],
      excludes: pkg.excludes.length > 0 ? pkg.excludes : [''],
      image: pkg.image,
      featured: pkg.featured,
    })
    setDialogOpen(true)
  }

  const handleAdd = () => {
    setSelectedPackage(null)
    setFormData(emptyPackage)
    setDialogOpen(true)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const cleanedData = {
        ...formData,
        itinerary: formData.itinerary.filter((i) => i.trim() !== ''),
        includes: formData.includes.filter((i) => i.trim() !== ''),
        excludes: formData.excludes.filter((i) => i.trim() !== ''),
      }

      if (selectedPackage) {
        await fetch(`/api/packages/${selectedPackage._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(cleanedData),
        })
      } else {
        await fetch('/api/packages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(cleanedData),
        })
      }
      
      mutate('/api/packages')
      setDialogOpen(false)
    } catch (error) {
      console.error('Failed to save package:', error)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!selectedPackage) return
    
    try {
      await fetch(`/api/packages/${selectedPackage._id}`, {
        method: 'DELETE',
      })
      mutate('/api/packages')
      setDeleteDialogOpen(false)
      setSelectedPackage(null)
    } catch (error) {
      console.error('Failed to delete package:', error)
    }
  }

  const updateArrayField = (
    field: 'itinerary' | 'includes' | 'excludes',
    index: number,
    value: string
  ) => {
    const newArray = [...formData[field]]
    newArray[index] = value
    setFormData({ ...formData, [field]: newArray })
  }

  const addArrayItem = (field: 'itinerary' | 'includes' | 'excludes') => {
    setFormData({ ...formData, [field]: [...formData[field], ''] })
  }

  const removeArrayItem = (field: 'itinerary' | 'includes' | 'excludes', index: number) => {
    const newArray = formData[field].filter((_, i) => i !== index)
    setFormData({ ...formData, [field]: newArray.length > 0 ? newArray : [''] })
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />
      <main className="lg:ml-64 min-h-screen pt-16 lg:pt-0">
        <div className="p-6 lg:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
                Manage <span className="text-gold">Packages</span>
              </h1>
              <p className="text-muted-foreground">
                Add, edit, or remove tour packages
              </p>
            </div>
            <Button onClick={handleAdd} className="gradient-gold text-accent-foreground font-semibold">
              <Plus className="w-4 h-4 mr-2" />
              Add Package
            </Button>
          </div>

          {/* Packages List */}
          {isLoading ? (
            <div className="text-center py-12 text-muted-foreground">Loading packages...</div>
          ) : error ? (
            <div className="text-center py-12 text-destructive">Failed to load packages</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages?.map((pkg) => (
                <div key={pkg._id} className="glass-card overflow-hidden">
                  <div className="relative h-40 bg-secondary">
                    {pkg.featured && (
                      <span className="absolute top-2 left-2 px-2 py-1 rounded-full gradient-gold text-xs font-semibold text-accent-foreground">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{pkg.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {pkg.destination}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {pkg.days} Days
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gold font-semibold">Rs. {pkg.price.toLocaleString()}</span>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleEdit(pkg)}>
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-destructive hover:text-destructive"
                          onClick={() => {
                            setSelectedPackage(pkg)
                            setDeleteDialogOpen(true)
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Edit/Add Dialog */}
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="font-display">
                  {selectedPackage ? 'Edit Package' : 'Add New Package'}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Title</label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Delhi-Shimla"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Destination</label>
                    <Input
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      placeholder="Shimla"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Days</label>
                    <Input
                      type="number"
                      value={formData.days}
                      onChange={(e) => setFormData({ ...formData, days: parseInt(e.target.value) || 1 })}
                      min={1}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Price (Rs.)</label>
                    <Input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) || 0 })}
                      min={0}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Image URL</label>
                  <Input
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="/images/shimla.jpg"
                  />
                </div>

                {/* Itinerary */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Itinerary</label>
                  {formData.itinerary.map((item, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={item}
                        onChange={(e) => updateArrayField('itinerary', index, e.target.value)}
                        placeholder={`Day ${index + 1}`}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeArrayItem('itinerary', index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                  <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem('itinerary')}>
                    <Plus className="w-4 h-4 mr-1" /> Add Day
                  </Button>
                </div>

                {/* Includes */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Includes</label>
                  {formData.includes.map((item, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={item}
                        onChange={(e) => updateArrayField('includes', index, e.target.value)}
                        placeholder="AC transportation"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeArrayItem('includes', index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                  <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem('includes')}>
                    <Plus className="w-4 h-4 mr-1" /> Add Item
                  </Button>
                </div>

                {/* Excludes */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Excludes</label>
                  {formData.excludes.map((item, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={item}
                        onChange={(e) => updateArrayField('excludes', index, e.target.value)}
                        placeholder="Hotel accommodation"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeArrayItem('excludes', index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                  <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem('excludes')}>
                    <Plus className="w-4 h-4 mr-1" /> Add Item
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <Switch
                    checked={formData.featured}
                    onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                  />
                  <label className="text-sm font-medium">Featured Package</label>
                </div>

                <div className="flex justify-end gap-3">
                  <Button variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave} disabled={saving} className="gradient-gold text-accent-foreground">
                    {saving ? 'Saving...' : 'Save Package'}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Delete Confirmation */}
          <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Package</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to delete &quot;{selectedPackage?.title}&quot;? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </main>
    </div>
  )
}
