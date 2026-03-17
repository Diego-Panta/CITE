import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Building2, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AliadosSection() {
  const aliados = [
    // Aliados internacionales
    {
      nombre: "Cities Alliance",
      logo: "/aliados/cities-alliance.png",
      tipo: "Internacional",
      color: "#9E5BD3"
    },
    {
      nombre: "UN-Habitat",
      logo: "/aliados/un-habitat.png",
      tipo: "Internacional",
      color: "#9E5BD3"
    },
    {
      nombre: "AVINA",
      logo: "/aliados/avina.png",
      tipo: "Internacional",
      color: "#9E5BD3"
    },
    // Aliados locales
    {
      nombre: "Municipalidad Provincial del Santa",
      logo: "/aliados/muni-santa.png",
      tipo: "Local",
      color: "#5BBDD3"
    },
    {
      nombre: "Universidad Nacional del Santa",
      logo: "/aliados/uns.png",
      tipo: "Local",
      color: "#5BBDD3"
    },
    {
      nombre: "Cámara de Comercio de Chimbote",
      logo: "/aliados/camara-chimbote.png",
      tipo: "Local",
      color: "#5BBDD3"
    },
    // Aliados sector privado
    {
      nombre: "TASA",
      logo: "/aliados/tasa.png",
      tipo: "Privado",
      color: "#BDBF65"
    },
    {
      nombre: "Hidrandina",
      logo: "/aliados/hidrandina.png",
      tipo: "Privado",
      color: "#BDBF65"
    },
    {
      nombre: "SIDERPERU",
      logo: "/aliados/siderperu.png",
      tipo: "Privado",
      color: "#BDBF65"
    },
    // Organizaciones sociales
    {
      nombre: "Red de Organizaciones Juveniles",
      logo: "/aliados/red-juvenil.png",
      tipo: "Social",
      color: "#D79259"
    },
    {
      nombre: "Colectivo Ambiental",
      logo: "/aliados/ambiental.png",
      tipo: "Social",
      color: "#D79259"
    },
    {
      nombre: "Mesa de Concertación",
      logo: "/aliados/mesa-concertacion.png",
      tipo: "Social",
      color: "#D79259"
    },
    // Espacios para más aliados
    {
      nombre: "Próximamente",
      logo: "",
      tipo: "Nuevos aliados",
      color: "#2C312D"
    },
    {
      nombre: "Próximamente",
      logo: "",
      tipo: "Nuevos aliados",
      color: "#2C312D"
    },
    {
      nombre: "Próximamente",
      logo: "",
      tipo: "Nuevos aliados",
      color: "#2C312D"
    }
  ];

  const tiposAliados = [
    { label: "Internacionales", count: 3, color: "#9E5BD3" },
    { label: "Locales", count: 3, color: "#5BBDD3" },
    { label: "Privados", count: 3, color: "#BDBF65" },
    { label: "Sociales", count: 3, color: "#D79259" },
    { label: "Totales", count: "+15", color: "#2C312D" }
  ];

  return (
    <section id="aliados" className="py-20 md:py-28 relative overflow-hidden bg-[#F8F7F3]">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 text-8xl">🤝</div>
        <div className="absolute bottom-20 left-10 text-8xl">🌐</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9E5BD3]/10 border border-[#9E5BD3]/20 mb-6">
            <Handshake className="h-4 w-4 text-[#9E5BD3]" />
            <span className="text-[#2C312D] text-sm font-medium">Red de colaboración</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C312D] mb-6">
            Aliados que
            <span className="block text-[#9E5BD3]">
              potencian el cambio
            </span>
          </h2>

          <p className="text-lg text-[#2C312D]/80 leading-relaxed">
            Construimos puentes con empresas, instituciones e inversores sociales comprometidos 
            con la regeneración urbana, la sostenibilidad y el bien común.
          </p>
        </motion.div>

        {/* Contadores por tipo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {tiposAliados.map((tipo, idx) => (
            <Card key={idx} className="bg-white border border-[#2C312D]/10">
              <CardContent className="px-6 py-3">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: tipo.color }}>{tipo.count}</div>
                  <div className="text-xs text-[#2C312D]/60">{tipo.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Grid de aliados */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {aliados.map((aliado, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03, duration: 0.3 }}
            >
              <Card 
                className="bg-white border border-[#2C312D]/10 hover:shadow-lg transition-all duration-300 h-full group cursor-pointer"
                style={{
                  borderColor: aliado.logo ? `${aliado.color}30` : '#2C312D20',
                  backgroundColor: aliado.logo ? 'white' : '#F8F7F3'
                }}
              >
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                  {aliado.logo ? (
                    <div className="w-full aspect-square flex items-center justify-center mb-3">
                      <img 
                        src={aliado.logo} 
                        alt={aliado.nombre}
                        className="max-w-full max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-square flex items-center justify-center mb-3">
                      <Building2 className="h-12 w-12 text-[#2C312D]/30" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-sm font-semibold text-[#2C312D] mb-1">{aliado.nombre}</h3>
                    <p className="text-xs" style={{ color: aliado.color }}>{aliado.tipo}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Llamado a nuevos aliados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-[#9E5BD3]/10 to-[#5BBDD3]/10 border-2 border-[#9E5BD3]/30">
            <CardContent className="p-8 md:p-12 text-center">
              <Globe className="h-12 w-12 text-[#9E5BD3] mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#2C312D] mb-4">
                ¿Tu organización quiere sumarse?
              </h3>
              <p className="text-[#2C312D]/70 max-w-2xl mx-auto mb-8">
                Buscamos aliados comprometidos con la regeneración urbana, la sostenibilidad y el bien común. 
                Juntos podemos amplificar el impacto y construir ciudades más justas.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-[#9E5BD3] text-white hover:bg-[#9E5BD3]/90 font-bold shadow-lg group"
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Quiero ser aliado
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#9E5BD3] bg-transparent text-[#2C312D] hover:bg-[#9E5BD3]/10"
                  onClick={() => window.open("/portafolio-aliados", "_blank")}
                >
                  Ver portafolio de alianzas
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Filosofía de alianzas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-[#2C312D]/50 text-sm italic">
            "Comunicamos de forma clara el impacto medible, replicable y transformador de cada proyecto 
            para fomentar colaboraciones responsables"
          </p>
        </motion.div>
      </div>
    </section>
  );
}