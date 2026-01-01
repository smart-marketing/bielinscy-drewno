import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import Products from "@/components/Products";

export const metadata = {
  title: "Oferta - Drewno Budowlane | Bielińscy Drewno",
  description: "Pełna oferta drewna budowlanego: tarcica konstrukcyjna, więźby dachowe, kantówka, deski impregnowane. Realizacja w 3 dni, własny transport.",
};

export default function OfertaPage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      
      <main className="mt-[120px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-green to-brand-green/90 text-white py-20 md:py-28">
          <div className="container-wide text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nasza Oferta
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Kompleksowa dostawa drewna budowlanego dla Twojego projektu
            </p>
          </div>
        </section>

        <Products />

        {/* CTA Section */}
        <section className="bg-cream py-16">
          <div className="container-wide text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-brown mb-6">
              Potrzebujesz wyceny?
            </h2>
            <p className="text-lg text-brand-brown/70 mb-8">
              Zadzwoń lub napisz - odpowiadamy od ręki
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
        </section>
      </main>

      <Footer />
    </div>
  );
}