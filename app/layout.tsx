import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      {children}
    </body>
  </html>
);

export default RootLayout;
