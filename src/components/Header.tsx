"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
<Link href="/o-nas">O nas</Link>


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

const navLinks = [
  { href: "/o-nas", label: "O nas" },
  { href: "/oferta", label: "Oferta" },
  { href: "/kalkulator", label: "Kalkulator" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-md py-3"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          <Link href="/" className="relative z-10 flex-shrink-0">
            <Image
              src="/logo.webp"
              alt="Bielińscy Drewno"
              width={200}
              height={60}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-brown/80 hover:text-brand-green font-medium transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+48XXXXXXXXX"
              className="flex items-center gap-2 text-brand-brown hover:text-brand-green font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">Zadzwoń</span>
            </a>
            <a
              href="https://wa.me/48XXXXXXXXX"
              className="btn-whatsapp flex items-center gap-2 text-sm !py-2.5 !px-4"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-2 -mr-2 text-brand-brown"
            aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col items-center justify-center h-full gap-8 pt-20"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display font-semibold text-brand-brown hover:text-brand-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex flex-col gap-4 mt-8 w-full max-w-xs px-8"
              >
                <a
                  href="tel:+48XXXXXXXXX"
                  className="btn-primary flex items-center justify-center gap-3 w-full"
                >
                  <Phone className="w-5 h-5" />
                  <span>Zadzwoń teraz</span>
                </a>
                <a
                  href="https://wa.me/48XXXXXXXXX"
                  className="btn-whatsapp flex items-center justify-center gap-3 w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
