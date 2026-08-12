import { Phone, MessageCircle } from 'lucide-react'
import { TEL, TEL_INTL, wa } from '@/lib/data'

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-champagne text-white flex items-center justify-between px-4 py-3 md:hidden shadow-lg">
      <a
        href={`tel:${TEL_INTL}`}
        className="flex items-center gap-2 font-manrope font-semibold"
      >
        <Phone size={20} strokeWidth={1} /> {TEL}
      </a>
      <a
        href={wa('Hola, quiero pedir cita.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-base text-white font-manrope font-semibold px-4 py-2 rounded-sm"
      >
        <MessageCircle size={18} strokeWidth={1} />
        Pedir cita
      </a>
    </div>
  )
}
