import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import HeroSection from "@/landing/sections/HeroSection";
import MessageSection from "@/landing/sections/MessageSection";
import ProposalSection from "@/landing/sections/ProposalSection";
import PartnerSection from "@/landing/sections/PartnerSection";
import FAQSection from "@/landing/sections/FAQSection";
import ContactSection from "@/landing/sections/ContactSection";
import DonateSection from "@/landing/sections/DonateSection"
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
    <div className="min-h-screen bg-linear-to-b from-red-950 via-red-900 to-amber-900 text-white">
      <Navbar scrollToTop={scrollToTop} />

      <div id="hero">
        <HeroSection />
      </div>

      <div id="about">
        <MessageSection />
      </div>

      <div id="donate" >
        <DonateSection />
      </div>

      <div id="schedule">
        <ProposalSection />
      </div>

      <div id="partners">
        <PartnerSection />
      </div>

      <div id="faq">
        <FAQSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-linear-to-r from-amber-400 to-amber-500 text-red-950 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}