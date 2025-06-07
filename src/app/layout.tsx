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
  openGraph: {
    url: "https://hijjoy.com",
    title: "hijjoy",
    description: "웹 프론트엔드 개발자 조이입니다",
    images: [
      {
        url: "/images/openGraph.png",
        width: 1200,
        height: 638,
        alt: "블로그 대표 이미지",
      },
    ],
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
