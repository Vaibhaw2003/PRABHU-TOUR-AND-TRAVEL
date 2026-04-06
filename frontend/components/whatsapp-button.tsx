'use client'

import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  message?: string
}

export function WhatsAppButton({ message = "Hi, I'm interested in booking a tour package." }: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/918874812003?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
    </a>
  )
}
