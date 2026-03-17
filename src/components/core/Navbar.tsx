import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, HeartHandshake, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  scrollToTop: () => void;
}

export default function Navbar({ scrollToTop }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", href: "#hero" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Líneas de acción", href: "#lineas-accion" },
    { label: "Impacto", href: "#impacto" },
    { label: "Comunidad", href: "#comunidad" },
    { label: "Contacto", href: "#contacto" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#2C312D]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
            <div className="w-10 h-10 rounded-xl bg-[#BDBF65] flex items-center justify-center">
            <span className="text-[#2C312D] font-bold text-xl">C</span>
            </div>
            <span className="font-bold tracking-wide text-xl text-[#2C312D]">CITE</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#2C312D]/70 hover:text-[#BDBF65] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              className="bg-[#BDBF65] text-[#2C312D] hover:bg-[#BDBF65]/90 font-bold shadow-md"
              onClick={() => window.open("/reporte-impacto", "_blank")}
            >
              <HeartHandshake className="mr-2 h-4 w-4" />
              Reporte de impacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-[#BDBF65]/10 hover:bg-[#BDBF65]/20 transition-colors border border-[#BDBF65]/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-[#2C312D]" /> : <Menu className="h-6 w-6 text-[#2C312D]" />}
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
            className="md:hidden overflow-hidden border-t border-[#2C312D]/10 bg-white"
          >
            <nav className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-[#2C312D]/70 hover:text-[#BDBF65] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="w-full bg-[#BDBF65] text-[#2C312D] hover:bg-[#BDBF65]/90 font-bold mt-4"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.open("/reporte-impacto", "_blank");
                }}
              >
                <HeartHandshake className="mr-2 h-4 w-4" />
                Reporte de impacto
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}