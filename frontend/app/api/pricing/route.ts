import { NextRequest, NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb'
import Pricing from '@/lib/models/pricing'
import { initialPricing } from '@/lib/data'

export async function GET() {
  try {
    await connectToDatabase()
    
    let pricing = await Pricing.find({}).sort({ minKm: 1 })
    
    // If no pricing exists, seed with initial data
    if (pricing.length === 0) {
      await Pricing.insertMany(initialPricing)
      pricing = await Pricing.find({}).sort({ minKm: 1 })
    }
    
    return NextResponse.json(pricing)
  } catch (error) {
    console.error('Error fetching pricing:', error)
    return NextResponse.json(
      { error: 'Failed to fetch pricing' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    await connectToDatabase()
    
    const body = await request.json()
    const { id, ...updateData } = body
    
    const pricing = await Pricing.findByIdAndUpdate(
      id,
      { ...updateData, updatedAt: new Date() },
      { new: true }
    )
    
    if (!pricing) {
      return NextResponse.json(
        { error: 'Pricing not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(pricing)
  } catch (error) {
    console.error('Error updating pricing:', error)
    return NextResponse.json(
      { error: 'Failed to update pricing' },
      { status: 500 }
    )
  }
}
