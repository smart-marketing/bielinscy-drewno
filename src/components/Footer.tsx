"use client";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-brown text-white/80">
      <div className="container-wide section-padding-sm">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Bielińscy Drewno"
                width={140}
                height={42}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 leading-relaxed mb-6">
              Skład drewna budowlanego. Tarcica, więźby dachowe, deski
              impregnowane. Realizacja w 3 dni, własny transport.
            </p>
            <p className="text-white/40 text-sm">Od 2013 roku</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-lg mb-6">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+48XXXXXXXXX"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 text-brand-green group-hover:scale-110 transition-transform" />
                  <span>+48 XXX XXX XXX</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/48XXXXXXXXX"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 text-brand-green group-hover:scale-110 transition-transform" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@bielinscy-drewno.pl"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 text-brand-green group-hover:scale-110 transition-transform" />
                  <span>kontakt@bielinscy-drewno.pl</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-display font-semibold text-white text-lg mb-6">
              Lokalizacja
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Mirotki</p>
                  <p className="text-white/60">gm. Skórcz, woj. pomorskie</p>
                  <p className="text-white/40 text-sm mt-1">Zjazd Kopytowo z A1</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Mirotki,Skórcz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-green hover:text-brand-green-light text-sm font-medium transition-colors"
              >
                Zobacz na mapie →
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-semibold text-white text-lg mb-6">
              Godziny otwarcia
            </h4>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <div>
                  <p className="text-white">Pon - Pt</p>
                  <p className="text-white/60">7:00 - 17:00</p>
                </div>
                <div>
                  <p className="text-white">Sobota</p>
                  <p className="text-white/60">8:00 - 14:00</p>
                </div>
                <div>
                  <p className="text-white">Niedziela</p>
                  <p className="text-white/60">Zamknięte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>© {currentYear} Bielińscy Drewno. Wszystkie prawa zastrzeżone.</p>
            <div className="flex items-center gap-6">
              <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors">
                Polityka prywatności
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
