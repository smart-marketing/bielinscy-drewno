"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

interface ProductCTAProps {
  productName: string;
}

export default function ProductCTA({ productName }: ProductCTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-brand-green via-brand-green/95 to-brand-green/90 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-white rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.08, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Zainteresował Cię ten produkt?
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Zadzwoń lub napisz - doradzimy najlepsze rozwiązanie dla Twojego projektu.
              Wycena i doradztwo za darmo!
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {/* Phone */}
            <a
              href="tel:+48537593186"
              className="group relative overflow-hidden bg-white text-brand-green px-8 py-6 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all hover:scale-105 flex items-center justify-between"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-green/5 to-transparent skew-x-12"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />

              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center shadow-lg">
                    <Phone className="w-8 h-8 text-brand-green" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl bg-brand-green/50"
                  />
                </div>
                <div className="text-left">
                  <div className="text-sm text-brand-green/70 font-medium">Zadzwoń teraz</div>
                  <div className="text-2xl font-black text-brand-green">537 593 186</div>
                </div>
              </div>

              <ArrowRight className="w-6 h-6 text-brand-green/60 group-hover:text-brand-green group-hover:translate-x-2 transition-all" />
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/48537593186?text=${encodeURIComponent(`Dzień dobry! Chciałbym zapytać o ${productName}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-[#25D366] text-white px-8 py-6 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-green-500/20 transition-all hover:scale-105 flex items-center justify-between"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, delay: 1 }}
              />

              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shadow-lg backdrop-blur-sm">
                    <Image
                      src="/whatsapp-svgrepo-com.svg"
                      alt="WhatsApp"
                      width={32}
                      height={32}
                      className="brightness-0 invert"
                    />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="absolute inset-0 rounded-2xl bg-white/50"
                  />
                </div>
                <div className="text-left">
                  <div className="text-sm text-white/80 font-medium">Szybka wycena przez</div>
                  <div className="text-2xl font-black text-white">WhatsApp</div>
                </div>
              </div>

              <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-2 transition-all" />
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-black text-white mb-2">24h</div>
              <div className="text-sm text-white/80 font-medium">Wycena</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-black text-white mb-2">2-3 dni</div>
              <div className="text-sm text-white/80 font-medium">Realizacja</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-black text-white mb-2">0 zł</div>
              <div className="text-sm text-white/80 font-medium">Doradztwo</div>
            </div>
          </motion.div>

          {/* Bottom Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-white/70 text-sm">
              📞 Odbieramy telefony | 💬 Odpowiadamy na wiadomości | 🚚 Dowozimy na budowę
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}