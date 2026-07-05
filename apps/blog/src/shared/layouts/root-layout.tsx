import type React from 'react';
import Layout from '../components/layout';
import ThemeProvider from '../contexts/theme-provider';
import { ModalProvider } from '../providers/modal-provider';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Layout>{children}</Layout>
      <ModalProvider />
    </ThemeProvider>
  );
}
