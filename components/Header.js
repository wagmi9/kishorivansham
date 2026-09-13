'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const NAV_LINKS = [
  { label: 'Home', category: 'All' },
  { label: 'Devotional Collection', category: 'Devotional Combo Packs' },
  { label: 'Aesthetic Home Decor', category: 'Wall Decor & Key Holders' },
  { label: 'Gift Hampers', category: 'Luxury Gift Hampers' },
];

export default function Header({ onNavigate, searchQuery, onSearchChange }) {
  const { itemCount, setIsCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const goToCategory = (category) => {
    onNavigate(category);
    setMobileOpen(false);
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToAbout = () => {
    setMobileOpen(false);
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-royal/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link
          href="/"
          className="mr-2 shrink-0 font-serif text-xl font-semibold tracking-wide text-royal sm:text-2xl"
        >
          Kishori<span className="text-gold">vansham</span>
        </Link>

        <nav className="hidden flex-1 items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => goToCategory(link.category)}
              className="text-sm font-medium text-royal/80 transition hover:text-royal"
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/darshan"
            className="text-sm font-medium text-gold-dark transition hover:text-royal"
          >
            Darshan
          </Link>
          <button
            onClick={goToAbout}
            className="text-sm font-medium text-royal/80 transition hover:text-royal"
          >
            About
          </button>
        </nav>

        <div className="ml-auto hidden items-center rounded-full border border-royal/15 bg-white px-3 py-1.5 sm:flex">
          <Search size={16} className="text-royal/50" />
          <input
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products..."
            className="ml-2 w-40 bg-transparent text-sm outline-none placeholder:text-royal/40 lg:w-56"
          />
        </div>

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative ml-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition hover:bg-royal/5"
          aria-label="Open cart"
        >
          <ShoppingBag size={22} className="text-royal" />
          {itemCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[11px] font-semibold text-royal">
              {itemCount}
            </span>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-royal/10 bg-cream px-4 pb-4 lg:hidden">
          <div className="mb-3 flex items-center rounded-full border border-royal/15 bg-white px-3 py-1.5">
            <Search size={16} className="text-royal/50" />
            <input
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search products..."
              className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-royal/40"
            />
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => goToCategory(link.category)}
                className="rounded-lg px-2 py-2 text-left text-sm font-medium text-royal/80 hover:bg-royal/5"
              >
                {link.label}
              </button>
            ))}
            <Link
              href="/darshan"
              className="rounded-lg px-2 py-2 text-left text-sm font-medium text-gold-dark hover:bg-royal/5"
            >
              Darshan
            </Link>
            <button
              onClick={goToAbout}
              className="rounded-lg px-2 py-2 text-left text-sm font-medium text-royal/80 hover:bg-royal/5"
            >
              About
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
