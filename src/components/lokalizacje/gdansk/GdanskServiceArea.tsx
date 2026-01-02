"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock } from "lucide-react";

export default function GdanskServiceArea() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const areas = [
    {
      name: "Gdańsk Centrum",
      districts: ["Śródmieście", "Wrzeszcz", "Oliwa", "Zaspa"],
      time: "~1h"
    },
    {
      name: "Gdańsk Południe",
      districts: ["Chełm", "Kokoszki", "Olszynka", "Lipce"],
      time: "~1h"
    },
    {
      name: "Gdańsk Północ",
      districts: ["Osowa", "Matarnia", "Jasień", "Kiełpino"],
      time: "~1-1,5h"
    },
    {
      name: "Trójmiasto",
      districts: ["Sopot", "Gdynia", "Rumia", "Reda"],
      time: "~1-1,5h"
    },
    {
      name: "Okolice Gdańska",
      districts: ["Pruszcz Gdański", "Żukowo", "Kolbudy", "Kowale"],
      time: "~45min-1h"
    },
    {
      name: "Powiat gdański",
      districts: ["Tczew", "Pszczółki", "Suchy Dąb", "Trąbki Wielkie"],
      time: "~30min-1h"
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--brand-green) 1px, transparent 0)`,
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
            Gdzie dowozimy
            <br className="sm:hidden" /> <span className="text-brand-green">w Gdańsku?</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-brown/70 max-w-2xl mx-auto px-4">
            Obsługujemy cały Gdańsk, Trójmiasto i okolice
          </p>
        </motion.div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-brand-green/30 transition-all duration-300 hover:shadow-2xl">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center group-hover:bg-brand-green group-hover:scale-110 transition-all">
                      <MapPin className="w-5 h-5 text-brand-green group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-lg text-brand-brown group-hover:text-brand-green transition-colors">
                      {area.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 bg-brand-green/10 px-2 py-1 rounded-lg">
                    <Clock className="w-4 h-4 text-brand-green" />
                    <span className="text-xs font-semibold text-brand-green">{area.time}</span>
                  </div>
                </div>

                {/* Districts */}
                <div className="flex flex-wrap gap-2">
                  {area.districts.map((district, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-gray-100 text-brand-brown/70 px-2 py-1 rounded-md group-hover:bg-brand-green/10 group-hover:text-brand-green transition-colors"
                    >
                      {district}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-brand-green/10 to-transparent px-8 py-6 rounded-2xl border-2 border-brand-green/20 max-w-3xl">
            <p className="text-brand-brown/80 mb-2">
              <strong className="text-brand-brown">Nie ma Twojej dzielnicy?</strong>
            </p>
            <p className="text-brand-brown/70">
              Dowozimy również poza wymienione obszary. Zadzwoń - sprawdzimy czas i koszt dostawy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
