import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Linesia Studios - Serveurs Minecraft & Hytale",
  description: "Découvrez les serveurs Linesia EU, Linesia NA, Renoria et Opale. Des expériences de jeu uniques et innovantes.",
  keywords: "Minecraft, Hytale, serveurs, kitmap, PvP, factions, Linesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="bg-primary-white text-gray-900 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

