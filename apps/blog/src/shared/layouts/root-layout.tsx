import type React from 'react';
import Footer from '@/shared/components/footer';
import Navbar from '@/shared/components/navbar';
import { ReactQueryProvider } from '../contexts/query-provider';
import ThemeProvider from '../contexts/theme-provider';
import { ModalProvider } from '../providers/modal-provider';

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
        <ModalProvider />
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
