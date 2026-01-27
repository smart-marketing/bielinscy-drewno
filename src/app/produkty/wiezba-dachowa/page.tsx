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
  tagline: "Mokra szorstka lub suszona C24 - wybierz standard",
  description: "Więźba dachowa to konstrukcja nośna dachu (krokwie, płatwie, jętki, murłaty). Wybór rodzaju drewna ma ogromny wpływ na trwałość, stabilność i późniejsze problemy eksploatacyjne.",
  
  features: [
    {
      title: "Dwa standardy dostępne",
      description: "Mokra szorstka (ekonomiczna) lub suszona C24 (premium)"
    },
    {
      title: "Kompleksowe doradztwo",
      description: "Pomożemy dobrać odpowiednie przekroje pod projekt"
    },
    {
      title: "Dostawa z magazynu",
      description: "Różne przekroje i długości zawsze dostępne"
    },
    {
      title: "Jakość konstrukcyjna",
      description: "Sosna/świerk iglaste klasy konstrukcyjnej"
    }
  ],

  sizes: [
    {
      size: "Więźba mokra szorstka",
      specs: "drewno niesuszone, nieheblowane, wilgotność naturalna (powyżej 20%)",
      details: "Krokwie, płatwie, murłaty - najczęściej spotykane rozwiązanie w Polsce",
      availability: "Różne przekroje - zapytaj o dostępność"
    },
    {
      size: "Więźba suszona C24",
      specs: "drewno suszone komorowo (12-15%), heblowane, klasa C24",
      details: "Standard premium - poddasza użytkowe, domy energooszczędne",
      availability: "Różne przekroje - zapytaj o dostępność"
    },
    {
      size: "Projekt i dobór przekrojów",
      specs: "Indywidualna konsultacja techniczna",
      details: "Pomoc w doborze odpowiednich wymiarów pod Twój projekt budowlany",
      availability: "Skontaktuj się z nami - 537 593 186"
    }
  ],

  applications: [
    {
      icon: "🟤",
      title: "Więźba mokra szorstka - zastosowania",
      items: [
        "Tradycyjna więźba dachowa - stan surowy",
        "Dachy domów jednorodzinnych (bez poddasza użytkowego)",
        "Budynki gospodarcze - stodoły, hale, wiaty",
        "Garaże wolnostojące"
      ]
    },
    {
      icon: "🟡",
      title: "Więźba suszona C24 - zastosowania",
      items: [
        "Dachy z poddaszem użytkowym",
        "Dachy energooszczędne i pasywne",
        "Belki dekoracyjne, antresole, stropy",
        "Domy szkieletowe, prefabrykaty dachowe"
      ]
    },
    {
      icon: "⚠️",
      title: "Mokra - nie polecana do:",
      items: [
        "Dachów z poddaszem użytkowym",
        "Nowoczesnych domów energooszczędnych",
        "Konstrukcji wymagających dużej dokładności"
      ]
    }
  ],

  advantages: [
    "MOKRA: niższa cena, duża dostępność, wysoka nośność na start",
    "SUSZONA: wilgotność 12-15%, minimalna praca drewna",
    "SUSZONA: brak sinizny i grzybów, lepsza odporność ogniowa",
    "SUSZONA: akceptowana w projektach (C24), stabilna geometria przez lata",
    "Doradztwo techniczne w doborze przekrojów"
  ],

  limitations: [
    "MOKRA: drewno schnie już w dachu - skręcanie, paczenie, pękanie",
    "MOKRA: zmiana geometrii dachu, ryzyko problemów z pokryciem i GK",
    "SUSZONA: wyższa cena",
    "SUSZONA: konieczność zabezpieczenia przy ekspozycji zewnętrznej"
  ],

  practicalTip: {
    title: "🧠 Praktyczna rada - którą wybrać?",
    content: "Stan surowy + dach bez poddasza → mokra szorstka (z dobrą impregnacją). Dom całoroczny, poddasze użytkowe, płyty GK → zdecydowanie suszona strugana C24. Różnica w stabilności i trwałości jest ogromna!"
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