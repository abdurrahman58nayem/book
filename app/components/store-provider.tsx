'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Book } from '../lib/data';

type CartLine = { book: Book; quantity: number };
type StoreContextValue = {
  cart: CartLine[];
  cartCount: number;
  cartTotal: number;
  addToCart: (book: Book, quantity?: number) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  toast: string | null;
};

const StoreContext = createContext<StoreContextValue | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('boipoka-cart');
      if (stored) setCart(JSON.parse(stored));
    } catch { /* keep the cart empty if storage is unavailable */ }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('boipoka-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const value = useMemo<StoreContextValue>(() => ({
    cart,
    cartCount: cart.reduce((sum, line) => sum + line.quantity, 0),
    cartTotal: cart.reduce((sum, line) => sum + line.book.price * line.quantity, 0),
    addToCart: (book, quantity = 1) => {
      setCart((current) => {
        const found = current.find((line) => line.book.slug === book.slug);
        if (found) return current.map((line) => line.book.slug === book.slug ? { ...line, quantity: line.quantity + quantity } : line);
        return [...current, { book, quantity }];
      });
      setToast(`${book.title} কার্টে যোগ হয়েছে`);
    },
    removeFromCart: (slug) => setCart((current) => current.filter((line) => line.book.slug !== slug)),
    updateQuantity: (slug, quantity) => setCart((current) => quantity < 1 ? current.filter((line) => line.book.slug !== slug) : current.map((line) => line.book.slug === slug ? { ...line, quantity } : line)),
    clearCart: () => setCart([]),
    toast,
  }), [cart, toast]);

  return <StoreContext.Provider value={value}>{children}{toast && <div className="toast" role="status"><span className="toast-check">✓</span>{toast}<a href="/cart">কার্ট দেখুন</a></div>}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used inside StoreProvider');
  return context;
}
