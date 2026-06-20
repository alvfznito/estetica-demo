import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog | Lumière',
  description: 'Recursos y guías de Lumière para potenciar tu presencia digital y tu negocio de belleza.',
}

export default function Blog() {
  return (
    <main>
      <Navbar />

      <section className="pt-36 pb-24 px-6 max-w-4xl mx-auto">
        <h1 className="font-cormorant text-4xl md:text-5xl font-light tracking-[0.1em] text-negro mb-4">
          Blog
        </h1>
        <p className="font-dm text-sm text-negro/50 tracking-[0.1em] mb-16">
          Recursos gratuitos para hacer crecer tu negocio
        </p>

        {/* Tarjeta guía */}
        <article className="border border-nude/60 bg-white group hover:border-dorado transition-colors duration-300">
          <div className="p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8">
            {/* Icono PDF */}
            <div className="flex-shrink-0 w-20 h-20 border border-dorado/40 flex items-center justify-center group-hover:border-dorado transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-dorado"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h4" />
              </svg>
            </div>

            {/* Texto */}
            <div className="flex-1">
              <span className="font-dm text-[10px] tracking-[0.2em] uppercase text-dorado mb-3 block">
                Guía gratuita · PDF
              </span>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium text-negro mb-3 leading-snug">
                Descarga tu guía para aumentar tu presencia digital
              </h2>
              <p className="font-dm text-sm text-negro/55 leading-relaxed mb-6">
                Todo lo que necesitas saber para que tu negocio de belleza sea visible,
                atractivo y convierta en redes sociales y Google.
              </p>
              <a
                href="/guia-presencia-digital.pdf"
                download
                className="inline-block font-dm text-xs tracking-[0.2em] uppercase px-8 py-3 border border-dorado text-dorado hover:bg-dorado hover:text-white transition-all duration-300"
              >
                Descargar guía
              </a>
            </div>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  )
}
