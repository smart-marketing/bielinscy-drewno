"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

export default function ContactFAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Jak szybko mogę dostać wycenę?",
      answer: "Wycenę przygotowujemy w ciągu 24h od otrzymania zapytania. Jeśli dzwonisz w godzinach pracy, często jesteśmy w stanie podać orientacyjną cenę od ręki."
    },
    {
      question: "Czy mogę przyjechać i zobaczyć materiał przed zakupem?",
      answer: "Tak! Zapraszamy do magazynu w Mirotkach. Możesz zobaczyć materiał na żywo, porównać jakość, porozmawiać o projekcie. Nie potrzebujesz umawiać wizyty - po prostu wpadnij w godzinach otwarcia."
    },
    {
      question: "Ile kosztuje dostawa?",
      answer: "Koszt dostawy zależy od odległości i wielkości zamówienia. Podajemy go zawsze w wycenie. Dla większych zamówień dostawa często wchodzi w cenę. Zadzwoń - policzymy konkretnie dla Twojego zamówienia."
    },
    {
      question: "Czy można płacić kartą?",
      answer: "Tak, akceptujemy płatności kartą, przelewem i gotówką. Dla firm możliwa jest płatność z odroczonym terminem po uzgodnieniu warunków."
    },
    {
      question: "Czy doradzicie, jakie drewno wybrać?",
      answer: "Oczywiście! To właśnie lubimy najbardziej. Opowiedz o swoim projekcie, a podpowiemy, jakie drewno najlepiej sprawdzi się w Twoim przypadku. Doradzamy za darmo, bez zobowiązań."
    },
    {
      question: "Czy realizujecie małe zamówienia?",
      answer: "Tak! Realizujemy zarówno małe zamówienia (altana, ogrodzenie) jak i duże projekty budowlane (domy, hale). Każdy klient jest dla nas ważny."
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--brand-green) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
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
            Najczęściej
            <br className="sm:hidden" /> <span className="text-brand-green">zadawane pytania</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-brown/70 max-w-2xl mx-auto px-4">
            Szybkie odpowiedzi na pytania, które dostajemy najczęściej
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-brand-green/30 shadow-lg' 
                    : 'border-transparent shadow hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg md:text-xl font-bold text-brand-brown pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 bg-brand-green/10 rounded-lg flex items-center justify-center"
                  >
                    <ChevronDown className="w-5 h-5 text-brand-green" />
                  </motion.div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-brand-brown/70 leading-relaxed pt-4 pr-12">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-brand-green/10 via-brand-green/5 to-transparent px-8 md:px-12 py-8 md:py-10 rounded-3xl border-2 border-brand-green/20 shadow-xl max-w-3xl">
            <MessageCircle className="w-12 h-12 text-brand-green mx-auto mb-4" />
            <p className="font-display text-xl md:text-2xl font-bold text-brand-brown mb-4">
              Nie znalazłeś odpowiedzi?
            </p>
            <p className="text-brand-brown/70 mb-6">
              Zadzwoń lub napisz - odpowiemy na wszystkie Twoje pytania
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+48537593186"
                className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-green/90 transition-all shadow-lg"
              >
                <span>Zadzwoń: 537 593 186</span>
              </a>
              <a 
                href="https://wa.me/48537593186"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#128C7E] transition-all shadow-lg"
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
