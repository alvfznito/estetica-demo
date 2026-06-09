function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
      />
    </svg>
  )
}

export default function CTA() {
  return (
    <section id="contacto" className="py-28 px-6 bg-negro">
      <div className="max-w-4xl mx-auto text-center">
        {/* Label */}
        <p className="font-dm text-xs tracking-[0.35em] uppercase text-dorado mb-7">
          Empieza hoy mismo
        </p>

        {/* Heading */}
        <h2 className="font-cormorant font-light text-4xl md:text-5xl lg:text-6xl text-white mb-7 leading-tight">
          Reserva tu Primera<br />
          <em className="not-italic text-rosa">Consulta Gratuita</em>
        </h2>

        <p className="font-dm text-sm text-white/50 mb-14 max-w-sm mx-auto leading-loose">
          Sin compromiso. Te asesoramos de forma personalizada y diseñamos el tratamiento ideal para ti.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href="https://wa.me/34000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 font-dm text-xs tracking-[0.2em] uppercase px-9 py-4 bg-rosa text-negro hover:bg-rosa/85 transition-all duration-300"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
          <a
            href="tel:000000000"
            className="inline-flex items-center justify-center gap-3 font-dm text-xs tracking-[0.2em] uppercase px-9 py-4 border border-white/25 text-white hover:border-white/50 transition-all duration-300"
          >
            <PhoneIcon />
            000 000 000
          </a>
        </div>

        {/* Info grid */}
        <div className="border-t border-white/10 pt-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">
              Dirección
            </p>
            <p className="font-cormorant text-xl font-light text-white">Calle Principal 1</p>
            <p className="font-dm text-sm text-white/45 mt-1">Tu ciudad</p>
          </div>
          <div>
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">
              Horario
            </p>
            <p className="font-cormorant text-xl font-light text-white">L–V · 10:00 – 20:00</p>
            <p className="font-dm text-sm text-white/45 mt-1">Sábados · 10:00 – 15:00</p>
          </div>
          <div>
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">
              Email
            </p>
            <a
              href="mailto:info@lumiere.es"
              className="font-cormorant text-xl font-light text-white hover:text-rosa transition-colors"
            >
              info@lumiere.es
            </a>
            <p className="font-dm text-sm text-white/45 mt-1">Respuesta en 24h</p>
          </div>
        </div>
      </div>
    </section>
  )
}
