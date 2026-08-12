'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X, Minus, Plus, Trash2, ShoppingBag, CheckCircle2 } from 'lucide-react'
import { formatPrice } from '@/lib/data'
import { useCart } from '@/lib/cart-context'

export default function CartDrawer() {
  const {
    items,
    isOpen,
    isCheckedOut,
    subtotal,
    updateQty,
    removeItem,
    closeCart,
    checkout,
    resetCheckout,
  } = useCart()

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeCart()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, closeCart])

  if (!isOpen) return null

  function handleClose() {
    closeCart()
    if (isCheckedOut) resetCheckout()
  }

  return (
    <div className="fixed inset-0 z-[70] flex justify-end bg-base/50 backdrop-blur-sm" onClick={handleClose}>
      <div
        className="relative bg-white w-full max-w-md h-full flex flex-col shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-champagne/15">
          <h2 className="font-cormorant text-2xl font-medium text-base">
            {isCheckedOut ? 'Pedido confirmado' : 'Tu carrito'}
          </h2>
          <button
            onClick={handleClose}
            aria-label="Cerrar carrito"
            className="p-2 text-muted hover:text-base transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {isCheckedOut ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
            <CheckCircle2 size={52} strokeWidth={1} className="text-salvia mb-5" />
            <h3 className="font-cormorant text-2xl font-medium text-base mb-3">
              ¡Gracias por tu compra!
            </h3>
            <p className="font-manrope text-sm text-muted leading-relaxed mb-6">
              Esto es una demostración de cómo podría verse tu tienda online — en tu
              tienda real, este paso conectaría con una pasarela de pago y recibirías
              un email de confirmación al instante.
            </p>
            <button
              onClick={handleClose}
              className="font-manrope text-xs font-semibold tracking-[0.15em] uppercase px-6 py-3 border border-champagne text-champagne hover:bg-champagne hover:text-white transition-colors duration-300 rounded-sm"
            >
              Seguir viendo la tienda
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
            <ShoppingBag size={44} strokeWidth={1} className="text-champagne-light mb-4" />
            <p className="font-manrope text-sm text-muted">
              Tu carrito está vacío. Añade algún producto desde la tienda.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-20 h-20 shrink-0 rounded-sm overflow-hidden bg-beige">
                    <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-manrope text-sm font-semibold text-base leading-snug mb-1">
                      {item.name}
                    </p>
                    <p className="font-manrope text-xs text-muted mb-2">
                      {formatPrice(item.price)} / ud
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-champagne/30 rounded-sm">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          aria-label="Restar cantidad"
                          className="p-1.5 text-base hover:bg-beige transition-colors"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-6 text-center font-manrope text-xs font-semibold">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          aria-label="Sumar cantidad"
                          className="p-1.5 text-base hover:bg-beige transition-colors"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="font-manrope text-sm font-semibold text-base">
                        {formatPrice(item.price * item.qty)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    aria-label={`Quitar ${item.name}`}
                    className="text-muted hover:text-champagne transition-colors h-fit"
                  >
                    <Trash2 size={16} strokeWidth={1.5} />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-champagne/15 px-6 py-5">
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-manrope text-sm text-muted">Subtotal</span>
                <span className="font-cormorant italic text-2xl font-medium text-champagne">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <button
                onClick={checkout}
                className="w-full font-manrope text-xs font-semibold tracking-[0.2em] uppercase px-6 py-3.5 bg-champagne text-white hover:bg-champagne/85 transition-colors duration-300 rounded-sm"
              >
                Finalizar compra
              </button>
              <p className="font-manrope text-[11px] text-muted text-center mt-3">
                Demostración — no se procesará ningún pago real.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
