"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Info } from "lucide-react";
import Image from "next/image";

export default function ProductListing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      image: "/tarcica.jpg",
      category: "Konstrukcje",
      title: "Tarcica konstrukcyjna",
      description: "Podstawa każdej budowy - więźby, deskowanie, łaty, konstrukcje",
      features: [
        "Sosna, świerk - klasa C24",
        "Mokra, suszona, strugana",
        "Pełen zakres wymiarów",
        "Cięcie na wymiar"
      ],
      applications: "Więźby dachowe, deskowanie, łaty, konstrukcje drewniane",
      popular: true
    },
    {
      image: "/wiezba.jpg",
      category: "Konstrukcje",
      title: "Więźby dachowe",
      description: "Kompletne konstrukcje dachowe - od projektu po montaż",
      features: [
        "Projekt konstrukcji",
        "Wycena + materiał",
        "Przekroje pod obciążenia",
        "Możliwość montażu"
      ],
      applications: "Domy jednorodzinne, garaże, wiaty, hale",
      popular: true
    },
    {
      image: "/drewno-impregnowane.jpg",
      category: "Zewnętrzne",
      title: "Deski impregnowane",
      description: "Prawdziwa impregnacja ciśnieniowa - nie barwnik kosmetyczny",
      features: [
        "Klasa użytkowa 3 i 4",
        "Impregnacja ciśnieniowa",
        "Trwałość 15-25 lat",
        "Różne grubości i szerokości"
      ],
      applications: "Tarasy, ogrodzenia, elewacje, konstrukcje ogrodowe",
      popular: true
    },
    {
      image: "/kantowka.jpg",
      category: "Uniwersalne",
      title: "Kantówka",
      description: "Od małych projektów po duże konstrukcje",
      features: [
        "Wymiary od 38x38 do 200x200",
        "Mokra, suszona, impregnowana",
        "Strugana na zamówienie",
        "Cięcie na wymiar"
      ],
      applications: "Ogrodzenia, altany, pergole, konstrukcje ogrodowe"
    },
    {
      category: "Wykończenie",
      title: "Deski tarasowe",
      description: "Naturalne piękno drewna pod stopami",
      features: [
        "Sosna, modrzew, egzotyczne",
        "Gładkie lub ryflowane",
        "Impregnowane lub naturalne",
        "Systemy montażowe"
      ],
      applications: "Tarasy przydomowe, pomosty, ścieżki ogrodowe"
    },
    {
      category: "Wykończenie",
      title: "Lambriowanie",
      description: "Wykończenie ścian i sufitów",
      features: [
        "Sosna, świerk skandynawski",
        "Klasy A, B",
        "Różne profile",
        "Możliwość bejcowania"
      ],
      applications: "Ściany, sufity, elewacje wewnętrzne"
    },
    {
      category: "Wykończenie", 
      title: "Deski podłogowe",
      description: "Klasyka, która nigdy się nie nudzi",
      features: [
        "Sosna, dąb, jesion",
        "Grubości 20-40mm",
        "Układanie na zamówienie",
        "Możliwość cyklinowania"
      ],
      applications: "Podłogi mieszkalne, restauracje, obiekty użyteczności"
    },
    {
      category: "Dodatki",
      title: "Listwy, profile, akcesoria",
      description: "Wykończenie każdego projektu",
      features: [
        "Listwy przypodłogowe",
        "Profile ozdobne",
        "Śruby, wkręty, łączniki",
        "Środki do impregnacji"
      ],
      applications: "Wykończenie, montaż, konserwacja"
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--brand-brown) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-brown mb-6">
            Co możemy dla Ciebie
            <br className="sm:hidden" /> <span className="text-brand-green">przygotować?</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-brown/70 max-w-2xl mx-auto px-4">
            Kompleksowy asortyment drewna budowlanego - od konstrukcji po wykończenie
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="h-full bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-brand-green/20 flex flex-col">
                {/* Image - only if exists */}
                {product.image && (
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Popular Badge */}
                    {product.popular && (
                      <div className="absolute top-4 right-4 bg-brand-green text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        POPULARNE
                      </div>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  {/* Category */}
                  <div className="text-xs font-bold text-brand-green uppercase tracking-wider mb-2">
                    {product.category}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl font-bold text-brand-brown mb-3 group-hover:text-brand-green transition-colors">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-brown/70 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-4 flex-grow">
                    <div className="text-sm font-semibold text-brand-brown mb-2 flex items-center gap-2">
                      <Info className="w-4 h-4 text-brand-green" />
                      <span>Co oferujemy:</span>
                    </div>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-brand-brown/80">
                          <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div className="pt-4 border-t border-brand-green/10">
                    <div className="text-xs font-semibold text-brand-brown/60 mb-1">
                      Zastosowanie:
                    </div>
                    <div className="text-sm text-brand-brown/70">
                      {product.applications}
                    </div>
                  </div>
                </div>

                {/* Hover Line */}
                <div className="h-1.5 bg-gradient-to-r from-brand-green to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-brand-green/10 via-transparent to-brand-green/10 px-8 py-6 rounded-2xl">
            <p className="text-lg md:text-xl font-semibold text-brand-brown">
              Nie znalazłeś czego szukasz?
            </p>
            <a 
              href="tel:+48537593186"
              className="inline-flex items-center gap-2 bg-brand-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-green/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Zadzwoń - pomożemy: 537 593 186</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
