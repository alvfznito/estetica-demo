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

export const products = [
  {
    name: 'Crema Hidratante Caléndula y Manzanilla',
    desc: 'Hidratación diaria para pieles sensibles',
    price: '38€',
    img: '/img/producto-crema-hidratante.jpg',
  },
  {
    name: 'Sérum Antiedad Vitamina C',
    desc: 'Luminosidad y firmeza. Uso nocturno',
    price: '52€',
    img: '/img/producto-serum-vitc.jpg',
  },
  {
    name: 'Mascarilla Purificante Arcilla Verde',
    desc: 'Detox facial semanal con hamamelis',
    price: '32€',
    img: '/img/producto-mascarilla-arcilla.jpg',
  },
  {
    name: 'Exfoliante Enzimático Papaya',
    desc: 'Exfoliación suave con extractos naturales',
    price: '42€',
    img: '/img/producto-exfoliante-papaya.jpg',
  },
  {
    name: 'Aceite Corporal Almendras Dulces',
    desc: 'Nutrición corporal profunda, tacto seco',
    price: '45€',
    img: '/img/producto-aceite-almendras.jpg',
  },
  {
    name: 'Crema Reafirmante Corporal',
    desc: 'Firmeza y elasticidad, uso diario',
    price: '58€',
    img: '/img/producto-crema-reafirmante.jpg',
  },
  {
    name: 'Pack Facial Completo',
    desc: 'Crema + sérum + mascarilla, ritual completo',
    price: '95€',
    img: '/img/producto-pack-facial.jpg',
  },
  {
    name: 'Tarjeta Regalo',
    desc: 'Importe libre, canjeable en tratamientos o productos',
    price: 'desde 30€',
    img: '/img/producto-tarjeta-regalo.jpg',
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
