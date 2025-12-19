"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Wrench, TreePine, ArrowRight } from "lucide-react";

const audiences = [
  {
    icon: Home,
    title: "Budujesz dom?",
    description:
      "Kompleksowa dostawa drewna na więźbę, deski na deskowanie, tarcicę konstrukcyjną. Doradzamy wymiary i przekroje pod Twój projekt. Jeden telefon, jeden dostawca, zero problemów logistycznych.",
    cta: "Zobacz drewno konstrukcyjne",
    href: "#tarcica",
  },
  {
    icon: Wrench,
    title: "Prowadzisz projekty jako fachowiec?",
    description:
      "Wiesz, że Twój czas to pieniądze. Nie blokujesz budowy czekaniem na materiał. Realizacja w 3 dni, transport własny, możliwość odbioru osobistego z Mirotek. Stała jakość na każde zamówienie.",
    cta: "Oferta dla firm i fachowców",
    href: "#sortament",
  },
  {
    icon: TreePine,
    title: "Budujesz altanę, taras, ogrodzenie?",
    description:
      "Deski tarasowe, kantówka, tarcica - suszona, strugana, impregnowana. Dowieziemy gotowy materiał, żebyś w weekend stawiał, a nie jeździł po składach. Nawet małe zamówienia realizujemy ekspresowo.",
    cta: "Zobacz deski i kantówkę",
    href: "#deski",
  },
];

export default function ForWhom() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-cream relative">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-brown mb-4">
            Drewno dla każdego, kto buduje
          </h2>
          <p className="text-xl text-brand-green font-medium">
            szybko i bez nerwów
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl p-8 h-full border border-warm-gray/30 hover:border-brand-green/30 transition-all duration-500 hover:shadow-xl">
                {/* Icon */}
                <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:scale-105 transition-all duration-500">
                  <audience.icon className="w-8 h-8 text-brand-green group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-semibold text-brand-brown mb-4">
                  {audience.title}
                </h3>
                <p className="text-brand-brown/70 leading-relaxed mb-6">
                  {audience.description}
                </p>

                {/* CTA */}
                <a
                  href={audience.href}
                  className="inline-flex items-center gap-2 text-brand-green font-semibold group/link"
                >
                  <span>{audience.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
