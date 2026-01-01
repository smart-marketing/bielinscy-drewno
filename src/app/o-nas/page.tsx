import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurPrinciples from "@/components/about/OurPrinciples";
import Location from "@/components/about/Location";
import Team from "@/components/about/Team";
import AboutCTA from "@/components/about/AboutCTA";
import JsonLdAbout from "@/components/about/JsonLdAbout";

export const metadata: Metadata = {
  title: "O nas | Bielińscy Drewno - Rodzinny skład drewna od 2013",
  description:
    "Poznaj Bielińscy Drewno - rodzinną firmę z Pomorza. Od 2013 roku dostarczamy drewno budowlane szybko, uczciwie i z głową. Magazyn 5 min od A1, obsługa Gdańsk-Bydgoszcz-Olsztyn.",
  keywords: [
    "o nas Bielińscy Drewno",
    "skład drewna Mirotki",
    "rodzinna firma drewno",
    "historia firmy",
    "drewno Pomorze",
    "skład drewna przy A1",
  ],
  openGraph: {
    title: "O nas | Bielińscy Drewno - Rodzinny skład drewna od 2013",
    description:
      "Poznaj Bielińscy Drewno - rodzinną firmę z Pomorza. Od 2013 roku dostarczamy drewno budowlane szybko, uczciwie i z głową.",
    url: "https://bielinscy-drewno.pl/o-nas",
    type: "website",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Bielińscy Drewno - O nas",
      },
    ],
  },
  alternates: {
    canonical: "https://bielinscy-drewno.pl/o-nas",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLdAbout />
      <main>
        <AboutHero />
        <OurStory />
        <OurPrinciples />
        <Location />
        <Team />
        <AboutCTA />
      </main>
    </>
  );
}
