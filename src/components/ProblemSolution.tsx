"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Zap, CheckCircle2, CreditCard, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Phone,
    title: "Kontakt, kiedy potrzebujesz",
    description:
      "Odbieramy telefony, odpowiadamy na maile i WhatsAppa. Doradzamy w doborze materiału - za darmo, bez zobowiązań. Możesz wypytać nas o wszystko przed zakupem.",
  },
  {
    icon: Zap,
    title: "Realizacja w 2-3 dni",
    description:
      "Nawet duże zamówienia. Magazyn w Mirotkach + własny transport = nie blokujesz budowy czekaniem na materiał.",
  },
  {
    icon: CheckCircle2,
    title: "Jakość sprawdzona przed wysyłką",
    description:
      "Wybieramy proste deski, zgodne wymiary, prawdziwa impregnacja ciśnieniowa. Każdą dostawę kontrolujemy - dostajesz tylko materiał, na którym można polegać.",
  },
  {
    icon: CreditCard,
    title: "Płatność jak w normalnej firmie",
    description:
      'Karta, przelew, gotówka - jak Ci wygodnie. Bez "tylko gotówka" i innych wymówek.',
  },
];

export default function ProblemSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="container-wide relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-brown mb-6"
          >
            Kupujesz drewno na budowę?
            <br />
            <span className="text-brand-green">Wiesz, na czym Ci zależy.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-brand-brown/70 leading-relaxed"
          >
            Chcesz mieć pewność, że dostaniesz dokładnie to, co zamówiłeś. Że
            deski będą proste, a nie wykrzywione. Że impregnacja to prawdziwa
            ochrona, a nie kosmetyka na jeden sezon. Że czekasz dni, nie tygodnie.
          </motion.p>
        </div>

        {/* Gwarancja Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-brand-green/10 text-brand-green px-6 py-3 rounded-full text-lg font-semibold">
            W Bielińscy Drewno dostajesz gwarancję spokoju:
          </span>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative bg-cream rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-500"
            >
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-green group-hover:scale-110 transition-all duration-500">
                <benefit.icon className="w-7 h-7 text-brand-green group-hover:text-white transition-colors duration-500" />
              </div>

              <h3 className="font-display text-xl md:text-2xl font-semibold text-brand-brown mb-3">
                {benefit.title}
              </h3>
              <p className="text-brand-brown/70 leading-relaxed">
                {benefit.description}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green to-brand-green-light rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <a
            href="tel:+48XXXXXXXXX"
            className="inline-flex items-center gap-3 text-brand-green font-semibold text-lg hover:gap-4 transition-all duration-300 group"
          >
            <span>Sprawdź, jak szybko zrealizujemy Twoje zamówienie</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
