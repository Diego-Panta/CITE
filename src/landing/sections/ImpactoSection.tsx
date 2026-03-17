import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  MapPin, 
  Square, 
  Users, 
  Heart, 
  Home,
  ArrowRight,
  Download
} from "lucide-react";
import { motion } from "framer-motion";

export default function ImpactoSection() {
  const stats = [
    { icon: MapPin, label: "Distritos de Lima Metropolitana", value: "7", color: "#5BBDD3" },
    { icon: Square, label: "m² espacio público recuperado", value: "2,750", color: "#BDBF65" },
    { icon: Heart, label: "Niños y niñas beneficiados", value: "500+", color: "#D79259" },
    { icon: Users, label: "Personas beneficiadas", value: "2,550+", color: "#9E5BD3" },
    { icon: Home, label: "Familias beneficiadas", value: "300+", color: "#5BBDD3" },
    { icon: BarChart3, label: "Proyectos de intervención", value: "15", color: "#BDBF65" }
  ];

  const aliadosStats = [
    { label: "Aliados locales e internacionales", value: "+15", color: "#9E5BD3" }
  ];

  return (
    <section id="impacto" className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C312D] mb-6">
            Nuestro
            <span className="block text-[#BDBF65]">impacto</span>
          </h2>
          <p className="text-lg text-[#2C312D]/70">
            Resultados concretos de nuestro trabajo colaborativo en los territorios
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
              >
                <Card className="bg-[#F8F7F3] border border-[#2C312D]/10 hover:border-[#BDBF65]/30 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      <Icon className="h-8 w-8" style={{ color: stat.color }} />
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold text-[#2C312D] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#2C312D]/60 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <Card className="bg-gradient-to-r from-[#9E5BD3]/10 to-[#9E5BD3]/5 border-[#9E5BD3]/30">
            <CardContent className="p-8">
              <div className="text-3xl md:text-5xl font-extrabold text-[#9E5BD3] mb-2">
                {aliadosStats[0].value}
              </div>
              <div className="text-lg text-[#2C312D]/70 mb-4">
                {aliadosStats[0].label}
              </div>
              <p className="text-sm text-[#2C312D]/60 max-w-2xl mx-auto">
                Construimos puentes con empresas, instituciones e inversores sociales comprometidos con la regeneración urbana, 
                la sostenibilidad y el bien común.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-[#BDBF65] text-[#2C312D] hover:bg-[#BDBF65]/90 font-bold shadow-lg group"
            onClick={() => window.open("/portafolio-proyectos", "_blank")}
          >
            Ver portafolio de proyectos
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#5BBDD3] bg-[#5BBDD3]/10 text-[#2C312D] hover:bg-[#5BBDD3]/20 font-medium"
            onClick={() => window.open("/reporte-impacto", "_blank")}
          >
            <Download className="mr-2 h-4 w-4" />
            Descargar reporte completo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}