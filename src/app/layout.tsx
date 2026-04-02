import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gokul Krishna T U | Fullstack Developer",
  description: "Scrollytelling Personal Portfolio of Gokul Krishna T U, a Fullstack Developer & UI Engineer based in Dubai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-[#0A0A0A] text-white antialiased selection:bg-white/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
