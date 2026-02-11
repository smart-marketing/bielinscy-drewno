import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { GoogleTagManager } from '@next/third-parties/google'


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2B6650",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bielinscy-drewno.pl"),
  title: {
    default: "Bielińscy Drewno | Skład drewna budowlanego - Mirotki, Pomorze",
    template: "%s | Bielińscy Drewno",
  },
  description:
    "Drewno budowlane na czas. Tarcica konstrukcyjna, więźby dachowe, deski impregnowane. Realizacja w 3 dni, własny transport. Skład drewna Mirotki k. Skórcza. Od 2013 roku.",
  keywords: [
    "drewno budowlane",
    "skład drewna",
    "tarcica",
    "więźba dachowa",
    "deski impregnowane",
    "kantówka",
    "drewno Pomorze",
    "drewno Gdańsk",
    "drewno Tczew",
    "drewno Starogard",
    "Mirotki",
    "Skórcz",
    "drewno konstrukcyjne",
    "impregnacja ciśnieniowa",
  ],
  authors: [{ name: "Bielińscy Drewno" }],
  creator: "Bielińscy Drewno",
  publisher: "Bielińscy Drewno",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://bielinscy-drewno.pl",
    siteName: "Bielińscy Drewno",
    title: "Bielińscy Drewno | Skład drewna budowlanego",
    description:
      "Drewno budowlane na czas. Jakość, która nie zawiedzie. Realizacja w 3 dni z własnym transportem. Od 2013 roku.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bielińscy Drewno - Skład drewna budowlanego",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bielińscy Drewno | Skład drewna budowlanego",
    description:
      "Drewno budowlane na czas. Jakość, która nie zawiedzie. Realizacja w 3 dni.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bielinscy-drewno.pl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
      
        <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '821688877596988');
        fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=821688877596988&ev=PageView&noscript=1"
        /></noscript>
      
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <JsonLd />
      </head>
      <body
        className={`${manrope.variable} ${playfair.variable} font-sans antialiased bg-cream text-brand-brown`}
      >
        <TopBar />
        <Header />
        {children}
        <Footer />
      </body>
      
      <GoogleTagManager gtmId="GTM-KWNWLL9K" />
    </html>
  );
}

