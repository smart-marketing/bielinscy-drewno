"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, Calculator, CheckCircle2, ArrowRight, MapPin } from "lucide-react";
import type { CityData } from "@/data/cities";

interface CityFinalCTAProps {
  city: CityData;
}

export default function CityFinalCTA({ city }: CityFinalCTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-gradient-to-br from-brand-green via-brand-green/95 to-brand-green/90 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-white rounded-full blur-3xl"
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
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Zamów drewno budowlane
              <br />
              <span className="text-white/90">do {city.nameGenitive}</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-6">
              Przestań szukać „idealnego składu drewna w {city.name}".
              <br className="hidden sm:block" />
              <strong className="text-white">Znalazłeś go właśnie teraz.</strong>
            </p>
          </motion.div>

          {/* Benefits Grid - Mobile 2 cols, Desktop 2 cols */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-12 max-w-3xl mx-auto">
            {[
              "Jakość, którą możesz sprawdzić",
              "Dostawa, na którą możesz liczyć",
              "Ceny, które nie zrujnują budżetu",
              "Rodzinny biznes z sercem"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 md:p-5 rounded-2xl border border-white/20"
              >
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base font-medium leading-relaxed">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Main CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-4 mb-10 md:mb-12"
          >
            {/* Calculator CTA */}
            <a
              href="/kalkulator"
              className="group relative block bg-white text-brand-green p-6 md:p-8 rounded-3xl shadow-2xl hover:shadow-white/30 transition-all hover:-translate-y-1 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-green/10 to-transparent skew-x-12"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />

              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-center sm:text-left">
                  <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center">
                    <Calculator className="w-7 h-7 md:w-8 md:h-8 text-brand-green" />
                  </div>
                  <div>
                    <div className="font-display text-xl md:text-2xl font-bold mb-1">
                      Zacznij od Kalkulatora
                    </div>
                    <div className="text-brand-green/70 text-sm md:text-base">
                      Zobacz ile potrzebujesz i ile zapłacisz
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-brand-green/60 group-hover:text-brand-green group-hover:translate-x-2 transition-all" />
              </div>
            </a>

            {/* Phone & WhatsApp - Mobile Stack, Desktop Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="tel:+48537593186"
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/30 p-5 md:p-6 rounded-2xl hover:bg-white/20 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="text-left">
                    <div className="text-white/80 text-xs md:text-sm font-medium mb-1">
                      Zadzwoń teraz
                    </div>
                    <div className="text-lg md:text-xl font-bold">
                      537 593 186
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/48537593186"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-green-500/90 border-2 border-green-400/50 p-5 md:p-6 rounded-2xl hover:bg-green-500 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="text-left">
                    <div className="text-white/90 text-xs md:text-sm font-medium mb-1">
                      Napisz na
                    </div>
                    <div className="text-lg md:text-xl font-bold">
                      WhatsApp
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-center space-y-4"
          >
            <div className="flex items-center justify-center gap-2 text-white/80">
              <MapPin className="w-5 h-5" />
              <span className="text-sm md:text-base">
                Bielińscy Drewno – Mirotki k. Stargardu  ({city.driveTime} od centrum {city.nameGenitive})
              </span>
            </div>
            <p className="text-white/70 text-sm md:text-base">
              Obsługujemy: {city.name}, {city.region}
              {city.slug === 'gdansk' ? ', Sopot, Gdynia' : ' i okolice'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
