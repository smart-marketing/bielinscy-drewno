import type { Metadata } from "next";
import ProductHero from "@/components/product/ProductHero";
import ProductDetails from "@/components/product/ProductDetails";
import ProductSizes from "@/components/product/ProductSizes";
import ProductApplications from "@/components/product/ProductApplications";
import ProductCTA from "@/components/product/ProductCTA";

export const metadata: Metadata = {
  title: "Łata i Kontrłata - Konstrukcje Dachowe | Bielińscy Drewno",
  description: "Łata i kontrłata mokra/suszona. Konstrukcje dachowe, elewacje. 25x50, 40x60. Z impregnacją. Pomorze.",
  keywords: [
    "łata dachowa",
    "kontrłata",
    "łaty pod dachówkę",
    "ruszt elewacyjny",
    "łata suszona",
    "łata mokra",
    "drewno dachowe",
  ],
  openGraph: {
    title: "Łata i Kontrłata - Konstrukcje Dachowe | Bielińscy Drewno",
    description: "Łata i kontrłata mokra/suszona. Konstrukcje dachowe i elewacje wentylowane. Realizacja 3 dni.",
    url: "https://bielinscy-drewno.pl/produkty/lata-kontrlata",
    type: "website",
  },
  alternates: {
    canonical: "https://bielinscy-drewno.pl/produkty/lata-kontrlata",
  },
};

const productData = {
  name: "Łata i kontrłata",
  category: "Konstrukcje dachowe i elewacyjne",
  tagline: "Mokra lub suszona - dopasuj do standardu projektu",
  description: "Podstawowe elementy konstrukcji dachowych i elewacyjnych. Dostępne jako mokra szorstka (standard budowlany) lub suszona strugana (standard premium). Różnica w cenie i stabilności wymiarowej.",
  
  features: [
    {
      title: "Dwa standardy",
      description: "Mokra szorstka lub suszona strugana - wybór wg potrzeb projektu"
    },
    {
      title: "Konstrukcje dachowe",
      description: "Łaty i kontrłaty pod dachówkę, blachę - równy rozstaw"
    },
    {
      title: "Elewacje wentylowane",
      description: "Ruszt pod deski elewacyjne i płyty HPL"
    },
    {
      title: "Stabilność",
      description: "Suszona = minimalna praca drewna, równe wymiary"
    }
  ],

// src/app/produkty/lata-kontrlata/page.tsx

sizes: [
  {
    size: "Kontrłata 25mmx50mm",
    specs: "sosna/świerk, wilgotność naturalna lub suszona",
    details: "Standardowa kontrłata dachowa, szczelina wentylacyjna",
    availability: "W magazynie - długości do 6m",
    image: "/Kontrłata 25mmx50mm.jpg"
  },
  {
    size: "Łata 40mmx60mm",
    specs: "sosna/świerk, wilgotność naturalna lub suszona",
    details: "Mocniejsza łata pod dachówkę, elewacje wentylowane",
    availability: "W magazynie - długości do 6m",
    image: "/Łata 40mmx60mm.jpg"
  },
  {
    size: "Łata strugana 40mmx60mmx4000mm",
    specs: "sosna/świerk, suszona, strugana 4 strony, wilgotność <18%",
    details: "Premium łata strugana, elewacje widoczne",
    availability: "W magazynie - 4m",
    image: "/Łata strugana 40mmx60mmx4000mm.jpg"
  },
  {
    size: "25x50mm standard",
    specs: "sosna/świerk, wilgotność naturalna",
    details: "Podstawowa łata/kontrłata ekonomiczna",
    availability: "Duże ilości od ręki"
  },
  {
    size: "32x50mm",
    specs: "sosna/świerk, wilgotność naturalna",
    details: "Wzmocniona wersja standardowej łaty",
    availability: "W magazynie - długości do 6m"
  },
  {
    size: "38x63mm",
    specs: "sosna/świerk, wilgotność naturalna",
    details: "Mocna łata pod ciężkie pokrycia",
    availability: "W magazynie - długości do 6m"
  },
  {
    size: "50x50mm",
    specs: "sosna/świerk, wilgotność naturalna",
    details: "Kwadratowa łata, konstrukcje szkieletowe",
    availability: "W magazynie - długości do 6m"
  }
],

  applications: [
    {
      icon: "🏠",
      title: "Dachy - standard i premium",
      items: [
        "Łaty dachowe pod dachówkę",
        "Kontrłaty - szczelina wentylacyjna",
        "Dachy energooszczędne"
      ]
    },
    {
      icon: "🎨",
      title: "Elewacje wentylowane",
      items: [
        "Ruszt pod deski elewacyjne",
        "Konstrukcja pod płyty HPL",
        "Stabilność i estetyka"
      ]
    },
    {
      icon: "✨",
      title: "Zabudowy precyzyjne",
      items: [
        "Sufity drewniane",
        "Lekkie stelaże",
        "Projekty DIY"
      ]
    }
  ],

  advantages: [
    "Niska cena (mokra szorstka)",
    "Stabilność wymiarowa (suszona strugana)",
    "Łatwy i szybki montaż",
    "Szeroka dostępność",
    "Dobra przyczepność (mokra szorstka)"
  ],

  limitations: [
    "Mokra paczy podczas schnięcia",
    "Suszona wymaga impregnacji na zewnątrz",
    "Wyższa cena (suszona)"
  ],

  practicalTip: {
    title: "💡 Który standard wybrać?",
    content: "Dach standard + element niewidoczny → mokra szorstka (tańsza, wystarczająca). Poddasze użytkowe + precyzja montażu → suszona strugana (nie pracuje, równe wymiary). W dachach energooszczędnych i z GK zawsze wybieraj suszoną!"
  }
};

export default function LataKontrlataPage() {
  return (
    <main>
      <ProductHero 
  name={productData.name}
  tagline={productData.tagline}
  description={productData.description}
  image="/lata.jpg"
/>
      <ProductDetails product={productData} />
      <ProductSizes sizes={productData.sizes} />
      <ProductApplications applications={productData.applications} />
      <ProductCTA productName={productData.name} />
    </main>
  );
}
