'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryTabs from '@/components/CategoryTabs';
import ProductGrid from '@/components/ProductGrid';
import About from '@/components/About';
import CartDrawer from '@/components/CartDrawer';
import CheckoutModal from '@/components/CheckoutModal';
import OrderConfirmationModal from '@/components/OrderConfirmationModal';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';

export default function HomePage() {
  const [category, setCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  return (
    <main className="min-h-screen bg-cream">
      <Header onNavigate={setCategory} searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Hero />

      <section id="catalog" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <FadeInSection className="mb-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-royal sm:text-3xl">
            Our Collections
          </h2>
          <p className="mt-2 text-sm text-royal/60">
            Devotional accessories, home decor and hampers, crafted with care.
          </p>
        </FadeInSection>

        <div className="mb-8">
          <CategoryTabs active={category} onChange={setCategory} />
        </div>

        <ProductGrid category={category} searchQuery={searchQuery} />
      </section>

      <About />

      <CartDrawer onCheckout={() => setCheckoutOpen(true)} />

      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        onSuccess={(order) => {
          setCheckoutOpen(false);
          setConfirmedOrder(order);
        }}
      />

      <OrderConfirmationModal order={confirmedOrder} onClose={() => setConfirmedOrder(null)} />

      <Footer />
    </main>
  );
}
