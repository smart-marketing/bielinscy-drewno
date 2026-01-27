"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, Check, ChevronLeft, ChevronRight } from "lucide-react";

// UWAGA: Dodaj wideo do /public/hero-video.mp4
// Możesz też dodać więcej zdjęć do array
const backgroundMedia = [
  { type: 'video', src: '/hero-video.mp4' }, // <-- WIDEO od klienta tutaj
  { type: 'image', src: '/drewno-impregnowane.jpg' },
  { type: 'image', src: '/kantowka.jpg' },
  { type: 'image', src: '/tarcica.jpg' },
  { type: 'image', src: '/wiezba.jpg' }
];

const socialProof = [
  "Realizacja w 2-3 dni",
  "1000+ dostaw rocznie",
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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % backgroundMedia.length
      );
    }, 6000); // 6 sekund na każdy slajd (wideo trwa swój czas i zapętla się)

    return () => clearInterval(interval);
  }, []);

  const currentMedia = backgroundMedia[currentIndex];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mt-[2px]">
      {/* Background Media Slider (WIDEO + ZDJĘCIA) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {currentMedia.type === 'video' ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ objectFit: 'cover' }}
              >
                <source src={currentMedia.src} type="video/mp4" />
              </video>
            ) : (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${currentMedia.src})`
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      </div>

{/* Navigation Arrows */}
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4">
  {/* Previous */}
  <button
    onClick={() => {
      setCurrentIndex((prev) => 
        prev === 0 ? backgroundMedia.length - 1 : prev - 1
      );
    }}
    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
    aria-label="Poprzedni slajd"
  >
    <ChevronLeft className="w-6 h-6 text-white" />
  </button>

  {/* Slide counter */}
  <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
    <span className="text-white font-semibold">
      {currentIndex + 1} / {backgroundMedia.length}
    </span>
  </div>

  {/* Next */}
  <button
    onClick={() => {
      setCurrentIndex((prev) => 
        (prev + 1) % backgroundMedia.length
      );
    }}
    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
    aria-label="Następny slajd"
  >
    <ChevronRight className="w-6 h-6 text-white" />
  </button>
</div>
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto sm:px-2 lg:px-2 py-4">
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center min-h-[calc(100vh-10px)]">
          
          {/* Badge */}
          <div className="flex justify-center mb-2 sm:mb-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
              Od 2013 roku
            </motion.div>
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 leading-[1.1] px-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Drewno budowlane na czas.
            <br />
            <span className="bg-gradient-to-r from-[#98d4bb] to-[#2B6650] bg-clip-text text-transparent">
              Jakość, która nie zawiedzie.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-5 sm:mb-6 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Proste deski, prawdziwa impregnacja ciśnieniowa, wymiary zgodne z zamówieniem.
          </motion.p>

          {/* CTAs - drugi telefon ukryty na mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4"
          >
            <a
              href="tel:+48537593186"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#2B6650] text-white rounded-xl font-semibold hover:bg-[#2B6650]/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base lg:text-lg"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>537 593 186</span>
            </a>
            {/* Drugi telefon - ukryty na mobile, widoczny od SM */}
            <a
              href="tel:+48695467337"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#4C3B34] text-white rounded-xl font-semibold hover:bg-[#4C3B34]/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base lg:text-lg"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>695 467 337</span>
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-6 mb-5 sm:mb-6 px-4"
          >
            {socialProof.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm rounded-lg py-2 px-2 sm:px-3 text-white text-[11px] sm:text-xs md:text-sm font-medium"
              >
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#98d4bb] flex-shrink-0" />
                <span className="leading-tight">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-xs md:text-sm text-white/80 px-4"
          >
            {trustBadges.map((badge, index) => (
              <span key={index} className="flex items-center gap-1">
                <span className="w-1 h-1 bg-[#98d4bb] rounded-full" />
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-20"
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