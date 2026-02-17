import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/app/_components/layout/header";
import { Toaster } from "@/app/_components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alterdata Finance - Gerenciamento Financeiro",
  description: "Aplicativo de gerenciamento financeiro pessoal",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="pt-BR">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <Header />
      <main className="container mx-auto px-4 py-6">{children}</main>
      <Toaster />
    </body>
  </html>
);

export default RootLayout;
