"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Car, Clock, Navigation } from "lucide-react";

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cities = [
    { name: "Gdańsk, Tczew, Starogard", time: "~1h", color: "from-brand-green to-brand-green/80" },
    { name: "Grudziądz, Toruń, Bydgoszcz", time: "~1-1,5h", color: "from-brand-green/90 to-brand-green/70" },
    { name: "Elbląg, Malbork, Kwidzyn", time: "~1h", color: "from-brand-green/80 to-brand-green/60" },
    { name: "Olsztyn, Chojnice", time: "~1,5h", color: "from-brand-green/70 to-brand-green/50" }
  ];

  const benefits = [
    {
      icon: Car,
      title: "5 min od A1",
      description: "Zjazd Kopytowo - szybki i wygodny dojazd z całej Polski"
    },
    {
      icon: Navigation,
      title: "Centrum północy",
      description: "Równo oddaleni od Gdańska, Grudziądza, Torunia i Olsztyna"
    },
    {
      icon: Clock,
      title: "Realizacja 2-3 dni",
      description: "Bliska lokalizacja = szybka dostawa, nawet dużych zamówień"
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
            Gdzie nas znajdziesz?
            <br />
            <span className="text-brand-green">5 minut od autostrady.</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-brown/70 max-w-2xl mx-auto px-4">
            Mirotki, gmina Skórcz - idealnie między Gdańskiem a Bydgoszczą
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column - Address & Benefits */}
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
                  <p className="text-white/80">gmina Skórcz, woj. pomorskie</p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/20">
                <p className="text-sm text-white/80 mb-2">Jak dojechać?</p>
                <p className="text-white/90">
                  Autostrada A1, zjazd <strong>Kopytowo</strong> (Grudziądz-Gdańsk), 
                  następnie tylko <strong>5 minut</strong> lokalną drogą
                </p>
              </div>
            </motion.div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 + index * 0.1 }}
                  className="bg-white border-2 border-brand-green/10 rounded-2xl p-6 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-brand-brown mb-1">{benefit.title}</h4>
                      <p className="text-brand-brown/70">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Service Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-brown mb-6">
              Gdzie dowozimy?
            </h3>
            <p className="text-brand-brown/70 mb-8">
              Obsługujemy całe Pomorze, Kujawy i część warmińsko-mazurskiego. 
              Czas dostawy zależy od odległości:
            </p>

            <div className="space-y-4">
              {cities.map((city, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.03, x: 8 }}
                  className={`bg-gradient-to-r ${city.color} text-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5" />
                      <span className="font-semibold">{city.name}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{city.time}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-brand-brown/60 mb-3">
                <strong className="text-brand-brown">Nie ma Twojego miasta?</strong> Zadzwoń - dowozimy również poza standardowy obszar.
              </p>
              <a 
                href="tel:+48537593186"
                className="inline-flex items-center gap-2 text-brand-green font-semibold hover:gap-3 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Zapytaj o dostawę: 537 593 186</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Phone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}
