"use client";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-brown text-white/80">
      <div className="container-wide py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-footer.jpg"
                alt="Bielińscy Drewno"
                width={270}
                height={60}
                className="rounded-lg"
              />
            </Link>
            <p className="text-white/70 leading-relaxed mb-4 text-sm">
              Skład drewna budowlanego. Tarcica, więźby dachowe, deski
              impregnowane. Realizacja w 3 dni, własny transport.
            </p>
            <p className="text-brand-green font-semibold text-sm">Od 2013 roku</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-5">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+48537593186"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center group-hover:bg-brand-green transition-colors">
                    <Phone className="w-4 h-4 text-brand-green group-hover:text-white" />
                  </div>
                  <span className="font-medium">537 593 186</span>
                </a>
                
                <a
                  href="tel:+48695-467-337"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center group-hover:bg-brand-green transition-colors">
                    <Phone className="w-4 h-4 text-brand-green group-hover:text-white" />
                  </div>
                  <span className="font-medium">695 467 337</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/48537593186"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center group-hover:bg-brand-green transition-colors">
                    <Image 
                      src="/whatsapp-svgrepo-com.svg" 
                      alt="WhatsApp" 
                      width={16} 
                      height={16}
                      className="brightness-0 invert opacity-70 group-hover:opacity-100"
                    />
                  </div>
                  <span className="font-medium">WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:biuro@bielinscydrewno.pl"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center group-hover:bg-brand-green transition-colors">
                    <Mail className="w-4 h-4 text-brand-green group-hover:text-white" />
                  </div>
                  <span className="font-medium text-sm">biuro@bielinscydrewno.pl</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-5">
              Lokalizacja
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-brand-green" />
                </div>
                <div>
                  <p className="text-white font-semibold">Mirotki</p>
                  <p className="text-white/60 text-sm">gm. Skórcz, woj. pomorskie</p>
                  <p className="text-white/50 text-xs mt-1">Zjazd Kopytowo z A1</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps?client=firefox-b-d&hs=CCYU&sca_esv=09a4dc9e07e27686&sxsrf=ANbL-n43RV5caBqo1ybKJS34clSPmkyntQ:1769169382599&si=AL3DRZFIhG6pAqfNLal55wUTwygCG0fClF3UxiOmgw9Hq7nbWfVuVj_mYb498RgwTlpnVJqk9Miiunm89pVTQlypGPUIJC-YBn9b8uBehPLQDwEvM6ioAzI9CEsAOusMGmzItDo-XQMenryI9ajt0G7KNQJs3Hb6nmdrSTNltFP2TfX6lDhplSo%3D&biw=1485&bih=703&dpr=1.25&aic=0&um=1&ie=UTF-8&fb=1&gl=pl&sa=X&geocode=KRlrxVPDlQJHMRRv2C8aoj0w&daddr=Mirotki+49,+83-225+Mirotki"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-green hover:text-cream text-sm font-semibold transition-colors"
              >
                Zobacz na mapie →
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-5">
              Godziny otwarcia
            </h4>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-brand-green" />
              </div>
              <div className="space-y-2 text-sm">
              <div className="flex justify-between gap-6">
                  <span className="text-white font-medium">Pon - Pt</span>
                  <span className="text-white/60">8:00 - 16:00</span>
                </div>
                <div className="flex justify-between gap-6">
                  <span className="text-white font-medium">Sobota</span>
                  <span className="text-white/60">8:00 - 13:00</span>
                </div>
                <div className="flex justify-between gap-6">
                  <span className="text-white font-medium">Niedziela</span>
                  <span className="text-white/60">Zamknięte</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/50">
            <p>© {currentYear} Bielińscy Drewno. Wszystkie prawa zastrzeżone.</p>
            <Link 
              href="/polityka-prywatnosci" 
              className="hover:text-white transition-colors"
            >
              Polityka prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}