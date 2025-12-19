"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Calculator, Package, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Kontakt + Doradztwo",
    subtitle: "Dzwonisz, piszesz maila, WhatsAppa lub wypełniasz formularz",
    description:
      "Opisujesz projekt i co potrzebujesz. Nie wiesz, jakie drewno wybrać? Jakie wymiary? Jakiej klasy impregnację? Spokojnie - to normalne. Wypytuj nas przed zakupem - doradzamy za darmo, bez zobowiązań.",
    highlight: "📱 WhatsApp to najszybszy kontakt - odpowiadamy na bieżąco.",
  },
  {
    number: "02",
    icon: Calculator,
    title: "Wycena od ręki",
    subtitle: "Przygotowujemy ofertę i potwierdzamy termin",
    description:
      "Konkretna cena, konkretny termin dostawy (zwykle 2-3 dni). Płatność: przelew, karta, gotówka przy odbiorze.",
    highlight: null,
  },
  {
    number: "03",
    icon: Package,
    title: "Realizacja",
    subtitle: "Przygotowujemy Twoje zamówienie w magazynie",
    description:
      "Wybieramy proste deski, impregnujemy (jeśli zamówiłeś), pakujemy na transport. Jakość sprawdzamy przed załadunkiem.",
    highlight: null,
  },
  {
    number: "04",
    icon: Truck,
    title: "Dostawa/odbiór",
    subtitle: "Dowóz na budowę własnym transportem lub odbiór osobisty",
    description: "Magazyn w Mirotkach (gm. Skórcz), obok A1 - zjazd Kopytowo.",
    highlight: null,
  },
];

export default function HowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="jak-dzialamy"
      className="section-padding bg-brand-brown relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            4 kroki od telefonu do gotowej dostawy
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 hover:border-white/20 hover:bg-white/15 transition-all duration-500 group">
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-display font-bold text-white/20 group-hover:text-white/30 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-brand-green group-hover:scale-110 transition-all duration-500">
                    <step.icon className="w-6 h-6 text-white transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/70 font-medium text-sm mb-3">
                  {step.subtitle}
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Highlight */}
                {step.highlight && (
                  <div className="mt-4 p-3 bg-brand-green/30 rounded-lg border border-brand-green/20">
                    <p className="text-white text-sm font-medium">
                      {step.highlight}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="tel:+48XXXXXXXXX"
            className="inline-flex items-center gap-3 bg-brand-green text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-brand-green-light transition-all duration-300 group"
          >
            <span>Zamów teraz - dostawa w 3 dni</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}