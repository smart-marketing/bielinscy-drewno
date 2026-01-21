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
      city: "Starogard, Kwidzyn",
      time: "ok. 25min"
    },
    {
      icon: Car,
      city: "Grudziądz, Świecie, Tczew",
      time: "ok. 30 min"
    },
    {
      icon: Car,
      city: "Gdańsk, Malbork",
      time: "ok. 45 min"
    },
    {
      icon: Car,
      city: "Bydgoszcz, Toruń, Kościerzyna, Tuchola",
      time: "ok. 60min"
    },
    {
      icon: Car,
      city: "Iława, Brodnica, Chojnice, Elbląg",
      time: "ok. 90min"
    },
    {
      icon: Car,
      city: "Olsztyn, Poznań",
      time: "ok. 120 min"
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
                <span>Czas dojazdu z głównych miast</span>
              </motion.h3>

              {directions.map((direction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-cream rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-green" />
                  </div>
                  <div className="flex-1">
                    <span className="text-brand-brown font-medium">
                      {direction.city}
                    </span>
                  </div>
                  <span className="text-brand-green font-semibold whitespace-nowrap">
                    {direction.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-full min-h-[500px] lg:sticky lg:top-8"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.391141132372!2d18.57995651187279!3d53.76472384322259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470295c353c56b19%3A0x303da21a2fd86f14!2sBieli%C5%84scy%20Drewno%20(daw.%20Tartak%20Mirotki)!5e0!3m2!1spl!2spl!4v1768917900819!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa lokalizacji - Bielińscy Drewno, Mirotki"
            />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-brand-green/10 via-transparent to-brand-green/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-brand-brown mb-4">
            Nie jesteś pewien drogi?
          </h3>
          <p className="text-brand-brown/70 mb-6">
            Zadzwoń - dokładnie pokierujemy jak dojechać do magazynu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+48537593186"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Zadzwoń: 537 593 186
            </a>
            <a
              href="https://www.google.com/maps/place/Bieli%C5%84scy+Drewno+(daw.+Tartak+Mirotki)/@53.7647238,18.5799565,17z/data=!3m1!4b1!4m6!3m5!1s0x470295c353c56b19:0x303da21a2fd86f14!8m2!3d53.7647207!4d18.5825368!16s%2Fg%2F12hk8l_jj?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <Navigation className="w-5 h-5" />
              Nawigacja Google Maps
            </a>
          </div>
        </motion.div>
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