import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Kishorivansham | Elevate Your Sacred Space & Living',
  description:
    'High-end devotional accessories, Laddu Gopal shringar sets, aesthetic home decor and luxury festival gift hampers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans text-royal antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
