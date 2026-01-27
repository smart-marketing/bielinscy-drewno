import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactMethods from "@/components/contact/ContactMethods";
import LocationMap from "@/components/contact/LocationMap";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Kontakt - Drewno Budowlane | Bielińscy Drewno",
  description:
    "Skontaktuj się z nami: tel. 537 593 186, WhatsApp, email, Facebook. Magazyn w Mirotkach przy A1. Wycena w 24h, realizacja w 2-3 dni. Doradzamy za darmo.",
  keywords: [
    "kontakt drewno",
    "Bielińscy Drewno telefon",
    "sklep drewno Mirotki",
    "skład drewna kontakt",
    "drewno budowlane tel",
    "wycena drewno",
  ],
  openGraph: {
    title: "Kontakt - Drewno Budowlane | Bielińscy Drewno",
    description:
      "Zadzwoń: 537 593 186, napisz na WhatsApp lub email. Magazyn w Mirotkach przy A1. Wycena 24h, dostawa 2-3 dni.",
    url: "https://bielinscy-drewno.pl/kontakt",
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Bielińscy Drewno - Kontakt",
      },
    ],
  },
  alternates: {
    canonical: "https://bielinscy-drewno.pl/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <main>
      <ContactHero />
      <ContactMethods />
      <LocationMap />
      <ContactFAQ />
      <ContactCTA />
    </main>
  );
}