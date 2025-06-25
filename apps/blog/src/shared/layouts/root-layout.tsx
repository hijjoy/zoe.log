import type React from 'react';
import Footer from '@/domains/home/ui/components/footer';
import Navbar from '@/domains/home/ui/components/navbar';
import { ReactQueryProvider } from '../contexts/query-provider';
import ThemeProvider from '../contexts/theme-provider';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <ReactQueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        <main className="py-10">{children}</main>
        <Footer />
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
