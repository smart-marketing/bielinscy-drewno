import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import CityPage from "@/components/CityPage";

export const metadata = {
  title: "Drewno Budowlane Gdańsk - Dostawa w 45 minut | Bielińscy Drewno",
  description: "Drewno budowlane Gdańsk: tarcica, więźby dachowe, kantówka, deski impregnowane. Dostawa w 45 minut z Mirotek. Tel: 537 593 186",
};

const features = [
  {
    icon: "truck",
    title: "Dostawa 45 minut",
    description: "Własny transport z Mirotek do Gdańska"
  },
  {
    icon: "clock",
    title: "Realizacja 3 dni",
    description: "Nawet duże zamówienia"
  },
  {
    icon: "checkCircle",
    title: "Kontrola jakości",
    description: "Sprawdzamy przed wysyłką"
  },
  {
    icon: "phone",
    title: "Wycena od ręki",
    description: "Zadzwoń - doradzamy bezpłatnie"
  }
];

export default function DrewnoBudowlaneGdanskPage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      
      <main className="mt-[120px]">
        <CityPage 
          city="Gdańsk"
          region="Pomorze"
          distance="45 minut"
          features={features}
        />
      </main>

      <Footer />
    </div>
  );
}