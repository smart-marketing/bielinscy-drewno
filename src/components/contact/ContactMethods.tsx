"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export default function ContactMethods() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const methods = [
    {
      icon: Phone,
      title: "Telefon",
      subtitle: "Najszybszy kontakt",
      detail: "537 593 186",
      href: "tel:+48537593186",
      description: "Odbieramy telefony, odpowiadamy na pytania, doradzamy w doborze materiału",
      color: "from-brand-green to-brand-green/80",
      badge: "POLECANE"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: "Czat na żywo",
      detail: "Napisz wiadomość",
      href: "https://wa.me/48537593186",
      description: "Wyślij wiadomość, zdjęcie projektu - odpowiadamy na bieżąco",
      color: "from-[#25D366] to-[#128C7E]",
      badge: "SZYBKO"
    },
    {
      icon: Mail,
      title: "Email",
      subtitle: "Szczegółowe zapytania",
      detail: "biuro@bielinscydrewno.pl",
      href: "mailto:biuro@bielinscydrewno.pl",
      description: "Wyślij szczegółowe zapytanie, załącz rysunki - odpowiadamy tego samego dnia",
      color: "from-brand-brown to-brand-brown/80"
    },
    {
      icon: MapPin,
      title: "Wizyta w magazynie",
      subtitle: "Zobacz na żywo",
      detail: "Mirotki, gm. Skórcz",
      href: "https://maps.google.com/?q=Mirotki,Skórcz",
      description: "Wpadnij, zobacz materiał na żywo, porozmawiaj o projekcie",
      color: "from-brand-green/80 to-brand-green/60"
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
            Wybierz sposób
            <br className="sm:hidden" /> <span className="text-brand-green">kontaktu</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-brown/70 max-w-2xl mx-auto px-4">
            Odbieramy telefony, odpowiadamy na maile i WhatsApp.
            <br className="hidden sm:block" />
            Doradzamy za darmo, bez zobowiązań.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {methods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className={`h-full bg-gradient-to-br ${method.color} text-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                {/* Badge */}
                {method.badge && (
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                    {method.badge}
                  </div>
                )}

                {/* Icon */}
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <method.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                    {method.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {method.subtitle}
                  </p>
                  <p className="text-xl md:text-2xl font-bold mb-4">
                    {method.detail}
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {method.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                    <span className="text-sm font-semibold">Skontaktuj się</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Opening Hours Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-brand-green/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-brand-green rounded-2xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-brand-brown mb-2">
                  Godziny otwarcia
                </h3>
                <p className="text-brand-brown/70">
                  Magazyn i biuro - zapraszamy w godzinach:
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 border border-brand-green/10">
                <div className="font-semibold text-brand-brown mb-2">Poniedziałek - Piątek</div>
                <div className="text-2xl font-bold text-brand-green">7:00 - 17:00</div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-brand-green/10">
                <div className="font-semibold text-brand-brown mb-2">Sobota</div>
                <div className="text-2xl font-bold text-brand-green">8:00 - 14:00</div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-brand-green/10">
              <p className="text-sm text-brand-brown/60">
                <strong className="text-brand-brown">Niedziela:</strong> Nieczynne
                <br />
                <strong className="text-brand-brown">Telefon i WhatsApp:</strong> Odpowiadamy również poza godzinami pracy
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
