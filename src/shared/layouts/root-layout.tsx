import React from "react";
import ThemeProvider from "../contexts/theme-provider";
import Navbar from "@/domains/home/ui/components/navbar";
import Footer from "@/domains/home/ui/components/footer";

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
      <Navbar />
      <main className="py-10">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
