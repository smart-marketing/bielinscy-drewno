"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Deska szorstka",
    description: "Tarcica nieobrobiona - deskowanie, szalunki, konstrukcje",
    image: "/deska-szorstka.jpg",
    link: "/produkty/deska-szorstka",
    badge: "Bestseller"
  },
  {
    title: "Kantówka mokra",
    description: "Surowa kantówka - ogrodzenia, altany, konstrukcje",
    image: "/kantowka-mokra-szorstka.jpg",
    link: "/produkty/kantowka-mokra-szorstka"
  },
  {
    title: "Więźba dachowa",
    description: "Konstrukcja nośna dachu - projekt + realizacja",
    image: "/wiezba-dachowa.jpg",
    link: "/produkty/wiezba-dachowa",
    badge: "Premium"
  },
  {
    title: "Deski tarasowe",
    description: "Prawdziwa impregnacja ciśnieniowa - gwarancja 10 lat",
    image: "/deska-tarasowa.jpg",
    link: "/produkty/deska-tarasowa",
    badge: "Gwarancja"
  }
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="produkty" className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--brand-brown) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-brown mb-4">
            Co oferujemy?
          </h2>
          <p className="text-lg md:text-xl text-brand-brown/70 max-w-2xl mx-auto">
            Drewno budowlane od konstrukcji po wykończenie
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={product.link}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-green/30 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.badge && (
                      <div className="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {product.badge}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-display text-xl font-bold text-brand-brown mb-2 group-hover:text-brand-green transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-brand-brown/70 mb-4 flex-1">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2 text-brand-green font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>Zobacz więcej</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/oferta"
            className="inline-flex items-center gap-3 bg-brand-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-green/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Zobacz pełną ofertę</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}