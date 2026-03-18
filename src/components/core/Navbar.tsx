import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FolderOpen, MessageCircle } from "lucide-react";
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

  const handleContactClick = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
            <img
              src="/logos/CITE_Logotipo principal-SF-03.webp"
              alt="CITE"
              className="w-40 h-12 object-contain"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              className="border-2 border-primary text-foreground hover:text-primary font-medium"
              onClick={() => window.open("/portafolio", "_blank")}
            >
              <FolderOpen className="mr-2 h-4 w-4" />
              Nuestro portafolio
            </Button>
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-md"
              onClick={handleContactClick}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Sumate a nosotros
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="h-6 w-6 text-foreground" /> : 
              <Menu className="h-6 w-6 text-foreground" />
            }
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
            className="md:hidden overflow-hidden border-t border-border bg-white"
          >
            <nav className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-foreground/70 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Botones en móvil */}
              <div className="space-y-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  className="w-full border-2 border-primary text-foreground hover:bg-primary/10 font-medium"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.open("/portafolio", "_blank");
                  }}
                >
                  <FolderOpen className="mr-2 h-4 w-4" />
                  Nuestro portafolio
                </Button>
                
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleContactClick();
                  }}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Sumate a nosotros
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}