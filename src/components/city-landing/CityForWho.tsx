"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Hammer, Briefcase, Home } from "lucide-react";
import type { CityData } from "@/data/cities";

interface CityForWhoProps {
  city: CityData;
}

const segments = [
  {
    icon: Hammer,
    title: "Dla fachowców budowlanych",
    description: "Jesteś brygadzistą, kierownikiem budowy lub prowadzisz własną firmę budowlaną?",
    benefits: [
      "Drewno na czas, bez opóźnień",
      "Stała jakość na każde zamówienie",
      "Przewidywalne dostawy",
      "Rozliczenia bez niespodzianek"
    ],
    cta: "Zadzwoń po ofertę dla firm"
  },
  {
    icon: Home,
    title: "Dla inwestorów prywatnych",
    description: "Budujesz dom dla siebie? Robisz taras, altanę, elewację?",
    benefits: [
      "Pomożemy dobrać materiał",
      "Nie przepłacisz",
      "Nie kupis \"kota w worku\"",
      "Budujesz na lata, nie na pokaz"
    ],
    cta: "Bezpłatne doradztwo"
  },
];

export default function CityForWho({ city }: CityForWhoProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-12 md:py-20 bg-white">
      <div className="container-wide px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-brown mb-4 md:mb-6">
            Drewno budowlane {city.name}
            <br className="sm:hidden" />
            <span className="text-brand-green"> – Dla kogo pracujemy?</span>
          </h2>
        </motion.div>

        {/* Segments Grid - Mobile Stack, Desktop 2 cols */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="group bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-brand-green/10 hover:border-brand-green/30"
              >
                {/* Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-brand-green/10 flex items-center justify-center mb-6 group-hover:bg-brand-green/20 transition-colors">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-brand-green" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-brown mb-4 group-hover:text-brand-green transition-colors">
                  {segment.title}
                </h3>

                {/* Description */}
                <p className="text-brand-brown/70 text-base md:text-lg mb-6 leading-relaxed">
                  {segment.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  {segment.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-green mt-2.5" />
                      <span className="text-brand-brown/80 text-sm md:text-base">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="tel:+48537593186"
                  className="inline-flex items-center gap-2 text-brand-green font-bold hover:gap-4 transition-all group/link"
                >
                  <span>{segment.cta}</span>
                  <span className="text-xl">→</span>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Universal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-3xl shadow-lg max-w-3xl mx-auto border-2 border-brand-green/10">
            <p className="text-brand-brown/70 mb-6 text-base md:text-lg">
              Niezależnie od tego, czy jesteś fachowcem czy inwestorem –
              <strong className="text-brand-brown"> traktujemy Cię jak partnera</strong>, nie jak numer zamówienia.
            </p>
            <a
              href="tel:+48537593186"
              className="inline-flex items-center gap-3 bg-brand-green text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-green/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <span>Zadzwoń: 537 593 186</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
