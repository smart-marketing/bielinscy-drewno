"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    title: "Deska szorstka",
    description: "Materiał budowlany - szalunki, deskowanie, konstrukcje. Niska cena, wysoka wszechstronność.",
    icon: "🏗️",
    href: "/oferta#deska-szorstka",
  },
  {
    title: "Kantówka mokra szorstka",
    description: "Więźby dachowe, konstrukcje gospodarcze. Standard budowlany w najlepszej cenie.",
    icon: "🔨",
    href: "/oferta#kantowka-mokra",
  },
  {
    title: "Łata i kontrłata",
    description: "Konstrukcje dachowe i elewacyjne. Mokra lub suszona - dobierz do projektu.",
    icon: "📐",
    href: "/oferta#lata-kontrlata",
  },
  {
    title: "Więźba dachowa",
    description: "Kompletne konstrukcje dachowe. Mokra tradycyjna lub suszona C24 premium.",
    icon: "🏠",
    href: "/oferta#wiezba-dachowa",
    popular: true,
  },
  {
    title: "Deska strugana bez pióro-wpustu",
    description: "Uniwersalny materiał czterostronnie strugany. Meble, okładziny, DIY.",
    icon: "✨",
    href: "/oferta#deska-strugana-bez",
  },
  {
    title: "Deska strugana na pióro-wpust",
    description: "Boazerie, elewacje, podbitki. Szczelne połączenie, estetyczne wykończenie.",
    icon: "🎨",
    href: "/oferta#deska-pioro-wpust",
  },
  {
    title: "Deska tarasowa",
    description: "Tarasy, balkony, ścieżki. Antypoślizgowa, z opcją impregnacji ciśnieniowej.",
    icon: "🌳",
    href: "/oferta#deska-tarasowa",
    popular: true,
  },
  {
    title: "Kantówka suszona C24/KVH/BSH",
    description: "Premium konstrukcyjne. Domy szkieletowe, więźby, konstrukcje widoczne.",
    icon: "⭐",
    href: "/oferta#kantowka-suszona",
    popular: true,
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref} 
      id="sortament" 
      className="py-16 md:py-24 bg-gradient-to-br from-cream via-white to-cream relative overflow-hidden"
    >
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
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-block mb-4 px-6 py-2 bg-brand-green/10 text-brand-green font-semibold rounded-full text-sm"
          >
            Pełen asortyment
          </motion.div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-brown mb-6">
            Co możemy dla Ciebie
            <br className="sm:hidden" /> <span className="text-brand-green">przygotować?</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-brown/70 max-w-2xl mx-auto px-4">
            Od podstawowych materiałów konstrukcyjnych po wykończenia premium
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <Link href={product.href}>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-green/10 h-full flex flex-col">
                  {/* Popular Badge */}
                  {product.popular && (
                    <div className="absolute -top-2 -right-2 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                      TOP
                    </div>
                  )}

                  {/* Icon */}
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xl text-brand-brown mb-3 group-hover:text-brand-green transition-colors">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-brown/70 text-sm mb-4 flex-grow leading-relaxed">
                    {product.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-brand-green font-semibold text-sm group-hover:gap-2 transition-all">
                    Zobacz więcej
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
          className="text-center"
        >
          <p className="text-brand-brown/70 mb-6 max-w-2xl mx-auto">
            Każda dostawa sprawdzona przed wysyłką. Proste deski, zgodne wymiary, prawdziwa impregnacja.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/oferta" className="btn-primary inline-flex items-center justify-center gap-2">
              Zobacz pełną ofertę
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+48537593186" className="btn-secondary">
              Zadzwoń: 537 593 186
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
