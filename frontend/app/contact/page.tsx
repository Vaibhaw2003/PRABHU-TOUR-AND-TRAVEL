import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-sm font-medium tracking-wider uppercase mb-3">
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-balance">
              Get in <span className="text-gold">Touch</span>
            </h1>
            <p className="text-lg text-foreground/80 text-pretty">
              Have questions or ready to book? {"We're"} here to help you 
              plan your perfect trip.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
                Contact <span className="text-gold">Information</span>
              </h2>

              <div className="space-y-6">
                {/* Phone - Vaibhaw */}
                <div className="glass-card p-5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Vaibhaw Singh</h3>
                    <a 
                      href="tel:+918874812003" 
                      className="text-gold hover:underline text-lg"
                    >
                      +91 8874812003
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Operations & Bookings
                    </p>
                  </div>
                </div>

                {/* Phone - Satyam */}
                <div className="glass-card p-5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Satyam Singh</h3>
                    <a 
                      href="tel:+919984029040" 
                      className="text-gold hover:underline text-lg"
                    >
                      +91 9984029040
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Customer Relations
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="glass-card p-5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:prabhutourtravel@gmail.com" 
                      className="text-gold hover:underline break-all"
                    >
                      prabhutourtravel@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      For inquiries and bookings
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="glass-card p-5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/918874812003" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:underline"
                    >
                      Chat with us instantly
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Quick responses guaranteed
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="glass-card p-5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Working Hours</h3>
                    <p className="text-gold">24/7 Available</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {"We're"} always here for you
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="glass-card p-5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Service Area</h3>
                    <p className="text-foreground/80">Delhi NCR, India</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Delhi, Noida, Gurgaon, Ghaziabad
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions & Map */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <div className="glass-card p-6 lg:p-8">
                <h3 className="font-display text-xl font-semibold mb-6">
                  Quick <span className="text-gold">Actions</span>
                </h3>

                <div className="space-y-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full gradient-gold text-accent-foreground font-semibold glow-gold"
                  >
                    <a
                      href="https://wa.me/918874812003?text=Hi, I want to book a trip. Please assist me."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Book via WhatsApp
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full border-gold/50 text-gold hover:bg-gold/10"
                  >
                    <a href="tel:+918874812003">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full border-border hover:border-gold/50 hover:text-gold"
                  >
                    <a href="mailto:prabhutourtravel@gmail.com">
                      <Send className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center mt-6">
                  We typically respond within 30 minutes during business hours
                </p>
              </div>

              {/* Google Map */}
              <div className="glass-card overflow-hidden">
                <div className="p-4 border-b border-border">
                  <h3 className="font-display font-semibold flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gold" />
                    Our Location
                  </h3>
                </div>
                <div className="relative h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.52633256!2d76.76356439999999!3d28.643795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Prabhu Tour & Travel Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-gold text-sm font-medium tracking-wider uppercase mb-3">
                FAQ
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Frequently Asked <span className="text-gold">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'How do I book a trip?',
                  a: 'You can book via WhatsApp, phone call, or email. WhatsApp is the quickest way to get instant responses and confirm your booking.',
                },
                {
                  q: 'What is the booking amount?',
                  a: '20% of the total package cost is required as advance booking amount. The remaining amount can be paid before or during the trip.',
                },
                {
                  q: 'Can I customize my itinerary?',
                  a: 'Yes! We offer fully customizable packages. Just let us know your preferences and we will create a personalized itinerary for you.',
                },
                {
                  q: 'What is your cancellation policy?',
                  a: 'Free cancellation is available up to 24 hours before departure. Cancellations within 24 hours may be subject to charges.',
                },
                {
                  q: 'Are toll and parking charges included?',
                  a: 'Toll, parking, and state permit charges are extra and need to be paid as per actuals during the trip.',
                },
              ].map((faq, index) => (
                <div key={index} className="glass-card p-5">
                  <h3 className="font-semibold mb-2 text-gold">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton message="Hi, I have a question about your services." />
    </main>
  )
}
