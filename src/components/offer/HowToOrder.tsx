"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, FileText, Truck, CheckCircle } from "lucide-react";

export default function HowToOrder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Kontakt",
      description: "Dzwonisz, piszesz maila lub WhatsAppa. Opisujesz projekt i co potrzebujesz.",
      details: [
        "Telefon: 537 593 186",
        "WhatsApp - najszybszy kontakt",
        "Email: biuro@bielinscydrewno.pl"
      ],
      color: "from-brand-green to-brand-green/80"
    },
    {
      number: "02",
      icon: FileText,
      title: "Wycena",
      description: "Przygotowujemy szczegółową wycenę z dokładnymi wymiarami i cenami.",
      details: [
        "Wycena w ciągu 24h",
        "Szczegółowy kosztorys",
        "Doradzamy w doborze materiału"
      ],
      color: "from-brand-green/90 to-brand-green/70"
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Realizacja",
      description: "Po akceptacji wyceny kompletujemy zamówienie i kontrolujemy jakość.",
      details: [
        "Kompletowanie materiału",
        "Kontrola jakości przed wysyłką",
        "Pakowanie i zabezpieczenie"
      ],
      color: "from-brand-green/80 to-brand-green/60"
    },
    {
      number: "04",
      icon: Truck,
      title: "Dostawa",
      description: "Dowozimy własnym transportem w 2-3 dni. Możliwy też odbiór osobisty.",
      details: [
        "Dostawa w 2-3 dni",
        "Własny transport",
        "Odbiór osobisty z Mirotek"
      ],
      color: "from-brand-green/70 to-brand-green/50"
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-10 w-96 h-96 border-4 border-brand-green rounded-full"
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
            Jak złożyć
            <br className="sm:hidden" /> <span className="text-brand-green">zamówienie?</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-brown/70 max-w-2xl mx-auto px-4">
            4 proste kroki od kontaktu do dostawy
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connecting Line - Desktop only */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:block absolute top-1/2 -right-5 w-10 h-0.5 bg-gradient-to-r from-brand-green/30 to-transparent" />
                )}

                <div className={`bg-gradient-to-br ${step.color} text-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full`}>
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-brand-green">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 ml-12">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-white/80">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="inline-block bg-white rounded-3xl px-8 md:px-12 py-8 md:py-10 shadow-xl border-2 border-brand-green/20 max-w-3xl">
            <p className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-brand-brown mb-6">
              Nie wiesz, jakie drewno wybrać?
            </p>
            <p className="text-brand-brown/70 mb-6">
              Wypytuj nas przed zakupem - doradzamy <strong>za darmo, bez zobowiązań</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+48537593186"
                className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-green/90 transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Zadzwoń: 537 593 186</span>
              </a>
              <a 
                href="https://wa.me/48537593186"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-xl"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
