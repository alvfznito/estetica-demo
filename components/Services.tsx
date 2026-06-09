import Image from 'next/image'

const services = [
  {
    id: 1,
    category: 'Depilación',
    name: 'Depilación Láser',
    description:
      'Tecnología de diodo de última generación para una piel permanentemente lisa. Indoloro, seguro y eficaz en todo tipo de pieles.',
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    category: 'Facial',
    name: 'Tratamiento Facial',
    description:
      'Protocolos personalizados de hidratación profunda, luminosidad y anti-edad. Tu piel, transformada en cada sesión.',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    category: 'Uñas',
    name: 'Manicura & Pedicura',
    description:
      'Cuidado integral de manos y pies con técnicas profesionales. Semipermanente, gel, acrílico o clásico.',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    category: 'Bienestar',
    name: 'Masajes Terapéuticos',
    description:
      'Desde relajante sueco hasta masaje deportivo profundo. Libera tensiones y recupera la energía de tu cuerpo.',
    image:
      'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    category: 'Corporal',
    name: 'Tratamiento Corporal',
    description:
      'Envolturas mineralizantes, exfoliaciones aromáticas y tratamientos reductores. Un ritual de lujo para tu cuerpo.',
    image:
      'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    category: 'Maquillaje',
    name: 'Maquillaje Profesional',
    description:
      'Looks naturales o de noche, nupcial o de evento. Maquillaje de larga duración con técnicas avanzadas.',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-dm text-xs tracking-[0.35em] uppercase text-dorado mb-5">
            Lo que ofrecemos
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-negro">
            Nuestros Tratamientos
          </h2>
          <div className="w-10 h-px bg-dorado mx-auto mt-7" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {services.map((service) => (
            <div key={service.id} className="group">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden mb-5">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-negro/15 group-hover:bg-negro/5 transition-colors duration-400" />
                <span className="absolute top-4 left-4 font-dm text-[10px] tracking-[0.25em] uppercase bg-white/95 text-negro px-3 py-1.5">
                  {service.category}
                </span>
              </div>

              {/* Text */}
              <h3 className="font-cormorant text-2xl font-medium text-negro mb-2.5">
                {service.name}
              </h3>
              <p className="font-dm text-sm text-negro/55 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-5 flex items-center gap-2.5 text-dorado group/link cursor-pointer">
                <span className="font-dm text-[10px] tracking-[0.25em] uppercase group-hover/link:underline underline-offset-4">
                  Más información
                </span>
                <span className="text-base transition-transform duration-200 group-hover/link:translate-x-1">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
