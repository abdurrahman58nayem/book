import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from './components/store-provider';
import { SiteHeader } from './components/site-header';
import { SiteFooter } from './components/site-footer';

export const metadata: Metadata = {
  title: {
    default: 'বইপোকা — আপনার পছন্দের বই, এক জায়গায়',
    template: '%s | বইপোকা',
  },
  description: 'বাংলাদেশের পাঠকদের জন্য বাছাই করা বই। সহজ অর্ডার, নির্ভরযোগ্য ডেলিভারি।',
  keywords: ['বই', 'বাংলা বই', 'অনলাইন বইয়ের দোকান', 'উপন্যাস', 'ইসলামিক বই'],
  openGraph: {
    title: 'বইপোকা — আপনার পছন্দের বই, এক জায়গায়',
    description: 'জ্ঞান, গল্প, কল্পনা ও অনুপ্রেরণার বই বেছে নিন আপনার পছন্দ অনুযায়ী।',
    type: 'website',
    locale: 'bn_BD',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'বইপোকা — আপনার পছন্দের বই, এক জায়গায়',
    description: 'বাংলাদেশের পাঠকদের জন্য বাছাই করা বই।',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn">
      <body>
        <StoreProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </StoreProvider>
      </body>
    </html>
  );
}
