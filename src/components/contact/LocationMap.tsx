"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation, Car, Clock } from "lucide-react";

export default function LocationMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = [
    {
      icon: Car,
      title: "Z Gdańska",
      time: "~1h",
      route: "A1 kierunek Grudziądz → zjazd Kopytowo → 5 min lokalną drogą"
    },
    {
      icon: Car,
      title: "Z Grudziądza",
      time: "~45 min",
      route: "A1 kierunek Gdańsk → zjazd Kopytowo → 5 min lokalną drogą"
    },
    {
      icon: Car,
      title: "Z Torunia / Bydgoszczy",
      time: "~1-1,5h",
      route: "A1 kierunek Gdańsk → zjazd Kopytowo → 5 min lokalną drogą"
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
            Jak do nas
            <br className="sm:hidden" /> <span className="text-brand-green">dojechać?</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-brown/70 max-w-2xl mx-auto px-4">
            Magazyn w Mirotkach - 5 minut od zjazdu Kopytowo z autostrady A1
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column - Address & Directions */}
          <div className="space-y-8">
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gradient-to-br from-brand-green to-brand-green/90 text-white rounded-3xl p-8 md:p-10 shadow-2xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Adres magazynu</h3>
                  <p className="text-lg text-white/90 mb-1">Mirotki</p>
                  <p className="text-white/80 mb-4">gmina Skórcz, woj. pomorskie</p>
                  <a 
                    href="https://maps.google.com/?q=Mirotki,Skórcz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-xl font-semibold transition-all text-sm"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Otwórz w Google Maps</span>
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-white/20">
                <p className="text-sm text-white/80 mb-2 font-semibold">Jak dojechać?</p>
                <p className="text-white/90 text-sm leading-relaxed">
                  Autostrada A1, zjazd <strong>Kopytowo</strong> (między Gdańskiem a Grudziądzem), 
                  następnie tylko <strong>5 minut</strong> lokalną drogą do Mirotek.
                </p>
              </div>
            </motion.div>

            {/* Directions */}
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-xl font-bold text-brand-brown flex items-center gap-2"
              >
                <Car className="w-6 h-6 text-brand-green" />
                <span>Dojazd z głównych miast</span>
              </motion.h3>

              {directions.map((direction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 + index * 0.1 }}
                  className="bg-white border-2 border-brand-green/10 rounded-2xl p-6 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-brand-brown">{direction.title}</h4>
                    <div className="flex items-center gap-2 bg-brand-green/10 px-3 py-1 rounded-lg">
                      <Clock className="w-4 h-4 text-brand-green" />
                      <span className="text-sm font-semibold text-brand-green">{direction.time}</span>
                    </div>
                  </div>
                  <p className="text-brand-brown/70 text-sm leading-relaxed">
                    {direction.route}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-green/10">
              {/* Map Container */}
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
                {/* Placeholder for actual map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 text-brand-green mx-auto mb-4" />
                    <p className="text-brand-brown font-semibold mb-2">
                      Mirotki, gm. Skórcz
                    </p>
                    <p className="text-brand-brown/60 text-sm mb-6">
                      Autostrada A1, zjazd Kopytowo
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Mirotki,Skórcz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-brand-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-green/90 transition-all shadow-lg"
                    >
                      <Navigation className="w-5 h-5" />
                      <span>Nawiguj</span>
                    </a>
                  </div>
                </div>

                {/* You can replace this with actual Google Maps iframe */}
                {/* 
                <iframe
                  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                */}
              </div>

              {/* Map Footer */}
              <div className="p-6 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-brand-brown mb-1">
                      Centrum północnej Polski
                    </p>
                    <p className="text-xs text-brand-brown/60">
                      Równo oddaleni od Gdańska, Grudziądza, Torunia
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-green" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
