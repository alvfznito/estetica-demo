import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { products, wa } from '@/lib/data'

export default function Productos() {
  return (
    <section id="productos" className="py-28 px-6 bg-crudo">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-manrope text-xs tracking-[0.35em] uppercase text-champagne mb-5">
            Skincare natural
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-base">
            Nuestros productos
          </h2>
          <div className="w-10 h-px bg-champagne mx-auto mt-7" />
          <p className="font-manrope text-sm text-muted mt-6 max-w-lg mx-auto leading-loose">
            Línea de skincare natural elaborada en colaboración con Valdepeñas Organic Skincare.
          </p>
        </div>

        {/* Grid 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className="bg-white shadow-soft flex flex-col rounded-sm overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={p.img}
                  alt={`${p.name} — Valdepeñas Organic Skincare`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-cormorant text-xl font-medium text-base leading-snug mb-2">
                  {p.name}
                </h3>
                <p className="font-manrope text-sm text-muted mb-4 flex-1">{p.desc}</p>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-cormorant italic text-2xl font-medium text-champagne">
                    {p.price}
                  </span>
                </div>
                <a
                  href={wa(`Hola, me interesa el producto: ${p.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-manrope text-xs font-semibold tracking-[0.15em] uppercase px-4 py-3 border border-champagne text-champagne hover:bg-champagne hover:text-white transition-colors duration-300 rounded-sm"
                >
                  <MessageCircle size={14} strokeWidth={1} />
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-manrope text-xs text-muted mt-10 max-w-lg mx-auto">
          Consulta por WhatsApp la disponibilidad, envíos o reservas en tienda.
        </p>
      </div>
    </section>
  )
}
