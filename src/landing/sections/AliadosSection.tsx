import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Handshake,
  Building2,
  Globe,
  ArrowRight,
  Sparkles,
  Users,
  Landmark,
  Heart,
  Star,
  Award,
  TrendingUp
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AliadosSection() {
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  const aliados = [
    // Sector público
    {
      nombre: "SENAJU",
      logo: "/logos/aliados/logo_senaju.jpg",
      tipo: "Gobierno",
      categoria: "publico",
      descripcion: "Secretaría Nacional de la Juventud",
      impacto: "Políticas públicas para juventudes",
      color: "#5BBDD3",
      bgGradient: "from-[#5BBDD3]/10 to-transparent"
    },
    {
      nombre: "Programa Nacional Cuna Más",
      logo: "/logos/aliados/logo_cuna_mas.jpg",
      tipo: "Gobierno",
      categoria: "publico",
      descripcion: "Desarrollo infantil temprano",
      impacto: "+2,500 niños beneficiados",
      color: "#5BBDD3",
      bgGradient: "from-[#5BBDD3]/10 to-transparent"
    },
    {
      nombre: "SJM Juntos Hagamos Historia",
      logo: "/logos/aliados/logo_sjm.webp",
      tipo: "Gobierno local",
      categoria: "publico",
      descripcion: "Desarrollo comunitario y participación ciudadana",
      impacto: "5 espacios recuperados",
      color: "#5BBDD3",
      bgGradient: "from-[#5BBDD3]/10 to-transparent"
    },

    // Sector privado
    {
      nombre: "Interbank",
      logo: "/logos/aliados/logo_Interbank.png",
      tipo: "Empresa privada",
      categoria: "privado",
      descripcion: "Innovación financiera e inclusión",
      impacto: "Patrocinio de 3 proyectos",
      color: "#BDBF65",
      bgGradient: "from-[#BDBF65]/10 to-transparent"
    },

    // Organizaciones / estudios
    {
      nombre: "Anidare Arquitectura Educativa",
      logo: "/logos/aliados/logo_anidare.png",
      tipo: "Arquitectura y educación",
      categoria: "organizacion",
      descripcion: "Diseño de espacios educativos",
      impacto: "Diseño de 2 intervenciones",
      color: "#D79259",
      bgGradient: "from-[#D79259]/10 to-transparent"
    }
  ];

  const categorias = [
    { id: "todos", label: "Todos los aliados", icon: Sparkles, color: "#BDBF65" },
    { id: "publico", label: "Sector público", icon: Landmark, color: "#5BBDD3", count: 3 },
    { id: "privado", label: "Empresas", icon: TrendingUp, color: "#BDBF65", count: 1 },
    { id: "organizacion", label: "Organizaciones", icon: Users, color: "#D79259", count: 1 },
    { id: "internacional", label: "Internacionales", icon: Globe, color: "#9E5BD3", count: 0 }
  ];

  const aliadosFiltrados = activeCategory === "todos"
    ? aliados
    : aliados.filter(a => a.categoria === activeCategory);

  const stats = [
    { label: "Aliados activos", value: "+15", color: "#9E5BD3", icon: Handshake },
    { label: "Proyectos colaborativos", value: "12", color: "#5BBDD3", icon: Award },
    { label: "Personas beneficiadas", value: "2,550+", color: "#D79259", icon: Heart },
    { label: "Distritos alcanzados", value: "7", color: "#BDBF65", icon: Globe }
  ];

  return (
    <section id="aliados" className="py-20 md:py-28 relative overflow-hidden bg-[#F8F7F3]">
      {/* Elementos de fondo dinámicos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#9E5BD3]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5BBDD3]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#BDBF65]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Cabecera con diseño mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-lg border-2 border-[#9E5BD3]/20 mb-8"
          >
            <Handshake className="h-5 w-5 text-[#9EBD3]" />
            <span className="text-[#2C312D] font-medium">Red de colaboración · 2025</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-[#2C312D] mb-6 leading-tight">
            Aliados que
            <span className="relative inline-block ml-3">
              <span className="relative z-10 text-[#9E5BD3]">potencian</span>
              <motion.div
                className="absolute bottom-2 left-0 w-full h-3 bg-[#9E5BD3]/20 -z-10"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
            <span className="block text-[#9E5BD3]">el cambio</span>
          </h2>

          <p className="text-xl text-[#2C312D]/70 leading-relaxed max-w-3xl mx-auto">
            Construimos puentes con empresas, instituciones e inversores sociales comprometidos
            con la regeneración urbana, la sostenibilidad y el bien común.
          </p>
        </motion.div>

        {/* Stats en tarjetas destacadas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="shrink-0">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                          style={{ backgroundColor: `${stat.color}15` }}>
                          <Icon className="h-7 w-7" style={{ color: stat.color }} />
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-extrabold" style={{ color: stat.color }}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-[#2C312D]/60 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                    {/* Barra decorativa */}
                    <motion.div
                      className="h-1 mt-4 rounded-full"
                      style={{ backgroundColor: stat.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Filtros con diseño de píldoras */}
        {/* Filtros con diseño de píldoras */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categorias.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            // Determinar colores basados en la categoría y estado
            const getButtonColors = () => {
              if (cat.id === "todos") {
                return {
                  background: isActive ? "#BDBF65" : "white", // Usar VERDE TOMATILLO para "todos" activo
                  border: "#BDBF65",
                  text: isActive ? "#2C312D" : "#2C312D",
                  shadow: isActive ? "0 10px 20px -5px #BDBF65" : "none"
                };
              }
              return {
                background: isActive ? cat.color : "white",
                border: cat.color,
                text: isActive ? "#2C312D" : cat.color,
                shadow: isActive ? `0 10px 20px -5px ${cat.color}` : 'none'
              };
            };

            const colors = getButtonColors();

            return (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden group`}
                style={{
                  backgroundColor: colors.background,
                  borderWidth: '2px',
                  borderColor: colors.border,
                  color: colors.text,
                  boxShadow: colors.shadow
                }}
              >
                <Icon className="h-4 w-4" />
                <span>{cat.label}</span>
                {cat.count !== undefined && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-[#2C312D]/10 text-[#2C312D]'
                    }`}>
                    {cat.count}
                  </span>
                )}
                {/* Efecto de brillo */}
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            );
          })}
        </motion.div>

        {/* Grid de aliados - Diseño de galería de logos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {aliadosFiltrados.map((aliado, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                  {/* Cabecera con gradiente */}
                  <div className={`h-32 bg-gradient-to-br ${aliado.bgGradient} relative overflow-hidden`}>
                    {/* Patrón de fondo */}
                    <div className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, ${aliado.color} 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                      }}
                    />

                    {/* Logo grande y protagonista */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                      <motion.div
                        className="w-32 h-32 rounded-2xl bg-white shadow-xl border-4 border-white overflow-hidden"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img
                          src={aliado.logo}
                          alt={aliado.nombre}
                          className="w-full h-full object-contain p-3"
                        />
                      </motion.div>
                    </div>
                  </div>

                  <CardContent className="pt-16 pb-6 px-6 text-center">
                    {/* Nombre del aliado */}
                    <h3 className="text-xl font-bold text-[#2C312D] mb-2 line-clamp-2 min-h-[3.5rem]">
                      {aliado.nombre}
                    </h3>

                    {/* Tipo y descripción */}
                    <p className="text-sm text-[#2C312D]/60 mb-4 line-clamp-2">
                      {aliado.descripcion}
                    </p>

                    {/* Etiqueta de categoría */}
                    <div className="flex justify-center mb-4">
                      <span className="text-xs px-4 py-1.5 rounded-full font-medium"
                        style={{
                          backgroundColor: `${aliado.color}15`,
                          color: aliado.color,
                          border: `1px solid ${aliado.color}30`
                        }}>
                        {aliado.tipo}
                      </span>
                    </div>

                    {/* Impacto */}
                    <div className="bg-[#F8F7F3] rounded-xl p-3">
                      <p className="text-xs text-[#2C312D]/70 flex items-center justify-center gap-1">
                        <Award className="h-3 w-3" style={{ color: aliado.color }} />
                        <span className="font-medium">{aliado.impacto}</span>
                      </p>
                    </div>

                    {/* Línea decorativa animada */}
                    <motion.div
                      className="h-0.5 mt-4 mx-auto"
                      style={{ backgroundColor: aliado.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "50%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Espacios disponibles - Diseño de tarjetas de oportunidad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-[#2C312D] mb-8">
            ¿Tu organización puede ser la próxima?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-white border-2 border-dashed border-[#9E5BD3]/30 hover:border-[#9E5BD3] transition-all group">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 4, delay: i * 0.5 }}
                    >
                      <Star className="h-16 w-16 text-[#9E5BD3]/30 group-hover:text-[#9E5BD3]/50 mx-auto mb-4" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-[#2C312D] mb-2">Espacio disponible</h4>
                    <p className="text-sm text-[#2C312D]/50 mb-6">
                      Tu organización puede ser parte de esta red de colaboración
                    </p>
                    <Button
                      size="lg"
                      className="bg-[#9E5BD3] text-white hover:bg-[#9E5BD3]/90 font-medium w-full group"
                      onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Postular como aliado
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Principal - Diseño destacado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="relative overflow-hidden bg-gradient-to-r from-[#9E5BD3] to-[#5BBDD3] border-0 shadow-2xl">
            {/* Patrón de fondo */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '30px 30px'
              }}
            />

            <CardContent className="p-12 md:p-16 text-center relative z-10">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Handshake className="h-20 w-20 text-white mx-auto mb-6" />
              </motion.div>

              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                Construyamos alianzas
              </h3>
              <p className="text-white/90 text-xl max-w-3xl mx-auto mb-8">
                con propósito, impacto y transformación social
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#9E5BD3] hover:bg-white/90 font-bold shadow-xl px-10 py-7 text-lg group"
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Quiero ser aliado
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-lg"
                  onClick={() => window.open("/portafolio-aliados", "_blank")}
                >
                  Conocer alianzas existentes
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}