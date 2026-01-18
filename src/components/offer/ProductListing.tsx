"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Info, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProductListing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      category: "Deska szorstka",
      title: "Deska szorstka",
      description: "Materiał konstrukcyjno-techniczny. Niska cena, wysoka wszechstronność.",
      image: "/tarcica.jpg",
      features: [
        "Budownictwo - szalunki, deskowanie",
        "Konstrukcje zewnętrzne - wiaty, altany",
        "Transport - palety, skrzynie"
      ],
      applications: "Szalunki, deskowanie, wiaty, palety, zagrody",
      href: "/produkty/deska-szorstka"
    },
    {
      category: "Kantówka mokra szorstka",
      title: "Kantówka mokra szorstka",
      description: "Materiał konstrukcyjno-techniczny. Niesuszona, nieheblowana - najlepsza cena.",
      image: "/kantowka.jpg",
      features: [
        "Więźby dachowe - krokwie, murłaty",
        "Szalunki i konstrukcje tymczasowe",
        "Konstrukcje gospodarcze i ogrodowe"
      ],
      applications: "Więźby dachowe, wiaty, altany, zagrody, konstrukcje pomocnicze",
      href: "/produkty/kantowka-mokra-szorstka",
      note: "⚠️ Drewno kurczy się podczas schnięcia - idealna na konstrukcje surowe"
    },
    {
      category: "Łata i kontrłata",
      title: "Łata i kontrłata",
      description: "Podstawowe elementy konstrukcji dachowych i elewacyjnych.",
      image: "/tarcica.jpg",
      features: [
        "Mokra szorstka - budowlany standard",
        "Suszona strugana - standard premium",
        "Łaty dachowe pod dachówkę"
      ],
      applications: "Konstrukcje dachowe, elewacje wentylowane, ruszty",
      href: "/produkty/lata-kontrlata"
    },
    {
      category: "Więźba dachowa",
      title: "Więźba dachowa",
      description: "Konstrukcja nośna dachu - wybierz standard odpowiedni do projektu.",
      image: "/wiezba.jpg",
      features: [
        "Mokra szorstka - budowa tradycyjna",
        "Suszona strugana C24 - standard premium",
        "Krokwie, płatwie, jętki, murłaty"
      ],
      applications: "Dachy domów, budynki gospodarcze, konstrukcje prefabrykowane",
      href: "/produkty/wiezba-dachowa",
      popular: true,
      note: "💡 Poddasze użytkowe? Wybierz suszoną struganą C24"
    },
    {
      category: "Deska strugana bez pióro-wpustu",
      title: "Deska strugana bez pióro-wpustu",
      description: "Uniwersalny materiał czterostronnie strugany. Gładka powierzchnia, łatwa obróbka.",
      image: "/tarcica.jpg",
      features: [
        "Meble i zabudowy - półki, blaty",
        "Dekoracje - okładziny, listwy",
        "Zastosowania ogrodowe - płoty, skrzynie"
      ],
      applications: "Meble, okładziny, płoty, mała architektura ogrodowa",
      href: "/produkty/deska-strugana-bez-pioro-wpustu"
    },
    {
      category: "Deska strugana na pióro-wpust",
      title: "Deska strugana na pióro-wpust",
      description: "Szczelne, równe łączenie. System pióro-wpust zapewnia stabilność i estetykę.",
      image: "/tarcica.jpg",
      features: [
        "Boazerie ścienne - wykończenie wnętrz",
        "Podbitki i zabudowy dachowe",
        "Elewacje drewniane (po impregnacji)"
      ],
      applications: "Boazerie, elewacje, podbitki, sufity drewniane",
      href: "/produkty/deska-strugana-pioro-wpust"
    },
    {
      category: "Deska tarasowa",
      title: "Deska tarasowa",
      description: "Wytrzymały materiał zewnętrzny. Antypoślizgowa powierzchnia, długa żywotność.",
      image: "/drewno-impregnowane.jpg",
      features: [
        "Tarasy i balkony - powierzchnia antypoślizgowa",
        "Ścieżki ogrodowe, pomosty",
        "Schody i podesty zewnętrzne"
      ],
      applications: "Tarasy, balkony, ścieżki, pomosty, schody zewnętrzne",
      href: "/produkty/deska-tarasowa",
      popular: true,
      note: "✨ Dostępna impregnacja ciśnieniowa na kolor brązowy"
    },
    {
      category: "Kantówka suszona C24/KVH/BSH",
      title: "Kantówka suszona C24/KVH/BSH",
      description: "Wysokiej klasy drewno konstrukcyjne. Suche, stabilne, gotowe do montażu.",
      image: "/kantowka.jpg",
      features: [
        "Domy szkieletowe - klasa C24",
        "Więźby dachowe premium - stabilność",
        "Konstrukcje widoczne - estetyka"
      ],
      applications: "Domy szkieletowe, więźby premium, konstrukcje widoczne, meble",
      href: "/produkty/kantowka-suszona-c24",
      popular: true,
      note: "⭐ Wilgotność 12-18% - stabilność wymiarowa, minimalna praca drewna"
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
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-brown mb-6">
            Pełen asortyment drewna
            <br className="sm:hidden" /> <span className="text-brand-green">budowlanego</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-brown/70 max-w-2xl mx-auto px-4">
            Od podstawowych materiałów konstrukcyjnych po wykończenia premium
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-white to-cream rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-green/10 flex flex-col h-full max-h-[85vh] overflow-hidden"
            >
              {/* Image */}
              {product.image && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Popular Badge */}
                  {product.popular && (
                    <div className="absolute top-4 right-4 bg-brand-green text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10">
                      Popularne
                    </div>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">

              {/* Category Tag */}
              <div className="inline-block mb-4 px-4 py-1.5 bg-brand-green/10 text-brand-green text-sm font-semibold rounded-full">
                {product.category}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl md:text-2xl font-bold text-brand-brown mb-2 group-hover:text-brand-green transition-colors">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-brand-brown/70 mb-4 leading-snug text-sm">
                {product.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6 flex-grow">
                {product.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-brand-brown/80 text-sm leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button with Link */}
              <Link
                href={product.href}
                className="block w-full py-3 px-6 bg-brand-green text-white text-center font-bold rounded-xl hover:bg-brand-green/90 hover:shadow-lg transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2 mt-auto"
              >
                Zobacz szczegóły
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-brand-brown/70 mb-6">
            Nie znalazłeś interesującego Cię wymiaru? Zadzwoń - doradzimy najlepsze rozwiązanie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+48537593186" className="btn-primary">
              Zadzwoń: 537 593 186
            </a>
            <a href="https://wa.me/48537593186" className="btn-secondary">
              Napisz na WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}