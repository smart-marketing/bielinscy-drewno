"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, Clock, Truck, CheckCircle, Shield } from "lucide-react";
import Image from "next/image";

interface ProductCTAProps {
  productName: string;
}

export default function ProductCTA({ productName }: ProductCTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Clock,
      text: "Realizacja w 3 dni"
    },
    {
      icon: Truck,
      text: "Własny transport"
    },
    {
      icon: Shield,
      text: "Kontrola jakości"
    },
    {
      icon: CheckCircle,
      text: "Zgodne wymiary"
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-brand-brown via-brand-brown/95 to-brand-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-brand-green rounded-full blur-3xl"
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Zamów <span className="text-brand-green">{productName}</span> już dziś
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Zadzwoń, napisz lub przyjdź do magazynu.<br />
              Wycena w 24h, realizacja w 3 dni.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="tel:+48537593186"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-brand-brown font-bold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg"
            >
              <Phone className="w-6 h-6" />
              Zadzwoń: 537 593 186
            </a>

            <a
              href="https://wa.me/48537593186"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-brand-green text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg"
            >
              <Image 
                src="/whatsapp-svgrepo-com.svg" 
                alt="WhatsApp" 
                width={24} 
                height={24}
                className="brightness-0 invert"
              />
              WhatsApp
            </a>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium text-sm text-center">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
          >
            <h3 className="font-bold text-xl text-white mb-4">
              📍 Magazyn w Mirotkach k. Skórcza
            </h3>
            <p className="text-white/90 mb-2">
              5 minut od zjazdu A1 (Skórcz/Starogard Gdański)
            </p>
            <p className="text-white/80 text-sm">
              Pon-Pt: 7:00-17:00 | Sob: 8:00-14:00
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
