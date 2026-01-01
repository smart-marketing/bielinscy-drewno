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
      className="py-20 md:py-32 bg-gradient-to-b from-[#2B6650] to-[#1e4d3c] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-full h-full"
        >
          <div className="w-full h-full border border-white/5 rounded-full" />
        </motion.div>
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-full h-full"
        >
          <div className="w-full h-full border border-white/5 rounded-full" />
        </motion.div>
        {/* Subtle wood texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            white 0px,
            transparent 2px,
            transparent 40px
          )`
        }} />
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Proste zasady,{" "}
            <span className="text-[#98d4bb]">na których możesz polegać</span>
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
              <div className="h-full p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:bg-[#98d4bb]/20 transition-colors"
                >
                  <principle.icon className="w-7 h-7 text-[#98d4bb]" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 leading-relaxed">
                  {principle.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
