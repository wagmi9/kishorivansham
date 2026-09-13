import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import FadeInSection from '@/components/FadeInSection';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { PRODUCTS } from '@/lib/products';

export const metadata = {
  title: 'Darshan | Kishorivansham',
  description: 'A quiet space for the names, the mantra, and the seva of Radha Krishna.',
};

const KRISHNA_NAMES = [
  { name: 'गोविंद', translit: 'Govinda', meaning: 'Protector of the cows' },
  { name: 'माधव', translit: 'Madhava', meaning: 'Lord of all knowledge' },
  { name: 'गोपाल', translit: 'Gopal', meaning: 'The cowherd boy' },
  { name: 'मुरलीधर', translit: 'Murlidhar', meaning: 'Holder of the flute' },
  { name: 'बांके बिहारी', translit: 'Banke Bihari', meaning: 'The enchanting one, ever in three bends' },
  { name: 'गिरधारी', translit: 'Girdhari', meaning: 'Lifter of Govardhan hill' },
  { name: 'नंदलाल', translit: 'Nandlal', meaning: 'Beloved son of Nanda' },
  { name: 'श्याम', translit: 'Shyam', meaning: 'The dark, radiant one' },
];

const KISHORI_NAMES = [
  { name: 'किशोरी', translit: 'Kishori', meaning: 'The ever-youthful one' },
  { name: 'लाडली', translit: 'Ladli', meaning: 'The cherished, beloved daughter' },
  { name: 'रासेश्वरी', translit: 'Raseshwari', meaning: 'Queen of divine love' },
  { name: 'वृषभानु नंदिनी', translit: 'Vrishbhanu Nandini', meaning: 'Daughter of King Vrishbhanu' },
  { name: 'बरसाने वाली', translit: 'Barsane Wali', meaning: 'The one from Barsana' },
  { name: 'श्यामा', translit: 'Shyama', meaning: 'Radiant beside Shyam' },
  { name: 'स्वामिनी', translit: 'Swamini', meaning: 'The divine mistress' },
  { name: 'प्रिया जी', translit: 'Priya Ji', meaning: 'The beloved' },
];

export default function DarshanPage() {
  const devotionalProducts = PRODUCTS.filter((p) => p.category === 'Devotional Combo Packs');

  return (
    <main className="bg-royal">
      <div className="sticky top-0 z-40 border-b border-cream/10 bg-royal/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <span className="font-serif text-lg font-semibold text-cream">
            Kishori<span className="text-gold">vansham</span>
          </span>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-cream/70 hover:text-gold"
          >
            <ArrowLeft size={15} />
            Back to shop
          </Link>
        </div>
      </div>

      <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-24 text-center">
        <FadeInSection>
          <p className="text-sm uppercase tracking-[0.3em] text-gold/80">Darshan</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold text-cream sm:text-6xl lg:text-7xl">
            राधा कृष्ण
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base text-cream/60 sm:text-lg">
            Two names. One devotion. A quiet space to sit with Their names,
            Their mantra, and the seva made for Them.
          </p>
        </FadeInSection>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-center font-serif text-2xl font-semibold text-cream sm:text-3xl">
            The Names of Krishna
          </h2>
        </FadeInSection>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KRISHNA_NAMES.map((item, i) => (
            <FadeInSection key={item.translit} delay={i * 80}>
              <div className="rounded-2xl border border-gold/20 bg-cream/5 p-5 text-center">
                <p className="font-serif text-2xl text-gold">{item.name}</p>
                <p className="mt-1 text-sm font-medium text-cream">{item.translit}</p>
                <p className="mt-2 text-xs text-cream/50">{item.meaning}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-center font-serif text-2xl font-semibold text-cream sm:text-3xl">
            The Names of Kishori
          </h2>
        </FadeInSection>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KISHORI_NAMES.map((item, i) => (
            <FadeInSection key={item.translit} delay={i * 80}>
              <div className="rounded-2xl border border-gold/20 bg-cream/5 p-5 text-center">
                <p className="font-serif text-2xl text-gold">{item.name}</p>
                <p className="mt-1 text-sm font-medium text-cream">{item.translit}</p>
                <p className="mt-2 text-xs text-cream/50">{item.meaning}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <section className="px-4 py-24 text-center">
        <FadeInSection>
          <p className="text-sm uppercase tracking-[0.3em] text-gold/80">The Maha Mantra</p>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-2xl leading-relaxed text-cream sm:text-3xl">
            हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे।<br />
            हरे राम हरे राम, राम राम हरे हरे॥
          </p>
        </FadeInSection>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-center font-serif text-2xl font-semibold text-cream sm:text-3xl">
            Crafted for Their Seva
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center text-sm text-cream/50">
            Shringar and accessories made with the same care as everything above.
          </p>
        </FadeInSection>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {devotionalProducts.map((product, i) => (
            <FadeInSection key={product.id} delay={i * 100}>
              <ProductCard product={product} />
            </FadeInSection>
          ))}
        </div>
        <FadeInSection>
          <div className="mt-12 text-center">
            <Link
              href="/#catalog"
              className="inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold text-royal transition hover:bg-gold-light"
            >
              View Full Collection
            </Link>
          </div>
        </FadeInSection>
      </section>

      <Footer />
    </main>
  );
}
