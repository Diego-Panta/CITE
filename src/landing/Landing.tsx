import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import HeroSection from "@/landing/sections/HeroSection";
import NosotrosSection from "@/landing/sections/NosotrosSection";
import LineasAccionSection from "@/landing/sections/LineasAccionSection";
import ImpactoSection from "@/landing/sections/ImpactoSection";
import ComunidadSection from "@/landing/sections/ComunidadSection";
import ContactoSection from "@/landing/sections/ContactoSection";
import AliadosSection from "@/landing/sections/AliadosSection";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Landing() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8F7F3] text-[#2C312D]">
      <Navbar scrollToTop={scrollToTop} />

      <div id="hero">
        <HeroSection />
      </div>

      <div id="nosotros">
        <NosotrosSection />
      </div>

      <div id="lineas-accion">
        <LineasAccionSection />
      </div>

      <div id="impacto">
        <ImpactoSection />
      </div>

      <div id="comunidad">
        <ComunidadSection />
      </div>

      <div id="contacto">
        <ContactoSection />
      </div>

      <div id="aliados">
        <AliadosSection />
      </div>

      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#BDBF65] text-[#2C312D] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}