'use client';

import { useState } from 'react';
import { Star, Plus, Check } from 'lucide-react';
import ProductPlaceholderImage from './ProductPlaceholderImage';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      icon: product.icon,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-royal/10 bg-white shadow-sm transition hover:shadow-luxury">
      <div className="relative h-48">
        <ProductPlaceholderImage icon={product.icon} className="h-full w-full" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-royal shadow-sm">
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
        {product.badge && (
          <span className="absolute right-3 top-3 rounded-full bg-gold px-2.5 py-1 text-[11px] font-semibold text-royal shadow-sm">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-xs font-medium text-gold-dark">{product.category}</p>
        <h3 className="font-serif text-base font-semibold leading-snug text-royal">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-1 text-xs text-royal/60">
          <Star size={13} className="fill-gold text-gold" />
          <span className="font-medium text-royal">{product.rating}</span>
          <span>({product.reviews})</span>
        </div>

        <div className="mt-3 flex flex-wrap items-baseline gap-2">
          <span className="font-serif text-lg font-semibold text-royal">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          <span className="text-sm text-royal/40 line-through">
            ₹{product.originalPrice.toLocaleString('en-IN')}
          </span>
          <span className="text-xs font-semibold text-emerald-600">{discount}% off</span>
        </div>

        <button
          onClick={handleAdd}
          disabled={!product.inStock}
          className={`mt-4 flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition ${
            justAdded ? 'bg-emerald-600 text-white' : 'bg-royal text-cream hover:bg-royal-light'
          } disabled:cursor-not-allowed disabled:opacity-50`}
        >
          {justAdded ? (
            <>
              <Check size={16} /> Added
            </>
          ) : (
            <>
              <Plus size={16} /> Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
