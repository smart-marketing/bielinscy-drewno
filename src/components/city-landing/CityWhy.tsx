"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, TrendingDown, Shield, Truck, Clock } from "lucide-react";
import type { CityData } from "@/data/cities";

interface CityWhyProps {
  city: CityData;
}

const features = [
  {
    icon: Clock,
    title: "Dostawa w 2-3 dni",
    description: "Zamawiasz dziś, budujesz pojutrze. Nawet duże zamówienia realizujemy szybko."
  },
  {
    icon: Shield,
    title: "Gwarancja jakości",
    description: "Każda partia drewna sprawdzana, sezonowana, gotowa do pracy. Dokumentacja na życzenie."
  },
  {
    icon: TrendingDown,
    title: "Bez pośredników",
    description: "Rodzinny skład, konkurencyjne ceny bez marży hurtowni. Kupujesz bezpośrednio od nas."
  },
  {
    icon: Truck,
    title: "Kompleksowa oferta",
    description: "Od więźby dachowej po deski tarasowe – wszystko w jednym miejscu."
  },
];

export default function CityWhy({ city }: CityWhyProps) {
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
            Dlaczego fachowcy z {city.nameGenitive}
            <br className="hidden sm:block" />
            <span className="text-brand-green"> wybierają Bielińskich?</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-brand-brown/70 max-w-3xl mx-auto px-4">
            Wiemy, że hurtowni drewna w {city.name} nie brakuje. 
            Ale my nie jesteśmy kolejną „budowlanką z drewnem w rogu". 
            <strong className="text-brand-brown"> Jesteśmy rodziną</strong>, która od lat żyje tym biznesem.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto mb-10 md:mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-green/20"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-brand-brown mb-2 group-hover:text-brand-green transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-brand-brown/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Co to oznacza dla Ciebie */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-gradient-to-br from-brand-green to-brand-green/90 text-white p-6 md:p-10 lg:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto"
        >
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center">
            Co to oznacza dla Ciebie?
          </h3>
          
          <div className="space-y-4 md:space-y-5">
            {([
              {
                title: "Doradztwo bez ściemy",
                text: "Znamy drewno, nie czytamy z katalogów. Jeśli masz pytanie o wilgotność, klasę wytrzymałości czy optymalne przekroje – odpowiemy jak fachowiec fachowcowi."
              },
              {
                title: "Jakość, którą możesz sprawdzić",
                text: "Każda partia ma dokumentację, każda deska przechodzi kontrolę. Sezonowane, suszone, bez niespodzianek po rozpakowaniu."
              },
              {
                title: "Ceny bez marży pośredników",
                text: "Kupujesz bezpośrednio od nas, nie od hurtowni, która kupuje od hurtowni, która kupiła od nas. Oszczędzasz, my zarabiamy uczciwie."
              },
              {
                title: "Dostawa 2-3 dni",
                text: "Nie „za tydzień jak będzie kierowca, nie po świętach, nie musimy sprawdzić na magazynie. Zamawiasz – dowozimy."
              },
            ] as const).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3 md:gap-4"
              >
                <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-1">{item.title}</h4>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
