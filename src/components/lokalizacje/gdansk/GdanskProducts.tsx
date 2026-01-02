"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Phone } from "lucide-react";

export default function GdanskProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      title: "Więźby dachowe",
      description: "Kompletne konstrukcje dachowe dla domów w Gdańsku i okolicach",
      features: [
        "Projekt + materiał + wycena",
        "Przekroje dobrane pod obciążenia",
        "Możliwość montażu",
        "Dostawa na budowę w Gdańsku"
      ],
      popular: true
    },
    {
      title: "Tarcica konstrukcyjna",
      description: "Więźby, deskowanie, łaty - kompleksowa dostawa",
      features: [
        "Sosna, świerk klasa C24",
        "Mokra, suszona, strugana",
        "Pełen zakres wymiarów",
        "Dostawa do Gdańska ~1h"
      ],
      popular: true
    },
    {
      title: "Deski impregnowane",
      description: "Tarasy, ogrodzenia, elewacje dla domów w Trójmieście",
      features: [
        "Prawdziwa impregnacja ciśnieniowa",
        "Klasa użytkowa 3 i 4",
        "Trwałość 15-25 lat",
        "Idealne na nadmorski klimat"
      ],
      popular: true
    },
    {
      title: "Kantówka",
      description: "Altany, pergole, ogrodzenia - dla ogrodów Gdańska",
      features: [
        "Wymiary od 38x38 do 200x200",
        "Mokra, suszona, impregnowana",
        "Cięcie na wymiar",
        "Szybka dostawa do Gdańska"
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--brand-green) 1px, transparent 1px), linear-gradient(90deg, var(--brand-green) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
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
            Drewno budowlane
            <br className="sm:hidden" /> <span className="text-brand-green">dla Gdańska</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-brown/70 max-w-2xl mx-auto px-4">
            Od fundamentów po wykończenie - kompleksowa dostawa dla Twojej budowy
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-green/20 flex flex-col">
                {/* Popular Badge */}
                {product.popular && (
                  <div className="inline-block bg-brand-green text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 self-start">
                    POPULARNE W GDAŃSKU
                  </div>
                )}

                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-brown mb-3 group-hover:text-brand-green transition-colors">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-brand-brown/70 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-brand-brown/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Line */}
                <div className="h-1.5 bg-gradient-to-r from-brand-green to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-brand-green/10 via-transparent to-brand-green/10 px-8 py-6 rounded-2xl">
            <p className="text-lg md:text-xl font-semibold text-brand-brown">
              Budujesz w Gdańsku? Zadzwoń po wycenę
            </p>
            <a 
              href="tel:+48537593186"
              className="inline-flex items-center gap-2 bg-brand-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-green/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              <span>537 593 186</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
