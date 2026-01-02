"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function OfferCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-brand-green via-brand-green/95 to-brand-green/90 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, 50, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Gotowy do zamówienia?
              <br />
              <span className="text-white/90">Porozmawiajmy o Twoim projekcie</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto px-4">
              Wycena w 24h, realizacja w 2-3 dni, dostawa własnym transportem.
              <br className="hidden sm:block" />
              Zadzwoń, napisz - odpowiadamy od ręki.
            </p>
          </motion.div>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            {/* Phone */}
            <motion.a
              href="tel:+48537593186"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Phone className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Zadzwoń teraz</h3>
                <p className="text-2xl font-bold text-white mb-1">537 593 186</p>
                <p className="text-sm text-white/70 mb-4">Pon-Pt 7-17, Sob 8-14</p>
                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/48537593186"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <MessageCircle className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                <p className="text-lg text-white/90 mb-1">Najszybszy kontakt</p>
                <p className="text-sm text-white/70 mb-4">Odpowiadamy na bieżąco</p>
                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </div>
            </motion.a>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-white/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Wycena w 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Realizacja 2-3 dni</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Własny transport</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Płatność kartą</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
