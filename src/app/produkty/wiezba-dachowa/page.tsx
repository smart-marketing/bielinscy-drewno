import type { Metadata } from "next";
import ProductHero from "@/components/product/ProductHero";
import ProductDetails from "@/components/product/ProductDetails";
import ProductSizes from "@/components/product/ProductSizes";
import ProductApplications from "@/components/product/ProductApplications";
import ProductCTA from "@/components/product/ProductCTA";

export const metadata: Metadata = {
  title: "Więźba Dachowa - Konstrukcja Dachu | Bielińscy Drewno",
  description: "Więźba dachowa mokra i suszona C24. Krokwie, płatwie, jętki, murłaty. Konsultacja doboru przekrojów. Pomorze.",
  keywords: [
    "więźba dachowa",
    "krokwie",
    "więźba C24",
    "konstrukcja dachu",
    "drewno na więźbę",
    "więźba suszona",
    "dach drewniany",
  ],
  openGraph: {
    title: "Więźba Dachowa - Konstrukcja Dachu | Bielińscy Drewno",
    description: "Kompletna więźba dachowa. Mokra tradycyjna lub suszona C24. Doradztwo w doborze przekrojów.",
    url: "https://bielinscy-drewno.pl/produkty/wiezba-dachowa",
    type: "website",
  },
  alternates: {
    canonical: "https://bielinscy-drewno.pl/produkty/wiezba-dachowa",
  },
};

const productData = {
  name: "Więźba dachowa",
  category: "Konstrukcja nośna dachu",
  tagline: "Tradycyjna mokra lub premium suszona C24",
  description: "Kompletna konstrukcja nośna dachu - krokwie, płatwie, jętki, murłaty. Wybór rodzaju drewna ma ogromny wpływ na trwałość, stabilność i późniejsze problemy eksploatacyjne. Pomożemy dobrać odpowiednie przekroje pod Twój projekt.",
  
  features: [
    {
      title: "Dwa standardy",
      description: "Mokra tradycyjna (tańsza) lub suszona C24 (stabilna)"
    },
    {
      title: "Kompletna konstrukcja",
      description: "Wszystkie elementy więźby - krokwie, płatwie, jętki, murłaty"
    },
    {
      title: "Konsultacja techniczna",
      description: "Pomoc w doborze przekrojów wg projektu i obciążeń"
    },
    {
      title: "Wysoka nośność",
      description: "Zgodnie z normami budowlanymi, akceptowana w projektach"
    }
  ],

  sizes: [
    {
      size: "Wymiary indywidualne",
      specs: "Według projektu konstrukcyjnego",
      details: "Dobór przekrojów pod obciążenia śniegiem i wiatrem",
      availability: "Konsultacja z konstruktorem"
    },
    {
      size: "Krokwie 50x140-80x180",
      specs: "Mokra lub suszona C24, sosna/świerk",
      details: "Najpopularniejsze przekroje konstrukcyjne",
      availability: "Wycena po podaniu długości"
    },
    {
      size: "Płatwie, jętki, murłaty",
      specs: "Pełen zakres wymiarów konstrukcyjnych",
      details: "Długości do 6m, większe na zamówienie",
      availability: "Wycena indywidualna"
    },
    {
      size: "Więźby prefabrykowane",
      specs: "Gotowe konstrukcje dachowe",
      details: "Szybki montaż, wysoka precyzja",
      availability: "Na zamówienie - konsultacja"
    }
  ],

  applications: [
    {
      icon: "🏠",
      title: "Domy mieszkalne",
      items: [
        "Poddasze użytkowe - suszona C24",
        "Dachy energooszczędne",
        "Stabilna geometria przez lata"
      ]
    },
    {
      icon: "🏗️",
      title: "Budynki gospodarcze",
      items: [
        "Garaże - mokra wystarczy",
        "Stodoły, wiaty",
        "Hale magazynowe"
      ]
    },
    {
      icon: "⭐",
      title: "Konstrukcje widoczne",
      items: [
        "Belki dekoracyjne",
        "Antresole",
        "Prefabrykaty dachowe"
      ]
    },
    {
      icon: "🏘️",
      title: "Domy szkieletowe",
      items: [
        "Konstrukcje prefabrykowane",
        "Systemy modułowe",
        "Precyzja montażu"
      ]
    }
  ],

  advantages: [
    "Kompletna dostawa wszystkich elementów",
    "Doradztwo techniczne w doborze przekrojów",
    "Szybka realizacja - własny transport",
    "Możliwość odbioru osobistego",
    "Suszona C24 = brak problemów z GK i pokryciem"
  ],

  limitations: [
    "Mokra paczy i pęka po montażu",
    "Mokra zmienia geometrię dachu",
    "Suszona droższa od mokrej",
    "Wymaga zabezpieczenia przy ekspozycji"
  ],

  practicalTip: {
    title: "💡 Która więźba dla Twojego dachu?",
    content: "Stan surowy + budynek gospodarczy → mokra (z dobrą impregnacją). Dom całoroczny + poddasze użytkowe + płyty GK → ZDECYDOWANIE suszona C24. Mokra więźba schnąc w dachu może popękać płyty i zmienić geometrię pokrycia. Oszczędność na drewnie = wydatek na naprawy!"
  }
};

export default function WiezbaDachowaPage() {
  return (
    <main>
      <ProductHero 
  name={productData.name}
  tagline={productData.tagline}
  description={productData.description}
  image="/wiezba-dachowa.jpg"
/>
      <ProductDetails product={productData} />
      <ProductSizes sizes={productData.sizes} />
      <ProductApplications applications={productData.applications} />
      <ProductCTA productName={productData.name} />
    </main>
  );
}
