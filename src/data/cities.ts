// src/data/cities.ts
export interface CityData {
  slug: string;
  name: string;
  nameGenitive: string; // "Gdańska", "Torunia"
  region: string;
  distance: string;
  driveTime: string;
  nearbyDistricts?: string[]; // dzielnice/okolice
  specificInfo?: string; // dodatkowe info specyficzne dla miasta
  metaKeywords?: string[];
}

export const cities: Record<string, CityData> = {
  gdansk: {
    slug: "gdansk",
    name: "Gdańsk",
    nameGenitive: "Gdańska",
    region: "Pomorze i Trójmiasto",
    distance: "40 km",
    driveTime: "45 minut",
    nearbyDistricts: ["Wrzeszcz", "Oliwa", "Osowa", "Przymorze", "Siedlce", "Kokoszki", "Matarnia", "Sopot", "Gdynia"],
    specificInfo: "prostą trasą przez A1/S7",
    metaKeywords: ["drewno budowlane Gdańsk", "skład drewna Gdańsk", "tarcica Gdańsk", "więźba dachowa Gdańsk", "hurtownia drewna Gdańsk", "deski tarasowe Gdańsk", "kalkulator drewna Gdańsk"],
  },
  tczew: {
    slug: "tczew",
    name: "Tczew",
    nameGenitive: "Tczewa",
    region: "Pomorze",
    distance: "25 km",
    driveTime: "30 minut",
    nearbyDistricts: [],
    specificInfo: "przez A1",
    metaKeywords: ["drewno budowlane Tczew", "skład drewna Tczew", "tarcica Tczew", "więźba dachowa Tczew"],
  },
  starogard: {
    slug: "starogard",
    name: "Starogard Gdański",
    nameGenitive: "Starogardu Gdańskiego",
    region: "Pomorze",
    distance: "20 km",
    driveTime: "25 minut",
    nearbyDistricts: [],
    specificInfo: "bezpośrednio przy A1",
    metaKeywords: ["drewno budowlane Starogard", "skład drewna Starogard Gdański", "tarcica Starogard"],
  },
  grudziadz: {
    slug: "grudziadz",
    name: "Grudziądz",
    nameGenitive: "Grudziądza",
    region: "Kujawy",
    distance: "50 km",
    driveTime: "30 minut",
    nearbyDistricts: [],
    specificInfo: "przez A1",
    metaKeywords: ["drewno budowlane Grudziądz", "skład drewna Grudziądz", "tarcica Grudziądz"],
  },
  torun: {
    slug: "torun",
    name: "Toruń",
    nameGenitive: "Torunia",
    region: "Kujawy",
    distance: "80 km",
    driveTime: "60 minut",
    nearbyDistricts: [],
    specificInfo: "przez A1",
    metaKeywords: ["drewno budowlane Toruń", "skład drewna Toruń", "tarcica Toruń"],
  },
  bydgoszcz: {
    slug: "bydgoszcz",
    name: "Bydgoszcz",
    nameGenitive: "Bydgoszczy",
    region: "Kujawy",
    distance: "110 km",
    driveTime: "60 minut",
    nearbyDistricts: [],
    specificInfo: "przez A1",
    metaKeywords: ["drewno budowlane Bydgoszcz", "skład drewna Bydgoszcz", "tarcica Bydgoszcz"],
  },
  elblag: {
    slug: "elblag",
    name: "Elbląg",
    nameGenitive: "Elbląga",
    region: "Warmia i Mazury",
    distance: "70 km",
    driveTime: "90 minut",
    nearbyDistricts: [],
    specificInfo: "przez S7",
    metaKeywords: ["drewno budowlane Elbląg", "skład drewna Elbląg", "tarcica Elbląg"],
  },
  malbork: {
    slug: "malbork",
    name: "Malbork",
    nameGenitive: "Malborka",
    region: "Pomorze",
    distance: "35 km",
    driveTime: "45 minut",
    nearbyDistricts: [],
    specificInfo: "przez A1",
    metaKeywords: ["drewno budowlane Malbork", "skład drewna Malbork", "tarcica Malbork"],
  },
  kwidzyn: {
    slug: "kwidzyn",
    name: "Kwidzyn",
    nameGenitive: "Kwidzyna",
    region: "Pomorze",
    distance: "40 km",
    driveTime: "25 minut",
    nearbyDistricts: [],
    specificInfo: "przez A1",
    metaKeywords: ["drewno budowlane Kwidzyn", "skład drewna Kwidzyn", "tarcica Kwidzyn"],
  },
  olsztyn: {
    slug: "olsztyn",
    name: "Olsztyn",
    nameGenitive: "Olsztyna",
    region: "Warmia i Mazury",
    distance: "120 km",
    driveTime: "2h",
    nearbyDistricts: [],
    specificInfo: "przez S7",
    metaKeywords: ["drewno budowlane Olsztyn", "skład drewna Olsztyn", "tarcica Olsztyn"],
  },
  chojnice: {
    slug: "chojnice",
    name: "Chojnice",
    nameGenitive: "Chojnic",
    region: "Pomorze",
    distance: "90 km",
    driveTime: "90 minut",
    nearbyDistricts: [],
    specificInfo: "przez DK22",
    metaKeywords: ["drewno budowlane Chojnice", "skład drewna Chojnice", "tarcica Chojnice"],
  },
};

// Helper do generowania metadata
export function generateCityMetadata(citySlug: string) {
  const city = cities[citySlug];
  if (!city) return null;

  return {
    title: `Drewno Budowlane ${city.name} – Dostawa w 2-3 Dni z Mirotki | Bielińscy Drewno`,
    description: `Skład drewna ${city.driveTime} od ${city.nameGenitive}. Tarcica C24, więźby dachowe, kantówka, deski tarasowe. Dostawa 2-3 dni, kalkulator online. Tel: 537 593 186`,
    keywords: city.metaKeywords?.join(", ") || `drewno budowlane ${city.name}`,
    openGraph: {
      title: `Drewno Budowlane ${city.name} – Dostawa w 2-3 Dni | Bielińscy Drewno`,
      description: `Rodzinny skład drewna ${city.driveTime} od ${city.nameGenitive}. Tarcica C24, więźby, deski tarasowe. Kalkulator online, dostawa 2-3 dni.`,
      url: `https://bielinscy-drewno.pl/drewno-budowlane-${citySlug}`,
      type: "website",
      images: [
        {
          url: `/og-${citySlug}.jpg`,
          width: 1200,
          height: 630,
          alt: `Drewno Budowlane ${city.name} | Bielińscy Drewno`,
        },
      ],
    },
    alternates: {
      canonical: `https://bielinscy-drewno.pl/drewno-budowlane-${citySlug}`,
    },
  };
}
