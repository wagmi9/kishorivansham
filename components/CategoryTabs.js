'use client';

import { CATEGORIES } from '@/lib/products';

export default function CategoryTabs({ active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            active === cat
              ? 'border-gold bg-gold text-royal'
              : 'border-royal/15 bg-white text-royal/70 hover:border-gold hover:text-royal'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
