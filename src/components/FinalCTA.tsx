"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Check, Sparkles } from "lucide-react";
import Image from "next/image";

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
      className="py-16 md:py-20 bg-gradient-to-br from-brand-green via-brand-green/95 to-brand-green/90 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
            transition={{ duration: 1.5, delay: i * 0.2 }}
            className="absolute bg-white rounded-full blur-3xl"
            style={{
              width: `${250 + i * 80}px`,
              height: `${250 + i * 80}px`,
              top: `${15 + i * 25}%`,
              right: `${5 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-6"
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            <span>Od 2013 roku - setki zadowolonych klientów</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            Twoja budowa zasługuje na materiał,
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-cream inline-block relative mt-2"
            >
              na którym można polegać
              <motion.span
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-cream/50 rounded-full"
              />
            </motion.span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Dostarczamy drewno setkom budów - od małych altan po duże konstrukcje dachowe. 
            Nasze drewno stoi w dachach, tarasach i ogrodzeniach w całym regionie.
          </motion.p>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <p className="text-white/90 font-semibold mb-5 text-sm md:text-base">Każda dostawa to gwarancja:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {guarantees.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg"
                >
                  <div className="w-5 h-5 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-brand-brown font-semibold text-xs md:text-sm">
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
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-white font-bold mb-8"
          >
            Dołącz do klientów, którzy budują bez stresu i opóźnień.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+48537593186"
              className="group relative bg-white text-brand-green px-8 py-4 rounded-2xl font-bold text-base md:text-lg hover:bg-cream hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              <span>Zadzwoń: 537 593 186</span>
            </a>
            <a
              href="https://wa.me/48537593186"
              className="group relative bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-base md:text-lg hover:bg-[#128C7E] hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Image 
                src="/whatsapp-svgrepo-com.svg" 
                alt="WhatsApp" 
                width={20} 
                height={20}
                className="brightness-0 invert"
              />
              <span>WhatsApp: 537 593 186</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}