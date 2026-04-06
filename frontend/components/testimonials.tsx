import { testimonials } from '@/lib/data'
import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-gold text-sm font-medium tracking-wider uppercase mb-3">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-balance">
            What Our <span className="text-gold">Travelers Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {"Don't just take our word for it. Here's what our happy customers have to say about their experience."}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-gold/20">
                <Quote className="w-10 h-10" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                {`"${testimonial.text}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
