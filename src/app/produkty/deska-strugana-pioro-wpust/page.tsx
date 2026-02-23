import type { Metadata } from "next";
import ProductHero from "@/components/product/ProductHero";
import ProductDetails from "@/components/product/ProductDetails";
import ProductSizes from "@/components/product/ProductSizes";
import ProductApplications from "@/components/product/ProductApplications";
import ProductCTA from "@/components/product/ProductCTA";

export const metadata: Metadata = {
  title: "Deska Strugana Pióro-Wpust - Boazerie | Bielińscy Drewno",
  description: "Deska pióro-wpust. Boazerie, elewacje, podbitki. Szczelne połączenie. 14x110-28x137mm. Pomorze.",
  keywords: [
    "deska pióro wpust",
    "boazeria",
    "podbitka",
    "elewacja drewniana",
    "lambriowanie",
    "deska na ściany",
  ],
  openGraph: {
    title: "Deska Pióro-Wpust - Boazerie, Elewacje | Bielińscy Drewno",
    description: "System pióro-wpust. Boazerie, elewacje, podbitki. Szczelne i estetyczne połączenie.",
    url: "https://bielinscy-drewno.pl/produkty/deska-strugana-pioro-wpust",
    type: "website",
  },
  alternates: {
    canonical: "https://bielinscy-drewno.pl/produkty/deska-strugana-pioro-wpust",
  },
};

const productData = {
  name: "Deska strugana na pióro-wpust",
  category: "Wykończenia szczelne",
  tagline: "Boazerie, elewacje, podbitki - estetyczne połączenie",
  description: "Materiał przeznaczony tam, gdzie ważne jest szczelne, równe i estetyczne łączenie desek. Dzięki systemowi pióro-wpust deski zazębiają się, co poprawia stabilność i wygląd powierzchni.",
  
  features: [
    {
      title: "System pióro-wpust",
      description: "Deski zazębiają się - szczelność i stabilność powierzchni"
    },
    {
      title: "Równa powierzchnia",
      description: "Brak widocznych szczelin, estetyczne wykończenie"
    },
    {
      title: "Szybki montaż",
      description: "Łatwe łączenie, intuicyjny system"
    },
    {
      title: "Większa sztywność",
      description: "Stabilniejsza konstrukcja niż deski bez łączenia"
    }
  ],


sizes: [
  {
    size: "Boazeria 14mmx110mm",
    specs: "pióro-wpust, strugana z czterech stron, prawa strona gładka, lewa strona ryflowana",
    details: "profil Softline/Faza, świerk/sosna, wilgotność do 16%",
    availability: "Zapytaj o dostępną długość",
    image: "/Boazeria 14mmx110mm.jpg"
  },
  {
    size: "Podbitka 18x135x4000",
    specs: "pióro-wpust, strugana z czterech stron, prawa strona gładka, lewa strona ryflowana",
    details: "sosna, wilgotność do 16%, pakowana po cztery sztuki",
    availability: "Zapytaj o dostępną długość",
    image: "/Podbitka 18mmx135mmx4000mm.jpg"
  },
  {
    size: "Podbitka 19x110",
    specs: "pióro-wpust, strugana z czterech stron, prawa strona gładka, lewa strona ryflowana",
    details: "sosna/świerk, wilgotność do 16%",
    availability: "Zapytaj o dostępną długość",
    image: "/Podbitka 19mmx110mmx4000mm.jpg"
  },
  {
    size: "Podbitka 19x136",
    specs: "pióro-wpust, strugana z czterech stron, prawa strona gładka, lewa strona ryflowana",
    details: "sosna/świerk, wilgotność do 16%",
    availability: "Zapytaj o dostępną długość",
    image: "/Podbitka 20mmx113mm.jpg"
  },
  {
    size: "Elewacja 22x135x4000",
    specs: "pióro-wpust, strugana z czterech stron, prawa i lewa strona gładka",
    details: "możliwość łączenia na długość, sosna, wilgotność do 16%, pakowana po cztery sztuki",
    availability: "Zapytaj o dostępną długość",
    image: "/ewewacja22x35.jpg"
  },
  {
    size: "Stropopodłoga 28x137",
    specs: "pióro-wpust, strugana z czterech stron, prawa i lewa strona gładka",
    details: "świerk, wilgotność do 16%",
    availability: "Zapytaj o dostępną długość",
    image: "/Stropopodloga 25mmx113mmx4000mm.jpg"
  }
],

  applications: [
    {
      icon: "🏠",
      title: "Wykończenia wnętrz",
      items: [
        "Boazerie ścienne - równa powierzchnia",
        "Sufity drewniane",
        "Ścianki działowe dekoracyjne"
      ]
    },
    {
      icon: "🏡",
      title: "Podbitki i zabudowy dachowe",
      items: [
        "Podbitki okapów",
        "Osłony krokwi",
        "Estetyka + ochrona przed wiatrem"
      ]
    },
    {
      icon: "🎨",
      title: "Elewacje drewniane",
      items: [
        "Elewacje zewnętrzne (po impregnacji)",
        "Zabudowy altan, domków",
        "Ściany wiat i tarasów"
      ]
    },
    {
      icon: "📐",
      title: "Podłogi i posadzki",
      items: [
        "Podłogi w domkach letniskowych",
        "Strychy, antresole",
        "Stabilniejsze niż bez łączenia"
      ]
    },
    {
      icon: "🔧",
      title: "Zabudowy techniczne",
      items: [
        "Osłony instalacji",
        "Obudowy schowków",
        "Sufity w garażach"
      ]
    }
  ],

  advantages: [
    "Estetyczne, równe połączenie bez szczelin",
    "Mniejsze szczeliny przy pracy drewna",
    "Szybszy montaż niż zwykłe deski",
    "Większa sztywność powierzchni",
    "Pióro-wpust ogranicza podwiewanie"
  ],

  limitations: [
    "Trzeba zostawić szczelinę dylatacyjną przy ścianach",
    "Na zewnątrz konieczna impregnacja/olejowanie",
    "Grubość dobieraj do zastosowania"
  ],

  practicalTip: {
    title: "💡 Warto pamiętać",
    content: "Przy montażu ZAWSZE zostaw szczelinę dylatacyjną przy ścianach i w narożnikach - drewno pracuje! Na zewnątrz konieczna jest impregnacja lub olejowanie. Grubość dobieraj do zastosowania: podłoga to nie to samo co sufit. Do podłóg wybieraj minimum 28mm."
  }
};

export default function DeskaPioroWpustPage() {
  return (
    <main>
      <ProductHero 
  name={productData.name}
  tagline={productData.tagline}
  description={productData.description}
  image="/Boazeria 14mmx110mm.jpg"
/>
      <ProductDetails product={productData} />
      <ProductSizes sizes={productData.sizes} />
      <ProductApplications applications={productData.applications} />
      <ProductCTA productName={productData.name} />
    </main>
  );
}
