"use client";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const cityLinks = [
    { name: "Gdańsk", slug: "gdansk" },
    { name: "Tczew", slug: "tczew" },
    { name: "Starogard Gdański", slug: "starogard" },
    { name: "Grudziądz", slug: "grudziadz" },
    { name: "Toruń", slug: "torun" },
    { name: "Bydgoszcz", slug: "bydgoszcz" },
    { name: "Elbląg", slug: "elblag" },
    { name: "Malbork", slug: "malbork" },
    { name: "Kwidzyn", slug: "kwidzyn" },
    { name: "Olsztyn", slug: "olsztyn" },
    { name: "Chojnice", slug: "chojnice" },
    { name: "Poznań", slug: "poznan" },
  ];

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
              </li>
              
              <li>
                <a
                  href="tel:+48695467337"
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
                  href="mailto:biuro@bielinscydrewno.pl"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center group-hover:bg-brand-green transition-colors">
                    <Mail className="w-4 h-4 text-brand-green group-hover:text-white" />
                  </div>
                  <span className="font-medium">biuro@bielinscydrewno.pl</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps?client=firefox-b-d&hs=CCYU&sca_esv=09a4dc9e07e27686&sxsrf=ANbL-n43RV5caBqo1ybKJS34clSPmkyntQ:1769169382599&si=AL3DRZFIhG6pAqfNLal55wUTwygCG0fClF3UxiOmgw9Hq7nbWfVuVj_mYb498RgwTlpnVJqk9Miiunm89pVTQlypGPUIJC-YBn9b8uBehPLQDwEvM6ioAzI9CEsAOusMGmzItDo-XQMenryI9ajt0G7KNQJs3Hb6nmdrSTNltFP2TfX6lDhplSo%3D&biw=1485&bih=703&dpr=1.25&aic=0&um=1&ie=UTF-8&fb=1&gl=pl&sa=X&geocode=KRlrxVPDlQJHMRRv2C8aoj0w&daddr=Mirotki+49,+83-225+Mirotki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center group-hover:bg-brand-green transition-colors flex-shrink-0">
                    <MapPin className="w-4 h-4 text-brand-green group-hover:text-white" />
                  </div>
                  <span className="font-medium text-sm leading-relaxed">
                    Mirotki, gm. Skórcz<br />
                    woj. Pomorskie
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-brand-green" />
                </div>
                <span className="font-medium text-sm leading-relaxed">
                  Pon-Pt: 8:00-16:00<br />
                  Sobota: 8:00-13:00
                </span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-5">
              Menu
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Strona główna
                </Link>
              </li>
              <li>
                <Link
                  href="/o-nas"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  O nas
                </Link>
              </li>
              <li>
                <Link
                  href="/oferta"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Oferta
                </Link>
              </li>
              <li>
                <Link
                  href="/kalkulator"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Kalkulator
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/polityka-prywatnosci"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Polityka prywatności
                </Link>
              </li>
            </ul>
          </div>

          {/* Miasta - Drewno Budowlane */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-5">
              Drewno budowlane
            </h4>
            <ul className="space-y-2.5">
              {cityLinks.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/drewno-budowlane/${city.slug}`}
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block text-sm"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Bielińscy Drewno. Wszelkie prawa zastrzeżone. Realizacja <a href="https://smart-marketing.pl">Smart Marketing</a>
          </p>
        </div>
      </div>
    </footer>
  );
}