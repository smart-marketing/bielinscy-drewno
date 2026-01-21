"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

interface ProductHeroProps {
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export default function ProductHero({ name, tagline, description, image }: ProductHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-bold border border-white/30 shadow-xl mb-8"
          >
            <span>🏗️</span>
            <span>Drewno budowlane premium</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-white/90 font-medium mb-8"
          >
            {tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
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
              className="group inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-[#128C7E] transition-all shadow-2xl hover:scale-105"
            >
              <Image
                src="/whatsapp-svgrepo-com.svg"
                alt="WhatsApp"
                width={24}
                height={24}
                className="brightness-0 invert"
              />
              <span>WhatsApp</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex items-center justify-center gap-8 text-white/70 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-green rounded-full" />
              <span>Dostępne od ręki</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-green rounded-full" />
              <span>Realizacja 2-3 dni</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-green rounded-full" />
              <span>Dostawa na budowę</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}