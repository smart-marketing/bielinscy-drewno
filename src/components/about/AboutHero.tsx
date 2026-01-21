"use client";
import { motion } from "framer-motion";
import { MapPin, Calendar, Award, TrendingUp } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-green to-brand-green/90 text-white pt-36 pb-16">
      {/* Animated Background Blobs */}
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
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-2"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="font-semibold text-sm">Od 2013 roku dostarczamy drewno z głową</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-[1.1]"
          >
            Rodzinny skład drewna
            <br />
            <span className="text-white/90">z Pomorza</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 text-center mb-16 leading-relaxed max-w-3xl mx-auto px-4"
          >
            Dostarczamy drewno budowlane szybko, uczciwie i z głową.
            <br className="hidden sm:block" />
            Dokładnie tak, jak sami chcielibyśmy je kupować.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">12+</div>
              <div className="text-sm sm:text-base text-white/80">lat doświadczenia</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">1000+</div>
              <div className="text-sm sm:text-base text-white/80">dostaw rocznie</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">5 min</div>
              <div className="text-sm sm:text-base text-white/80">od A1</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">100%</div>
              <div className="text-sm sm:text-base text-white/80">kontrola jakości</div>
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
