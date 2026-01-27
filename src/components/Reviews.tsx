"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    author: "Anett",
    rating: 5,
    text: "Drewno na więźbę bardzo dobrej jakości, deski (cytuję) genialne 😁 współpraca przebiegła pomyślnie, towar dostarczony na czas. Zero problemów, z czystym sumieniem polecamy! 😊",
    date: "2 miesiące temu"
  },
  {
    author: "Karol Laskowski",
    rating: 5,
    text: "Profesjonalne podejście do klienta. Wysoka jakość. Dostawa na czas. Polecam 👍",
    date: "5 dni temu"
  },
  {
    author: "Aleksandra Schmidt",
    rating: 5,
    text: "Profesjonalna obsługa, dostawa na czas, doświadczenie i konkretna rozmowa, deski tarasowe sosna bardzo dobrej jakości. Jesteśmy bardzo zadowoleni!",
    date: "4 miesiące temu"
  },
  {
    author: "MSG Commodities",
    rating: 5,
    text: "Współpraca bardzo merytoryczna, właściciele z bardzo dużym doświadczeniem zarówno w produkji, jak i w oferowaniu wszelkiego rodzaju produktów z drewna, dobrej jakości.",
    date: "4 lata temu"
  },
  {
    author: "Izabela Dyczewska",
    rating: 5,
    text: "Profesjonalizm, świetna obsługa klienta, polecam serdecznie. Jeszcze wrócę zakupić materiał. Wszystkiego dobrego!",
    date: "2 lata temu"
  },
  {
    author: "Artur Olszewski",
    rating: 5,
    text: "Profesjonalizm w swoim fachu, zrobione na czas a nawet prędzej, pierwszy raz dostałem zwrot kasy już po zakupie, dziękuję firmie i polecam wszystkim",
    date: "3 lata temu"
  },
  {
    author: "Łukasz Szczodrowski",
    rating: 5,
    text: "Profesjonalnie, szybko i bez stresu 😊. Termin rozładunku można ustalić telefonicznie 😊.",
    date: "2 lata temu"
  },
  {
    author: "Nikola Szwarc",
    rating: 5,
    text: "Bardzo profesjonalna obsługa, dobre ceny i realizacja zamówienia na czas. POLECAM!!",
    date: "4 lata temu"
  },
  {
    author: "Marcin Sewerynowicz",
    rating: 5,
    text: "Fachowa obsługa. Ceny ok. Duży wybór tarcicy.",
    date: "rok temu"
  },
  {
    author: "Maciej Skarżyński",
    rating: 5,
    text: "Profesjonalna obsługa, duży wybór asortymentu. Polecam",
    date: "2 lata temu"
  },
  {
    author: "Agnieszka Sokalska",
    rating: 5,
    text: "Drewno pierwsza klasa, bardzo dobra obsługa, polecam!",
    date: "2 lata temu"
  },
  {
    author: "JACEK NOGGA",
    rating: 5,
    text: "Jestem bardzo zadowolony, dobra obsługa i doradztwo.",
    date: "7 miesięcy temu"
  }
];

export default function Reviews() {
  const ref = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const slideWidth = carouselRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % reviews.length;
    scrollToSlide(next);
  };

  const prevSlide = () => {
    const prev = currentSlide === 0 ? reviews.length - 1 : currentSlide - 1;
    scrollToSlide(prev);
  };

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--brand-brown) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-green/10 px-4 py-2 rounded-full mb-4">
            <Star className="w-5 h-5 text-brand-green fill-brand-green" />
            <span className="font-bold text-brand-green">Opinie klientów</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-brown mb-4">
            Co mówią o nas <span className="text-brand-green">klienci?</span>
          </h2>
          <p className="text-lg text-brand-brown/70 max-w-2xl mx-auto px-4">
            Sprawdź, dlaczego warto nam zaufać
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4 pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[85%] snap-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                  <Quote className="w-10 h-10 text-brand-green/20 mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-brand-brown/80 mb-4 leading-relaxed min-h-[100px]">
                    "{review.text}"
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-bold text-brand-brown">{review.author}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all z-10"
            aria-label="Poprzednia opinia"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all z-10"
            aria-label="Następna opinia"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`h-0.5 rounded-full transition-all duration-500 ease-out ${
                index === currentSlide 
                  ? 'w-6 bg-brand-green' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Przejdź do opinii ${index + 1}`}
            />
          ))}
        </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reviews.slice(0, 8).map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <Quote className="w-10 h-10 text-brand-green/20 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-brand-brown/80 mb-4 leading-relaxed text-sm">
                "{review.text}"
              </p>

              <div className="pt-4 border-t border-gray-100">
                <p className="font-bold text-brand-brown">{review.author}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/search?client=firefox-b-d&hs=qWDp&sca_esv=09a4dc9e07e27686&sxsrf=ANbL-n5uAFb2xNGiiSe6Z8U34jX1hoNf2g:1769169377914&si=AL3DRZFIhG6pAqfNLal55wUTwygCG0fClF3UxiOmgw9Hq7nbWfVuVj_mYb498RgwTlpnVJqk9Miiunm89pVTQlypGPUIJC-YBn9b8uBehPLQDwEvM6ioAzI9CEsAOusMGmzItDo-XQMenryI9ajt0G7KNQJs3Hb6nmdrSTNltFP2TfX6lDhplSo%3D&q=Bieli%C5%84scy+Drewno+%28daw.+Tartak+Mirotki%29+Opinie&sa=X&ved=2ahUKEwisscXCzaGSAxU9U1UIHd83I7EQ0bkNegQIKRAH&biw=1485&bih=703&dpr=1.25&aic=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-brand-green text-brand-green rounded-xl font-bold hover:bg-brand-green hover:text-white transition-all shadow-lg hover:shadow-xl"
          >
            <Star className="w-5 h-5 fill-current" />
            <span>Zobacz wszystkie opinie na Google</span>
          </a>
        </motion.div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}