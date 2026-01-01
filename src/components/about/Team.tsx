"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Heart, Shield, MessageCircle } from "lucide-react";

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Users,
      text: "Znają się na drewnie (nie czytają ze skryptu)",
    },
    {
      icon: Shield,
      text: "Rozumieją budowę (sami przez to przeszli)",
    },
    {
      icon: Heart,
      text: "Doradzają uczciwie (bo sami kupowaliby tak dla siebie)",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #4C3B34 1px, transparent 0)`,
        backgroundSize: "32px 32px"
      }} />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4C3B34] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Kto stoi za{" "}
              <span className="text-[#2B6650]">Bielińscy Drewno?</span>
            </h2>
          </motion.div>

          {/* Main content card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="p-8 md:p-12 rounded-3xl bg-white shadow-xl shadow-[#2B6650]/5 border border-gray-100">
              {/* Decorative quote mark */}
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-[#2B6650] flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8"
              >
                Nie jesteśmy anonimową hurtownią.{" "}
                <strong className="text-[#4C3B34]">
                  Jesteśmy rodzinną firmą
                </strong>
                , która od 12 lat buduje biznes na zaufaniu i konkretach.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg text-gray-600 mb-8"
              >
                Gdy dzwonisz, rozmawiasz z ludźmi, którzy:
              </motion.p>

              {/* Values list */}
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#2B6650]/5 to-transparent"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#2B6650]/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-[#2B6650]" />
                    </div>
                    <span className="text-lg text-[#4C3B34]">{value.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="mt-10 p-6 rounded-2xl bg-[#4C3B34] text-white text-center"
              >
                <p className="text-lg md:text-xl font-medium">
                  Małe firmy mają jedną przewagę nad korporacjami:{" "}
                  <span className="text-[#98d4bb]">
                    dbamy o każdego klienta, jakby był jedynym.
                  </span>
                </p>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2B6650]/5 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#4C3B34]/5 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
