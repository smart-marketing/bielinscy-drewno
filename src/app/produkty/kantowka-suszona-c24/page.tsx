import type { Metadata } from "next";
import ProductHero from "@/components/product/ProductHero";
import ProductDetails from "@/components/product/ProductDetails";
import ProductSizes from "@/components/product/ProductSizes";
import ProductApplications from "@/components/product/ProductApplications";
import ProductCTA from "@/components/product/ProductCTA";

export const metadata: Metadata = {
  title: "Kantówka Suszona C24/KVH/BSH - Premium | Bielińscy Drewno",
  description: "Kantówka suszona C24/KVH/BSH. Domy szkieletowe, więźby premium, konstrukcje widoczne. 45x70-140x140. Pomorze.",
  keywords: [
    "kantówka C24",
    "kantówka suszona",
    "KVH",
    "BSH",
    "drewno konstrukcyjne",
    "dom szkieletowy",
    "kantówka klejona",
  ],
  openGraph: {
    title: "Kantówka Suszona C24/KVH/BSH | Bielińscy Drewno",
    description: "Wysokiej klasy drewno konstrukcyjne. Suche, stabilne, gotowe do montażu. Klasa C24.",
    url: "https://bielinscy-drewno.pl/produkty/kantowka-suszona-c24",
    type: "website",
  },
  alternates: {
    canonical: "https://bielinscy-drewno.pl/produkty/kantowka-suszona-c24",
  },
};

