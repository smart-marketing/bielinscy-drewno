"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Ruler, Package, CheckCircle2, X, ZoomIn } from "lucide-react";
import Image from "next/image";

interface Size {
  size: string;
  specs: string;
  details?: string;
  availability?: string;
  image?: string; // ścieżka do zdjęcia w /public
}

interface ProductSizesProps {
  sizes: Size[];
}

export default function ProductSizes({ sizes }: ProductSizesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-brand-green/10"
            >
              {/* Image */}
              {size.image && (
                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={size.image}
                    alt={size.size}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Zoom button */}
                  <button
                    onClick={() => setLightboxImage(size.image!)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                  >
                    <ZoomIn className="w-5 h-5 text-brand-green" />
                  </button>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-brand-green/5 rounded-2xl p-8 max-w-3xl mx-auto border border-brand-green/10">
            <p className="text-brand-brown/80 mb-4">
              <strong className="text-brand-brown">Nie widzisz swojego wymiaru?</strong>
              <br />
              Dzwoń - sprawdzimy dostępność lub przygotujemy pod Twoje zamówienie.
            </p>
            <a
              href="tel:+48537593186"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-white font-bold rounded-xl hover:bg-brand-green/90 transition-all"
            >
              Zadzwoń: 537 593 186
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-brand-brown" />
          </button>
          <div className="relative max-w-5xl w-full h-[80vh]">
            <Image
              src={lightboxImage}
              alt="Powiększone zdjęcie"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}