import { Playfair_Display, Mulish } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['700', '900'],
  variable: '--font-playfair',
});

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-mulish',
});

export const metadata = {
  title: 'Saung Berkah Waras | Masakan Rumahan di Gombong',
  description:
    'Saung Berkah Waras di Gombong, Kebumen. Pesan paket ayam, nila, lele, bakso, soto, dan minuman lewat WhatsApp atau GoFood.',
  openGraph: {
    title: 'Saung Berkah Waras',
    description:
      'Masakan rumahan, suasana saung yang hangat, dan order mudah lewat WhatsApp atau GoFood.',
    siteName: 'Saung Berkah Waras',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saung Berkah Waras',
    description:
      'Masakan rumahan, suasana saung yang hangat, dan order mudah lewat WhatsApp atau GoFood.',
  },
};

import { CartProvider } from '@/context/CartContext';
import CartWidget from '@/components/CartWidget';

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${playfair.variable} ${mulish.variable}`}>
        <CartProvider>
          {children}
          <CartWidget />
        </CartProvider>
      </body>
    </html>
  );
}
