import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IBooking extends Document {
  _id: mongoose.Types.ObjectId
  name: string
  phone: string
  email: string
  packageId?: mongoose.Types.ObjectId
  packageTitle?: string
  travelDate: Date
  passengers: number
  message: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: Date
  updatedAt: Date
}

const BookingSchema = new Schema<IBooking>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    packageId: { type: Schema.Types.ObjectId, ref: 'Package' },
    packageTitle: { type: String },
    travelDate: { type: Date, required: true },
    passengers: { type: Number, required: true, default: 1 },
    message: { type: String, default: '' },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending',
    },
  },
  { timestamps: true }
)

const Booking: Model<IBooking> = mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema)

export default Booking
