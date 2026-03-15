import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, HeartHandshake, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  scrollToTop: () => void;
}

export default function Navbar({ scrollToTop }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Programa", href: "#schedule" },
    { label: "Aliados", href: "#partners" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contact" }
  ];

  const handleDonateClick = () => {
    document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md supports-backdrop-filter:bg-red-950/80 bg-red-950/70 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <Gift className="h-6 w-6 text-red-950" />
            </div>
            <span className="font-bold tracking-wide text-xl">NaviFest II</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-amber-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="/galeria" target="_blank">
              <Button
                className="bg-linear-to-r from-amber-400 to-amber-500 text-red-950 hover:from-amber-500 hover:to-amber-600 font-bold shadow-lg"
              >
                <HeartHandshake className="mr-2 h-4 w-4" />
                Galeria Navifest 2024
              </Button>
            </a>
            <Button
              className="bg-linear-to-r from-amber-400 to-amber-500 text-red-950 hover:from-amber-500 hover:to-amber-600 font-bold shadow-lg"
              onClick={handleDonateClick}
            >
              <HeartHandshake className="mr-2 h-4 w-4" />
              Donar ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-red-950/95 backdrop-blur-md"
          >
            <nav className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-white/80 hover:text-amber-300 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="/galeria" target="_blank">
                <Button
                  className="w-full bg-linear-to-r from-amber-400 to-amber-500 text-red-950 hover:from-amber-500 hover:to-amber-600 font-bold shadow-lg"
                >
                  <HeartHandshake className="mr-2 h-4 w-4" />
                  Galeria Navifest 2024
                </Button>
              </a>
              <Button
                className="w-full bg-linear-to-r from-amber-400 to-amber-500 text-red-950 hover:from-amber-500 hover:to-amber-600 font-bold mt-4"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleDonateClick();
                }}
              >
                <HeartHandshake className="mr-2 h-4 w-4" />
                Donar ahora
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}