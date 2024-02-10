import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mélaine Dewitte - Développeuse web",
  description: "Portfolio de Mélaine Dewitte, développeuse web passionnée",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`flex flex-col min-h-screen ${manrope.className}`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
