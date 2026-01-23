"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Deska szorstka",
    slug: "deska-szorstka",
    description: "Tarcica nieobrobiona - idealna na deskowanie, szalunki, konstrukcje tymczasowe.",
    image: "/deska-szorstka.jpg",
    features: [
      "Sosna/świerk klasa C24",
      "Szeroki zakres wymiarów",
      "Impregnacja ciśnieniowa",
      "Dostępna od ręki"
    ],
    price: "Skorzystaj z kalkulatora i oblicz cenę",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Kantówka mokra szorstka",
    slug: "kantowka-mokra-szorstka",
    description: "Surowa kantówka na konstrukcje - ogrodzenia, altany, pergole, tarasy.",
    image: "/kantowka-mokra-szorstka.jpg",
    features: [
      "Przekroje od 38x63 do 150x150",
      "Długości 3-6m",
      "Impregnowana lub naturalna",
      "Cięcie na wymiar"
    ],
    price: "Skorzystaj z kalkulatora i oblicz cenę"
  },
  {
    id: 3,
    name: "Łaty i kontrłaty",
    slug: "lata-kontrlata",
    description: "Na więźby dachowe, wiatrownice, konstrukcje szkieletowe.",
    image: "/lata.jpg",
    features: [
      "Wymiary standardowe",
      "Długości do 6m",
      "Drewno świerkowe",
      "Realizacja 24h"
    ],
    price: "Skorzystaj z kalkulatora i oblicz cenę"
  },
  {
    id: 4,
    name: "Więźba dachowa",
    slug: "wiezba-dachowa",
    description: "Konstrukcja nośna dachu - mokra lub suszona C24. Wymiary dopasowane pod projekt.",
    image: "/wiezba-dachowa.jpg",
    features: [
      "Projekt + wycena gratis",
      "Dostawa na budowę",
      "Klasa C24 dostępna"
    ],
    price: "Skorzystaj z kalkulatora i oblicz cenę",
    badge: "Premium"
  },
  {
    id: 5,
    name: "Deski strugane bez pióro-wpustu",
    slug: "deska-strugana-bez-pioro-wpustu",
    description: "Czterostronnie strugane - meble, okładziny ścian, projekty DIY.",
    image: "/deska-strugana-bez-wpustu.jpg",
    features: [
      "4 strony strugane",
      "Kl. wilgotności 18-22%",
      "Gładka powierzchnia",
      "Szeroki wybór wymiarów"
    ],
    price: "Skorzystaj z kalkulatora i oblicz cenę"
  },
  {
    id: 6,
    name: "Deski strugane z pióro-wpustem",
    slug: "deska-strugana-pioro-wpust",
    description: "Boazerie, elewacje, podbitki dachowe - szczelne połączenie na pióro.",
    image: "/deska-strugana-wpust.jpg",
    features: [
      "System pióro-wpust",
      "Boazeria 14x110mm",
      "Podbitka 18x135mm",
      "Elewacja 22x135mm"
    ],
    price: "Skorzystaj z kalkulatora i oblicz cenę"
  },
  {
    id: 7,
    name: "Deski tarasowe",
    slug: "deska-tarasowa",
    description: "Prawdziwa impregnacja ciśnieniowa - trwałość na lata, nie farba.",
    image: "/deska-tarasowa.jpg",
    features: [
      "Klasa użytkowa 3 i 4",
      "Impregnacja Tanalith E",
      "Gwarancja 10 lat",
      "Rowkowana lub gładka"
    ],
    price: "Skorzystaj z kalkulatora i oblicz cenę",
    badge: "Często wybierane do ogrodu"
  },
  {
    id: 8,
    name: "Kantówka suszona C24",
    slug: "kantowka-suszona-c24",
    description: "Suszone, stabilne, gotowe do montażu - bez skręcania i pękania.",
    image: "/kantowka-c24.jpg",
    features: [
      "Wilgotność 18-22%",
      "Klasa wytrzymałości C24",
      "Wymiary dokładne",
      "Bez żywicy"
    ],
    price: "Skorzystaj z kalkulatora i oblicz cenę",
    badge: "Premium"
  }
];

export default function ProductListing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white relative overflow-hidden">
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
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-brown mb-6">
            Pełna oferta
            <br className="sm:hidden" /> <span className="text-brand-green">drewna budowlanego</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-brown/70 max-w-2xl mx-auto px-4">
            Od konstrukcji po wykończenie - wszystko w jednym miejscu
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/produkty/${product.slug}`}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-green/30 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.badge && (
                      <div className="absolute top-4 right-4 bg-brand-green text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                        {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-2xl font-bold text-brand-brown mb-3 group-hover:text-brand-green transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-brand-brown/70 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6 flex-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-brand-brown/80">
                          <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-xs font-bold text-brand-green">
                        {product.price}
                      </div>
                      <div className="flex items-center gap-2 text-brand-brown group-hover:text-brand-green transition-colors font-semibold">
                        <span className="text-sm">Zobacz</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-brand-brown/70 mb-6">
            Nie jesteś pewien którego drewna potrzebujesz?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+48537593186" className="btn-primary inline-flex items-center justify-center gap-2">
              <span>📞</span>
              Zadzwoń: 537 593 186
            </a>
            <a href="https://wa.me/48537593186" className="btn-whatsapp inline-flex items-center justify-center gap-2">
              <span>💬</span>
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}