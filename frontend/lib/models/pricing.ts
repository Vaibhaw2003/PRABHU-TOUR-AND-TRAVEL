import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IPricing extends Document {
  _id: mongoose.Types.ObjectId
  category: string
  minKm: number
  ratePerKm: number
  approxCost: number
  description: string
  createdAt: Date
  updatedAt: Date
}

const PricingSchema = new Schema<IPricing>(
  {
    category: { type: String, required: true },
    minKm: { type: Number, required: true },
    ratePerKm: { type: Number, required: true },
    approxCost: { type: Number, required: true },
    description: { type: String, default: '' },
  },
  { timestamps: true }
)

const Pricing: Model<IPricing> = mongoose.models.Pricing || mongoose.model<IPricing>('Pricing', PricingSchema)

export default Pricing
