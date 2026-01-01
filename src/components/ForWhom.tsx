"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Wrench, TreePine, ArrowRight, Sparkles } from "lucide-react";

const audiences = [
  {
    icon: Home,
    title: "Budujesz dom?",
    description:
      "Kompleksowa dostawa drewna na więźbę, deski na deskowanie, tarcicę konstrukcyjną. Doradzamy wymiary i przekroje pod Twój projekt.",
    cta: "Zobacz drewno konstrukcyjne",
    href: "#tarcica",
  },
  {
    icon: Wrench,
    title: "Prowadzisz projekty jako fachowiec?",
    description:
      "Nie blokujesz budowy czekaniem na materiał. Realizacja w 3 dni, transport własny, możliwość odbioru osobistego. Stała jakość na każde zamówienie.",
    cta: "Oferta dla firm i fachowców",
    href: "#sortament",
  },
  {
    icon: TreePine,
    title: "Budujesz altanę, taras, ogrodzenie?",
    description:
      "Deski tarasowe, kantówka, tarcica - suszona, strugana, impregnowana. Dowieziemy gotowy materiał. Nawet małe zamówienia realizujemy ekspresowo.",
    cta: "Zobacz deski i kantówkę",
    href: "#deski",
  },
];

export default function ForWhom() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 md:py-16 bg-gradient-to-br from-cream via-white to-cream relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-10 w-72 h-72 bg-brand-green/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 right-10 w-72 h-72 bg-brand-brown/20 rounded-full blur-3xl"
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
            <span>Dla każdego projektu</span>
          </motion.div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-brown mb-3 leading-tight">
            Drewno dla każdego,
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-green inline-block relative mt-1"
            >
              kto buduje szybko i bez nerwów
              <motion.span
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-0 left-0 h-1 bg-brand-green/30 rounded-full"
              />
            </motion.span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.3 + index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-5 md:p-6 h-full border-2 border-transparent group-hover:border-brand-green/20 transition-all duration-500 shadow-lg group-hover:shadow-2xl flex flex-col">
                
                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-brand-green to-brand-green/80 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <audience.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-grow">
                  <h3 className="font-display text-lg md:text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-green transition-colors duration-300">
                    {audience.title}
                  </h3>
                  
                  <p className="text-brand-brown/70 leading-relaxed mb-4 text-sm md:text-base">
                    {audience.description}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={audience.href}
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-brand-green text-brand-green px-4 py-2.5 rounded-xl font-semibold text-sm md:text-base group/link hover:bg-brand-green hover:text-white transition-all duration-300 shadow-sm hover:shadow-md w-full mt-auto"
                >
                  <span>{audience.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>

                {/* Bottom Accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                  className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-brand-green to-brand-green/80 rounded-b-2xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}