import { importantNotes } from '@/lib/data'
import { Info, AlertCircle } from 'lucide-react'

export function NotesSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Info className="w-5 h-5 text-white" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              Important <span className="text-gold">Notes</span>
            </h2>
          </div>

          {/* Notes List */}
          <div className="glass-card p-6 lg:p-8">
            <ul className="space-y-4">
              {importantNotes.map((note, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
