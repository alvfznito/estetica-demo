'use client'
import { MessageCircle, Phone } from 'lucide-react'
import { TEL, TEL_INTL, WA_NUMBER } from '@/lib/data'

const today = () => new Date().toISOString().split('T')[0]

const inputClass =
  'w-full border border-muted/30 bg-white px-4 py-3 font-manrope text-base outline-none focus:border-champagne transition-colors rounded-sm text-base'

export default function CTA() {
  function handleCita(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const tratamiento = data.get('tratamiento')
    const fecha = data.get('fecha')
    const franja = data.get('franja')
    const mensaje = encodeURIComponent(
      `Hola, quiero pedir cita para ${tratamiento} el ${fecha} en la franja de ${franja}.`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${mensaje}`, '_blank')
  }

  return (
    <section id="cita" className="py-28 px-6 bg-base">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-manrope text-xs tracking-[0.35em] uppercase text-champagne-light mb-5">
            Cita confirmada al momento
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight">
            Pide tu cita
          </h2>
          <div className="w-10 h-px bg-champagne-light mx-auto mb-6" />
          <p className="font-manrope text-sm text-white/70 max-w-xl mx-auto leading-loose">
            Rellena los 3 campos y te confirmamos disponibilidad por WhatsApp en minutos.
          </p>
          <a
            href={`tel:${TEL_INTL}`}
            className="inline-flex items-center gap-2 mt-6 font-cormorant italic text-champagne-light text-2xl md:text-3xl hover:text-white transition-colors"
          >
            <Phone size={22} strokeWidth={1} /> {TEL}
          </a>
        </div>

        <form onSubmit={handleCita} className="bg-white p-6 md:p-8 rounded-sm shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <label className="flex flex-col gap-1.5">
              <span className="font-manrope text-xs uppercase tracking-wide text-muted">
                Tratamiento
              </span>
              <select
                name="tratamiento"
                required
                defaultValue="Facial"
                className={inputClass}
              >
                <option value="Facial">Tratamiento facial</option>
                <option value="Corporal">Tratamiento corporal</option>
                <option value="Manicura/pedicura">Manicura o pedicura</option>
                <option value="Depilación">Depilación</option>
                <option value="Otro">Otro / consultar</option>
              </select>
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-manrope text-xs uppercase tracking-wide text-muted">
                Fecha
              </span>
              <input
                type="date"
                name="fecha"
                required
                min={today()}
                defaultValue={today()}
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-manrope text-xs uppercase tracking-wide text-muted">
                Franja
              </span>
              <select
                name="franja"
                required
                defaultValue="Mañana (10:00-14:00)"
                className={inputClass}
              >
                <option value="Mañana (10:00-14:00)">Mañana (10:00-14:00)</option>
                <option value="Tarde (16:00-20:00)">Tarde (16:00-20:00)</option>
              </select>
            </label>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-champagne text-white px-8 py-4 font-manrope font-semibold text-sm tracking-[0.15em] uppercase rounded-sm hover:bg-champagne/85 transition-colors"
          >
            <MessageCircle size={18} strokeWidth={1} />
            Pedir cita por WhatsApp
          </button>
          <p className="text-center text-muted text-xs mt-4 font-manrope">
            Respuesta en minutos · Confirmamos hora exacta
          </p>
        </form>
      </div>
    </section>
  )
}
