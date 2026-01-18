import type { Metadata } from "next";
import ProductHero from "@/components/product/ProductHero";
import ProductDetails from "@/components/product/ProductDetails";
import ProductSizes from "@/components/product/ProductSizes";
import ProductApplications from "@/components/product/ProductApplications";
import ProductCTA from "@/components/product/ProductCTA";

export const metadata: Metadata = {
  title: "Deska Strugana Bez Pióro-Wpustu | Bielińscy Drewno",
  description: "Deska strugana czterostronnie. Meble, okładziny, DIY. 22x68-28x195mm. Sosna/świerk suszona. Pomorze.",
  keywords: [
    "deska strugana",
    "deska heblowana",
    "deska na meble",
    "okładzina drewniana",
    "deska DIY",
    "deska czterostronnie strugana",
  ],
  openGraph: {
    title: "Deska Strugana Bez Pióro-Wpustu | Bielińscy Drewno",
    description: "Uniwersalna deska strugana. Meble, okładziny, projekty DIY. Gładka powierzchnia, łatwa obróbka.",
    url: "https://bielinscy-drewno.pl/produkty/deska-strugana-bez-pioro-wpustu",
    type: "website",
  },
  alternates: {
    canonical: "https://bielinscy-drewno.pl/produkty/deska-strugana-bez-pioro-wpustu",
  },
};

const productData = {
  name: "Deska strugana bez pióro-wpustu",
  category: "Uniwersalny materiał",
  tagline: "Czterostronnie strugana - meble, okładziny, DIY",
  description: "Gładka, czterostronnie strugana deska z półokrągłymi krawędziami. To bardzo uniwersalny materiał, który sprawdzi się tam, gdzie nie trzeba łączyć desek na klik. Idealna do mebli, okładzin i projektów DIY.",
  
  features: [
    {
      title: "Gładka powierzchnia",
      description: "Czterostronnie strugana, bez drzazg - gotowa do użycia"
    },
    {
      title: "Łatwa obróbka",
      description: "Cięcie, frezowanie, wiercenie - idealna do prac stolarskich"
    },
    {
      title: "Uniwersalność",
      description: "Meble, okładziny, projekty DIY - większa swoboda kompozycji"
    },
    {
      title: "Wilgotność <16%",
      description: "Suszona komorowo, stabilna wymiarowo"
    }
  ],

  sizes: [
    {
      size: "22x68x4000",
      specs: "sosna, wilgotność <16%",
      details: "Strugana z 4 stron, prawa i lewa gładka",
      availability: "W magazynie"
    },
    {
      size: "22x90x4000",
      specs: "sosna, wilgotność <16%",
      details: "Strugana z 4 stron, prawa i lewa gładka",
      availability: "W magazynie"
    },
    {
      size: "22x120x4000",
      specs: "sosna, wilgotność <16%",
      details: "Strugana z 4 stron, prawa i lewa gładka",
      availability: "W magazynie"
    },
    {
      size: "18x145",
      specs: "sosna/świerk, wilgotność <16%",
      details: "Strugana z 4 stron, prawa i lewa gładka",
      availability: "Zapytaj o dostępną długość"
    },
    {
      size: "27x145",
      specs: "sosna/świerk, wilgotność <16%",
      details: "Strugana z 4 stron, prawa i lewa gładka",
      availability: "Zapytaj o dostępną długość"
    },
    {
      size: "28x120",
      specs: "sosna/świerk, wilgotność <16%",
      details: "Strugana z 4 stron, prawa i lewa gładka",
      availability: "Zapytaj o dostępną długość"
    },
    {
      size: "28x195",
      specs: "sosna/świerk, wilgotność <16%",
      details: "Strugana z 4 stron, prawa i lewa gładka",
      availability: "Zapytaj o dostępną długość"
    }
  ],

  applications: [
    {
      icon: "🪑",
      title: "Meble i zabudowy",
      items: [
        "Półki, regały, blaty robocze",
        "Ławki, stoły, siedziska",
        "Ramy łóżek, zagłówki"
      ]
    },
    {
      icon: "🏗️",
      title: "Elementy konstrukcyjne",
      items: [
        "Stelaże pod zabudowy",
        "Konstrukcje altan, wiat",
        "Wsporniki, poprzeczki"
      ]
    },
    {
      icon: "🎨",
      title: "Dekoracje i wykończenia",
      items: [
        "Okładziny ścienne (rustykalne, loftowe)",
        "Listwy ozdobne",
        "Ramki, panele DIY"
      ]
    },
    {
      icon: "🌳",
      title: "Zastosowania ogrodowe",
      items: [
        "Płoty i przęsła",
        "Skrzynie na rośliny",
        "Elementy małej architektury"
      ]
    },
    {
      icon: "🔧",
      title: "Projekty DIY",
      items: [
        "Skrzynki, organizery",
        "Zabawki drewniane",
        "Prototypy, modele"
      ]
    }
  ],

  advantages: [
    "Wysoka jakość obróbki - gładka, bez drzazg",
    "Łatwa w użyciu - od razu gotowa do montażu",
    "Stabilna wymiarowo - suszona komorowo",
    "Uniwersalna - nie wymaga łączenia na pióro-wpust",
    "Większa swoboda kompozycji w projektach"
  ],

  limitations: [
    "Nie nadaje się na podłogi (lepsze pióro-wpust)",
    "Nie na szczelne ściany bez widocznych przerw",
    "Wymaga impregnacji do użytku zewnętrznego",
    "Może pękać w miejscach narażonych na duże ruchy drewna"
  ],

  practicalTip: {
    title: "💡 Wskazówka praktyczna",
    content: "Jeśli planujesz użyć jej wewnątrz lub jako element widoczny - jest gotowa od razu! Do użytku zewnętrznego warto ją dodatkowo zabezpieczyć impregnatem lub olejować. Brak pióra-wpustu daje większą swobodę kompozycji - możesz układać deski jak chcesz, z dowolnymi przerwami."
  }
};

export default function DeskaStugganaaBezPage() {
  return (
    <main>
      <ProductHero product={productData} />
      <ProductDetails product={productData} />
      <ProductSizes sizes={productData.sizes} />
      <ProductApplications applications={productData.applications} />
      <ProductCTA productName={productData.name} />
    </main>
  );
}
