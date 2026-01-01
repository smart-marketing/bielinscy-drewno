import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kalkulator Drewna | Bielińscy Drewno",
  description: "Oblicz ilość potrzebnego drewna budowlanego. Kalkulator online dla tarcicy, desek, kantówki.",
};

export default function KalkulatorPage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      
      <main className="mt-[120px]">
        <section className="bg-gradient-to-br from-brand-green to-brand-green/90 text-white py-20 md:py-28">
          <div className="container-wide text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Kalkulator Drewna
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Oblicz ile drewna potrzebujesz na swój projekt
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-wide max-w-4xl">
            <div className="bg-cream rounded-3xl p-8 md:p-12 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-brown mb-4">
                Skontaktuj się z nami
              </h2>
              <p className="text-brand-brown/70 mb-8">
                Nasi specjaliści pomogą Ci obliczyć dokładną ilość materiału potrzebnego do Twojego projektu
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+48537593186" className="btn-primary">
                  Zadzwoń: 537 593 186
                </a>
                <a href="https://wa.me/48537593186" className="btn-whatsapp">
                  Napisz na WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}