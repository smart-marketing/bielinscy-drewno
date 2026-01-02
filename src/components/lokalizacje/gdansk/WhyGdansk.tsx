"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Truck, ThumbsUp } from "lucide-react";

export default function WhyGdansk() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      title: "Szybka dostawa",
      description: "Z Mirotek do Gdańska to tylko ~1h auostradą A1. Realizujemy zamówienia w 2-3 dni, nie w tygodnie.",
      iconType: "zap"
    },
    {
      title: "Kontrola jakości",
      description: "Każde zamówienie sprawdzamy przed wysyłką. Proste deski, zgodne wymiary, prawdziwa impregnacja.",
      iconType: "shield"
    },
    {
      title: "Własny transport",
      description: "Dowozimy własnym transportem. Znamy trasę, znamy czas, mamy kontrolę nad całą dostawą.",
      iconType: "truck"
    },
    {
      title: "Obsługujemy Trójmiasto od lat",
      description: "Setki dostaw do Gdańska, Sopotu, Gdyni. Znamy lokalne budowy, wiemy jak dojechać bez korków.",
      iconType: "thumbsup"
    }
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case "zap": return <Zap className="w-8 h-8 text-white" />;
      case "shield": return <Shield className="w-8 h-8 text-white" />;
      case "truck": return <Truck className="w-8 h-8 text-white" />;
      case "thumbsup": return <ThumbsUp className="w-8 h-8 text-white" />;
      default: return <Zap className="w-8 h-8 text-white" />;
    }
  };

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
            Dlaczego Gdańsk zamawia
            <br className="sm:hidden" /> <span className="text-brand-green">w Mirotkach?</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-brown/70 max-w-2xl mx-auto px-4">
            Magazyn 5 min od A1, autostrada prosto do Gdańska - szybciej niż z wielu składów w mieście
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-brand-green/20 transition-all duration-300 hover:shadow-2xl">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-green/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  {getIcon(benefit.iconType)}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl md:text-2xl font-bold text-brand-brown mb-4 group-hover:text-brand-green transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-base text-brand-brown/70 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Line */}
                <div className="mt-6 h-1 bg-gradient-to-r from-brand-green via-brand-green/50 to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-brand-green/10 via-brand-green/5 to-transparent px-8 md:px-12 py-8 md:py-10 rounded-3xl border-2 border-brand-green/20 shadow-xl max-w-3xl">
            <p className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-brand-brown leading-tight">
              Od Gdańska dzieli nas tylko
              <br />
              <span className="text-brand-green">godzina autostrady</span>
            </p>
            <p className="text-base md:text-lg text-brand-brown/70 mt-4">
              Bliżej niż myślisz, szybciej niż czekasz
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}