"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Construction, Home, Ruler, Paintbrush } from "lucide-react";

const products = [
  {
    icon: Construction,
    title: "Tarcica konstrukcyjna",
    description:
      "Sosna, świerk. Mokra, suszona, strugana. Wymiary pod Twój projekt. Na więźby, deskowanie, łaty, konstrukcje.",
    href: "#tarcica",
  },
  {
    icon: Home,
    title: "Więźby dachowe",
    description:
      "Kompletne konstrukcje dachowe - projekt, wycena, dostawa. Przekroje dobrane pod obciążenia i rozpiętości.",
    href: "#wiezby",
  },
  {
    icon: Ruler,
    title: "Kantówka",
    description:
      "Pełen zakres wymiarów. Mokra, suszona, impregnowana. Na konstrukcje, ogrodzenia, altany, tarasy.",
    href: "#kantowka",
  },
  {
    icon: Paintbrush,
    title: "Deski impregnowane",
    description:
      "Prawdziwa impregnacja ciśnieniowa - nie barwnik. Klasa użytkowa 3 i 4. Trwałość na lata.",
    href: "#deski",
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="sortament" className="section-padding bg-cream relative">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-brown mb-4">
            Drewno budowlane
          </h2>
          <p className="text-xl text-brand-brown/60">
            od konstrukcji po wykończenie
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.a
              key={index}
              href={product.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-green/10 to-brand-brown/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <product.icon className="w-16 h-16 text-brand-green/20" />
                </div>
                <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-xl font-semibold text-brand-brown group-hover:text-brand-green transition-colors">
                    {product.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-brand-brown/30 group-hover:text-brand-green group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
                <p className="text-brand-brown/60 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="#kontakt" className="btn-secondary inline-flex items-center gap-2">
            <span>Zapytaj o pełną ofertę</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
