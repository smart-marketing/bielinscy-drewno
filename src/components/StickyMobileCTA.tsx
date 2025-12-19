"use client";
import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="sticky-cta-mobile"
        >
          <div className="flex gap-3">
            <a
              href="tel:+48XXXXXXXXX"
              className="flex-1 btn-primary flex items-center justify-center gap-2 !py-3"
            >
              <Phone className="w-5 h-5" />
              <span>Zadzwoń</span>
            </a>
            <a
              href="https://wa.me/48XXXXXXXXX"
              className="flex-1 btn-whatsapp flex items-center justify-center gap-2 !py-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
