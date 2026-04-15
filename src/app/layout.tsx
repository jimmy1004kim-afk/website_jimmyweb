import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteMeta } from "@/data/site";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: siteMeta.name,
    template: `%s | ${siteMeta.name}`,
  },
  description: siteMeta.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans`}
      >
        {/* 세로 flex: viewport 높이 확보 + main이 남는 영역을 채워 짧은 페이지에서도 Footer가 하단에 위치 */}
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex w-full flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
