import { TEL, TEL_INTL, ADDRESS, HORARIO_SHORT } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-base border-t border-white/8 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-cormorant text-3xl font-semibold tracking-[0.15em] text-champagne-light mb-3">
              Lumière
            </h3>
            <p className="font-manrope text-sm text-white/50 leading-loose max-w-xs">
              Centro de estética y bienestar en Valdepeñas. Tratamientos naturales, resultados
              reales.
            </p>
          </div>

          <div>
            <p className="font-manrope text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
              Explora
            </p>
            <ul className="space-y-2.5 font-manrope text-sm">
              <li>
                <a href="#tratamientos" className="text-white/50 hover:text-champagne-light transition-colors">
                  Tratamientos
                </a>
              </li>
              <li>
                <a href="#productos" className="text-white/50 hover:text-champagne-light transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-white/50 hover:text-champagne-light transition-colors">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#resenas" className="text-white/50 hover:text-champagne-light transition-colors">
                  Reseñas
                </a>
              </li>
              <li>
                <a href="#horarios" className="text-white/50 hover:text-champagne-light transition-colors">
                  Horarios
                </a>
              </li>
              <li>
                <a href="#cita" className="text-white/50 hover:text-champagne-light transition-colors">
                  Pedir cita
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-manrope text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
              Contacto
            </p>
            <ul className="space-y-2.5 font-manrope text-sm text-white/50">
              <li>{ADDRESS}</li>
              <li>
                <a
                  href={`tel:${TEL_INTL}`}
                  className="font-cormorant text-lg text-white hover:text-champagne-light transition-colors"
                >
                  {TEL}
                </a>
              </li>
              <li>{HORARIO_SHORT}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 font-manrope text-xs">
          <p className="text-white/30">© {new Date().getFullYear()} Centro Lumière</p>
          <p className="text-white/30">
            Web demo creada por{' '}
            <a
              href="https://muestrate.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne-light underline underline-offset-4 hover:text-white transition-colors"
            >
              Muéstrate
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
