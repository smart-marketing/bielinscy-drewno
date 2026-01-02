"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, CheckCircle, Zap, Handshake, Phone } from "lucide-react";

export default function OurPrinciples() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const principles = [
    {
      icon: Target,
      title: "Mówimy konkretnie",
      description:
        "Nie owijamy w bawełnę. Pytasz o cenę - dostajesz cenę. Pytasz o termin - dostajesz termin. Bez \"zobaczymy\" i \"może\".",
    },
    {
      icon: CheckCircle,
      title: "Sprawdzamy, zanim wyślemy",
      description:
        "Każda dostawa przechodzi kontrolę przed załadunkiem. Proste deski, zgodne wymiary, prawdziwa impregnacja. Nie wysyłamy niczego, czego sami byśmy nie chcieli dostać.",
    },
    {
      icon: Zap,
      title: "Działamy szybko",
      description:
        "2-3 dni na realizację to standard, nie wyjątek. Magazyn w Mirotkach + własny transport = nie blokujesz budowy czekaniem na drewno.",
    },
    {
      icon: Handshake,
      title: "Doradzamy, nie wciskamy",
      description:
        "Nie wiesz, jakie drewno wybrać? Jaka grubość? Jaka impregnacja? Spokojnie. Wypytuj nas - pomagamy dobrać materiał pod projekt i budżet. Za darmo, bez zobowiązań.",
    },
    {
      icon: Phone,
      title: "Jesteśmy dostępni",
      description:
        "Telefon, mail, WhatsApp - kontakt tak, jak Ci wygodnie. Odpowiadamy na bieżąco, nie znikamy na dni.",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#2B6650" }}
    >
      {/* Subtle decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-1/2 -right-1/4 w-full h-full rounded-full opacity-10"
          style={{ border: "1px solid white" }}
        />
        <div 
          className="absolute -bottom-1/2 -left-1/4 w-full h-full rounded-full opacity-10"
          style={{ border: "1px solid white" }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "white" }}
          >
            Proste zasady,{" "}
            <span style={{ color: "#a8e6cf" }}>na których możesz polegać</span>
          </h2>
        </motion.div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative ${
                index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              <div 
                className="h-full p-6 md:p-8 rounded-2xl backdrop-blur-sm transition-all duration-300"
                style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  border: "1px solid rgba(255, 255, 255, 0.2)"
                }}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  <principle.icon className="w-7 h-7" style={{ color: "#a8e6cf" }} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3" style={{ color: "white" }}>
                  {principle.title}
                </h3>

                {/* Description */}
                <p style={{ color: "rgba(255, 255, 255, 0.9)" }} className="leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}