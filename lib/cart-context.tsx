'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { Product } from './data'

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  qty: number
}

interface CartContextValue {
  items: CartItem[]
  isOpen: boolean
  isCheckedOut: boolean
  totalItems: number
  subtotal: number
  addItem: (product: Product, qty: number) => void
  removeItem: (id: string) => void
  updateQty: (id: string, qty: number) => void
  openCart: () => void
  closeCart: () => void
  checkout: () => void
  resetCheckout: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'lumiere-cart-demo'

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isCheckedOut, setIsCheckedOut] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  // Carga inicial desde localStorage — solo para que el carrito no se
  // vacíe si recargas la página en mitad de una demo en vivo. No hay
  // backend real detrás.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) setItems(JSON.parse(raw))
    } catch {
      // demo: si el storage falla, simplemente arrancamos con carrito vacío
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // demo: sin persistencia si el storage no está disponible
    }
  }, [items, hydrated])

  const addItem = useCallback((product: Product, qty: number) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i,
        )
      }
      return [
        ...prev,
        { id: product.id, name: product.name, price: product.price, image: product.images[0], qty },
      ]
    })
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const updateQty = useCallback((id: string, qty: number) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.id !== id)
        : prev.map((i) => (i.id === id ? { ...i, qty } : i)),
    )
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const checkout = useCallback(() => setIsCheckedOut(true), [])
  const resetCheckout = useCallback(() => {
    setIsCheckedOut(false)
    setItems([])
    setIsOpen(false)
  }, [])

  const totalItems = useMemo(
    () => items.reduce((acc, i) => acc + i.qty, 0),
    [items],
  )
  const subtotal = useMemo(
    () => items.reduce((acc, i) => acc + i.qty * i.price, 0),
    [items],
  )

  const value: CartContextValue = {
    items,
    isOpen,
    isCheckedOut,
    totalItems,
    subtotal,
    addItem,
    removeItem,
    updateQty,
    openCart,
    closeCart,
    checkout,
    resetCheckout,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>')
  return ctx
}
