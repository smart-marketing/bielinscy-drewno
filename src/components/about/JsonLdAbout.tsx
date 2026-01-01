export default function JsonLdAbout() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Bielińscy Drewno",
      "description": "Rodzinny skład drewna budowlanego na Pomorzu. Od 2013 roku dostarczamy drewno budowlane szybko, uczciwie i z głową.",
      "foundingDate": "2013",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mirotki",
        "addressRegion": "Pomorskie",
        "addressCountry": "PL"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Gdańsk"
        },
        {
          "@type": "City",
          "name": "Grudziądz"
        },
        {
          "@type": "City",
          "name": "Toruń"
        },
        {
          "@type": "City",
          "name": "Bydgoszcz"
        },
        {
          "@type": "City",
          "name": "Olsztyn"
        },
        {
          "@type": "City",
          "name": "Tczew"
        },
        {
          "@type": "City",
          "name": "Starogard Gdański"
        },
        {
          "@type": "City",
          "name": "Elbląg"
        },
        {
          "@type": "City",
          "name": "Malbork"
        },
        {
          "@type": "City",
          "name": "Kwidzyn"
        },
        {
          "@type": "City",
          "name": "Chojnice"
        }
      ],
      "knowsAbout": [
        "Drewno budowlane",
        "Tarcica konstrukcyjna",
        "Więźby dachowe",
        "Deski impregnowane",
        "Kantówka",
        "Impregnacja ciśnieniowa"
      ],
      "slogan": "Drewno dostarczamy tak, jakbyśmy kupowali je dla siebie"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Strona główna",
          "item": "https://bielinscy-drewno.pl"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "O nas",
          "item": "https://bielinscy-drewno.pl/o-nas"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
