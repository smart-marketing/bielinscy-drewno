"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, Check } from "lucide-react";
import Image from 'next/image';

const backgroundImages = [
  '/drewno-impregnowane.jpg',
  '/kantowka.jpg',
  '/tarcica.jpg',
  '/wiezba.jpg'
];

const socialProof = [
  "Realizacja w 2-3 dni",
  "500+ dostaw rocznie",
  "12 lat doświadczenia",
  "Własny transport"
];

const trustBadges = [
  "Kontrola jakości przed wysyłką",
  "Prawdziwa impregnacja",
  "Proste deski",
  "Wycena od ręki",
  "Magazyn przy A1"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mt-[2px]">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`
            }}
          />
        </AnimatePresence>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto sm:px-2 lg:px-2 py-4">
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center min-h-[calc(100vh-10px)]">
          
          {/* Badge */}
          <div className="flex justify-center mb-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Od 2013 roku
            </motion.div>
          </div>

         {/* Headline */}
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.1 }}
  className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-4 text-white"
>
  Drewno budowlane z dostawą w 3 dni
  <br />
  <motion.span 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cream inline-block mt-2 relative"
  >
    <span className="relative z-10">Jakość sprawdzona przed wysyłką</span>
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute bottom-0 left-0 h-[3px] bg-green-600 rounded-full"
    />
  </motion.span>
</motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-white/90 mb-3 max-w-5xl mx-auto leading-relaxed"
          >
            Tarcica sosnowa i świerkowa, więźby dachowe, kantówka, deski impregnowane. 
            Proste deski, prawdziwa impregnacja ciśnieniowa, wymiary zgodne z zamówieniem (dawniej Tartak Mirotki)
          </motion.p>

          {/* Mini Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6"
          >
            {socialProof.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 text-white/90 text-sm md:text-base"
              >
                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-3"
          >
            <a
              href="tel:+48537593186"
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 group"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              <span>Zadzwoń - wycena od ręki: 537 593 186</span>
            </a>
            <a
              href="https://wa.me/48537593186"
              className="btn-whatsapp w-full sm:w-auto flex items-center justify-center gap-3 text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
            >
              <Image 
                src="/whatsapp-svgrepo-com.svg" 
                alt="WhatsApp" 
                width={20} 
                height={20}
                className="brightness-0 invert"
              />
              <span>Szybka wycena na WhatsApp</span>
            </a>
          </motion.div>

          {/* Tertiary CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#sortament"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors group mb-5"
            >
              <span>Zobacz asortyment</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1.5 rounded-xl border border-white/20 shadow-sm"
              >
                <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400 flex-shrink-0" />
                <span className="text-xs md:text-sm text-white whitespace-nowrap">
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
        <span className="text-xs text-white/60 uppercase tracking-wider">
          Przewiń
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}