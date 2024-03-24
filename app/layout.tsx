import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { NextAuthProvider } from '@/providers/NextAuthProvider';
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fortura",
  description: "A blog app built with NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Toaster />
        <NextAuthProvider>
          <Navbar />
          <main>{children}</main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
