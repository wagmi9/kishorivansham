'use client';

import { MessageCircle } from 'lucide-react';
import FadeInSection from './FadeInSection';

export default function Hero() {
  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-royal px-4 py-24 text-center sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #D4AF37 0%, transparent 40%), radial-gradient(circle at 80% 70%, #D4AF37 0%, transparent 35%)',
        }}
      />
      <FadeInSection className="relative mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl font-semibold leading-tight text-cream sm:text-5xl lg:text-6xl">
          Elevate Your Sacred Space &amp; Living
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-cream/70 sm:text-lg">
          Fine Laddu Gopal shringar, artisanal wall decor and luxury gift hampers,
          crafted for a home that honours both faith and beauty.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={scrollToCatalog}
            className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-royal transition hover:bg-gold-light"
          >
            Explore Collections
          </button>
          <a
            href="https://wa.me/919369005422?text=Hi%20Kishorivansham%2C%20I%27d%20like%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3 text-sm font-semibold text-cream transition hover:border-gold hover:text-gold"
          >
            <MessageCircle size={16} />
            WhatsApp Orders
          </a>
        </div>
      </FadeInSection>
    </section>
  );
}
