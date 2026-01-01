"use client";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown, Check } from "lucide-react";

const trustBadges = [
  "Dostawa w 3 dni",
  "Kontrola jakości przed wysyłką",
  "Prawdziwa impregnacja",
  "Płatność kartą",
  "Bezpłatne doradztwo",
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-cream">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(43, 102, 80, 0.15) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(76, 59, 52, 0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content - FULL WIDTH */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse-soft" />
            Od 2013 roku
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[2.5rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-78xl font-bold leading-[1.1] mb-8"
          >
            <span className="text-brand-green">Drewno budowlane na czas</span>
            <br />
            <span className="text-brand-brown">Jakość, która nie zawiedzie</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-brand-brown/70 mb-4 max-w-6xl mx-auto leading-relaxed"
          >
            Proste deski, prawdziwa impregnacja ciśnieniowa, wymiary zgodne z
            zamówieniem.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg lg:text-xl text-brand-brown/60 mb-12"
          >
            Realizacja w 3 dni z własnym transportem.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4"
          >
            <a
              href="tel:+48XXXXXXXXX"
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 text-lg px-8 py-4 group"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              <span>Zadzwoń - wycena od ręki</span>
            </a>
            <a
              href="https://wa.me/48XXXXXXXXX"
              className="btn-whatsapp w-full sm:w-auto flex items-center justify-center gap-3 text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Napisz na WhatsApp</span>
            </a>
          </motion.div>

          {/* Tertiary CTA */}
          <motion.a
            href="#sortament"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-2 text-brand-brown/60 hover:text-brand-green font-medium transition-colors group mb-8"
          >
            <span>Zobacz asortyment</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </motion.a>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-xl border border-brand-brown/10 shadow-sm"
              >
                <Check className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span className="text-sm md:text-base text-brand-brown/80 whitespace-nowrap">
                  {badge}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-brand-brown/40 uppercase tracking-wider">
          Przewiń
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-brand-brown/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-brand-brown/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}