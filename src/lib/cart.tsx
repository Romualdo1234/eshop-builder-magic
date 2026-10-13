import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { getProduct } from "./shop";

export type CartItem = { slug: string; variantId: string; qty: number };
type Ctx = {
  items: CartItem[];
  add: (slug: string, variantId: string, qty?: number) => void;
  setQty: (slug: string, variantId: string, qty: number) => void;
  clear: () => void;
  subtotal: number;
  count: number;
};
const CartCtx = createContext<Ctx | null>(null);
const KEY = "asfish-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => {
    try { setItems(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch { /* ignore */ }
  }, []);
  const save = (next: CartItem[]) => { setItems(next); localStorage.setItem(KEY, JSON.stringify(next)); };
  const add = (slug: string, variantId: string, qty = 1) => {
    const ex = items.find((i) => i.slug === slug && i.variantId === variantId);
    save(ex ? items.map((i) => (i === ex ? { ...i, qty: i.qty + qty } : i)) : [...items, { slug, variantId, qty }]);
  };
  const setQty = (slug: string, variantId: string, qty: number) =>
    save(qty <= 0 ? items.filter((i) => !(i.slug === slug && i.variantId === variantId))
      : items.map((i) => (i.slug === slug && i.variantId === variantId ? { ...i, qty } : i)));
  const subtotal = items.reduce((s, i) => {
    const v = getProduct(i.slug)?.variants.find((x) => x.id === i.variantId);
    return s + (v ? v.price * i.qty : 0);
  }, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  return <CartCtx.Provider value={{ items, add, setQty, clear: () => save([]), subtotal, count }}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const c = useContext(CartCtx);
  if (!c) throw new Error("useCart outside provider");
  return c;
}
