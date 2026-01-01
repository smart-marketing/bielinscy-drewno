"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Car, Package } from "lucide-react";

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const regions = [
    { city: "Gdańsk, Tczew, Starogard", time: "~1h" },
    { city: "Grudziądz, Toruń, Bydgoszcz", time: "~1-1,5h" },
    { city: "Elbląg, Malbork, Kwidzyn", time: "~1h" },
    { city: "Olsztyn, Chojnice", time: "~1,5h" },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair)", color: "#4C3B34" }}
              >
                Gdzie nas znajdziesz?{" "}
                <span style={{ color: "#2B6650" }}>5 minut od autostrady.</span>
              </h2>
            </motion.div>

            {/* Address card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 p-6 rounded-2xl bg-white shadow-lg"
              style={{ border: "1px solid rgba(43, 102, 80, 0.2)" }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#2B6650" }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: "#4C3B34" }}>Adres</h3>
                  <p className="text-lg text-gray-700">Mirotki, gmina Skórcz</p>
                  <p className="text-sm text-gray-500 mt-1">
                    (5 min od zjazdu Kopytowo z A1 Grudziądz-Gdańsk)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Why this location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: "#4C3B34" }}>
                <Clock className="w-5 h-5" style={{ color: "#2B6650" }} />
                Dlaczego ta lokalizacja?
              </h3>
              <p className="text-gray-600 mb-6">
                Bo jesteś u nas maksymalnie w 1,5h z całego regionu:
              </p>

              <div className="space-y-3">
                {regions.map((region, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700">{region.city}</span>
                    <span className="font-bold" style={{ color: "#2B6650" }}>{region.time}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Highlight */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-8 text-lg font-medium p-4 rounded-xl"
              style={{ 
                color: "#4C3B34", 
                backgroundColor: "rgba(76, 59, 52, 0.05)",
                borderLeft: "4px solid #4C3B34"
              }}
            >
              Zdążysz rano po drewno i popołudniu już budujesz.
            </motion.p>

            {/* Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-8 grid sm:grid-cols-2 gap-4"
            >
              <div className="p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <Car className="w-8 h-8 mb-3" style={{ color: "#2B6650" }} />
                <h4 className="font-bold mb-2" style={{ color: "#4C3B34" }}>Odbiór osobisty</h4>
                <p className="text-sm text-gray-600">
                  Możesz przyjechać i odebrać zamówienie osobiście. Załadunek na Twoją przyczepę/samochód - pomagamy.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <Package className="w-8 h-8 mb-3" style={{ color: "#2B6650" }} />
                <h4 className="font-bold mb-2" style={{ color: "#4C3B34" }}>Dostawa</h4>
                <p className="text-sm text-gray-600">
                  Własny transport - dowozimy w całym regionie. Terminowo, bez opóźnień.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right column - Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18816.82!2d18.52!3d53.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47029d2f0f3d9b3b%3A0x4c8e3e3b7a2f1c0a!2sMirotki!5e0!3m2!1spl!2spl!4v1703000000000!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Floating label */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
              style={{ backgroundColor: "#2B6650" }}
            >
              <MapPin className="w-5 h-5 text-white" />
              <span className="font-medium text-white">Bielińscy Drewno</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}