"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, Mail, Star } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-brand-green via-brand-green/95 to-brand-green/90 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, 50, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Zaczynamy współpracę?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto px-4">
              Ponad 500 dostaw rocznie. 12 lat doświadczenia.
              <br className="hidden sm:block" />
              Dołącz do grona zadowolonych klientów.
            </p>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-semibold">5.0</span>
              </div>

              <div className="text-white/80 text-sm">
                <span className="font-semibold text-white">500+</span> zrealizowanych dostaw
              </div>

              <div className="text-white/80 text-sm">
                <span className="font-semibold text-white">12 lat</span> na rynku
              </div>
            </div>
          </motion.div>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <motion.a
              href="tel:+48537593186"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group bg-white rounded-2xl p-8 shadow-2xl hover:shadow-white/20 transition-all"
            >
              <div className="w-14 h-14 bg-brand-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-brown text-center mb-2">Zadzwoń</h3>
              <p className="text-2xl font-bold text-brand-green text-center mb-2">537 593 186</p>

              <p className="text-2xl font-bold text-brand-green text-center mb-2">695 467 337</p>
              <p className="text-sm text-brand-brown/60 text-center">Pon-Pt 8-16, Sob 8-13</p>
            </motion.a>
            

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/48537593186"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group bg-white rounded-2xl p-8 shadow-2xl hover:shadow-white/20 transition-all"
            >
              <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-brown text-center mb-2">WhatsApp</h3>
              <p className="text-lg font-semibold text-[#25D366] text-center mb-2">Czat na żywo</p>
              <p className="text-sm text-brand-brown/60 text-center">Odpowiadamy na bieżąco</p>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:biuro@bielinscydrewno.pl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group bg-white rounded-2xl p-8 shadow-2xl hover:shadow-white/20 transition-all"
            >
              <div className="w-14 h-14 bg-brand-brown rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-brown text-center mb-2">Email</h3>
              <p className="text-sm font-semibold text-brand-brown text-center mb-2 break-all">biuro@bielinscydrewno.pl</p>
              <p className="text-sm text-brand-brown/60 text-center">Odpowiedź w 24h</p>
            </motion.a>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex flex-wrap justify-center gap-6 text-white/80 text-sm bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Wycena w 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Realizacja 2-3 dni</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Własny transport</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Doradztwo 0 zł</span>
              </div>
            </div>
            
          </motion.div>
        </div>
        
      </div>
      
            {/* Contact Form Section */}
            <section className="py-16 md:py-20 bg-gray-50">
              <div className="container-wide">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-brown mb-4">
                    Lub napisz do nas
                  </h2>
                  <p className="text-lg text-brand-brown/70">
                    Wypełnij formularz, a oddzwonimy w ciągu 24h
                  </p>
                </motion.div>
      
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-1/2 mx-auto"
                >
                  <ContactForm />
                </motion.div>
              </div>
            </section>
    </section>
    
  );
}
