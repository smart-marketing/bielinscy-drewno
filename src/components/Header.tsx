"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Blokuj scroll gdy menu otwarte
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed left-0 right-0 z-50 bg-white transition-all duration-300 ${
            isScrolled ? 'top-0 shadow-lg' : 'top-0 md:top-10 shadow-sm'
          }`}
        >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-16' : 'h-16 lg:h-20'
          }`}>
            
            {/* Logo */}
            <Link href="/" className="flex items-center relative z-50">
              <Image
                src="/logo.webp"
                alt="Bielińscy Drewno"
                width={isScrolled ? 140 : 150}
                height={isScrolled ? 35 : 38}
                className="rounded-lg transition-all duration-300 lg:w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link 
                href="/o-nas" 
                className="font-medium text-brand-brown hover:text-brand-green transition-colors relative group"
              >
                O nas
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/oferta" 
                className="font-medium text-brand-brown hover:text-brand-green transition-colors relative group"
              >
                Oferta
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/kalkulator" 
                className="font-medium text-brand-brown hover:text-brand-green transition-colors relative group"
              >
                Kalkulator
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/kontakt" 
                className="font-medium text-brand-brown hover:text-brand-green transition-colors relative group"
              >
                Kontakt
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+48537593186"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold bg-brand-green text-white hover:bg-brand-green/90 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                <span>537 593 186</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 relative z-50 -mr-2 transition-colors ${
                isMobileMenuOpen ? 'text-white' : 'text-brand-brown'
              }`}
              aria-label="Menu"
            > 
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-7 h-7" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-7 h-7" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
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
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-br from-brand-green to-brand-brown z-50 lg:hidden shadow-2xl overflow-y-auto"
            >
              <div className="flex flex-col min-h-full p-6 pt-20 pb-8">
                
                {/* Navigation Links */}
                <nav className="flex flex-col gap-1 mb-8">
                  {[
                    { href: '/', label: 'Strona główna' },
                    { href: '/o-nas', label: 'O nas' },
                    { href: '/oferta', label: 'Oferta' },
                    { href: '/kalkulator', label: 'Kalkulator' },
                    { href: '/kontakt', label: 'Kontakt' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-4 px-4 text-lg font-medium text-white hover:bg-white/10 hover:text-white rounded-xl transition-all"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Contact Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-auto space-y-3"
                >
                  <a
                    href="tel:+48537593186"
                    className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl font-bold bg-brand-green text-white shadow-lg hover:shadow-xl hover:bg-brand-green/90 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Zadzwoń: 537 593 186</span>
                  </a>

                  <a
                    href="https://wa.me/48537593186"
                    className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl font-bold bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:bg-[#20BA5A] transition-all"
                  >
                    <Image 
                      src="/whatsapp-svgrepo-com.svg" 
                      alt="WhatsApp" 
                      width={20} 
                      height={20}
                      className="brightness-0 invert"
                    />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="mailto:biuro@bielinscydrewno.pl"
                    className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl font-bold bg-brand-brown text-white shadow-lg hover:shadow-xl hover:bg-brand-brown/90 transition-all"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                  </a>
                </motion.div>

                {/* Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-500"
                >
                  <p className="font-semibold text-brand-green">Od 2013 roku</p>
                  <p className="mt-1">Mirotki k. Skórcza</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}