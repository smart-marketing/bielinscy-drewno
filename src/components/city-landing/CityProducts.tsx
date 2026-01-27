"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { CityData } from "@/data/cities";
import Link from "next/link";

interface CityProductsProps {
  city: CityData;
}

const products = [
  {
    title: "Tarcica C24",
    description: "Konstrukcyjna, suszona, klasa wytrzymałości C24",
    image: "/kantowka-c24-new.jpeg",
    badge: "Premium",
    link: "/produkty/kantowka-suszona-c24"
  },
  {
    title: "Więźba dachowa",
    description: "Projekt + realizacja, dostawa na budowę",
    image: "/wiezba-dachowa.jpg",
    badge: "Bestseller",
    link: "/produkty/wiezba-dachowa"
  },
  {
    title: "Deski tarasowe",
    description: "Impregnacja ciśnieniowa, gwarancja 10 lat",
    image: "/deska-tarasowa.jpg",
    badge: "Gwarancja",
    link: "/produkty/deska-tarasowa"
  },
  {
    title: "Kantówka budowlana",
    description: "Mokra lub suszona, różne przekroje",
    image: "/kantowka-mokra-szorstka.jpg",
    link: "/produkty/kantowka-mokra-szorstka"
  },
];

export default function CityProducts({ city }: CityProductsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-wide px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-brown mb-4 md:mb-6">
            Co znajdziesz w naszym
            <br className="sm:hidden" />
            <span className="text-brand-green"> składzie drewna?</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-brand-brown/70 max-w-3xl mx-auto">
            Nasza hurtownia obsługuje zarówno profesjonalistów z branży budowlanej, 
            jak i inwestorów prywatnych realizujących własne projekty.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={product.link}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-green/30 h-full flex flex-col cursor-pointer">
                  {/* Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
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
                    <h3 className="font-display text-lg md:text-xl font-bold text-brand-brown mb-2 group-hover:text-brand-green transition-colors">
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-brand-brown/70 mb-6 text-base md:text-lg">
            Obsługujemy cały {city.name} i okolice
            {city.nearbyDistricts && city.nearbyDistricts.length > 0 && (
              <span className="block mt-2 text-sm md:text-base">
                ({city.nearbyDistricts.slice(0, 5).join(", ")})
              </span>
            )}
          </p>
          <a
            href="tel:+48537593186"
            className="inline-flex items-center gap-3 bg-brand-green text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-green/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Zadzwoń po szczegóły: 537 593 186
          </a>
        </motion.div>
      </div>
    </section>
  );
}