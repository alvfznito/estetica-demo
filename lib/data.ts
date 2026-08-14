export const TEL = '926 31 00 02'
export const TEL_INTL = '+34926310002'
export const WA_NUMBER = '34926310002'
export const ADDRESS = 'Calle Real 12, Valdepeñas, Ciudad Real'
export const HORARIO_SHORT = 'Mar-Vie 10-20 · Sáb 9-14'

export function wa(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}

export const treatments = [
  { name: 'Ritual facial premium', price: '65€' },
  { name: 'Tratamiento corporal reafirmante', price: '80€' },
  { name: 'Manicura completa', price: '25€' },
  { name: 'Pedicura spa', price: '35€' },
  { name: 'Depilación (según zona)', price: 'desde 15€' },
  { name: 'Ritual pareja (2 personas)', price: '140€' },
]

export interface Product {
  id: string
  name: string
  desc: string
  longDesc: string
  price: number
  images: string[]
}

export function formatPrice(value: number) {
  return `${value.toFixed(2).replace(/\.00$/, '')}€`
}

// Cada producto tiene su foto real más 2 fotos de ambiente de la
// propia colección de imágenes del sitio (misma sesión fotográfica,
// consistente visualmente) para poblar la galería de la ficha — el
// centro solo tiene una foto de packshot real por producto.
const GALLERY_FACIAL = ['/img/tratamiento-facial.jpg', '/img/facial-poster.jpg']
const GALLERY_CORPORAL = ['/img/tratamiento-corporal.jpg', '/img/tratamiento-masaje.jpg']
const GALLERY_REGALO = ['/img/facial-poster.jpg', '/img/hero-poster.jpg']

export const products: Product[] = [
  {
    id: 'crema-hidratante-calendula',
    name: 'Crema Hidratante Caléndula y Manzanilla',
    desc: 'Hidratación diaria para pieles sensibles',
    longDesc:
      'Crema de textura ligera formulada con extracto de caléndula y manzanilla, pensada para pieles sensibles o reactivas. Calma el enrojecimiento, refuerza la barrera cutánea y deja la piel hidratada durante todo el día sin sensación grasa. Uso diario, mañana y noche.',
    price: 38,
    images: ['/img/producto-crema-hidratante.jpg', ...GALLERY_FACIAL],
  },
  {
    id: 'serum-antiedad-vitc',
    name: 'Sérum Antiedad Vitamina C',
    desc: 'Luminosidad y firmeza. Uso nocturno',
    longDesc:
      'Sérum concentrado en vitamina C estabilizada que unifica el tono, aporta luminosidad y estimula la producción de colágeno. Textura sérum de rápida absorción, ideal para rutinas nocturnas. Con uso continuado, mejora visiblemente la firmeza y reduce las líneas de expresión.',
    price: 52,
    images: ['/img/producto-serum-vitc.jpg', ...GALLERY_FACIAL],
  },
  {
    id: 'mascarilla-arcilla-verde',
    name: 'Mascarilla Purificante Arcilla Verde',
    desc: 'Detox facial semanal con hamamelis',
    longDesc:
      'Mascarilla de arcilla verde con hamamelis, formulada para pieles mixtas o grasas. Absorbe el exceso de sebo, minimiza la apariencia de los poros y deja la piel limpia y matificada. Aplicar una vez por semana durante 10-15 minutos y retirar con agua tibia.',
    price: 32,
    images: ['/img/producto-mascarilla-arcilla.jpg', ...GALLERY_FACIAL],
  },
  {
    id: 'exfoliante-papaya',
    name: 'Exfoliante Enzimático Papaya',
    desc: 'Exfoliación suave con extractos naturales',
    longDesc:
      'Exfoliante enzimático a base de extracto de papaya, sin partículas abrasivas. Elimina las células muertas y afina la textura de la piel sin irritar, dejando el rostro suave y luminoso. Recomendado 1-2 veces por semana antes de la crema hidratante.',
    price: 42,
    images: ['/img/producto-exfoliante-papaya.jpg', ...GALLERY_FACIAL],
  },
  {
    id: 'aceite-almendras',
    name: 'Aceite Corporal Almendras Dulces',
    desc: 'Nutrición corporal profunda, tacto seco',
    longDesc:
      'Aceite corporal 100% natural de almendras dulces, de absorción rápida y tacto seco no graso. Nutre en profundidad, mejora la elasticidad de la piel y deja un ligero aroma amaderado. Ideal después de la ducha o como aceite de masaje.',
    price: 45,
    images: ['/img/producto-aceite-almendras.jpg', ...GALLERY_CORPORAL],
  },
  {
    id: 'crema-reafirmante-corporal',
    name: 'Crema Reafirmante Corporal',
    desc: 'Firmeza y elasticidad, uso diario',
    longDesc:
      'Crema corporal reafirmante con activos naturales que mejoran la firmeza y elasticidad de la piel. Textura rica pero de rápida absorción, pensada para uso diario en zonas de mayor flacidez. Complementa muy bien los tratamientos corporales del centro.',
    price: 58,
    images: ['/img/producto-crema-reafirmante.jpg', ...GALLERY_CORPORAL],
  },
  {
    id: 'pack-facial-completo',
    name: 'Pack Facial Completo',
    desc: 'Crema + sérum + mascarilla, ritual completo',
    longDesc:
      'El ritual facial completo en un solo pack: crema hidratante de caléndula y manzanilla, sérum antiedad de vitamina C y mascarilla purificante de arcilla verde. Todo lo necesario para una rutina facial profesional en casa, con un ahorro frente a la compra individual.',
    price: 95,
    images: ['/img/producto-pack-facial.jpg', ...GALLERY_FACIAL],
  },
  {
    id: 'tarjeta-regalo',
    name: 'Tarjeta Regalo',
    desc: 'Canjeable en tratamientos o productos',
    longDesc:
      'La tarjeta regalo Estética Sonia, canjeable en cualquiera de nuestros tratamientos o productos. El detalle perfecto para regalar un momento de bienestar. En tu tienda real, el importe sería configurable por la clienta antes de añadirlo al carrito — aquí se muestra con un importe orientativo.',
    price: 30,
    images: ['/img/producto-tarjeta-regalo.jpg', ...GALLERY_REGALO],
  },
]

