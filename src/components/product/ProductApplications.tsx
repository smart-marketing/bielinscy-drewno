"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

interface Application {
  icon: string;
  title: string;
  items: string[];
}

interface ProductApplicationsProps {
  applications: Application[];
}

export default function ProductApplications({ applications }: ProductApplicationsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-brown mb-6">
            Do czego <span className="text-brand-green">możesz wykorzystać?</span>
          </h2>
          <p className="text-lg text-brand-brown/70 max-w-2xl mx-auto">
            Wszechstronne zastosowania - od konstrukcji po wykończenia
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-cream to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-brand-green/10"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                {app.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold text-brand-brown mb-6 group-hover:text-brand-green transition-colors">
                {app.title}
              </h3>

              {/* Items List */}
              <ul className="space-y-3">
                {app.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-brand-brown/80">{item}</span>
                  </li>
                ))}
              </ul>
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
          <div className="inline-block bg-gradient-to-br from-brand-green/10 to-brand-green/5 rounded-2xl p-8 border-2 border-brand-green/20">
            <p className="text-lg text-brand-brown/80 mb-6 max-w-2xl">
              Nie jesteś pewien, czy ten produkt jest odpowiedni do Twojego projektu?<br />
              <strong className="text-brand-brown">Zadzwoń - doradzamy za darmo!</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+48537593186" className="btn-primary">
                Bezpłatna konsultacja: 537 593 186
              </a>
              <a href="https://wa.me/48537593186" className="btn-whatsapp">
                <img 
                  src="/whatsapp-svgrepo-com.svg" 
                  alt="WhatsApp" 
                  className="w-5 h-5 brightness-0 invert inline mr-2"
                />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
