"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Ruler, Package, CheckCircle2 } from "lucide-react";

interface Size {
  size: string;
  specs: string;
  details?: string;
  availability?: string;
}

interface ProductSizesProps {
  sizes: Size[];
}

export default function ProductSizes({ sizes }: ProductSizesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-cream via-white to-cream">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-brand-green/10 rounded-full">
            <Ruler className="w-5 h-5 text-brand-green" />
            <span className="text-brand-green font-semibold">Dostępne wymiary</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-brown mb-6">
            Wybierz <span className="text-brand-green">wymiar</span>
          </h2>
          
          <p className="text-lg text-brand-brown/70 max-w-2xl mx-auto">
            Pełen zakres wymiarów zawsze w magazynie. Zapytaj o dostępność konkretnych długości.
          </p>
        </motion.div>

        {/* Sizes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sizes.map((size, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-brand-green/10"
            >
              {/* Size Header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-brand-brown/10">
                <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl text-brand-brown">
                  {size.size}
                </h3>
              </div>

              {/* Specs */}
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <p className="text-brand-brown/80 text-sm">
                    <span className="font-semibold">Specyfikacja:</span> {size.specs}
                  </p>
                </div>

                {size.details && (
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <p className="text-brand-brown/80 text-sm">
                      <span className="font-semibold">Szczegóły:</span> {size.details}
                    </p>
                  </div>
                )}

                {size.availability && (
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <p className="text-brand-brown/80 text-sm">
                      <span className="font-semibold">Dostępność:</span> {size.availability}
                    </p>
                  </div>
                )}
              </div>

              {/* Quick Action */}
              <a
                href="tel:+48537593186"
                className="block w-full mt-4 py-3 px-4 bg-brand-green/10 text-brand-green text-center font-semibold rounded-xl hover:bg-brand-green hover:text-white transition-all duration-300"
              >
                Zapytaj o ten wymiar
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-white rounded-2xl p-6 shadow-lg border border-brand-green/10">
            <p className="text-brand-brown/80 mb-4">
              <strong>Nie znalazłeś odpowiedniego wymiaru?</strong>
            </p>
            <p className="text-brand-brown/70 mb-4">
              Zadzwoń - sprawdzimy dostępność innych długości lub zaproponujemy alternatywę.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+48537593186" className="btn-primary">
                Zadzwoń: 537 593 186
              </a>
              <a href="https://wa.me/48537593186" className="btn-secondary">
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
