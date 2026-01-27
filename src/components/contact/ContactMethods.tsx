"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MessageCircle, MapPin, Clock, Facebook, ShoppingBag, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Telefon",
    primary: "537 593 186",
    secondary: "Pon-Pt: 8:00-16:00, Sob: 8:00-13:00",
    href: "tel:+48537593186",
    color: "bg-brand-green",
    description: "Zadzwoń - doradzamy za darmo"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    primary: "537 593 186",
    secondary: "Szybka wycena, zdjęcia, pytania",
    href: "https://wa.me/48537593186",
    color: "bg-green-500",
    description: "Napisz - odpowiadamy natychmiast"
  },
  {
    icon: Mail,
    title: "Email",
    primary: "biuro@bielinscydrewno.pl",
    secondary: "Wyceny, zamówienia, faktury",
    href: "mailto:biuro@bielinscydrewno.pl",
    color: "bg-blue-600",
    description: "Wyślij email - odpowiedź w 24h"
  },
  {
    icon: Facebook,
    title: "Facebook",
    primary: "Bielińscy Drewno",
    secondary: "Messenger, aktualności, galeria",
    href: "https://www.facebook.com/profile.php?id=100084814568695",
    color: "bg-blue-500",
    description: "Obserwuj nas na FB"
  },
  {
    icon: ShoppingBag,
    title: "OLX",
    primary: "Nasze ogłoszenia",
    secondary: "Aktualne ceny i dostępność",
    href: "https://www.olx.pl/d/oferta/deska-strugana-heblowana-22x120x4000-2-2cmx12cmx4m-CID628-IDIqENX.html",
    color: "bg-purple-600",
    description: "Zobacz oferty na OLX"
  },
  {
    icon: Send,
    title: "Formularz kontaktowy",
    primary: "Online 24/7",
    secondary: "Oddzwonimy w ciągu 24h",
    href: "#formularz",
    color: "bg-brand-brown",
    description: "Wypełnij formularz poniżej"
  }
];

const officeInfo = [
  {
    icon: MapPin,
    title: "Adres magazynu",
    content: "Mirotki, gm. Skórcz\nwoj. Pomorskie\nZjazd Kopytowo z A1"
  },
  {
    icon: Clock,
    title: "Godziny otwarcia",
    content: "Pon-Pt: 8:00-16:00\nSobota: 8:00-13:00\nNiedziela: Zamknięte"
  }
];

export default function ContactMethods() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-brown mb-6">
            Wybierz <span className="text-brand-green">wygodny sposób kontaktu</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-brown/70 max-w-3xl mx-auto">
            Telefon, WhatsApp, email, Facebook, OLX lub formularz - jesteśmy dostępni na wszystkich kanałach
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-green/30 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <method.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-brand-brown mb-2">
                {method.title}
              </h3>
              <p className="text-brand-green font-bold text-lg mb-2">
                {method.primary}
              </p>
              <p className="text-brand-brown/60 text-sm mb-3">
                {method.secondary}
              </p>
              <p className="text-brand-brown text-sm font-medium group-hover:text-brand-green transition-colors">
                {method.description} →
              </p>
            </motion.a>
          ))}
        </div>

        {/* Office Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {officeInfo.map((info, index) => (
            <div
              key={index}
              className="bg-brand-green/5 rounded-2xl p-6 border border-brand-green/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown text-lg mb-2">
                    {info.title}
                  </h4>
                  <p className="text-brand-brown/70 whitespace-pre-line">
                    {info.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Quick Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-brand-green to-brand-green/90 rounded-2xl p-8 max-w-3xl mx-auto shadow-xl">
            <p className="text-white text-lg md:text-xl font-semibold mb-4">
              🚀 Najszybszy kontakt? <strong>Zadzwoń lub napisz na WhatsApp!</strong>
            </p>
            <p className="text-white/90 mb-6">
              Odpowiadamy natychmiast w godzinach pracy (Pon-Pt: 8:00-16:00)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+48537593186"
                className="inline-flex items-center justify-center gap-3 bg-white text-brand-green px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Zadzwoń: 537 593 186
              </a>
              <a
                href="https://wa.me/48537593186"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}