const productData = {
  name: "Kantówka suszona C24/KVH/BSH",
  category: "Drewno konstrukcyjne premium",
  tagline: "Suche, stabilne, gotowe do montażu",
  description: "Wysokiej klasy drewno konstrukcyjne, przeznaczone do nośnych, trwałych i estetycznych konstrukcji. Jest suche, stabilne wymiarowo i gotowe do montażu 'na gotowo'. Klasa C24 oznacza przewidywalną nośność akceptowaną w projektach budowlanych.",
  
  features: [
    {
      title: "Klasa C24",
      description: "Przewidywalna nośność - akceptowana w projektach konstrukcyjnych"
    },
    {
      title: "Suszona komorowo",
      description: "Wilgotność 12-18% - minimalna praca drewna"
    },
    {
      title: "Strugana",
      description: "Gotowa do użycia, gładka powierzchnia, nieostre krawędzie"
    },
    {
      title: "Mało pęknięć",
      description: "Stabilna wymiarowo, zgodna z normami budowlanymi"
    }
  ],

// src/app/produkty/kantowka-suszona-c24/page.tsx

sizes: [
  {
    size: "Kantówka C24",
    specs: "sosna/świerk, suszona komorowo, wilgotność 12-18%, klasa C24",
    details: "Wysokiej jakości drewno konstrukcyjne, strugane 4 strony, stabilne wymiarowo",
    availability: "Zapytaj o dostępne przekroje i długości",
    image: "/Kantówka C24.png"
  },
  {
    size: "45x70mm C24",
    specs: "sosna/świerk, wilgotność <18%, klasa wytrzymałości C24",
    details: "Najmniejszy przekrój suszonej kantówki",
    availability: "Na zamówienie - 5-7 dni"
  },
  {
    size: "45x95mm C24",
    specs: "sosna/świerk, wilgotność <18%, klasa wytrzymałości C24",
    details: "Konstrukcje szkieletowe, więźby lekkie",
    availability: "Na zamówienie - 5-7 dni"
  },
  {
    size: "45x120mm C24",
    specs: "sosna/świerk, wilgotność <18%, klasa wytrzymałości C24",
    details: "Krokwie, konstrukcje szkieletowe",
    availability: "Na zamówienie - 5-7 dni"
  },
  {
    size: "45x145mm C24",
    specs: "sosna/świerk, wilgotność <18%, klasa wytrzymałości C24",
    details: "Szersze krokwie, belki stropowe",
    availability: "Na zamówienie - 5-7 dni"
  },
  {
    size: "45x195mm C24",
    specs: "sosna/świerk, wilgotność <18%, klasa wytrzymałości C24",
    details: "Bardzo szeroka kantówka konstrukcyjna",
    availability: "Na zamówienie - 7-10 dni"
  },
  {
    size: "60x120mm C24",
    specs: "sosna/świerk, wilgotność <18%, klasa wytrzymałości C24",
    details: "Mocniejsza konstrukcja, większa nośność",
    availability: "Na zamówienie - 5-7 dni"
  },
  {
    size: "60x140mm C24",
    specs: "sosna/świerk, wilgotność <18%, klasa wytrzymałości C24",
    details: "Belki stropowe, konstrukcje widoczne",
    availability: "Na zamówienie - 7-10 dni"
  },
  {
    size: "100x100mm C24",
    specs: "sosna/świerk, wilgotność <18%, klasa wytrzymałości C24",
    details: "Kwadratowe słupy, belki nośne",
    availability: "Na zamówienie - 7-10 dni"
  },
  {
    size: "140x140mm C24",
    specs: "sosna/świerk, wilgotność <18%, klasa wytrzymałości C24",
    details: "Duże słupy konstrukcyjne premium",
    availability: "Na zamówienie - 10-14 dni"
  }
],

  applications: [
    {
      icon: "🏗️",
      title: "Konstrukcje nośne budynków",
      items: [
        "Domy szkieletowe - słupy, rygle, oczepy",
        "Stropy, belki nośne, podciągi",
        "Antresole, schody konstrukcyjne"
      ]
    },
    {
      icon: "🏠",
      title: "Więźby dachowe premium",
      items: [
        "Krokwie, płatwie, jętki",
        "Murłaty",
        "Sucha kantówka nie 'pracuje' jak mokra"
      ]
    },
    {
      icon: "✨",
      title: "Konstrukcje widoczne",
      items: [
        "Belki dekoracyjne we wnętrzach",
        "Słupy i ramy loftowe",
        "Zabudowy premium"
      ]
    },
    {
      icon: "🏡",
      title: "Konstrukcje zewnętrzne klasy premium",
      items: [
        "Pergole, altany, wiaty, carporty",
        "Konstrukcje tarasów - legary, słupy",
        "Po impregnacji bardzo trwała"
      ]
    },
    {
      icon: "🪑",
      title: "Meble i projekty stolarskie",
      items: [
        "Stoły, ławy, łóżka masywne",
        "Regały, ramy mebli",
        "Styl nowoczesny i industrialny"
      ]
    }
  ],

  advantages: [
    "Suszona komorowo (12%-18% wilgotności)",
    "Strugana - gotowa do użycia",
    "Mało pęknięć i skręceń",
    "Zgodna z normami budowlanymi",
    "Szybki montaż, precyzja wymiarowa"
  ],

  limitations: [
    "Droższa od mokrej - ale oszczędzasz na poprawkach",
    "Na zewnątrz zawsze impregnuj/olejuj",
    "Dobieraj przekrój do obciążeń wg projektu",
    "Wymaga prawidłowego składowania"
  ],

  practicalTip: {
    title: "⭐ Różnice C24 / KVH / BSH",
    content: "C24 - klasa wytrzymałości (drewno lite, suszone). KVH - drewno lite łączone na mikrowczepy, bardzo stabilne. BSH - drewno klejone warstwowo (GL24), najwyższa stabilność i nośność. KIEDY CO? Element długi/widoczny/mocno obciążony → BSH. Konstrukcje standardowe, ściany, stropy → C24/KVH. Zawsze konsultuj z konstruktorem!"
  }
};

export default function KantowkaSuszonaPage() {
  return (
    <main>
      <ProductHero 
  name={productData.name}
  tagline={productData.tagline}
  description={productData.description}
  image="/kantowka-c24-new.jpeg"
/>
      <ProductDetails product={productData} />
      <ProductSizes sizes={productData.sizes} />
      <ProductApplications applications={productData.applications} />
      <ProductCTA productName={productData.name} />
    </main>
  );
}
