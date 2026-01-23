"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Check, Sparkles, ArrowRight, Zap, Shield, Clock, Facebook } from "lucide-react";
import Image from "next/image";
import ContactForm from "./ContactForm";

const guarantees = [
  "Proste deski sprawdzone przed załadunkiem",
  "Prawdziwa impregnacja, która chroni na lata",
  "Wymiary zgodne z zamówieniem",
  "Realizacja w 2-3 dni, nie tygodnie",
];

const stats = [
  { number: "1000+", label: "Dostaw rocznie", icon: Zap },
  { number: "12", label: "Lat doświadczenia", icon: Shield },
  { number: "2-3", label: "Dni realizacji", icon: Clock },
];

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section
        ref={ref}
        id="kontakt-cta"
        className="py-16 md:py-24 bg-gradient-to-br from-brand-green via-brand-green/95 to-brand-green/90 relative overflow-hidden pt-24 sm:pt-16"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 0.15, scale: 1 } : {}}
            transition={{ duration: 1.5 }}
            className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-white rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-white rounded-full blur-3xl"
          />
        </div>

        <div className="container-wide relative z-10">
          {/* MOBILE & TABLET: Stack Layout */}
          <div className="lg:hidden">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-bold border border-white/30 shadow-xl">
                <Sparkles className="w-4 h-4" />
                <span>Od 2013 roku • Setki zadowolonych klientów</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-6"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight px-4">
                Twoja budowa zasługuje na materiał,{" "}
                <span className="text-white/90">na którym można polegać</span>
              </h2>
              <p className="text-base text-white/80 px-6 leading-relaxed">
                Od 2013 roku dostarczamy drewno setkom budów - od małych altan po duże konstrukcje dachowe.
              </p>
            </motion.div>

            {/* Guarantees */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-2 mb-6"
            >
              {guarantees.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-3 py-2.5 rounded-xl border border-white/20"
                >
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-brand-green" />
                  </div>
                  <span className="text-xs text-white font-medium leading-tight">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Mobile Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="space-y-3 mb-6"
            >
              {/* Phone */}
              <a
                href="tel:+48537593186"
                className="group relative overflow-hidden bg-white text-brand-green px-6 py-4 rounded-2xl font-bold text-base shadow-2xl hover:shadow-white/20 transition-all hover:scale-105 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-green" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-brand-green/70 font-medium">Zadzwoń teraz</div>
                    <div className="text-lg font-black">537 593 186</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-brand-green/60 group-hover:text-brand-green group-hover:translate-x-1 transition-all" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/48537593186"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-[#25D366] text-white px-6 py-4 rounded-2xl font-bold text-base shadow-2xl hover:shadow-green-500/20 transition-all hover:scale-105 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Image
                      src="/whatsapp-svgrepo-com.svg"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                      className="brightness-0 invert"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-white/80 font-medium">Szybka wycena przez</div>
                    <div className="text-lg font-black">WhatsApp</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100084814568695"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-[#1877F2] text-white px-6 py-4 rounded-2xl font-bold text-base shadow-2xl hover:shadow-blue-500/20 transition-all hover:scale-105 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-white/80 font-medium">Odwiedź nas na</div>
                    <div className="text-lg font-black">Facebook</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            </motion.div>

            {/* Stats - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-3 gap-3"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 text-center"
                >
                  <div className="text-xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-[10px] text-white/80 font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* DESKTOP: Side by Side Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-bold border border-white/30 shadow-xl mb-8"
              >
                <Sparkles className="w-5 h-5" />
                <span>Od 2013 roku • Setki zadowolonych klientów</span>
              </motion.div>

              {/* Headline */}
              <h2 className="font-display text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
                Twoja budowa zasługuje na materiał,{" "}
                <span className="text-white/90">na którym można polegać</span>
              </h2>

              <p className="text-lg text-white/90 mb-10 leading-relaxed">
                Od 2013 roku dostarczamy drewno setkom budów - od małych altan po duże konstrukcje dachowe.
                Nasze drewno stoi w dachach, tarasach, ogrodzeniach w całym regionie.
              </p>

              {/* Guarantees */}
              <div className="space-y-4 mb-10">
                {guarantees.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-5 py-4 rounded-xl border border-white/20"
                  >
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-brand-green" />
                    </div>
                    <span className="text-base text-white font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="grid grid-cols-3 gap-6"
              >
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
                    >
                      <IconComponent className="w-8 h-8 text-white mx-auto mb-3" />
                      <div className="text-3xl font-black text-white mb-1">{stat.number}</div>
                      <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right Column - CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Phone Button */}
              <motion.a
                href="tel:+48537593186"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="group relative overflow-hidden bg-white text-brand-green px-8 py-6 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all hover:scale-105 flex items-center justify-between"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />

                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center shadow-lg">
                      <Phone className="w-8 h-8 text-brand-green" />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-2xl bg-brand-green/50"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-brand-green/70 font-medium">Zadzwoń teraz</div>
                    <div className="text-2xl font-black text-brand-green">537 593 186</div>
                  </div>
                </div>

                <ArrowRight className="w-6 h-6 text-brand-green/60 group-hover:text-brand-green group-hover:translate-x-2 transition-all" />
              </motion.a>

              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/48537593186"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="group relative overflow-hidden bg-[#25D366] text-white px-8 py-6 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-green-500/20 transition-all hover:scale-105 flex items-center justify-between"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, delay: 1 }}
                />

                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <Image
                        src="/whatsapp-svgrepo-com.svg"
                        alt="WhatsApp"
                        width={32}
                        height={32}
                        className="brightness-0 invert"
                      />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="absolute inset-0 rounded-2xl bg-white/50"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-white/80 font-medium">Szybka wycena przez</div>
                    <div className="text-2xl font-black text-white">WhatsApp</div>
                  </div>
                </div>

                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </motion.a>

              {/* Facebook Button */}
              <motion.a
                href="https://www.facebook.com/profile.php?id=100084814568695"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="group relative overflow-hidden bg-[#1877F2] text-white px-8 py-6 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/20 transition-all hover:scale-105 flex items-center justify-between"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, delay: 2 }}
                />

                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <Facebook className="w-8 h-8 text-white" />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                      className="absolute inset-0 rounded-2xl bg-white/50"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-white/80 font-medium">Odwiedź nas na</div>
                    <div className="text-2xl font-black text-white">Facebook</div>
                  </div>
                </div>

                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </motion.a>

              {/* Info Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center"
              >
                <p className="text-white/90 font-semibold">
                  📞 Odbieramy telefony | 💬 Odpowiadamy na wiadomości
                </p>
                <p className="text-white/70 text-sm mt-2">
                  Doradzamy za darmo, bez zobowiązań
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

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
    </>
  );
}