export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://bielinscy-drewno.pl/#organization",
    name: "Bielińscy Drewno",
    alternateName: "Skład Drewna Bielińscy",
    description:
      "Skład drewna budowlanego w Mirotkach. Tarcica konstrukcyjna, więźby dachowe, deski impregnowane. Realizacja w 3 dni, własny transport.",
    url: "https://bielinscy-drewno.pl",
    telephone: "+48XXXXXXXXX",
    email: "kontakt@bielinscy-drewno.pl",
    foundingDate: "2013",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mirotki",
      addressLocality: "Skórcz",
      addressRegion: "pomorskie",
      postalCode: "83-220",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.6833,
      longitude: 18.5333,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    image: "https://bielinscy-drewno.pl/og-image.jpg",
    logo: "https://bielinscy-drewno.pl/logo.png",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://bielinscy-drewno.pl/#website",
    url: "https://bielinscy-drewno.pl",
    name: "Bielińscy Drewno",
    description: "Skład drewna budowlanego - Mirotki, Pomorze",
    publisher: {
      "@id": "https://bielinscy-drewno.pl/#organization",
    },
    inLanguage: "pl-PL",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
