'use client';

import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import ProductPlaceholderImage from './ProductPlaceholderImage';

export default function CartDrawer({ onCheckout }) {
  const { items, isCartOpen, setIsCartOpen, updateQty, removeFromCart, subtotal, delivery, total } =
    useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-royal/40 transition-opacity ${
          isCartOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-cream shadow-2xl transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-royal/10 px-5 py-4">
          <h2 className="font-serif text-lg font-semibold text-royal">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X size={20} className="text-royal/60" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <ShoppingBag size={36} className="text-royal/20" />
            <p className="text-sm text-royal/50">Your cart is empty.</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3">
                  <ProductPlaceholderImage
                    icon={item.icon}
                    className="h-16 w-16 shrink-0 rounded-lg"
                  />
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm font-medium leading-snug text-royal">{item.name}</p>
                    <p className="mt-0.5 text-xs text-royal/50">
                      ₹{item.price.toLocaleString('en-IN')} each
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-royal/15 px-1">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="flex h-6 w-6 items-center justify-center text-royal/60"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-4 text-center text-xs font-medium">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="flex h-6 w-6 items-center justify-center text-royal/60"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                        className="text-royal/40 hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {items.length > 0 && (
          <div className="border-t border-royal/10 px-5 py-4">
            <div className="space-y-1.5 text-sm text-royal/70">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>{delivery === 0 ? 'FREE' : `₹${delivery}`}</span>
              </div>
              <div className="mt-1 flex justify-between border-t border-royal/10 pt-2 font-serif text-base font-semibold text-royal">
                <span>Total</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setIsCartOpen(false);
                onCheckout();
              }}
              className="mt-4 w-full rounded-full bg-gold py-3 text-sm font-semibold text-royal transition hover:bg-gold-light"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
