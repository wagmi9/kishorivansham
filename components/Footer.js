import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-royal/10 bg-royal px-4 py-10 text-cream/70">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-serif text-lg font-semibold text-cream">
              Kishori<span className="text-gold">vansham</span>
            </p>
            <p className="mt-1 text-sm">Elevate Your Sacred Space &amp; Living</p>
          </div>
          <a
            href="https://wa.me/919369005422"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-2 text-sm font-medium transition hover:border-gold hover:text-gold"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-cream/10 pt-6 text-xs sm:justify-start">
          <Link href="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gold">Terms of Service</Link>
          <Link href="/refund-policy" className="hover:text-gold">Refund Policy</Link>
          <Link href="/shipping-policy" className="hover:text-gold">Shipping Policy</Link>
          <Link href="/contact" className="hover:text-gold">Contact Us</Link>
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-3 pt-2 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Kishorivansham. All rights reserved.</p>
          <Link href="/admin" className="hover:text-gold">
            Store Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
