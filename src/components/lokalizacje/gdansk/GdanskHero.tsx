"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, Truck, Phone, MessageCircle } from "lucide-react";

export default function GdanskHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-green to-brand-green/90 text-white pt-32 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full">
              <MapPin className="w-4 h-4" />
              <span className="font-semibold text-sm">Dostawa do Gdańska i okolic</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-[1.1]"
          >
            Drewno budowlane
            <br />
            <span className="text-white/90">Gdańsk</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 text-center mb-12 leading-relaxed max-w-3xl mx-auto px-4"
          >
            Tarcica, więźby dachowe, deski impregnowane - dostawa do Gdańska w ~1h.
            <br className="hidden sm:block" />
            Magazyn 5 min od A1, realizacja w 2-3 dni.
          </motion.p>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-3xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-white" />
              <div className="text-2xl font-bold mb-1">~1h</div>
              <div className="text-sm text-white/80">dostawa do Gdańska</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <Truck className="w-8 h-8 mx-auto mb-3 text-white" />
              <div className="text-2xl font-bold mb-1">2-3 dni</div>
              <div className="text-sm text-white/80">realizacja</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-white" />
              <div className="text-2xl font-bold mb-1">5 min</div>
              <div className="text-sm text-white/80">od A1</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="tel:+48537593186"
              className="group inline-flex items-center justify-center gap-3 bg-white text-brand-green px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white/95 transition-all shadow-2xl hover:shadow-white/20 hover:scale-105"
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>Zadzwoń: 537 593 186</span>
            </a>

            <a
              href="https://wa.me/48537593186"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-[#128C7E] transition-all shadow-2xl hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center"
          >
            <p className="text-white/60 text-sm mb-3">Obsługujemy również:</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90">Sopot</span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90">Gdynia</span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90">Pruszcz Gdański</span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90">Tczew</span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90">Starogard Gdański</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
