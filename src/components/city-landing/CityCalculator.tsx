"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calculator, ArrowRight, Zap, DollarSign, Ruler } from "lucide-react";
import type { CityData } from "@/data/cities";

interface CityCalculatorProps {
  city: CityData;
}

export default function CityCalculator({ city }: CityCalculatorProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-12 md:py-20 bg-gradient-to-br from-brand-green via-brand-green/95 to-brand-green/90 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="container-wide px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 md:mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white/20 backdrop-blur-sm mb-6">
              <Calculator className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Kalkulator Drewna
              <br />
              <span className="text-white/90">Policz ile potrzebujesz</span>
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-3">
              Nie zgaduj na oko. Skorzystaj z naszego kalkulatora i w 2 minuty dowiesz się:
            </p>
          </motion.div>

          {/* Benefits Cards - Mobile Stack, Desktop Grid */}
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
            {[
              {
                icon: Ruler,
                text: "Ile m³ drewna potrzebuje Twoja budowa"
              },
              {
                icon: DollarSign,
                text: "Jaki będzie koszt materiału z dostawą"
              },
              {
                icon: Zap,
                text: "Jakie przekroje i długości będą optymalne"
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-white/20"
                >
                  <Icon className="w-8 h-8 md:w-10 md:h-10 mb-3" />
                  <p className="text-sm md:text-base font-medium leading-relaxed">
                    {benefit.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-white/80 mb-6 text-sm md:text-base">
              Kalkulator liczy wszystko: więźbę dachową, deski tarasowe, kantówkę, tarcicę
            </p>

            <motion.a
              href="/kalkulator"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-4 bg-white text-brand-green px-8 md:px-12 py-5 md:py-6 rounded-2xl font-bold text-lg md:text-xl shadow-2xl hover:shadow-white/30 transition-all relative overflow-hidden"
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
              
              <Calculator className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
              <span className="relative z-10">Przejdź do Kalkulatora Drewna</span>
              <ArrowRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-2 transition-transform relative z-10" />
            </motion.a>

            <p className="text-white/70 mt-6 text-xs md:text-sm">
              ⏱️ To zajmie tylko 120 sekund
            </p>
          </motion.div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 md:mt-12 text-center"
          >
            <p className="text-white/70 text-sm md:text-base">
              💡 Bezpłatny kalkulator online – żadnych logowań, instant wynik
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
