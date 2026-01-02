"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Heart, Shield, Target } from "lucide-react";

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamValues = [
    {
      icon: Users,
      title: "Znają się na drewnie",
      description: "Nie czytają ze skryptu. Wiedzą, co polecić na deskowanie, co na więźbę, jaką impregnację wybrać."
    },
    {
      icon: Shield,
      title: "Rozumieją budowę",
      description: "Sami przez to przeszli. Wiedzą, jak frustrujące jest czekanie na materiał czy dostawanie krzywych desek."
    },
    {
      icon: Heart,
      title: "Doradzają uczciwie",
      description: "Nie próbują sprzedać droższego, jeśli tańszy wystarczy. Kupowaliby tak dla siebie."
    },
    {
      icon: Target,
      title: "Odpowiadają konkretnie",
      description: "\"Może będzie za 3 tygodnie\" to nie nasza bajka. Mówimy wprost: mamy, nie mamy, będzie wtedy i wtedy."
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-green rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-brown rounded-full blur-3xl"
        />
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
            Kto stoi za
            <br className="sm:hidden" /> <span className="text-brand-green">Bielińscy Drewno?</span>
          </h2>
          <div className="max-w-3xl mx-auto px-4 space-y-4">
            <p className="text-lg md:text-xl text-brand-brown/80 leading-relaxed">
              Nie jesteśmy anonimową hurtownią. <strong className="text-brand-brown">Jesteśmy rodzinną firmą</strong>, 
              która od 12 lat buduje biznes na zaufaniu i konkretach.
            </p>
            <p className="text-base md:text-lg text-brand-brown/70">
              Odbierasz telefon? Rozmawiasz z kimś, kto naprawdę zna się na drewnie 
              i rozumie, czego potrzebuje klient na budowie.
            </p>
          </div>
        </motion.div>

        {/* Team Values Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {teamValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="h-full bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-transparent hover:border-brand-green/30 transition-all duration-300">
                  {/* Icon */}
                  <div className="relative inline-block mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-green/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-brand-green/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl font-bold text-brand-brown mb-4">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base md:text-lg text-brand-brown/70 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Decorative line */}
                  <div className="mt-6 h-1 bg-gradient-to-r from-brand-green via-brand-green/50 to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-brand-green/10 via-brand-green/5 to-transparent px-8 md:px-12 py-8 md:py-10 rounded-3xl border-2 border-brand-green/20 shadow-xl max-w-3xl">
            <p className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-brand-brown leading-tight">
              Nie mamy działu obsługi klienta.
              <br />
              <span className="text-brand-green">Mamy ludzi, którzy się znają.</span>
            </p>
            <div className="mt-6 pt-6 border-t border-brand-green/20">
              <p className="text-base md:text-lg text-brand-brown/70">
                Zadzwoń, napisz - porozmawiamy jak człowiek z człowiekiem
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
