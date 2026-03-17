import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Camera, Quote, ArrowRight, MapPin, Award, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function ComunidadSection() {
  const liderazgos = [
    {
      nombre: "María Elena Quispe",
      rol: "Lideresa vecinal · AA.HH. Los Jardines",
      frase: "El cambio empieza cuando nos organizamos. CITE nos enseñó que nuestras voces importan y que podemos transformar nuestro propio barrio.",
      proyecto: "Recuperación del parque principal",
      color: "from-[#D79259]/20 to-[#D79259]/5",
      imagen: "/comunidad/maria.jpg"
    },
    {
      nombre: "Carlos Mendoza",
      rol: "Joven voluntario · Estudiante de arquitectura",
      frase: "Participar en CITE cambió mi forma de ver la ciudad. Ahora sé que el urbanismo se construye con la gente, no desde un escritorio.",
      proyecto: "Mapeo colectivo del distrito",
      color: "from-[#D79259]/20 to-[#D79259]/5",
      imagen: "/comunidad/carlos.jpg"
    },
    {
      nombre: "Juana Ríos",
      rol: "Artesana · Promotora cultural",
      frase: "Nuestro territorio tiene memoria, saberes y mucha creatividad. CITE nos ayuda a visibilizarlo y ponerlo en valor.",
      proyecto: "Feria de iniciativas culturales",
      color: "from-[#D79259]/20 to-[#D79259]/5",
      imagen: "/comunidad/juana.jpg"
    }
  ];

  const actividadesRecientes = [
    {
      titulo: "Taller de cartografía social",
      fecha: "15 oct 2024",
      participantes: "25 asistentes",
      lugar: "Casa de la Juventud",
      tipo: "Formación"
    },
    {
      titulo: "Diagnóstico participativo",
      fecha: "8 oct 2024",
      participantes: "40 vecinos",
      lugar: "AA.HH. Los Jardines",
      tipo: "Investigación"
    },
    {
      titulo: "Activación del espacio público",
      fecha: "1 oct 2024",
      participantes: "60 personas",
      lugar: "Plaza de Armas",
      tipo: "Intervención"
    }
  ];

  const convocatorias = [
    {
      titulo: "Voluntariado para mapeo urbano",
      fecha: "Inicia: 5 nov 2024",
      descripcion: "Buscamos jóvenes interesados en aprender sobre cartografía social y diagnóstico participativo.",
      vacantes: "10 cupos"
    },
    {
      titulo: "Taller de liderazgo comunitario",
      fecha: "Inicia: 12 nov 2024",
      descripcion: "Espacio de formación para líderes y lideresas vecinales interesados en gestión territorial.",
      vacantes: "15 cupos"
    }
  ];

  return (
    <section id="comunidad" className="py-20 md:py-28 relative overflow-hidden bg-[#F8F7F3]">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-8xl">👥</div>
        <div className="absolute bottom-20 right-10 text-8xl">💬</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D79259]/10 border border-[#D79259]/20 mb-6">
            <Users className="h-4 w-4 text-[#D79259]" />
            <span className="text-[#2C312D] text-sm font-medium">Comunidad activa</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C312D] mb-6">
            Protagonistas del
            <span className="block text-[#D79259]">
              cambio territorial
            </span>
          </h2>

          <p className="text-lg text-[#2C312D]/80 leading-relaxed">
            Visibilizamos y fortalecemos el liderazgo de juventudes, estudiantes, vecinos y creadores 
            que impulsan transformaciones reales desde sus territorios.
          </p>
        </motion.div>

        {/* Liderazgos destacados */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {liderazgos.map((persona, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="bg-white border border-[#2C312D]/10 hover:border-[#D79259]/30 transition-all duration-300 h-full group hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <div className={`w-full h-32 rounded-xl bg-gradient-to-br ${persona.color} flex items-end justify-start p-4`}>
                      <Camera className="h-8 w-8 text-[#D79259]/50" />
                    </div>
                    <div className="absolute -bottom-6 left-4">
                      <div className="w-12 h-12 rounded-full bg-[#D79259] border-2 border-white flex items-center justify-center text-white font-bold">
                        {persona.nombre.charAt(0)}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-bold text-lg text-[#2C312D]">{persona.nombre}</h3>
                    <p className="text-sm text-[#D79259] mb-2">{persona.rol}</p>
                    <p className="text-xs text-[#2C312D]/60 mb-3 flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      {persona.proyecto}
                    </p>
                    
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-1 h-4 w-4 text-[#D79259]/30 rotate-180" />
                      <p className="text-sm text-[#2C312D]/70 italic pl-4">
                        "{persona.frase}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Actividades recientes y convocatorias */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Actividades recientes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#2C312D] mb-6 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-[#D79259]" />
              Actividades recientes
            </h3>
            <div className="space-y-4">
              {actividadesRecientes.map((actividad, idx) => (
                <Card key={idx} className="bg-white border border-[#2C312D]/10 hover:border-[#D79259]/30 transition-all">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-[#2C312D]">{actividad.titulo}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-[#D79259]/10 text-[#D79259]">
                        {actividad.tipo}
                      </span>
                    </div>
                    <p className="text-sm text-[#2C312D]/60 mb-2">{actividad.fecha}</p>
                    <div className="flex gap-4 text-xs text-[#2C312D]/50">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {actividad.participantes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {actividad.lugar}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Convocatorias activas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[#2C312D] mb-6 flex items-center gap-2">
              <Heart className="h-6 w-6 text-[#D79259]" />
              Convocatorias activas
            </h3>
            <div className="space-y-4">
              {convocatorias.map((convocatoria, idx) => (
                <Card key={idx} className="bg-gradient-to-r from-[#D79259]/5 to-transparent border-2 border-[#D79259]/30">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-[#2C312D] mb-2">{convocatoria.titulo}</h4>
                    <p className="text-sm text-[#2C312D]/70 mb-3">{convocatoria.descripcion}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[#D79259] font-medium">{convocatoria.fecha}</span>
                      <span className="text-[#2C312D]/50 text-xs">{convocatoria.vacantes}</span>
                    </div>
                    <Button
                      className="w-full mt-4 bg-[#D79259] text-[#2C312D] hover:bg-[#D79259]/90 font-medium"
                      onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Postular ahora
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Llamado a la acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-[#D79259]/10 to-[#D79259]/5 border-2 border-[#D79259]/30">
            <CardContent className="p-8 md:p-12">
              <Users className="h-12 w-12 text-[#D79259] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#2C312D] mb-3">
                ¿Quieres ser parte de la comunidad?
              </h3>
              <p className="text-[#2C312D]/70 max-w-2xl mx-auto mb-6">
                Si eres joven, estudiante, vecino o creador con ganas de transformar tu territorio, 
                tenemos un lugar para ti. No necesitas experiencia, solo compromiso y ganas de aprender.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-[#D79259] text-[#2C312D] hover:bg-[#D79259]/90 font-bold shadow-lg group"
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Quiero sumarme
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#D79259] bg-transparent text-[#2C312D] hover:bg-[#D79259]/10"
                  onClick={() => window.open("/voluntariado", "_blank")}
                >
                  Ver programa de voluntariado
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}