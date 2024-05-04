import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Holly Ideal Tours",
  description: "Discover. Dream. Desire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <Script
        id="gtag"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PC0QPVH47M"
        ></Script>
        <Script id="gtag2">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PC0QPVH47M');`}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
