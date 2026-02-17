import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/app/_components/layout/sidebar";
import MobileHeader from "@/app/_components/layout/mobile-header";
import MobileNav from "@/app/_components/layout/mobile-nav";
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
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar />
        <main className="flex-1 flex flex-col min-h-screen pb-16 lg:pb-0 min-w-0">
          <MobileHeader />
          <div className="flex-1 p-4 lg:p-6">
            <div className="mx-auto max-w-7xl space-y-6">{children}</div>
          </div>
        </main>
        <MobileNav />
      </div>
      <Toaster theme="light" position="top-right" richColors />
    </body>
  </html>
);

export default RootLayout;
