import type { Metadata } from "next";
import ProductHero from "@/components/product/ProductHero";
import ProductDetails from "@/components/product/ProductDetails";
import ProductSizes from "@/components/product/ProductSizes";
import ProductApplications from "@/components/product/ProductApplications";
import ProductCTA from "@/components/product/ProductCTA";

export const metadata: Metadata = {
  title: "Kantówka Mokra Szorstka - Konstrukcje | Bielińscy Drewno",
  description:
    "Kantówka mokra szorstka sosna/świerk. Więźby dachowe, konstrukcje gospodarcze. Wymiary 40x140-140x140. Z impregnacją. Realizacja 3 dni. Mirotki.",
  keywords: [
    "kantówka mokra",
    "kantówka budowlana",
    "więźba dachowa",
    "drewno konstrukcyjne",
    "kantówka impregnowana",
    "drewno mokre cena",
  ],
  openGraph: {
    title: "Kantówka Mokra Szorstka | Bielińscy Drewno",
    url: "https://bielinscy-drewno.pl/produkty/kantowka-mokra-szorstka",
    type: "website",
  },
  alternates: {
    canonical: "https://bielinscy-drewno.pl/produkty/kantowka-mokra-szorstka",
  },
};

const productData = {
  name: "Kantówka mokra szorstka",
  category: "Materiał konstrukcyjno-techniczny",
  tagline: "Niesuszona, nieheblowana - najlepsza cena",
  description: "Kantówka mokra szorstka to materiał konstrukcyjno-techniczny, używany głównie tam, gdzie nie liczy się estetyka, a naturalna wilgotność i późniejsze wysychanie nie stanowią problemu. Idealna do więźb dachowych i konstrukcji gospodarczych.",
  
  features: [
    {
      title: "Najtańszy wariant",
      description: "Najbardziej ekonomiczny wybór kantówki na rynku"
    },
    {
      title: "Wysoka wytrzymałość",
      description: "Doskonała na konstrukcje nośne i pomocnicze"
    },
    {
      title: "Duże przekroje",
      description: "Dostępne wymiary do 140x140mm"
    },
    {
      title: "Z impregnacją",
      description: "Możliwość zamówienia z impregnacją"
    }
  ],

  // ⬇️⬇️⬇️ SIZES MUSI BYĆ TUTAJ - WEWNĄTRZ productData ⬇️⬇️⬇️
  sizes: [
    {
      size: "40mmx140mm",
      specs: "sosna/świerk, nieheblowana, wilgotność naturalna",
      details: "Płaska kantówka konstrukcyjna",
      availability: "W magazynie - długości 3-6m",
      image: "/Kantówka 40mmx140mm.jpg"
    },
    {
      size: "50mmx100mm",
      specs: "sosna/świerk, nieheblowana, wilgotność naturalna",
      details: "Belka konstrukcyjna, tarasy, pergole",
      availability: "W magazynie - długości 4-6m",
      image: "/Kantówka 50mmx100mm.jpg"
    },
    {
      size: "60mmx120mm",
      specs: "sosna/świerk, nieheblowana, wilgotność naturalna",
      details: "Mocniejsza belka, konstrukcje altany",
      availability: "W magazynie - długości 4-6m",
      image: "/Kantówka 60mmx120mm.jpg"
    },
    {
      size: "70mmx140mm",
      specs: "sosna/świerk, nieheblowana, wilgotność naturalna",
      details: "Gruba belka konstrukcyjna",
      availability: "W magazynie - długości 5-6m",
      image: "/Kantówka 70mmx140mm.jpg"
    },
    {
      size: "80mmx160mm",
      specs: "sosna/świerk, nieheblowana, wilgotność naturalna",
      details: "Bardzo mocna belka nośna",
      availability: "W magazynie - długości 5-6m",
      image: "/Kantówka 80mmx160mm.jpg"
    },
    {
      size: "80mmx180mm",
      specs: "sosna/świerk, nieheblowana, wilgotność naturalna",
      details: "Szeroka belka konstrukcyjna",
      availability: "W magazynie - długości 5-6m",
      image: "/Kantówka 80mmx180mm.jpg"
    },
    {
      size: "80mmx80mm",
      specs: "sosna/świerk, nieheblowana, wilgotność naturalna",
      details: "Kwadratowa kantówka, słupy",
      availability: "W magazynie - długości 3-6m",
      image: "/Kantówka 80mmx80mm.jpg"
    },
    {
      size: "100mmx100mm",
      specs: "sosna/świerk, nieheblowana, wilgotność naturalna",
      details: "Duża kantówka kwadratowa, słupy nośne",
      availability: "W magazynie - długości 4-6m",
      image: "/Kantówka 100mmx100mm.jpg"
    },
    {
      size: "120mmx120mm",
      specs: "sosna/świerk, nieheblowana, wilgotność naturalna",
      details: "Bardzo mocne słupy konstrukcyjne",
      availability: "Na zamówienie - 5-7 dni",
      image: "/Kantówka 120mmx120mm.jpg"
    },
    {
      size: "140mmx140mm",
      specs: "sosna/świerk, nieheblowana, wilgotność naturalna",
      details: "Największe słupy, konstrukcje ciężkie",
      availability: "Na zamówienie - 5-7 dni",
      image: "/Kantówka 140mmx140mm.jpg"
    },
    {
      size: "160mmx160mm",
      specs: "sosna/świerk, nieheblowana, wilgotność naturalna",
      details: "Słupy premium, konstrukcje specjalne",
      availability: "Na zamówienie - 7-10 dni",
      image: "/Kantówka 160mmx160mm.jpg"
    }
  ],
  // ⬆️⬆️⬆️ KONIEC SIZES ⬆️⬆️⬆️

  applications: [
    {
      icon: "🏗️",
      title: "Więźby dachowe",
      items: [
        "Krokwie, murłaty, jętki",
        "Belki pomocnicze",
        "Rygle i słupy konstrukcyjne"
      ]
    },
    {
      icon: "🔨",
      title: "Szalunki i konstrukcje tymczasowe",
      items: [
        "Szalunki pod beton",
        "Rusztowania pomocnicze",
        "Podpory, stemple"
      ]
    },
    {
      icon: "🏡",
      title: "Konstrukcje gospodarcze",
      items: [
        "Wiaty, drewutnie",
        "Altany gospodarcze",
        "Zagrody, kojce"
      ]
    },
    {
      icon: "🌾",
      title: "Rolnictwo",
      items: [
        "Stodoły, wiaty na sprzęt",
        "Boksy, przegrody",
        "Konstrukcje magazynowe"
      ]
    },
    {
      icon: "🪵",
      title: "Materiał do dalszej obróbki",
      items: [
        "Suszenie we własnym zakresie",
        "Późniejsze struganie",
        "Przecieranie na listwy"
      ]
    }
  ],

  advantages: [
    "Najtańszy wariant kantówki na rynku",
    "Wysoka wytrzymałość konstrukcyjna",
    "Doskonała dostępność",
    "Idealna do dużych przekrojów",
    "Możliwość impregnacji ciśnieniowej"
  ],

  limitations: [
    "Kurczy się i paczy podczas schnięcia",
    "Nie nadaje się na elementy wykończeniowe",
    "Ryzyko pęknięć w trakcie schnięcia",
    "Cięższa od suchej (wyższa wilgotność)",
    "Nie polecana do mebli i stelaży GK"
  ],

  practicalTip: {
    title: "⚠️ Ważne wskazówki montażowe",
    content: "Montuj na mokro, ale z zapasem luzów. Zawsze impregnuj (najlepiej zanurzeniowo lub ciśnieniowo). Do konstrukcji zamkniętych zostaw możliwość wentylacji. Jeśli ma być 'na gotowo' → wybierz kantówkę suchą struganą C24."
  }
}; // ← TUTAJ KOŃCZY SIĘ productData

export default function KantowkaMokraPage() {
  return (
    <main>
      <ProductHero 
  name={productData.name}
  tagline={productData.tagline}
  description={productData.description}
  image="/kantowka-mokra-szorstka.jpg"
/>
      <ProductDetails product={productData} />
      <ProductSizes sizes={productData.sizes} />
      <ProductApplications applications={productData.applications} />
      <ProductCTA productName={productData.name} />
    </main>
  );
}
