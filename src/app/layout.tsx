import type { Metadata } from "next";
import "@/styles/globals.css";
import ThemeProvider from "@/theme/theme-provider";
import Navbar from "./(home)/_components/navbar";
import Footer from "./(home)/_components/footer";

export const metadata: Metadata = {
  title: "hijjoy",
  description: "개발자 조이 블로그",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="mx-auto max-w-[768px] vsc-initialized">
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
      </body>
    </html>
  );
}
