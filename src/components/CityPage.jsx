"use client";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Truck, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function CityPage({ city, region, distance, features }) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-green to-brand-green/90 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container-wide text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <MapPin className="w-4 h-4" />
            <span className="font-semibold">Dostawa do {city}</span>
          </motion.div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Drewno Budowlane {city}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-4">
            Tarcica, więźby dachowe, kantówka, deski impregnowane
          </p>
          <p className="text-lg text-white/80">
            Dostawa w {distance} • Realizacja w 3 dni
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="bg-gradient-to-br from-cream to-white rounded-3xl p-8 md:p-12 shadow-lg border-2 border-brand-green/10">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-brown mb-4">
                Zamów drewno do {city}
              </h2>
              <p className="text-brand-brown/70 text-lg">
                Zadzwoń teraz - wycena od ręki, dostawa w {distance}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+48537593186" className="btn-primary text-center">
                <Phone className="w-5 h-5 inline mr-2" />
                Zadzwoń: 537 593 186
              </a>
              <a href="https://wa.me/48537593186" className="btn-whatsapp text-center">
                <Image 
                  src="/whatsapp-svgrepo-com.svg" 
                  alt="WhatsApp" 
                  width={20} 
                  height={20}
                  className="brightness-0 invert inline mr-2"
                />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-cream">
        <div className="container-wide">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-brown text-center mb-12">
            Dlaczego warto zamówić u nas?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-brand-brown mb-2">{feature.title}</h3>
                <p className="text-brand-brown/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-brown text-center mb-12">
            Nasza oferta dla {city}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-cream rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-brand-brown mb-4">
                Drewno konstrukcyjne
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-brown/80">Tarcica sosnowa i świerkowa</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-brown/80">Więźby dachowe na wymiar</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-brown/80">Kantówka różne przekroje</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-brand-brown mb-4">
                Deski impregnowane
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-brown/80">Prawdziwa impregnacja ciśnieniowa</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-brown/80">Klasa użytkowa 3 i 4</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-brown/80">Proste deski, zgodne wymiary</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-brown mb-6">
                Blisko Twojej budowy
              </h2>
              <p className="text-brand-brown/70 text-lg mb-8">
                Nasz magazyn w Mirotkach to zaledwie {distance} od {city}. 
                Dowieziemy materiał własnym transportem lub możesz odebrać osobiście.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <Truck className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-brand-brown mb-1">Własny transport</h3>
                    <p className="text-brand-brown/70 text-sm">
                      Dowozimy w całym regionie, w tym do {city}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <Clock className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-brand-brown mb-1">Realizacja w 3 dni</h3>
                    <p className="text-brand-brown/70 text-sm">
                      Nie czekaj tygodniami - budujesz szybciej
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/Copy_Homepage"
                alt={`Mapa dojazdu - ${city}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-green text-white">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Gotowy na zamówienie?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Zadzwoń teraz - doradzamy bezpłatnie i realizujemy w 3 dni
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+48537593186" className="bg-white text-brand-green px-8 py-4 rounded-2xl font-bold hover:bg-cream transition-all">
              Zadzwoń: 537 593 186
            </a>
            <a href="https://wa.me/48537593186" className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#128C7E] transition-all">
              Napisz na WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}