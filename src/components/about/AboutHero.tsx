"use client";
import { motion } from "framer-motion";
import { Calendar, Truck, MapPin, Clock } from "lucide-react";

export default function AboutHero() {
  const stats = [
    { icon: Calendar, value: "12", label: "lat na rynku" },
    { icon: Truck, value: "Setki", label: "dostaw rocznie" },
    { icon: MapPin, value: "5 min", label: "od A1" },
    { icon: Clock, value: "2-3 dni", label: "realizacja" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white pt-24 md:pt-32">
      {/* Subtle animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(43, 102, 80, 0.08)" }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(76, 59, 52, 0.06)" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: "rgba(43, 102, 80, 0.1)", color: "#2B6650" }}
          >
            <span 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#2B6650" }}
            />
            Od 2013 roku
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)", color: "#4C3B34" }}
          >
            Bielińscy Drewno –{" "}
            <span style={{ color: "#2B6650" }}>
              skład budowlany, który działa jak w XXI wieku
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Od 2013 roku dostarczamy drewno budowlane na Pomorzu i Kujawach. 
            Szybko, uczciwie, z głową. Bez czekania, bez wykrętów, bez niespodzianek.
          </motion.p>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2" style={{ color: "#2B6650" }} />
                <div className="text-2xl md:text-3xl font-bold" style={{ color: "#4C3B34" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Region coverage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-3 text-sm text-gray-500"
          >
            <span className="px-3 py-1 rounded-full bg-gray-100">Gdańsk</span>
            <span className="px-3 py-1 rounded-full bg-gray-100">Grudziądz</span>
            <span className="px-3 py-1 rounded-full bg-gray-100">Toruń</span>
            <span className="px-3 py-1 rounded-full bg-gray-100">Bydgoszcz</span>
            <span className="px-3 py-1 rounded-full bg-gray-100">Olsztyn</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div 
          className="w-6 h-10 rounded-full flex justify-center pt-2"
          style={{ border: "2px solid rgba(43, 102, 80, 0.3)" }}
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#2B6650" }}
          />
        </div>
      </motion.div>
    </section>
  );
}