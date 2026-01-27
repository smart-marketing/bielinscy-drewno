"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Truck, ArrowRight } from "lucide-react";
import type { CityData } from "@/data/cities";
import ServiceArea from "../ServiceArea";

interface CityLocationProps {
  city: CityData;
}

export default function CityLocation({ city }: CityLocationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-wide px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-brown mb-4 md:mb-6">
              Blisko {city.nameGenitive}
              <br className="sm:hidden" />
              <span className="text-brand-green"> – {city.driveTime} od Twojej budowy</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-brand-brown/70 max-w-3xl mx-auto">
              Mirotki → {city.name} = {city.driveTime} {city.specificInfo}.
              <br className="hidden sm:block" />
              To oznacza, że drewno budowlane dociera do Ciebie szybciej niż z wielu lokalnych składów 
              obciążonych kolejkami i opóźnieniami.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              {
                icon: Clock,
                title: "Zero przestojów",
                description: "Dostawa punktualna, Twoja ekipa nie czeka"
              },
              {
                icon: Truck,
                title: "Logistyka na poziomie",
                description: "Dowozimy dokładnie tam, gdzie potrzebujesz"
              },
              {
                icon: ArrowRight,
                title: "Oszczędność",
                description: "Mniej czasu przestoju = mniej kosztów"
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-brand-green" />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-brand-brown mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-brand-brown/70 text-sm md:text-base">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
<ServiceArea></ServiceArea>
        </div>
      </div>
    </section>
  );
}