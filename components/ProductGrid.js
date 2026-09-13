'use client';

import { PRODUCTS } from '@/lib/products';
import ProductCard from './ProductCard';
import FadeInSection from './FadeInSection';

export default function ProductGrid({ category, searchQuery }) {
  const filtered = PRODUCTS.filter((p) => {
    const matchesCategory = category === 'All' || p.category === category;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-royal/50">
        No products match your search.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((product, i) => (
        <FadeInSection key={product.id} delay={(i % 6) * 80}>
          <ProductCard product={product} />
        </FadeInSection>
      ))}
    </div>
  );
}
