import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vera Gold Enerji | B2B Delgi, Kiralama ve Enerji Santrali Kurulumu",
  description: "Kaya delgi projeleri, ağır makine kiralama filosu ve endüstriyel enerji santrali kurulumunda Avrupa'nın B2B çözüm ortağı.",
  keywords: "sondaj, delgi işleri, kaya delgi, makine kiralama, enerji santrali kurulumu, rüzgar santrali, güneş santrali, B2B tedarikçi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#070708] text-white">
        <LanguageProvider>
          <BackgroundAnimation />
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

