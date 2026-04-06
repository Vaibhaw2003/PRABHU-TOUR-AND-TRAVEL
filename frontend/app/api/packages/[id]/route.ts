import { NextRequest, NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb'
import Package from '@/lib/models/package'

interface RouteParams {
  params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    await connectToDatabase()
    const { id } = await params
    
    const pkg = await Package.findById(id)
    
    if (!pkg) {
      return NextResponse.json(
        { error: 'Package not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(pkg)
  } catch (error) {
    console.error('Error fetching package:', error)
    return NextResponse.json(
      { error: 'Failed to fetch package' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    await connectToDatabase()
    const { id } = await params
    const body = await request.json()
    
    const pkg = await Package.findByIdAndUpdate(
      id,
      { ...body, updatedAt: new Date() },
      { new: true }
    )
    
    if (!pkg) {
      return NextResponse.json(
        { error: 'Package not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(pkg)
  } catch (error) {
    console.error('Error updating package:', error)
    return NextResponse.json(
      { error: 'Failed to update package' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    await connectToDatabase()
    const { id } = await params
    
    const pkg = await Package.findByIdAndDelete(id)
    
    if (!pkg) {
      return NextResponse.json(
        { error: 'Package not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ message: 'Package deleted successfully' })
  } catch (error) {
    console.error('Error deleting package:', error)
    return NextResponse.json(
      { error: 'Failed to delete package' },
      { status: 500 }
    )
  }
}
