import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/theme/theme-provider";
import Navbar from "@/components/common/navbar";

export const metadata: Metadata = {
  title: "zoe.log",
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
      <body className="mx-auto max-w-[768px] px-4">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="py-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
