"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Check, Sparkles, ArrowRight, Zap, Shield, Clock } from "lucide-react";
import Image from "next/image";

const guarantees = [
  "Proste deski sprawdzone przed załadunkiem",
  "Prawdziwa impregnacja, która chroni na lata",
  "Wymiary zgodne z zamówieniem",
  "Realizacja w 2-3 dni, nie tygodnie",
];

const stats = [
  { number: "500+", label: "Dostaw rocznie", icon: Zap },
  { number: "12", label: "Lat doświadczenia", icon: Shield },
  { number: "2-3", label: "Dni realizacji", icon: Clock },
];

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="kontakt-cta"
      className="py-16 md:py-24 bg-gradient-to-br from-brand-green via-brand-green/95 to-brand-green/90 relative overflow-hidden pt-24 sm:pt-16"
    >
      {/* Animated Background - Larger blobs */}
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
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight px-2">
              Twoja budowa zasługuje na materiał,
              <span className="block mt-2 text-cream">na którym można polegać</span>
            </h2>
            <p className="text-sm text-white/90 max-w-2xl mx-auto px-2">
              Dołącz do klientów, którzy budują bez stresu i opóźnień
            </p>
          </motion.div>

          {/* Stats - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-2 mb-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                className="bg-white/15 backdrop-blur-md rounded-2xl p-3 border border-white/20 text-center"
              >
                <stat.icon className="w-5 h-5 text-white mx-auto mb-1" />
                <div className="text-xl font-black text-white">{stat.number}</div>
                <div className="text-[10px] text-white/80 leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Guarantees - Mobile */}
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
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-3"
          >
            <a
              href="tel:+48537593186"
              className="group flex items-center justify-between w-full px-5 py-3.5 bg-white text-brand-green rounded-2xl font-bold text-base shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-brand-green/60">Zadzwoń teraz</div>
                  <div className="font-black text-sm">537 593 186</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-brand-green/60 group-hover:text-brand-green group-hover:translate-x-1 transition-all" />
            </a>

            <a
              href="https://wa.me/48537593186"
              className="group flex items-center justify-between w-full px-5 py-3.5 bg-[#25D366] text-white rounded-2xl font-bold text-base shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Image 
                    src="/whatsapp-svgrepo-com.svg" 
                    alt="WhatsApp" 
                    width={20} 
                    height={20}
                    className="brightness-0 invert"
                  />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-white/70">Szybka wycena</div>
                  <div className="font-black text-sm">WhatsApp</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
          </motion.div>
        </div>

        {/* DESKTOP: Split Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 items-center max-w-7xl mx-auto">
          
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-bold border border-white/30 shadow-xl">
              <Sparkles className="w-5 h-5" />
              <span>Od 2013 roku • Setki zadowolonych klientów</span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="font-display text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
                Twoja budowa zasługuje na materiał,
                <span className="block mt-2 text-cream">na którym można polegać</span>
              </h2>
              <p className="text-lg xl:text-xl text-white/90">
                Dołącz do klientów, którzy budują bez stresu i opóźnień
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-white/15 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-center cursor-default"
                >
                  <stat.icon className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-3xl xl:text-4xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Guarantees List */}
            <div className="space-y-3">
              <p className="text-white/90 font-semibold text-lg">Każda dostawa to gwarancja:</p>
              {guarantees.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-5 py-4 rounded-xl border border-white/20 hover:bg-white/15 transition-all"
                >
                  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-base text-white font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: CTA Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Phone Card */}
            <motion.a
              href="tel:+48537593186"
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative block"
            >
              
              {/* Glow effect */}
              <motion.div
                animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-2 bg-white/30 rounded-3xl blur-xl"
              />
              
              <div className="relative flex items-center justify-between px-8 py-6 bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Shine effect */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-green/10 to-transparent skew-x-12"
                />
                
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-brand-green flex items-center justify-center shadow-lg">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-2xl bg-brand-green"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-brand-green/60 font-medium">Zadzwoń - wycena od ręki</div>
                    <div className="text-2xl font-black text-brand-green">537 593 186</div>
                  </div>
                </div>
                
                <ArrowRight className="w-6 h-6 text-brand-green/40 group-hover:text-brand-green group-hover:translate-x-2 transition-all" />
              </div>
            </motion.a>

            
            {/* Phone Card */}
            <motion.a
              href="tel:+48537593186"
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative block"
            >
              
              {/* Glow effect */}
              <motion.div
                animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-2 bg-white/30 rounded-3xl blur-xl"
              />
              
              <div className="relative flex items-center justify-between px-8 py-6 bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Shine effect */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-green/10 to-transparent skew-x-12"
                />
                
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-brand-green flex items-center justify-center shadow-lg">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-2xl bg-brand-green"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-brand-green/60 font-medium">Zadzwoń - wycena od ręki</div>
                    <div className="text-2xl font-black text-brand-green">695 467 337</div>
                  </div>
                </div>
                
                <ArrowRight className="w-6 h-6 text-brand-green/40 group-hover:text-brand-green group-hover:translate-x-2 transition-all" />
              </div>
            </motion.a>


            {/* WhatsApp Card */}
            <motion.a
              href="https://wa.me/48537593186"
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative block"
            >
              {/* Glow effect */}
              <motion.div
                animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -inset-2 bg-[#25D366]/40 rounded-3xl blur-xl"
              />
              
              <div className="relative flex items-center justify-between px-8 py-6 bg-[#25D366] rounded-3xl shadow-2xl overflow-hidden">
                {/* Shine effect */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, delay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
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
              </div>
            </motion.a>

            {/* Info Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
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
  );
}