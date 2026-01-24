"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { CityData } from "@/data/cities";

interface CityFAQProps {
  city: CityData;
}

export default function CityFAQ({ city }: CityFAQProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: `Czy dowoźcie drewno do całego ${city.nameGenitive}?`,
      answer: city.slug === 'gdansk' 
        ? `Tak, obsługujemy cały ${city.name} oraz aglomerację trójmiejską (Sopot, Gdynia, okolice). ${city.nearbyDistricts && city.nearbyDistricts.length > 0 ? `Regularnie dowozimy do: ${city.nearbyDistricts.join(", ")}.` : ""} Skontaktuj się z nami, aby potwierdzić dostawę pod Twój adres.`
        : `Tak, obsługujemy cały ${city.name} oraz okolice. ${city.nearbyDistricts && city.nearbyDistricts.length > 0 ? `Regularnie dowozimy do: ${city.nearbyDistricts.join(", ")}.` : ""} Skontaktuj się z nami, aby potwierdzić dostawę pod Twój adres.`
    },
    {
      question: "Jaki jest koszt dostawy?",
      answer: "Koszt dostawy zależy od ilości materiału i dokładnej lokalizacji. Sprawdź w kalkulatorze lub zadzwoń – podamy konkret bez ściemy."
    },
    {
      question: "Czy mogę liczyć na rabat i bezpłatną dostawę?",
      answer: "Oczywiście! Przy większych zamówieniach oferujemy atrakcyjne rabaty i darmową dostawę na terenie Pomorza i okolic."
    },
    {
      question: "Czy drewno jest sezonowane/suszone?",
      answer: "Tak, wszystkie partie drewna konstrukcyjnego są odpowiednio sezonowane zgodnie z normami budowlanymi. Dokumentacja dostępna na życzenie."
    },
    {
      question: "Jak szybko mogę otrzymać zamówienie?",
      answer: "Standardowo 2-3 dni robocze od potwierdzenia zamówienia. W pilnych przypadkach – dzwoń, zrobimy co w naszej mocy."
    },
    {
      question: "Czy mogę odebrać osobiście z Mirotek?",
      answer: `Oczywiście! Wielu klientów z ${city.nameGenitive} woli przyjechać, obejrzeć materiał i zabrać od razu. Zapraszamy – jesteśmy tuż przy A1.`
    },
    {
      question: "Jakie formy płatności akceptujecie?",
      answer: "Karta, przelew, gotówka – jak Ci wygodnie. Bez \"tylko gotówka\" i innych wymówek. To normalna firma."
    },
  ];

  return (
    <section ref={ref} className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-wide px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-brown mb-4 md:mb-6">
            Najczęściej zadawane pytania
          </h2>
          <p className="text-base md:text-lg text-brand-brown/70">
            Odpowiadamy prosto, bez ściemy
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-brand-green/20 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                >
                  <h3 className="font-display text-base md:text-lg lg:text-xl font-bold text-brand-brown group-hover:text-brand-green transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-brand-green" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="text-brand-brown/70 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-brand-brown/70 mb-6 text-base md:text-lg">
            Nie znalazłeś odpowiedzi na swoje pytanie?
          </p>
          <a
            href="tel:+48537593186"
            className="inline-flex items-center gap-3 bg-brand-green text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-green/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Zadzwoń - odpowiemy jak fachowiec fachowcowi
          </a>
        </motion.div>
      </div>
    </section>
  );
}
