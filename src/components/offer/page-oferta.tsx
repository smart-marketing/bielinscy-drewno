import type { Metadata } from "next";
import OfferHero from "@/components/offer/OfferHero";
import ProductListing from "@/components/offer/ProductListing";
import HowToOrder from "@/components/offer/HowToOrder";
import QualityGuarantees from "@/components/offer/QualityGuarantees";
import OfferCTA from "@/components/offer/OfferCTA";

export const metadata: Metadata = {
  title: "Oferta - Drewno Budowlane | Bielińscy Drewno",
  description:
    "Pełna oferta drewna budowlanego: tarcica konstrukcyjna, więźby dachowe, kantówka, deski impregnowane. Realizacja w 3 dni, własny transport. Pomorze, Kujawy.",
  keywords: [
    "oferta drewno budowlane",
    "tarcica cena",
    "więźba dachowa",
    "kantówka",
    "deski impregnowane",
    "drewno konstrukcyjne",
    "tarcica sosna",
    "drewno Pomorze",
  ],
  openGraph: {
    title: "Oferta - Drewno Budowlane | Bielińscy Drewno",
    description:
      "Pełna oferta drewna budowlanego: tarcica, więźby, kantówka, deski impregnowane. Realizacja 3 dni, własny transport.",
    url: "https://bielinscy-drewno.pl/oferta",
    type: "website",
    images: [
      {
        url: "/og-offer.jpg",
        width: 1200,
        height: 630,
        alt: "Bielińscy Drewno - Oferta",
      },
    ],
  },
  alternates: {
    canonical: "https://bielinscy-drewno.pl/oferta",
  },
};

export default function OfertaPage() {
  return (
    <main>
      <OfferHero />
      <ProductListing />
      <HowToOrder />
      <QualityGuarantees />
      <OfferCTA />
    </main>
  );
}
