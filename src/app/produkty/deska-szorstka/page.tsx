import type { Metadata } from "next";
import ProductHero from "@/components/product/ProductHero";
import ProductDetails from "@/components/product/ProductDetails";
import ProductSizes from "@/components/product/ProductSizes";
import ProductApplications from "@/components/product/ProductApplications";
import ProductCTA from "@/components/product/ProductCTA";

export const metadata: Metadata = {
  title: "Deska Szorstka - Materiał Konstrukcyjny | Bielińscy Drewno",
  description:
    "Deska szorstka sosna/świerk. Szalunki, deskowanie, palety. 25mm-32mm, z impregnacją lub bez. Realizacja 3 dni, własny transport. Mirotki k. Skórcza.",
  keywords: [
    "deska szorstka",
    "deska nieheblowana",
    "szalunki drewniane",
    "deskowanie dachu",
    "palety drewniane",
    "deska budowlana",
    "drewno konstrukcyjne cena",
  ],
  openGraph: {
    title: "Deska Szorstka - Materiał Konstrukcyjny | Bielińscy Drewno",
    description:
      "Deska szorstka - materiał budowlany na szalunki, deskowanie, palety. Z impregnacją lub bez. Realizacja 3 dni.",
    url: "https://bielinscy-drewno.pl/produkty/deska-szorstka",
    type: "website",
  },
  alternates: {
    canonical: "https://bielinscy-drewno.pl/produkty/deska-szorstka",
  },
};

const productData = {
  name: "Deska szorstka",
  category: "Materiał konstrukcyjno-techniczny",
  tagline: "Niska cena, wysoka wszechstronność",
  description: "Deska szorstka (nieheblowana, surowa) to materiał budowlany używany głównie tam, gdzie liczy się funkcja i wytrzymałość, a nie wygląd. Jest tańsza od deski struganej i bardzo wszechstronna w zastosowaniach konstrukcyjnych.",
  
  features: [
    {
      title: "Niska cena",
      description: "Najbardziej ekonomiczny wybór do zastosowań technicznych"
    },
    {
      title: "Wysoka wytrzymałość",
      description: "Idealna na konstrukcje i elementy pomocnicze"
    },
    {
      title: "Łatwa dostępność",
      description: "Pełen zakres wymiarów zawsze w magazynie"
    },
    {
      title: "Dobra do dalszej obróbki",
      description: "Można strugać, ciąć, frezować według potrzeb"
    }
  ],

  // src/app/produkty/deska-szorstka/page.tsx

sizes: [
  {
    size: "25mm MIX szerokości",
    specs: "sosna/świerk, wilgotność powyżej 20%, mix szerokości",
    details: "deska boczna, deski jednakowej długości 3m/4m/5m, impregnowane lub bez impregnacji",
    availability: "Zapytaj o dostępną długość",
    image: "/Deska szalunkowa 25mm.jpg"
  },
  {
    size: "25x150x4000",
    specs: "sosna/świerk, wilgotność powyżej 20%, jednakowy wymiar wszystkich desek",
    details: "cięta na pile tarczowej, deska z głównego cięcia, impregnowane lub bez impregnacji",
    availability: "Zapytaj o dostępną długość",
    image: "/Deska 25mmx150mmx4000mm.jpg"
  },
  {
    size: "32x140x6000",
    specs: "sosna/świerk, wilgotność powyżej 20%, jednakowy wymiar wszystkich desek",
    details: "deska z głównego cięcia, impregnowane lub bez impregnacji",
    availability: "Zapytaj o dostępną długość",
    image: "/Deska 32mmx140mm.jpg"
  }
],

  applications: [
    {
      icon: "🏗️",
      title: "Budownictwo i konstrukcje",
      items: [
        "Szalunki pod beton",
        "Deskowanie dachów",
        "Poszycia ścian i stropów"
      ]
    },
    {
      icon: "🏡",
      title: "Konstrukcje zewnętrzne",
      items: [
        "Wiaty, altany, drewutnie",
        "Ogrodzenia gospodarcze",
        "Prowizoryczne zabudowy"
      ]
    },
    {
      icon: "📦",
      title: "Transport i magazynowanie",
      items: [
        "Palety i skrzynie transportowe",
        "Przekładki, dystanse",
        "Zabezpieczenia ładunków"
      ]
    },
    {
      icon: "🔧",
      title: "Zastosowania warsztatowe",
      items: [
        "Blaty robocze",
        "Stoły montażowe",
        "Podkłady, kliny, podpory"
      ]
    },
    {
      icon: "🌾",
      title: "Rolnictwo i gospodarka",
      items: [
        "Boksy, przegrody",
        "Kojce, zagrody",
        "Rusztowania pomocnicze"
      ]
    }
  ],

  advantages: [
    "Niska cena - najlepsza opcja budżetowa",
    "Duża wytrzymałość konstrukcyjna",
    "Łatwa dostępność w wielu wymiarach",
    "Dobra do dalszej obróbki (struganie, cięcie)",
    "Możliwość impregnacji dla użycia zewnętrznego"
  ],

  limitations: [
    "Nierówna powierzchnia",
    "Drzazgi - nie nadaje się do wnętrz bez obróbki",
    "Większa podatność na paczenie",
    "Nie nadaje się do elementów wykończeniowych"
  ],

  practicalTip: {
    title: "💡 Wskazówka praktyczna",
    content: "Jeśli planujesz użyć deski szorstkiej wewnątrz lub jako element widoczny, warto ją wysuszyć, ostrugać lub wyszlifować oraz zabezpieczyć impregnatem lub lakierem. Po impregnacji może służyć latami w konstrukcjach zewnętrznych."
  }
};

export default function DeskaSzorstkaPage() {
  return (
    <main>
      <ProductHero 
  name={productData.name}
  tagline={productData.tagline}
  description={productData.description}
  image="/deska-szorstka.jpg"
/>
      <ProductDetails product={productData} />
      <ProductSizes sizes={productData.sizes} />
      <ProductApplications applications={productData.applications} />
      <ProductCTA productName={productData.name} />
    </main>
  );
}
