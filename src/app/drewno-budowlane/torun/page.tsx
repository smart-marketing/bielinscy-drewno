import type { Metadata } from "next";
import { cities, generateCityMetadata } from "@/data/cities";
import CityHero from "@/components/city-landing/CityHero";
import CityWhy from "@/components/city-landing/CityWhy";
import CityProducts from "@/components/city-landing/CityProducts";
import CityLocation from "@/components/city-landing/CityLocation";
import CityCalculator from "@/components/city-landing/CityCalculator";
import CityForWho from "@/components/city-landing/CityForWho";
import CityFAQ from "@/components/city-landing/CityFAQ";
import CityFinalCTA from "@/components/city-landing/CityFinalCTA";

const CITY_SLUG = "torun";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = generateCityMetadata(CITY_SLUG);
  if (!metadata) {
    return { title: "Drewno Budowlane Toruń | Bielińscy Drewno" };
  }
  return metadata;
}

export default function TorunPage() {
  const cityData = cities[CITY_SLUG];

  return (
    <main className="overflow-hidden">
      <CityHero city={cityData} />
      <CityWhy city={cityData} />
      <CityProducts city={cityData} />
      <CityLocation city={cityData} />
      <CityCalculator city={cityData} />
      <CityForWho city={cityData} />
      <CityFAQ city={cityData} />
      <CityFinalCTA city={cityData} />
    </main>
  );
}