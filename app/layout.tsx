import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./component/Header";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "General Clone Fnp",
  description: "general clone developed by feussi nde paterson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <ClerkProvider>

      <body>
        <Header />
        <main>

        {children}
        </main>
      </body>
      </ClerkProvider>
    </html>
  
  );
}
