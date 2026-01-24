"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import type { CityData } from "@/data/cities";

interface CityHeroProps {
  city: CityData;
}

export default function CityHero({ city }: CityHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/drewno-tlo.jpeg')",
            backgroundPosition: "center 40%"
          }}
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 py-16">
        <div className="max-w-5xl mx-auto pt-15">
          
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-4"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Dostawa do {city.nameGenitive}</span>
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4 leading-tight"
          >
            Drewno Budowlane
            <br />
            {city.name}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-white/90 text-center mb-2 max-w-3xl mx-auto"
          >
            Zaledwie {city.driveTime} od centrum {city.nameGenitive}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm md:text-base text-white/80 text-center mb-8"
          >
            Dostawa w 2-3 dni • Bez pośredników • Gwarancja jakości
          </motion.p>

          {/* Produkty jako H2 */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-base md:text-lg font-bold text-white/90 text-center mb-8 max-w-3xl mx-auto"
          >
            Tarcica C24 • Więźba dachowa • Deski tarasowe • Kantówka • Łaty dachowe
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-8 max-w-2xl mx-auto"
          >
            <a
              href="tel:+48537593186"
              className="flex-1 sm:flex-none bg-white text-brand-green px-6 py-4 rounded-xl font-bold text-center hover:bg-white/90 transition-all shadow-xl"
            >
              <Phone className="inline w-5 h-5 mr-2" />
              537 593 186
            </a>

            <a
              href="https://wa.me/48537593186"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none bg-green-500 text-white px-6 py-4 rounded-xl font-bold text-center hover:bg-green-600 transition-all shadow-xl"
            >
              <MessageCircle className="inline w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </motion.div>

          {/* Trust Badges - Horizontal Scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="overflow-x-auto scrollbar-hide -mx-4 px-4"
          >
            <div className="flex gap-2 min-w-max justify-center">
              {[
                "Dostawa 2-3 dni",
                "Kontrola jakości",
                "Prawdziwa impregnacja",
                "Płatność kartą",
                "Bezpłatne doradztwo"
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20 whitespace-nowrap"
                >
                  <div className="w-1 h-1 rounded-full bg-white" />
                  <span className="text-xs font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}