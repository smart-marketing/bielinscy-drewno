import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Kontakt - Drewno Budowlane | Bielińscy Drewno",
  description: "Skontaktuj się z nami: tel. 537 593 186, email: biuro@bielinscydrewno.pl. Magazyn w Mirotkach przy A1.",
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      
      <main className="mt-[120px]">
        <section className="bg-gradient-to-br from-brand-green to-brand-green/90 text-white py-20 md:py-28">
          <div className="container-wide text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Kontakt
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Jesteśmy do Twojej dyspozycji
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-3xl font-bold text-brand-brown mb-6">
                    Skontaktuj się z nami
                  </h2>
                  <p className="text-brand-brown/70 mb-8">
                    Odpowiadamy na telefony, maile i WhatsApp. Doradzamy za darmo, bez zobowiązań.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-cream rounded-xl">
                    <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-brown mb-1">Telefon</h3>
                      <a href="tel:+48537593186" className="text-brand-green font-bold text-lg">
                        537 593 186
                      </a>
                      <p className="text-sm text-brand-brown/60 mt-1">Pon-Pt: 7:00-17:00, Sob: 8:00-14:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-cream rounded-xl">
                    <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-brown mb-1">Email</h3>
                      <a href="mailto:biuro@bielinscydrewno.pl" className="text-brand-green font-semibold">
                        biuro@bielinscydrewno.pl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-cream rounded-xl">
                    <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-brown mb-1">Adres</h3>
                      <p className="text-brand-brown/70">Mirotki</p>
                      <p className="text-brand-brown/70">gm. Skórcz, woj. pomorskie</p>
                      <p className="text-sm text-brand-brown/60 mt-1">Zjazd Kopytowo z A1</p>
                      <a 
                        href="https://maps.google.com/?q=Mirotki,Skórcz" 
                        target="_blank"
                        className="text-brand-green font-semibold text-sm mt-2 inline-block"
                      >
                        Zobacz na mapie →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/Copy_Homepage"
                    alt="Mapa dojazdu - Bielińscy Drewno Mirotki"
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}