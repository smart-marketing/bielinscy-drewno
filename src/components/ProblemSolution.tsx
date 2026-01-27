"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Zap, CheckCircle2, CreditCard, ArrowRight, Sparkles } from "lucide-react";

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
      "Wybieramy proste deski, zgodne wymiary, prawdziwa impregnacja. Każdą dostawę kontrolujemy - dostajesz tylko materiał, na którym można polegać.",
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
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentCard, setCurrentCard] = useState(0);

  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setCurrentCard(index);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentCard(newIndex);
    }
  };

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-white via-cream/30 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-20 right-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-brand-brown/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-5 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Rozumiemy Twoje potrzeby</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-brown mb-6 leading-tight"
          >
            Kupujesz drewno na budowę?
            <br />
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-brand-green inline-block mt-2 relative"
            >
              Wiesz, na czym Ci zależy.
              <motion.span
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-brand-green/30 rounded-full"
              />
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-brand-brown/70 leading-relaxed max-w-3xl mx-auto"
          >
            Chcesz mieć pewność, że dostaniesz dokładnie to, co zamówiłeś. Że
            deski będą proste, a nie wykrzywione. Że impregnacja to prawdziwa
            ochrona, a nie kosmetyka na jeden sezon. Że czekasz dni, nie tygodnie.
          </motion.p>
        </div>

        {/* Gwarancja Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-brand-green/20 blur-xl rounded-full" />
            <span className="relative inline-block bg-gradient-to-r from-brand-green to-brand-green/80 text-white px-8 py-4 rounded-2xl text-base md:text-lg font-bold shadow-lg">
              W Bielińscy Drewno dostajesz gwarancję spokoju:
            </span>
          </div>
        </motion.div>

        {/* DESKTOP: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 md:mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-3xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-brand-brown/5"
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-green/80 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl md:text-2xl font-bold text-brand-brown mb-4 group-hover:text-brand-green transition-colors duration-300">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-brand-brown/70 leading-relaxed text-base">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-green via-brand-green/80 to-transparent rounded-b-3xl"
              />
            </motion.div>
          ))}
        </div>

        {/* MOBILE: Carousel with Peek Effect */}
        <div className="md:hidden mb-12 relative">
          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4 -mx-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex-shrink-0 w-[85%] snap-center"
              >
                <div className="group relative bg-white rounded-3xl p-6 shadow-lg border border-brand-brown/5 h-full">
                  {/* Gradient accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 to-transparent rounded-3xl opacity-0 group-active:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-brand-green/80 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-brand-brown mb-3">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-brand-brown/70 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-green via-brand-green/80 to-transparent rounded-b-3xl" />
                </div>
              </motion.div>
            ))}
          </div>


</div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <a
            href="tel:+48537593186"
            className="inline-flex items-center gap-3 bg-brand-green text-white px-8 py-4 rounded-2xl font-bold text-base md:text-lg hover:bg-brand-green/90 hover:gap-5 transition-all duration-300 group shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5" />
            <span>Sprawdź, jak szybko zrealizujemy Twoje zamówienie</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Custom scrollbar hide */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}