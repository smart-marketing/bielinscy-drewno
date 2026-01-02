"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Eye, Ruler, Truck, ThumbsUp, Clock } from "lucide-react";

export default function QualityGuarantees() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const guarantees = [
    {
      icon: Eye,
      title: "Kontrola przed wysyłką",
      description: "Każde zamówienie sprawdzamy przed zapakowaniem. Wybieramy proste deski, zgodne wymiary."
    },
    {
      icon: Ruler,
      title: "Wymiary zgodne z zamówieniem",
      description: "Dostajesz dokładnie to, co zamawiasz. Bez \"może będzie\", \"mniej więcej\" i innych niespodzianek."
    },
    {
      icon: Shield,
      title: "Prawdziwa impregnacja",
      description: "Impregnacja ciśnieniowa - nie barwnik. Klasa użytkowa 3 i 4. Trwałość na lata, nie na jeden sezon."
    },
    {
      icon: Truck,
      title: "Bezpieczny transport",
      description: "Pakujemy i zabezpieczamy materiał. Własny transport = kontrola nad dostawą od A do Z."
    },
    {
      icon: Clock,
      title: "Realizacja w terminie",
      description: "Mówimy 2-3 dni? To 2-3 dni, nie 2-3 tygodnie. Szanujemy Twój harmonogram budowy."
    },
    {
      icon: ThumbsUp,
      title: "Pomoc w doborze materiału",
      description: "Nie wiesz, co wybrać? Pytaj przed zakupem. Doradzamy uczciwie, bez wciskania droższego."
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--brand-green) 1px, transparent 1px), linear-gradient(90deg, var(--brand-green) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
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
            Co gwarantujemy
            <br className="sm:hidden" /> <span className="text-brand-green">w każdym zamówieniu?</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-brown/70 max-w-2xl mx-auto px-4">
            6 rzeczy, na które możesz liczyć przy każdej dostawie
          </p>
        </motion.div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-brand-green/30 transition-all duration-300 hover:shadow-2xl">
                {/* Icon Container */}
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-green/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <guarantee.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-brand-green/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl md:text-2xl font-bold text-brand-brown mb-4 group-hover:text-brand-green transition-colors">
                  {guarantee.title}
                </h3>

                {/* Description */}
                <p className="text-base text-brand-brown/70 leading-relaxed">
                  {guarantee.description}
                </p>

                {/* Decorative line */}
                <div className="mt-6 h-1 bg-gradient-to-r from-brand-green via-brand-green/50 to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-brand-green/10 via-brand-green/5 to-transparent px-8 md:px-12 py-8 md:py-10 rounded-3xl border-2 border-brand-green/20 shadow-xl max-w-3xl">
            <p className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-brand-brown leading-tight mb-4">
              Dostarczamy drewno tak,
              <br />
              <span className="text-brand-green">jakbyśmy kupowali je dla siebie</span>
            </p>
            <p className="text-base md:text-lg text-brand-brown/70">
              Bez wykrętów, bez kompromisów, bez niespodzianek
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
