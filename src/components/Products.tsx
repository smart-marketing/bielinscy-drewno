"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

const products = [
  {
    image: "/drewno-impregnowane.jpg",
    title: "Deski impregnowane",
    description:
      "Prawdziwa impregnacja ciśnieniowa - nie barwnik. Klasa użytkowa 3 i 4. Trwałość na lata.",
    href: "#deski",
  },
  {
    image: "/kantowka.jpg",
    title: "Kantówka",
    description:
      "Pełen zakres wymiarów. Mokra, suszona, impregnowana. Na konstrukcje, ogrodzenia, altany.",
    href: "#kantowka",
  },
  {
    image: "/tarcica.jpg",
    title: "Tarcica konstrukcyjna",
    description:
      "Sosna, świerk. Mokra, suszona, strugana. Na więźby, deskowanie, łaty, konstrukcje.",
    href: "#tarcica",
  },
  {
    image: "/wiezba.jpg",
    title: "Więźby dachowe",
    description:
      "Kompletne konstrukcje dachowe - projekt, wycena, dostawa. Przekroje dobrane pod obciążenia.",
    href: "#wiezby",
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="sortament" className="py-12 md:py-16 bg-gradient-to-br from-cream via-white to-cream relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 right-10 w-72 h-72 bg-brand-green/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 left-10 w-72 h-72 bg-brand-brown/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4"
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            <span>Nasz asortyment</span>
          </motion.div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-brown mb-2 leading-tight">
            Drewno budowlane
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-brand-green font-semibold"
          >
            od konstrukcji po wykończenie
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8">
          {products.map((product, index) => (
            <motion.a
              key={index}
              href={product.href}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-brand-green/20"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating icon on hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 text-brand-green" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <h3 className="font-display text-lg md:text-xl font-bold text-brand-brown group-hover:text-brand-green transition-colors duration-300 mb-2">
                  {product.title}
                </h3>
                <p className="text-brand-brown/70 text-xs md:text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Bottom accent */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-brand-green to-brand-green/80 rounded-b-2xl"
              />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <a
            href="tel:+48537593186"
            className="inline-flex items-center gap-3 bg-white border-2 border-brand-green text-brand-green px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg hover:bg-brand-green hover:text-white hover:gap-5 transition-all duration-300 group shadow-lg hover:shadow-xl"
          >
            <span>Zapytaj o pełną ofertę</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}