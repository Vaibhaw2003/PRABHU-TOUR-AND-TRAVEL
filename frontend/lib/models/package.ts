import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IPackage extends Document {
  _id: mongoose.Types.ObjectId
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
  createdAt: Date
  updatedAt: Date
}

const PackageSchema = new Schema<IPackage>(
  {
    title: { type: String, required: true },
    destination: { type: String, required: true },
    days: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    itinerary: [{ type: String }],
    includes: [{ type: String }],
    excludes: [{ type: String }],
    image: { type: String, default: '/images/default-package.jpg' },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const Package: Model<IPackage> = mongoose.models.Package || mongoose.model<IPackage>('Package', PackageSchema)

export default Package
