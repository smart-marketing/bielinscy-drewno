import type { Metadata } from "next";
import ProductHero from "@/components/product/ProductHero";
import ProductDetails from "@/components/product/ProductDetails";
import ProductSizes from "@/components/product/ProductSizes";
import ProductApplications from "@/components/product/ProductApplications";
import ProductCTA from "@/components/product/ProductCTA";

export const metadata: Metadata = {
  title: "Deska Tarasowa - Impregnowana | Bielińscy Drewno",
  description: "Deska tarasowa sosna/świerk. Antypoślizgowa, z impregnacją ciśnieniową brązową. 27x145, 28x145, 28x120. Pomorze.",
  keywords: [
    "deska tarasowa",
    "deska na taras",
    "deska impregnowana ciśnieniowo",
    "taras drewniany",
    "deska antypoślizgowa",
    "deska ryflowana",
  ],
  openGraph: {
    title: "Deska Tarasowa - Impregnowana | Bielińscy Drewno",
    description: "Wytrzymała deska tarasowa. Antypoślizgowa, z opcją impregnacji ciśnieniowej brązowej. Długa żywotność.",
    url: "https://bielinscy-drewno.pl/produkty/deska-tarasowa",
    type: "website",
  },
  alternates: {
    canonical: "https://bielinscy-drewno.pl/produkty/deska-tarasowa",
  },
};

const productData = {
  name: "Deska tarasowa",
  category: "Materiał zewnętrzny premium",
  tagline: "Antypoślizgowa, z opcją impregnacji ciśnieniowej",
  description: "Bardzo wytrzymały materiał, zaprojektowany do pracy na zewnątrz – odporny na wilgoć, zmiany temperatury i intensywne użytkowanie. Choć nazwa sugeruje taras, jej zastosowanie jest dużo szersze.",
  
  features: [
    {
      title: "Powierzchnia antypoślizgowa",
      description: "Ryflowanie zwiększa bezpieczeństwo i zmniejsza ryzyko poślizgu"
    },
    {
      title: "Odporna na warunki",
      description: "Wilgoć, temperatura, intensywne użycie - długa żywotność"
    },
    {
      title: "Impregnacja ciśnieniowa",
      description: "Opcja brązowa - prawdziwa ochrona na 15-25 lat"
    },
    {
      title: "Grubsza i mocniejsza",
      description: "Wyższa wytrzymałość niż zwykła deska"
    }
  ],

  sizes: [
    {
      size: "27x145 mm",
      specs: "sosna/świerk, wilgotność <16%",
      details: "Prawa i lewa strona ryflowana (obustronna)",
      availability: "Z impregnacją ciśnieniową brązową lub bez - zapytaj o długość"
    },
    {
      size: "28x145x4000 mm",
      specs: "sosna/świerk, wilgotność <16%",
      details: "Prawa ryflowana, lewa gładka",
      availability: "Z impregnacją ciśnieniową brązową lub bez - zapytaj o długość"
    },
    {
      size: "28x120 mm",
      specs: "sosna/świerk, wilgotność <16%",
      details: "Prawa ryflowana, lewa gładka",
      availability: "Z impregnacją ciśnieniową brązową lub bez - zapytaj o długość"
    }
  ],

  applications: [
    {
      icon: "🏡",
      title: "Tarasy i balkony",
      items: [
        "Tarasy przydomowe - najpopularniejsze",
        "Balkony i loggie",
        "Patio, werandy"
      ]
    },
    {
      icon: "🌳",
      title: "Ogród i przestrzeń wokół domu",
      items: [
        "Ścieżki ogrodowe",
        "Pomosty, kładki, dojścia do basenu",
        "Obrzeża oczek wodnych"
      ]
    },
    {
      icon: "🪜",
      title: "Schody i podesty zewnętrzne",
      items: [
        "Stopnie schodów ogrodowych",
        "Podesty wejściowe",
        "Rampy - antypoślizg"
      ]
    },
    {
      icon: "🛋️",
      title: "Elementy małej architektury",
      items: [
        "Ławki, siedziska",
        "Skrzynie, donice",
        "Obudowy jacuzzi, balii"
      ]
    },
    {
      icon: "✨",
      title: "Nietypowe zastosowania",
      items: [
        "Elewacje wentylowane",
        "Obudowy tarasów i cokołów",
        "Nowoczesne ogrodzenia"
      ]
    }
  ],

  advantages: [
    "Grubsza i mocniejsza niż zwykła deska",
    "Antypoślizgowa powierzchnia - bezpieczeństwo",
    "Długa żywotność (szczególnie impregnowana ciśnieniowo)",
    "Dostępna impregnacja ciśnieniowa brązowa",
    "Dobrze znosi wilgoć i kontakt z gruntem"
  ],

  limitations: [
    "Zawsze montaż na legarach - nie bezpośrednio na gruncie",
    "Zachować szczeliny dylatacyjne",
    "Drewno naturalne wymaga olejowania",
    "Dobra wentylacja od spodu = dłuższa trwałość"
  ],

  practicalTip: {
    title: "✨ BARDZO WAŻNE!",
    content: "Montaż ZAWSZE na legarach - nigdy bezpośrednio na gruncie! Zachowaj szczeliny dylatacyjne między deskami (5-8mm). Dobra wentylacja od spodu to klucz do długiej trwałości. DOSTĘPNA IMPREGNACJA CIŚNIENIOWA NA KOLOR BRĄZOWY - prawdziwa ochrona na lata, nie kosmetyczny barwnik!"
  }
};

export default function DeskaTarasowaPage() {
  return (
    <main>
      <ProductHero 
  name={productData.name}
  tagline={productData.tagline}
  description={productData.description}
  image="/deska-tarasowa.jpg"
/>
      <ProductDetails product={productData} />
      <ProductSizes sizes={productData.sizes} />
      <ProductApplications applications={productData.applications} />
      <ProductCTA productName={productData.name} />
    </main>
  );
}