export const faqs = [
  {
    q: '¿Cómo pido cita?',
    a: 'La forma más rápida es a través del formulario de arriba o el botón de WhatsApp — te confirmamos disponibilidad en minutos. También puedes llamarnos al 926 31 00 02 en horario de apertura.',
  },
  {
    q: '¿Puedo cancelar o reprogramar una cita?',
    a: 'Sí. Te agradecemos que nos avises con al menos 24 horas de antelación por WhatsApp para poder ofrecer ese hueco a otra clienta. No hay ningún coste por cancelar o cambiar la cita a otro día.',
  },
  {
    q: '¿Tenéis parking cerca?',
    a: 'Sí. Estamos en Calle Real 12, en pleno centro de Valdepeñas. Hay aparcamiento gratuito en las calles próximas y un parking público a 4 minutos andando.',
  },
  {
    q: '¿Puedo comprar productos sin haber recibido tratamiento?',
    a: 'Por supuesto. Todos nuestros productos de la línea Valdepeñas Organic Skincare están disponibles para compra directa — te asesoramos sobre cuál se adapta mejor a tu tipo de piel, sin compromiso.',
  },
  {
    q: '¿Ofrecéis tratamientos para pieles sensibles o alérgicas?',
    a: 'Sí. Trabajamos con protocolos hipoalergénicos y productos naturales certificados. Si tienes cualquier alergia o intolerancia, indícanoslo al pedir cita y adaptamos el tratamiento a tu caso.',
  },
  {
    q: '¿Hacéis servicios a domicilio?',
    a: 'Ofrecemos servicios a domicilio para maquillaje de eventos (bodas, comuniones) y para tratamientos de novia. Para el resto de tratamientos, es necesario acudir a nuestro centro por la maquinaria específica.',
  },
]
