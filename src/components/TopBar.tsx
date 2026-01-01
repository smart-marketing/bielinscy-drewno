"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function TopBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Pokaż tylko gdy scrollY < 50 (czyli prawie na samej górze)
      setIsVisible(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-brand-green text-white py-2 text-sm shadow-md"
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* Left side - Contact info */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <a
                  href="tel:+48537593186"
                  className="flex items-center gap-2 hover:text-cream transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span className="font-medium">537 593 186</span>
                </a>
                
                <a
                  href="https://wa.me/48537593186"
                  className="flex items-center gap-2 hover:text-cream transition-colors"
                >
                  <Image 
                    src="/whatsapp-svgrepo-com.svg" 
                    alt="WhatsApp" 
                    width={14} 
                    height={14}
                    className="brightness-0 invert"
                  />
                  <span className="font-medium hidden sm:inline">WhatsApp</span>
                </a>

                <a
                  href="mailto:biuro@bielinscydrewno.pl"
                  className="flex items-center gap-2 hover:text-cream transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span className="font-medium hidden md:inline">biuro@bielinscydrewno.pl</span>
                </a>
              </div>

              {/* Right side - Location */}
              <div className="flex items-center gap-2 text-white/90 hidden lg:flex">
                <MapPin className="w-3.5 h-3.5" />
                <span className="font-medium">Mirotki - na trasie A1 Gdańsk - Grudziądz</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}