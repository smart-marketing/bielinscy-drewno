"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-brand-green via-brand-green/95 to-brand-green/90 relative overflow-hidden">
      {/* Animated Background Elements */}
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
        {/* Wood texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(90deg, white 0px, transparent 1px, transparent 40px)`
        }} />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Poznajmy się.
              <br />
              <span className="text-white/90">Zadzwoń, napisz, wpadnij.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4">
              Masz pytania o drewno? Projektujesz budowę i nie wiesz, od czego zacząć?
              <br className="hidden sm:block" />
              Pogadajmy. Doradzamy za darmo, bez zobowiązań.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {/* Phone */}
            <motion.a
              href="tel:+48537593186"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <Phone className="w-7 h-7 text-brand-green" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">Zadzwoń teraz</h3>
                  <p className="text-2xl font-bold text-white mb-1">537 593 186</p>
                  <p className="text-sm text-white/70">Pon-Pt 7:00-17:00, Sob 8:00-14:00</p>
                </div>
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
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <MessageCircle className="w-7 h-7 text-brand-green" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">Napisz na WhatsApp</h3>
                  <p className="text-lg text-white/90 mb-1">Najszybszy kontakt</p>
                  <p className="text-sm text-white/70">Odpowiadamy na bieżąco</p>
                </div>
                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:biuro@bielinscydrewno.pl"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <Mail className="w-7 h-7 text-brand-green" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">Wyślij maila</h3>
                  <p className="text-lg text-white/90 mb-1 break-all">biuro@bielinscydrewno.pl</p>
                  <p className="text-sm text-white/70">Odpowiadamy tego samego dnia</p>
                </div>
                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </div>
            </motion.a>

            {/* Visit */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-7 h-7 text-brand-green" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">Wpadnij do magazynu</h3>
                  <p className="text-lg text-white/90 mb-1">Mirotki, gm. Skórcz</p>
                  <p className="text-sm text-white/70">5 min od zjazdu Kopytowo z A1</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-center"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/20">
              <p className="text-white/90 text-lg">
                💬 <strong>Wypytuj nas przed zakupem</strong> - doradzamy za darmo, bez zobowiązań
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
