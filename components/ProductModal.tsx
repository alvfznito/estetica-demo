'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Minus, Plus, X, Check, ShoppingBag } from 'lucide-react'
import type { Product } from '@/lib/data'
import { formatPrice } from '@/lib/data'
import { useCart } from '@/lib/cart-context'

interface Props {
  product: Product | null
  onClose: () => void
}

export default function ProductModal({ product, onClose }: Props) {
  const { addItem } = useCart()
  const [activeImage, setActiveImage] = useState(0)
  const [qty, setQty] = useState(1)
  const [justAdded, setJustAdded] = useState(false)

  // Reinicia el estado local cada vez que se abre un producto distinto.
  useEffect(() => {
    setActiveImage(0)
    setQty(1)
    setJustAdded(false)
  }, [product?.id])

  useEffect(() => {
    if (!product) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [product, onClose])

  if (!product) return null

  const images = product.images
  const next = () => setActiveImage((i) => (i + 1) % images.length)
  const prev = () => setActiveImage((i) => (i - 1 + images.length) % images.length)

  function handleAdd() {
    if (!product) return
    addItem(product, qty)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1600)
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-base/50 backdrop-blur-sm px-0 md:px-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full md:max-w-3xl max-h-[92vh] md:max-h-[85vh] overflow-y-auto rounded-t-sm md:rounded-sm shadow-lg grid grid-cols-1 md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white text-base p-2 rounded-full shadow-soft transition-colors"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        {/* Galería */}
        <div className="relative bg-beige">
          <div className="relative aspect-square md:aspect-auto md:h-full">
            <Image
              src={images[activeImage]}
              alt={`${product.name} — foto ${activeImage + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-base p-2 rounded-full shadow-soft transition-colors"
              >
                <ChevronLeft size={18} strokeWidth={1.5} />
              </button>
              <button
                onClick={next}
                aria-label="Foto siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-base p-2 rounded-full shadow-soft transition-colors"
              >
                <ChevronRight size={18} strokeWidth={1.5} />
              </button>
              <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    aria-label={`Ver foto ${idx + 1}`}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === activeImage ? 'bg-champagne' : 'bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Detalle */}
        <div className="p-6 md:p-8 flex flex-col">
          <h2 className="font-cormorant text-3xl font-medium text-base leading-snug mb-2">
            {product.name}
          </h2>
          <p className="font-cormorant italic text-2xl text-champagne mb-5">
            {formatPrice(product.price)}
          </p>
          <p className="font-manrope text-sm text-muted leading-relaxed mb-6 flex-1">
            {product.longDesc}
          </p>

          <div className="flex items-center gap-4 mb-5">
            <span className="font-manrope text-xs tracking-[0.15em] uppercase text-muted">
              Cantidad
            </span>
            <div className="flex items-center border border-champagne/30 rounded-sm">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Restar cantidad"
                className="p-2.5 text-base hover:bg-beige transition-colors"
              >
                <Minus size={14} strokeWidth={1.5} />
              </button>
              <span className="w-8 text-center font-manrope text-sm font-semibold">{qty}</span>
              <button
                onClick={() => setQty((q) => Math.min(99, q + 1))}
                aria-label="Sumar cantidad"
                className="p-2.5 text-base hover:bg-beige transition-colors"
              >
                <Plus size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <button
            onClick={handleAdd}
            className={`w-full inline-flex items-center justify-center gap-2 font-manrope text-xs font-semibold tracking-[0.15em] uppercase px-6 py-3.5 rounded-sm transition-all duration-300 ${
              justAdded
                ? 'bg-salvia text-white'
                : 'bg-champagne text-white hover:bg-champagne/85'
            }`}
          >
            {justAdded ? (
              <>
                <Check size={16} strokeWidth={2} />
                Añadido al carrito
              </>
            ) : (
              <>
                <ShoppingBag size={16} strokeWidth={1.5} />
                Añadir al carrito
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
