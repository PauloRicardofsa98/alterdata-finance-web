import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/app/_components/ui/sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
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
    <body className={`${inter.variable} font-sans antialiased`}>
      {children}
      <Toaster theme="light" position="top-right" richColors />
    </body>
  </html>
);

export default RootLayout;
