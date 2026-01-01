"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed left-0 right-0 z-50 bg-white transition-all duration-300 ${
            isScrolled ? 'top-0 shadow-lg' : 'top-10 shadow-sm'
          }`}
        >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.webp"
                alt="Bielińscy Drewno"
                width={180}
                height={50}
                className="rounded-lg"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link 
                href="o-nas" 
                className="font-medium text-brand-brown hover:text-brand-green transition-colors"
              >
                O nas
              </Link>
              <Link 
                href="oferta" 
                className="font-medium text-brand-brown hover:text-brand-green transition-colors"
              >
                Oferta
              </Link>
              <Link 
                href="kalkulator" 
                className="font-medium text-brand-brown hover:text-brand-green transition-colors"
              >
                Kalkulator
              </Link>
              <Link 
                href="kontakt" 
                className="font-medium text-brand-brown hover:text-brand-green transition-colors"
              >
                Kontakt
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+48537593186"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-brand-green text-white hover:bg-brand-green/90 transition-all shadow-md hover:shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Zadzwoń: 537 593 186</span>
              </a>
              
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-brand-brown relative z-[60]"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-br from-brand-green to-brand-brown z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full p-8 pt-24">
                {/* Navigation Links */}
                <nav className="flex flex-col gap-2 mb-8">
                  {[
                    { href: 'o-nas', label: 'O nas' },
                    { href: 'oferta', label: 'Oferta' },
                    { href: 'kalkulator', label: 'Kalkulator' },
                    { href: 'kontakt', label: 'Kontakt' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={item.href}
                        className="block text-white hover:text-cream text-2xl font-bold py-3 px-4 rounded-lg hover:bg-white/10 transition-all"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col gap-4 mt-auto"
                >
                  <a 
                    href="tel:+48537593186" 
                    className="flex items-center justify-center gap-3 bg-white text-brand-green px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    <span>537 593 186</span>
                  </a>
                  <a 
                    href="https://wa.me/48537593186" 
                    className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                      <Image src="/whatsapp-svgrepo-com.svg" alt="WhatsApp"   className="brightness-0 invert" width={20} height={20} />
                      <span>Napisz na WhatsApp</span>
                  </a>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}