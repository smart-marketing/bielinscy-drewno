"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, HelpCircle, Package, CreditCard } from "lucide-react";

export default function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const principles = [
    { icon: Phone, text: "Dzwonisz - odbieramy" },
    { icon: HelpCircle, text: "Pytasz - doradzamy" },
    { icon: Package, text: "Zamawiasz - dostarczamy w 2-3 dni" },
    { icon: CreditCard, text: "Płacisz - jak Ci wygodnie" },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#4C3B34" }}
            >
              Jak to się zaczęło?{" "}
              <span style={{ color: "#2B6650" }}>Od frustracji z tartakami.</span>
            </h2>
          </motion.div>

          {/* Story content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left column - main story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                W 2013 roku otworzyliśmy Bielińscy Drewno, bo wiedzieliśmy jedną rzecz:{" "}
                <strong style={{ color: "#2B6650" }}>da się lepiej</strong>.
              </p>

              <div 
                className="space-y-4 pl-4"
                style={{ borderLeft: "4px solid rgba(43, 102, 80, 0.2)" }}
              >
                <p className="text-gray-600">
                  Lepiej niż tartaki, gdzie musisz dzwonić 10 razy, żeby ktoś w końcu odebrał.
                </p>
                <p className="text-gray-600">
                  Lepiej niż składy, gdzie &quot;może będzie za 3 tygodnie, a może nie&quot;.
                </p>
                <p className="text-gray-600">
                  Lepiej niż miejsca, gdzie połowa desek nadaje się tylko na opał.
                </p>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-lg font-medium"
                style={{ color: "#4C3B34" }}
              >
                Postawiliśmy na prostotę:
              </motion.p>
            </motion.div>

            {/* Right column - principles */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-4"
            >
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ 
                    background: "linear-gradient(to right, rgba(43, 102, 80, 0.08), transparent)",
                    borderLeft: "4px solid #2B6650"
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(43, 102, 80, 0.1)" }}
                  >
                    <principle.icon className="w-5 h-5" style={{ color: "#2B6650" }} />
                  </div>
                  <span className="text-lg font-medium" style={{ color: "#4C3B34" }}>
                    {principle.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-16 text-center"
          >
            <div 
              className="inline-block px-8 py-6 rounded-2xl text-white relative"
              style={{ backgroundColor: "#4C3B34" }}
            >
              <div 
                className="absolute -top-3 left-8 text-5xl opacity-50"
                style={{ color: "#2B6650" }}
              >
                &ldquo;
              </div>
              <p className="text-lg md:text-xl font-medium relative z-10">
                Żadnej filozofii. Żadnych wykrętów.{" "}
                <span style={{ color: "#a8e6cf" }}>Po prostu uczciwy handel drewnem.</span>
              </p>
            </div>
          </motion.div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-16 p-8 rounded-2xl border border-gray-100"
            style={{ background: "linear-gradient(135deg, rgba(43, 102, 80, 0.05), white, rgba(76, 59, 52, 0.05))" }}
          >
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Dziś obsługujemy{" "}
              <strong style={{ color: "#2B6650" }}>setki budów rocznie</strong> - od małych 
              projektów weekendowych po duże konstrukcje dachowe. Nasi klienci to 
              inwestorzy indywidualni, lokalni fachowcy i firmy budowlane, którzy wiedzą, 
              że <strong style={{ color: "#4C3B34" }}>czas to pieniądze</strong>, a{" "}
              <strong style={{ color: "#4C3B34" }}>jakość to fundament</strong>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}