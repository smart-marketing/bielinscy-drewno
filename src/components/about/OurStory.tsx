"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, Zap, CheckCircle } from "lucide-react";

export default function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      year: "2013",
      icon: Lightbulb,
      title: "Frustracja z tartakami",
      description: "Wiedzieliśmy, że da się lepiej. Lepiej niż dzwonić 10 razy. Lepiej niż czekać 3 tygodnie. Lepiej niż deski nadające się na opał."
    },
    {
      year: "2015",
      icon: Target,
      title: "Jasna filozofia",
      description: "Dostarczamy drewno tak, jakbyśmy kupowali je dla siebie. Zero wykrętów, zero niespodzianek."
    },
    {
      year: "2020",
      icon: Zap,
      title: "Rozwój i skala",
      description: "Magazyn 5 min od A1. Własny transport. Realizacja w 2-3 dni nawet dużych zamówień."
    },
    {
      year: "Dziś",
      icon: CheckCircle,
      title: "1000+ dostaw rocznie",
      description: "Od domów jednorodzinnych po duże projekty budowlane. Pomorze, Kujawy, północna Polska."
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--brand-brown) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-brown mb-6">
            Jak to się zaczęło?
            <br />
            <span className="text-brand-green">Od frustracji z tartakami.</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-brown/70 max-w-2xl mx-auto px-4">
            W 2013 roku otworzyliśmy Bielińscy Drewno, bo wiedzieliśmy jedną rzecz: <strong className="text-brand-green">da się lepiej</strong>.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative mb-12 md:mb-16 last:mb-0"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                {/* Year Badge - Mobile Top, Desktop Left */}
                <div className="flex-shrink-0 order-1 md:order-1">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-green to-brand-green/80 text-white rounded-2xl font-bold text-lg shadow-lg">
                    {item.year}
                  </div>
                </div>

                {/* Icon - Mobile Top, Desktop Center */}
                <div className="flex-shrink-0 order-2 md:order-2">
                  <div className="w-14 h-14 bg-white border-4 border-brand-green/20 rounded-full flex items-center justify-center shadow-md">
                    <item.icon className="w-6 h-6 text-brand-green" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-grow order-3 md:order-3">
                  <div className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-2xl shadow-lg border border-brand-green/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-brown mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-brand-brown/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connecting Line - Only on Desktop */}
              {index < timeline.length - 1 && (
                <div className="hidden md:block absolute left-[50px] top-[80px] w-0.5 h-16 bg-gradient-to-b from-brand-green/40 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 md:mt-24 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-brand-green/10 to-transparent px-8 py-6 rounded-2xl border-2 border-brand-green/20">
            <p className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-brand-brown">
              Nie jesteśmy perfekcyjni,
              <br className="hidden sm:block" />
              ale <span className="text-brand-green">jesteśmy uczciwi</span> i dostępni.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
