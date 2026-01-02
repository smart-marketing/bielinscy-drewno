"use client";
import { motion } from "framer-motion";
import { Package, Truck, Clock, CheckCircle } from "lucide-react";

export default function OfferHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-brand-green to-brand-green/90 text-white pt-32 pb-20">
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
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full">
              <Package className="w-4 h-4" />
              <span className="font-semibold text-sm">Pełna oferta drewna budowlanego</span>
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
            <span className="text-white/90">od A do Z</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 text-center mb-12 leading-relaxed max-w-3xl mx-auto px-4"
          >
            Od więźby dachowej po deski tarasowe - wszystko w jednym miejscu.
            <br className="hidden sm:block" />
            Realizacja w 2-3 dni, własny transport.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-2 text-white" />
              <div className="text-sm sm:text-base text-white/90 font-semibold">Kontrola jakości</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 text-center">
              <Clock className="w-8 h-8 mx-auto mb-2 text-white" />
              <div className="text-sm sm:text-base text-white/90 font-semibold">Realizacja 2-3 dni</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 text-center">
              <Truck className="w-8 h-8 mx-auto mb-2 text-white" />
              <div className="text-sm sm:text-base text-white/90 font-semibold">Własny transport</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 text-center">
              <Package className="w-8 h-8 mx-auto mb-2 text-white" />
              <div className="text-sm sm:text-base text-white/90 font-semibold">Pełny asortyment</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
