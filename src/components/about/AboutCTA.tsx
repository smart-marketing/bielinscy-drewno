"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function AboutCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-[#4C3B34] via-[#3d2f29] to-[#2a201c] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#2B6650] rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#2B6650] rounded-full blur-[100px]"
        />
        {/* Wood grain texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            white 0px,
            transparent 1px,
            transparent 30px
          )`
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Poznajmy się.{" "}
              <span className="text-[#98d4bb]">Zadzwoń, napisz, wpadnij.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Masz pytania o drewno? Projektujesz budowę i nie wiesz, od czego zacząć?
              Pogadajmy. Doradzamy za darmo, bez zobowiązań.
            </p>
          </motion.div>

          {/* Contact options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {/* Phone */}
            <motion.a
              href="tel:+48XXXXXXXXX"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-[#2B6650] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Telefon</h3>
              <p className="text-[#98d4bb] font-medium">[NUMER]</p>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/48XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group p-6 rounded-2xl bg-[#2B6650] border border-[#2B6650] hover:bg-[#2B6650]/90 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">WhatsApp</h3>
              <p className="text-white/90 font-medium text-sm">najszybszy kontakt</p>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:kontakt@bielinscy-drewno.pl"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-[#2B6650] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Email</h3>
              <p className="text-[#98d4bb] font-medium text-sm">[EMAIL]</p>
            </motion.a>
          </motion.div>

          {/* Location info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-12"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-[#98d4bb]" />
              Odwiedź nas
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
              <div>
                <p className="text-white/90 mb-2">
                  <strong className="text-white">Mirotki, gm. Skórcz</strong>
                </p>
                <p className="text-white/70 text-sm">
                  (zjazd Kopytowo z A1)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#98d4bb] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/90">Poniedziałek - Piątek: [GODZINY]</p>
                  <p className="text-white/90">Sobota: [GODZINY]</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2B6650] text-white font-bold text-lg hover:bg-[#2B6650]/90 transition-colors shadow-lg shadow-[#2B6650]/30"
              >
                Zamów wycenę
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-bold text-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                <MapPin className="w-5 h-5" />
                Jak dojechać?
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
