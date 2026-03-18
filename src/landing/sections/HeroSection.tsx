import React from "react";
import { Button } from "@/components/ui/button";
import { Map, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-[#F8F7F3]">
      {/* Elementos de fondo */}
      {/*<div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(2px 2px at 20% 30%, #2C312D, transparent),
                             radial-gradient(2px 2px at 60% 70%, #2C312D, transparent),
                             radial-gradient(1px 1px at 50% 50%, #2C312D, transparent)`,
            backgroundSize: "200px 200px, 300px 300px, 250px 250px",
          }}
        />
      </div>*/}

      <div className="max-w-7xl mx-auto px-4 py-4 grid md:grid-cols-2 items-center gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BDBF65]/20 border border-[#BDBF65]/30"
          >
            <Sparkles className="h-4 w-4 text-[#BDBF65]" />
            <span className="text-[#2C312D] text-sm font-medium">Laboratorio urbano</span>
          </motion.div>

          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="text-[#2C312D]">Construimos</span>
              <span className="block text-[#BDBF65] mt-2">
                territorios más justos
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-[#2C312D]/90 leading-relaxed max-w-xl">
            Un laboratorio urbano que desarrolla proyectos y programas de forma colaborativa para impactar
            positivamente en la mejora de nuestros espacios públicos y la ciudad.
          </p>

          <p className="text-[#2C312D]/75 leading-relaxed">
            Co-creamos soluciones innovadoras a través de metodologías participativas que promueven
            soluciones reales para cada territorio.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="bg-[#BDBF65] text-[#2C312D] hover:bg-[#BDBF65]/90 font-bold shadow-lg shadow-[#BDBF65]/30 transition-all duration-300 hover:scale-105 group"
              onClick={() => document.getElementById("lineas-accion")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Map className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Conoce nuestras líneas de acción
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#2C312D]/30 bg-transparent hover:bg-[#BDBF65]/10 text-[#2C312D] transition-all duration-300 hover:scale-105 group"
              onClick={() => document.getElementById("impacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver impacto
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-8 pt-6"
          >
            {[
              { label: "Proyectos", value: "15" },
              { label: "Distritos", value: "7" },
              { label: "m² recuperados", value: "2,750" },
              { label: "personas", value: "2,550+" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold text-[#BDBF65]">{stat.value}</div>
                <div className="text-xs text-[#2C312D]/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#BDBF65]/20 to-[#5BBDD3]/20 flex items-center justify-center">

              <img
                src="/IMG_Landing_1.png"
                alt="Laboratorio urbano CITE"
                className="w-full h-full object-contain mix-blend-overlay"
              />

            </div>

            {/* Elementos decorativos 
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 right-10 w-20 h-20 bg-[#BDBF65]/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#D79259]/20 rounded-full blur-3xl animate-pulse delay-75" />
            </div>*/}

            {/* Cuadrícula urbana 
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: "linear-gradient(#2C312D 1px, transparent 1px), linear-gradient(90deg, #2C312D 1px, transparent 1px)",
              backgroundSize: "30px 30px"
            }} />*/}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="absolute -bottom-6 -left-6 bg-white border border-[#2C312D]/10 p-4 rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#BDBF65] flex items-center justify-center">
                <img
                  src="/logos/Logo_CITE_Verde.png"
                  alt="CITE"
                  className="w-100 h-100 object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div>
                <div className="text-sm font-medium text-[#2C312D]">Laboratorio urbano</div>
                <div className="text-xs text-[#2C312D]/60">Personas · Territorio · Innovación</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}