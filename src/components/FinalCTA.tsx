"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, Check } from "lucide-react";

const guarantees = [
  "Proste deski sprawdzone przed załadunkiem",
  "Prawdziwa impregnacja, która chroni na lata",
  "Wymiary zgodne z zamówieniem",
  "Realizacja w 2-3 dni, nie tygodnie",
];

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="kontakt"
      className="section-padding bg-gradient-to-br from-brand-green via-brand-green to-brand-green-dark relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-brown/10 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative">
        <div className="max-w-6xl mx-auto text-center">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Twoja budowa zasługuje na materiał,
            <br />
            <span className="text-cream">na którym można polegać</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/80 mb-8"
          >
            Od 2013 roku dostarczamy drewno setkom budów - od małych altan po
            duże konstrukcje dachowe. Nasze drewno stoi w dachach, tarasach,
            ogrodzeniach w całym regionie.
          </motion.p>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <p className="text-white/90 font-medium mb-6">Każda dostawa to:</p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {guarantees.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full"
                >
                  <Check className="w-4 h-4 text-cream flex-shrink-0" />
                  <span className="text-white text-sm md:text-base whitespace-nowrap">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-white font-medium mb-10"
          >
            Dołącz do klientów, którzy budują bez stresu i opóźnień.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+48XXXXXXXXX"
              className="group relative bg-white text-brand-green px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cream hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              <span>Zadzwoń teraz</span>
            </a>
            <a
              href="https://wa.me/48XXXXXXXXX"
              className="btn-whatsapp flex items-center justify-center gap-3 text-lg !px-8 !py-4"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Napisz WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
