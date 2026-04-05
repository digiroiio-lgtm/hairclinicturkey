import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Hair Clinic Turkey – Hair Transplant Turkey | Premium Hair Restoration',
  description:
    'Hair Transplant Turkey by Hair Clinic Turkey. World-class FUE, DHI & Sapphire FUE procedures in Istanbul. Affordable packages, board-certified surgeons, 5000+ happy patients.',
  keywords: 'hair transplant Turkey, hair clinic Turkey, FUE Turkey, DHI Turkey, hair restoration Istanbul',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
