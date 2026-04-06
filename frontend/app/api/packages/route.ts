import { NextRequest, NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb'
import Package from '@/lib/models/package'
import { initialPackages } from '@/lib/data'

export async function GET() {
  try {
    await connectToDatabase()
    
    let packages = await Package.find({}).sort({ createdAt: -1 })
    
    // If no packages exist, seed with initial data
    if (packages.length === 0) {
      await Package.insertMany(initialPackages)
      packages = await Package.find({}).sort({ createdAt: -1 })
    }
    
    return NextResponse.json(packages)
  } catch (error) {
    console.error('Error fetching packages:', error)
    return NextResponse.json(
      { error: 'Failed to fetch packages' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase()
    
    const body = await request.json()
    const newPackage = await Package.create(body)
    
    return NextResponse.json(newPackage, { status: 201 })
  } catch (error) {
    console.error('Error creating package:', error)
    return NextResponse.json(
      { error: 'Failed to create package' },
      { status: 500 }
    )
  }
}
