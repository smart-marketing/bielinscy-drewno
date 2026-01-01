"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Calculator, Package, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Kontakt + Doradztwo",
    description:
      "Dzwonisz, piszesz maila lub WhatsApp. Opisujesz projekt - doradzamy za darmo.",
  },
  {
    number: "02",
    icon: Calculator,
    title: "Wycena od ręki",
    description:
      "Konkretna cena, termin 2-3 dni. Płatność: przelew, karta, gotówka.",
  },
  {
    number: "03",
    icon: Package,
    title: "Realizacja",
    description:
      "Wybieramy proste deski, impregnujemy, kontrolujemy przed wysyłką.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Dostawa/odbiór",
    description: "Dowóz własnym transportem lub odbiór z Mirotek (obok A1).",
  },
];

export default function HowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="jak-dzialamy"
      className="py-16 md:py-20 bg-gradient-to-br from-brand-green via-brand-green/95 to-brand-green/90 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
            transition={{ duration: 1.5, delay: i * 0.2 }}
            className="absolute bg-white rounded-full blur-3xl"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              top: `${20 + i * 30}%`,
              left: `${10 + i * 30}%`,
            }}
          />
        ))}
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            4 kroki od telefonu do gotowej dostawy
          </h2>
        </motion.div>

        {/* Timeline Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connection Line - Desktop Only */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-white/20" 
                 style={{ width: 'calc(100% - 120px)', left: '60px' }} />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.15,
                }}
                className="relative"
              >
                {/* Step Card */}
                <div className="text-center">
                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative inline-flex items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-xl mb-4 mx-auto group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <step.icon className="w-10 h-10 text-brand-green relative z-10" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="tel:+48537593186"
            className="inline-flex items-center gap-3 bg-white text-brand-green px-8 py-4 rounded-2xl font-bold text-lg hover:bg-cream hover:gap-5 transition-all duration-300 group shadow-2xl hover:shadow-3xl hover:scale-105"
          >
            <span>Zamów teraz - dostawa w 3 dni</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}