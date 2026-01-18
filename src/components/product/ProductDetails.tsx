"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, AlertCircle, Lightbulb } from "lucide-react";

interface ProductDetailsProps {
  product: {
    features: Array<{
      title: string;
      description: string;
    }>;
    advantages?: string[];
    limitations?: string[];
    practicalTip?: {
      title: string;
      content: string;
    };
  };
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container-wide">
        {/* Features Grid */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-brown text-center mb-12"
          >
            Kluczowe <span className="text-brand-green">cechy</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-cream to-white p-6 rounded-2xl border border-brand-green/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl text-brand-brown mb-2">
                  {feature.title}
                </h3>
                <p className="text-brand-brown/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advantages & Limitations */}
        {(product.advantages || product.limitations) && (
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Advantages */}
            {product.advantages && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="bg-green-50 border-2 border-brand-green/20 rounded-2xl p-8"
              >
                <h3 className="font-display text-2xl font-bold text-brand-brown mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  Zalety
                </h3>
                <ul className="space-y-3">
                  {product.advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-brand-brown/90">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Limitations */}
            {product.limitations && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8"
              >
                <h3 className="font-display text-2xl font-bold text-brand-brown mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  Ograniczenia
                </h3>
                <ul className="space-y-3">
                  {product.limitations.map((limitation, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-brand-brown/90">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        )}

        {/* Practical Tip */}
        {product.practicalTip && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="bg-gradient-to-br from-brand-green/10 to-brand-green/5 border-2 border-brand-green/20 rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-brand-brown mb-3">
                  {product.practicalTip.title}
                </h3>
                <p className="text-brand-brown/80 leading-relaxed text-lg">
                  {product.practicalTip.content}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
