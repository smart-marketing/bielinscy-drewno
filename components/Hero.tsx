"use client";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, Check } from "lucide-react";

export default function Hero() {
  const trustBadges = [
    "Dostawa w 3 dni",
    "Kontrola jakości przed wysyłką",
    "Prawdziwa impregnacja",
    "Płatność kartą",
    "Bezpłatne doradztwo",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-white pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-brand-brown/5 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-green mb-6 leading-tight"
          >
            Drewno budowlane na czas.
            <br />
            <span className="text-brand-brown">Jakość, która nie zawiedzie.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto leading-relaxed"
          >
            Proste deski, prawdziwa impregnacja ciśnieniowa, wymiary zgodne z zamówieniem.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base md:text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Realizacja w 3 dni z własnym transportem. Od 2013 roku.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            
              href="tel:+48XXXXXXXXX"
              className="group relative w-full sm:w-auto bg-brand-green text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-brand-green/90 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              <span>Zadzwoń - wycena od ręki</span>
            </a>

            
              href="https://wa.me/48XXXXXXXXX"
              className="group relative w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Napisz na WhatsApp</span>
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-brand-brown font-medium flex items-center justify-center gap-2 mx-auto hover:gap-4 transition-all duration-300 group mb-16"
          >
            <span>Zobacz sortament</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-2 text-sm md:text-base text-gray-700"
              >
                <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-brand-green" />
                </div>
                <span>{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-brand-green/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-brand-green rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}