const serviceLinks = [
  'Depilación Láser',
  'Tratamiento Facial',
  'Manicura & Pedicura',
  'Masajes',
  'Tratamiento Corporal',
  'Maquillaje Profesional',
]

export default function Footer() {
  return (
    <footer className="bg-negro border-t border-white/8 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-14">
          {/* Brand */}
          <div>
            <h3 className="font-cormorant text-3xl font-semibold tracking-[0.2em] text-white mb-4">
              Lumière
            </h3>
            <p className="font-dm text-sm text-white/40 leading-loose max-w-xs">
              Centro de estética premium donde cada tratamiento es un ritual de belleza y bienestar.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-white/30 mb-5">
              Servicios
            </p>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="font-dm text-sm text-white/40 hover:text-white/70 transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-white/30 mb-5">
              Contacto
            </p>
            <ul className="space-y-3.5">
              <li className="font-dm text-sm text-white/40">Calle Principal 1, Tu ciudad</li>
              <li>
                <a
                  href="tel:000000000"
                  className="font-dm text-sm text-white/40 hover:text-white/70 transition-colors"
                >
                  000 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@lumiere.es"
                  className="font-dm text-sm text-white/40 hover:text-white/70 transition-colors"
                >
                  info@lumiere.es
                </a>
              </li>
              <li className="font-dm text-sm text-white/40">L–V 10:00–20:00 · S 10:00–15:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-dm text-xs text-white/25">
            © 2024 Centro Belleza Lumière. Todos los derechos reservados.
          </p>
          <p className="font-dm text-xs text-white/20">
            Web by{" "}
            <a href="https://muestrateagency.netlify.app" className="hover:text-white/40 transition-colors" target="_blank" rel="noopener noreferrer">
              MUESTRATE!
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
