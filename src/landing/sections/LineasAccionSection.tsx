import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, GraduationCap, Ruler, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LineasAccionSection() {
  const lineas = [
    {
      icon: Database,
      title: "DATA.cite",
      description: "Recopilar, evaluar y visibilizar información sobre diversos procesos urbanos para la toma de decisiones informada.",
      color: "#5BBDD3",
      bgColor: "bg-[#5BBDD3]/10",
      acciones: [
        "Diagnósticos participativos",
        "Mapeos colectivos",
        "Sistematización de datos",
        "Visualización de información"
      ]
    },
    {
      icon: GraduationCap,
      title: "EDUCA.cite",
      description: "Brindar y compartir conocimientos entre las personas (equipo, voluntarios y diversos actores) para fortalecer capacidades.",
      color: "#D79259",
      bgColor: "bg-[#D79259]/10",
      acciones: [
        "Talleres de formación",
        "Intercambio de saberes",
        "Escuela de urbanismo popular",
        "Mentorías"
      ]
    },
    {
      icon: Ruler,
      title: "PROYECTA.cite",
      description: "Promovemos soluciones urbanas que resuelvan los desafíos de nuestras ciudades a través de la habilitación y recuperación de espacios públicos.",
      color: "#BDBF65",
      bgColor: "bg-[#BDBF65]/10",
      acciones: [
        "Intervenciones tácticas",
        "Diseño participativo",
        "Recuperación de espacios",
        "Activaciones comunitarias"
      ]
    }
  ];

  return (
    <section id="lineas-accion" className="py-20 md:py-28 relative overflow-hidden bg-[#F8F7F3]">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C312D] mb-6">
            Líneas de
            <span className="block text-[#BDBF65]">acción</span>
          </h2>
          <p className="text-lg text-[#2C312D]/70">
            Nuestro trabajo se organiza en tres líneas estratégicas que abordan diferentes dimensiones de la transformación urbana
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {lineas.map((linea, idx) => {
            const Icon = linea.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="bg-white border border-[#2C312D]/10 hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-xl ${linea.bgColor} flex items-center justify-center mb-6`}>
                      <Icon className="h-8 w-8" style={{ color: linea.color }} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#2C312D] mb-3">{linea.title}</h3>
                    <p className="text-[#2C312D]/70 text-sm mb-6">{linea.description}</p>
                    
                    <ul className="space-y-2">
                      {linea.acciones.map((accion, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#2C312D]/60">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: linea.color }} />
                          {accion}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/*<motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-[#BDBF65] text-[#2C312D] hover:bg-[#BDBF65]/90 font-bold shadow-lg group"
            onClick={() => document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver proyectos por línea
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}