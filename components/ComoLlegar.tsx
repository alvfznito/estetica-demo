import { MapPin, Clock } from 'lucide-react'
import { ADDRESS } from '@/lib/data'

const horarios = [
  { day: 'Lunes', txt: 'Cerrado', closed: true },
  { day: 'Martes', txt: '10:00 – 20:00' },
  { day: 'Miércoles', txt: '10:00 – 20:00' },
  { day: 'Jueves', txt: '10:00 – 20:00' },
  { day: 'Viernes', txt: '10:00 – 20:00' },
  { day: 'Sábado', txt: '09:00 – 14:00' },
  { day: 'Domingo', txt: 'Cerrado', closed: true },
]

export default function ComoLlegar() {
  return (
    <section id="horarios" className="py-28 px-6 bg-beige">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs tracking-[0.35em] uppercase text-champagne mb-5">
            Cómo llegar
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-base">
            Horarios y ubicación
          </h2>
          <div className="w-10 h-px bg-champagne mx-auto mt-7" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Mapa */}
          <div className="relative w-full min-h-[380px] lg:min-h-full rounded-sm overflow-hidden shadow-soft">
            <iframe
              title="Ubicación Estética Sonia — Calle Real 12, Valdepeñas"
              src="https://www.google.com/maps?q=Calle%20Real%2012%2C%20Valdepe%C3%B1as%2C%20Ciudad%20Real&z=16&output=embed"
              width="100%"
              height="100%"
              className="border-0 absolute inset-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Info */}
          <div className="bg-white p-8 md:p-10 rounded-sm shadow-soft">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={20} strokeWidth={1} className="text-champagne" />
                <p className="font-manrope text-xs tracking-[0.25em] uppercase text-champagne">
                  Dirección
                </p>
              </div>
              <p className="font-cormorant text-base text-2xl md:text-3xl font-medium leading-snug">
                {ADDRESS}
              </p>
              <p className="font-manrope text-muted text-sm mt-2">
                Aparcamiento en calles próximas · Parking público a 4 min andando
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 font-manrope text-xs tracking-[0.15em] uppercase text-champagne hover:underline underline-offset-4"
              >
                Abrir en Google Maps →
              </a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock size={20} strokeWidth={1} className="text-champagne" />
                <p className="font-manrope text-xs tracking-[0.25em] uppercase text-champagne">
                  Horarios
                </p>
              </div>
              <ul className="space-y-2">
                {horarios.map((h) => (
                  <li
                    key={h.day}
                    className={`flex justify-between items-baseline gap-4 font-manrope text-base text-base ${
                      h.closed ? 'opacity-50' : ''
                    }`}
                  >
                    <span className="font-cormorant text-base font-medium">{h.day}</span>
                    <span className="text-muted text-sm">{h.txt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
