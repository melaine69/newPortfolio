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
    <html className="scroll-smooth" lang="fr">
      <body className={`flex flex-col min-h-screen  ${manrope.className}`}>
        <div className="z-0 absolute inset-0 h-[500px] bg-gradient-to-b from-orange-200 to-white" 
        style={{clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%"}}></div>
        <Header />
        <main className="z-10 flex-1">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
