"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Navigation } from "lucide-react";

// Zaktualizowana lista według obrazka klienta
const regions = [
  { city: "Starogard, Kwidzyn", time: "ok. 25min" },
  { city: "Grudziądz, Świecie, Tczew", time: "ok. 30 min" },
  { city: "Gdańsk, Malbork", time: "ok. 45 min" },
  { city: "Rydgoszcz, Toruń, Kościerzyna, Tuchola", time: "ok. 60min" },
  { city: "Iława, Brodnica, Chojnice, Elbląg", time: "ok 90min" },
  { city: "Olsztyn, Poznań", time: "ok 120 min" },
];

export default function ServiceArea() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="obszar" className="section-padding bg-white relative overflow-hidden">
      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-brown mb-6">
              Masz nas blisko
            </h2>

            <p className="text-lg text-brand-brown/70 mb-8 leading-relaxed">
              Nasz magazyn w Mirotkach (gm. Skórcz) to strategiczny punkt na
              mapie Pomorza i Kujaw. Tuż przy zjeździe Kopytowo z autostrady A1
              Grudziądz-Gdańsk.
            </p>

            <p className="text-brand-brown/80 font-medium mb-8">
              Dla Ciebie to znaczy:
            </p>

            {/* Regions - zaktualizowana lista */}
            <div className="space-y-4 mb-8">
              {regions.map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-cream rounded-xl"
                >
                  <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-green" />
                  </div>
                  <div className="flex-1">
                    <span className="text-brand-brown font-medium">
                      {region.city}
                    </span>
                  </div>
                  <span className="text-brand-green font-semibold whitespace-nowrap">
                    {region.time}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-brand-green/10 rounded-2xl p-6"
            >
              <p className="text-brand-brown font-medium mb-2">
                🚗 Zdążysz rano po drewno i popołudniu już budujesz.
              </p>
              <p className="text-brand-brown/70">
                Albo zamów dowóz - dowozimy własnym transportem w całym regionie.
              </p>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square lg:aspect-[4/5] bg-cream rounded-3xl overflow-hidden relative shadow-xl">
              {/* Map visualization */}
              <div className="absolute inset-0 p-8">
                <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
                  <ellipse
                    cx="200"
                    cy="200"
                    rx="150"
                    ry="140"
                    fill="#2B6650"
                    fillOpacity="0.1"
                    stroke="#2B6650"
                    strokeWidth="2"
                    strokeOpacity="0.3"
                  />

                  {/* A1 Highway - prawidłowy kierunek Gdańsk (góra-prawo) przez Mirotki do Grudziądz (dół-lewo) */}
                  <path
                    d="M 240 70 Q 220 120, 200 180 Q 185 230, 170 280"
                    stroke="#4C3B34"
                    strokeWidth="3"
                    strokeDasharray="10,5"
                    opacity="0.3"
                  />
                  <text x="210" y="140" fill="#4C3B34" fontSize="12" opacity="0.5">
                    A1
                  </text>

                  {/* Mirotki - center */}
                  <circle cx="200" cy="180" r="12" fill="#2B6650" />
                  <circle cx="200" cy="180" r="20" fill="#2B6650" fillOpacity="0.2">
                    <animate
                      attributeName="r"
                      values="20;30;20"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="fill-opacity"
                      values="0.2;0;0.2"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <text x="220" y="175" fill="#2B6650" fontSize="14" fontWeight="bold">
                    Mirotki
                  </text>

                  {/* Cities */}
                  <circle cx="220" cy="80" r="6" fill="#4C3B34" opacity="0.6" />
                  <text x="230" y="85" fill="#4C3B34" fontSize="11" opacity="0.7">Gdańsk</text>

                  <circle cx="210" cy="120" r="4" fill="#4C3B34" opacity="0.5" />
                  <text x="220" y="125" fill="#4C3B34" fontSize="10" opacity="0.6">Tczew</text>

                  <circle cx="180" cy="150" r="4" fill="#4C3B34" opacity="0.5" />
                  <text x="130" y="155" fill="#4C3B34" fontSize="10" opacity="0.6">Starogard</text>

                  {/* Kościerzyna - przy drodze górze */}
                  <circle cx="160" cy="100" r="4" fill="#4C3B34" opacity="0.5" />
                  <text x="110" y="105" fill="#4C3B34" fontSize="10" opacity="0.6">Kościerzyna</text>

                  <circle cx="180" cy="240" r="5" fill="#4C3B34" opacity="0.5" />
                  <text x="190" y="245" fill="#4C3B34" fontSize="10" opacity="0.6">Grudziądz</text>

                  {/* Świecie */}
                  <circle cx="190" cy="260" r="5" fill="#4C3B34" opacity="0.5" />
                  <text x="200" y="265" fill="#4C3B34" fontSize="10" opacity="0.6">Świecie</text>

                  <circle cx="200" cy="300" r="5" fill="#4C3B34" opacity="0.5" />
                  <text x="210" y="305" fill="#4C3B34" fontSize="10" opacity="0.6">Toruń</text>

                  <circle cx="130" cy="290" r="5" fill="#4C3B34" opacity="0.5" />
                  <text x="85" y="295" fill="#4C3B34" fontSize="10" opacity="0.6">Bydgoszcz</text>

                  {/* Tuchola - po lewej */}
                  <circle cx="110" cy="230" r="5" fill="#4C3B34" opacity="0.5" />
                  <text x="60" y="235" fill="#4C3B34" fontSize="10" opacity="0.6">Tuchola</text>

                  <circle cx="300" cy="100" r="5" fill="#4C3B34" opacity="0.5" />
                  <text x="310" y="105" fill="#4C3B34" fontSize="10" opacity="0.6">Elbląg</text>

                  <circle cx="270" cy="130" r="4" fill="#4C3B34" opacity="0.5" />
                  <text x="280" y="135" fill="#4C3B34" fontSize="10" opacity="0.6">Malbork</text>

                  {/* Kwidzyn - po prawej */}
                  <circle cx="280" cy="180" r="5" fill="#4C3B34" opacity="0.5" />
                  <text x="290" y="185" fill="#4C3B34" fontSize="10" opacity="0.6">Kwidzyn</text>

                  {/* Iława - po prawej */}
                  <circle cx="300" cy="220" r="5" fill="#4C3B34" opacity="0.5" />
                  <text x="310" y="225" fill="#4C3B34" fontSize="10" opacity="0.6">Iława</text>

                  {/* Brodnica - po prawej dole */}
                  <circle cx="270" cy="280" r="5" fill="#4C3B34" opacity="0.5" />
                  <text x="280" y="285" fill="#4C3B34" fontSize="10" opacity="0.6">Brodnica</text>

                  <circle cx="340" cy="180" r="5" fill="#4C3B34" opacity="0.5" />
                  <text x="320" y="200" fill="#4C3B34" fontSize="10" opacity="0.6">Olsztyn</text>

                  <circle cx="80" cy="180" r="4" fill="#4C3B34" opacity="0.5" />
                  <text x="50" y="195" fill="#4C3B34" fontSize="10" opacity="0.6">Chojnice</text>
                </svg>
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-brown text-sm">Magazyn Mirotki</p>
                    <p className="text-xs text-brand-brown/60">Zjazd Kopytowo z A1</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Link */}
            <motion.a
              href="https://www.google.com/maps/place/Bieli%C5%84scy+Drewno+(daw.+Tartak+Mirotki)/@53.7647207,18.5799619,17z/data=!3m1!4b1!4m6!3m5!1s0x470295c353c56b19:0x303da21a2fd86f14!8m2!3d53.7647207!4d18.5825368!16s%2Fg%2F12hk8l_jj?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-4 flex items-center justify-center gap-2 text-brand-green font-medium hover:gap-3 transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Sprawdź trasę w Google Maps</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}