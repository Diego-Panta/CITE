import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, BarChart, TrendingUp, Users, Gift, Truck, Package, Candy, School, GraduationCap, University, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/core/Footer";

// Definición de tipos
interface Donacion {
  NOMBRES_COMPLETOS: string;
  UNIVERSIDAD: string;
  CODIGO: string;
  FACULTAD: string;
  TIPO_DONATIVO: string;
  ESCUELA_PROFESIONAL: string;
}

interface Estadisticas {
  totalDonaciones: number;
  porUniversidad: Record<string, number>;
  porFacultad: Record<string, number>;
  porEscuela: Record<string, number>;
  porTipoDonativo: Record<string, number>;
  topEscuelas: Array<{
    escuela: string;
    cantidad: number;
    porcentaje: string;
  }>;
  topFacultades: Array<{
    facultad: string;
    cantidad: number;
    porcentaje: string;
  }>;
  universidades: Array<{
    nombre: string;
    cantidad: number;
    porcentaje: string;
    color: string;
  }>;
}

interface Metrica {
  icon: React.ComponentType<any>;
  title: string;
  value: string;
  description: string;
  progress: number;
}

// Datos de mapeo
const facultadesMap: Record<string, string> = {
  "INGENIERIA": "Facultad de Ingeniería",
  "CIENCIAS": "Facultad de Ciencias", 
  "EDUCACION": "Facultad de Educación y Humanidades"
};

const escuelasMap: Record<string, string> = {
  // Ingeniería
  "SISTEMAS": "Ingeniería de Sistemas e Informática",
  "CIVIL": "Ingeniería Civil",
  "AGROINDUSTRIAL": "Ingeniería Agroindustrial", 
  "ENERGIA": "Ingeniería en Energía",
  "AGRONOMA": "Ingeniería Agrónoma",
  "MECANICA": "Ingeniería Mecánica",
  
  // Ciencias
  "ACUICULTURA": "Biología en Acuicultura",
  "ENFERMERIA": "Enfermería",
  "BIOTECNOLOGIA": "Biotecnología",
  "MEDICINA": "Medicina Humana",
  
  // Educación
  "INICIAL": "Educación Inicial",
  "PRIMARIA": "Educación Primaria", 
  "COMUNICACION": "Comunicación Social",
  "DERECHO": "Derecho y Ciencias Políticas",
  "LENGUA_LITERATURA": "Educación Secundaria - Esp. Lengua y Literatura",
  "MATEMATICA_FISICA": "Educación Secundaria - Esp. Matemática, Computación y Física",
  "HISTORIA_GEOGRAFIA": "Educación Secundaria - Esp. Historia, Geografía y CCSS",
  "FILOSOFIA_PSICOLOGIA": "Educación Secundaria - Esp. Filosofía, Psicología y CCSS", 
  "BIOLOGIA_QUIMICA": "Educación Secundaria - Esp. Biología, Química y Física",
  "IDIOMAS": "Educación Secundaria - Esp. Idiomas: Inglés - Francés"
};

const tiposDonativoMap: Record<string, string> = {
  "JUGUETES": "Juguetes",
  "DULCES": "Dulces", 
  "OTRO": "Otro"
};

// Colores para gráficos
const colores = ['#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#8b5cf6', '#f97316', '#06b6d4', '#84cc16', '#f43f5e', '#8b5cf6'];

export default function Finance() {
  const [donaciones, setDonaciones] = useState<Donacion[]>([]);
  const [estadisticas, setEstadisticas] = useState<Estadisticas>({
    totalDonaciones: 0,
    porUniversidad: {},
    porFacultad: {},
    porEscuela: {},
    porTipoDonativo: {},
    topEscuelas: [],
    topFacultades: [],
    universidades: []
  });

  // Cargar datos del JSON estático
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        // Importación directa del JSON
        const data = await import('./data.json');
        setDonaciones(data.default || data);
        calcularEstadisticas(data.default || data);
      } catch (error) {
        console.error('Error cargando datos:', error);
        // Datos de ejemplo basados en tu estructura
        const datosEjemplo: Donacion[] = [
          {
            "NOMBRES_COMPLETOS": "FILIPPO ANTIMO POMENTI SCAMARONE",
            "UNIVERSIDAD": "UNS", 
            "CODIGO": "202524027",
            "FACULTAD": "CIENCIAS",
            "TIPO_DONATIVO": "JUGUETES",
            "ESCUELA_PROFESIONAL": "MEDICINA"
          },
          {
            "NOMBRES_COMPLETOS": "CARMEN YOLANDA RODRIGUEZ HUERTA", 
            "UNIVERSIDAD": "UNS",
            "CODIGO": "201831063",
            "FACULTAD": "EDUCACION", 
            "TIPO_DONATIVO": "DULCES",
            "ESCUELA_PROFESIONAL": "INICIAL"
          },
          {
            "NOMBRES_COMPLETOS": "JUAN PEREZ GARCIA",
            "UNIVERSIDAD": "UNS",
            "CODIGO": "202012345", 
            "FACULTAD": "INGENIERIA",
            "TIPO_DONATIVO": "JUGUETES",
            "ESCUELA_PROFESIONAL": "SISTEMAS"
          },
          {
            "NOMBRES_COMPLETOS": "MARIA LOPEZ MARTINEZ",
            "UNIVERSIDAD": "UNS",
            "CODIGO": "201956789",
            "FACULTAD": "CIENCIAS",
            "TIPO_DONATIVO": "DULCES", 
            "ESCUELA_PROFESIONAL": "ENFERMERIA"
          },
          {
            "NOMBRES_COMPLETOS": "CARLOS UTP DONANTE",
            "UNIVERSIDAD": "UTP",
            "CODIGO": "",
            "FACULTAD": "INGENIERIA",
            "TIPO_DONATIVO": "OTRO",
            "ESCUELA_PROFESIONAL": "SISTEMAS"
          }
        ];
        setDonaciones(datosEjemplo);
        calcularEstadisticas(datosEjemplo);
      }
    };

    cargarDatos();
  }, []);

  const calcularEstadisticas = (datos: Donacion[]) => {
    const total = datos.length;
    
    // Estadísticas por universidad
    const porUniversidad: Record<string, number> = {};
    datos.forEach(donacion => {
      const universidad = donacion.CODIGO === "" ? "UTP" : "UNS";
      porUniversidad[universidad] = (porUniversidad[universidad] || 0) + 1;
    });

    // Estadísticas por facultad
    const porFacultad: Record<string, number> = {};
    datos.forEach(donacion => {
      porFacultad[donacion.FACULTAD] = (porFacultad[donacion.FACULTAD] || 0) + 1;
    });

    // Estadísticas por escuela
    const porEscuela: Record<string, number> = {};
    datos.forEach(donacion => {
      porEscuela[donacion.ESCUELA_PROFESIONAL] = (porEscuela[donacion.ESCUELA_PROFESIONAL] || 0) + 1;
    });

    // Estadísticas por tipo de donativo
    const porTipoDonativo: Record<string, number> = {};
    datos.forEach(donacion => {
      porTipoDonativo[donacion.TIPO_DONATIVO] = (porTipoDonativo[donacion.TIPO_DONATIVO] || 0) + 1;
    });

    // Top escuelas (ordenadas por cantidad de donaciones)
    const topEscuelas = Object.entries(porEscuela)
      .map(([escuela, cantidad]) => ({
        escuela: escuelasMap[escuela] || escuela,
        cantidad,
        porcentaje: ((cantidad / total) * 100).toFixed(1)
      }))
      .sort((a, b) => b.cantidad - a.cantidad)
      .slice(0, 5);

    // Top facultades
    const topFacultades = Object.entries(porFacultad)
      .map(([facultad, cantidad]) => ({
        facultad: facultadesMap[facultad] || facultad,
        cantidad,
        porcentaje: ((cantidad / total) * 100).toFixed(1)
      }))
      .sort((a, b) => b.cantidad - a.cantidad);

    // Estadísticas de universidades
    const universidades = Object.entries(porUniversidad)
      .map(([universidad, cantidad], idx) => ({
        nombre: universidad,
        cantidad,
        porcentaje: ((cantidad / total) * 100).toFixed(1),
        color: colores[idx % colores.length]
      }))
      .sort((a, b) => b.cantidad - a.cantidad);

    setEstadisticas({
      totalDonaciones: total,
      porUniversidad,
      porFacultad,
      porEscuela,
      porTipoDonativo,
      topEscuelas,
      topFacultades,
      universidades
    });
  };

  const metricas: Metrica[] = [
    {
      icon: TrendingUp,
      title: "Total de Donaciones",
      value: estadisticas.totalDonaciones.toString(),
      description: "Registros de donantes",
      progress: Math.min((estadisticas.totalDonaciones / 50) * 100, 100)
    },
    {
      icon: University,
      title: "Universidad Líder",
      value: estadisticas.universidades[0]?.nombre || "N/A",
      description: `${estadisticas.universidades[0]?.porcentaje || "0"}% del total`,
      progress: estadisticas.universidades[0] ? 100 : 0
    },
    {
      icon: School,
      title: "Facultad Más Activa",
      value: estadisticas.topFacultades[0]?.facultad?.split(' ').pop() || "N/A",
      description: estadisticas.topFacultades[0]?.facultad || "Sin datos",
      progress: estadisticas.topFacultades[0] ? 100 : 0
    },
    {
      icon: Gift,
      title: "Donativo Más Popular",
      value: Object.entries(estadisticas.porTipoDonativo).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A",
      description: "Tipo de donación preferido",
      progress: Object.entries(estadisticas.porTipoDonativo).length > 0 ? 100 : 0
    }
  ];

  // Componente de Gráfico de Barras
  const BarChartComponent = ({ data, title, color }: { data: Array<{label: string, value: number, porcentaje: string}>, title: string, color?: string }) => (
    <div className="space-y-3">
      {data.map((item, idx) => (
        <div key={item.label} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-white/90">{item.label}</span>
            <span className="text-white/70">{item.value} ({item.porcentaje}%)</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-3">
            <div 
              className="h-3 rounded-full transition-all duration-1000"
              style={{ 
                width: `${item.porcentaje}%`,
                backgroundColor: color || colores[idx % colores.length]
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  // Componente de Gráfico Circular
  const PieChartComponent = ({ data, title }: { data: Array<{label: string, value: number, porcentaje: string, color: string}>, title: string }) => {
    let currentAngle = 0;
    
    return (
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-40 mb-4">
          <svg width="160" height="160" viewBox="0 0 160 160" className="transform -rotate-90">
            {data.map((item, idx) => {
              const percentage = parseFloat(item.porcentaje);
              const angle = (percentage / 100) * 360;
              const largeArcFlag = percentage > 50 ? 1 : 0;
              
              const x1 = 80 + 60 * Math.cos(currentAngle * Math.PI / 180);
              const y1 = 80 + 60 * Math.sin(currentAngle * Math.PI / 180);
              currentAngle += angle;
              const x2 = 80 + 60 * Math.cos(currentAngle * Math.PI / 180);
              const y2 = 80 + 60 * Math.sin(currentAngle * Math.PI / 180);

              return (
                <path
                  key={idx}
                  d={`M 80 80 L ${x1} ${y1} A 60 60 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                  fill={item.color}
                  className="transition-all duration-1000"
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-white text-2xl font-bold">{data.reduce((acc, curr) => acc + curr.value, 0)}</div>
              <div className="text-white/70 text-xs">Total</div>
            </div>
          </div>
        </div>
        <div className="space-y-2 w-full">
          {data.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-white/90">{item.label}</span>
              </div>
              <span className="text-white/70">{item.porcentaje}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-red-950 via-red-900 to-amber-900 text-white">
      {/* Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 text-9xl">📈</div>
          <div className="absolute bottom-20 left-20 text-9xl">🎯</div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 mb-6">
              <BarChart3 className="h-4 w-4 text-blue-300" />
              <span className="text-blue-200 text-sm font-medium">Dashboard de Donaciones</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Estadísticas de
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-yellow-300">
                Donaciones
              </span>
            </h1>

            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              Visualiza el impacto de nuestra comunidad universitaria. 
              Cada donación cuenta para hacer posible el CITE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Métricas Principales */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Resumen General
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Principales indicadores de participación de la comunidad universitaria
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metricas.map((metrica, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-amber-500/20 to-red-500/20 flex items-center justify-center mx-auto mb-4">
                      <metrica.icon className="h-6 w-6 text-amber-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {metrica.value}
                    </h3>
                    <p className="text-white/90 font-medium mb-2 text-sm">
                      {metrica.title}
                    </p>
                    <p className="text-white/70 text-xs mb-3">
                      {metrica.description}
                    </p>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-linear-to-r from-amber-400 to-amber-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${metrica.progress}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gráficos Principales */}
      <section className="py-20 bg-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Visualización de Datos
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Gráficos interactivos que muestran la distribución de donaciones
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Gráfico Circular - Distribución por Universidad */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-linear-to-br from-blue-500/10 to-purple-500/10 border-blue-400/20 h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center gap-2">
                    <University className="h-5 w-5 text-blue-300" />
                    Distribución por Universidad
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <PieChartComponent 
                    data={estadisticas.universidades.map((uni, idx) => ({
                      label: uni.nombre,
                      value: uni.cantidad,
                      porcentaje: uni.porcentaje,
                      color: uni.color
                    }))}
                    title="Universidades"
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Gráfico de Barras - Tipos de Donativo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-linear-to-br from-amber-500/10 to-red-500/10 border-amber-400/20 h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center gap-2">
                    <Gift className="h-5 w-5 text-amber-300" />
                    Tipos de Donativo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChartComponent 
                    data={Object.entries(estadisticas.porTipoDonativo).map(([tipo, cantidad], idx) => ({
                      label: tiposDonativoMap[tipo] || tipo,
                      value: cantidad,
                      porcentaje: ((cantidad / estadisticas.totalDonaciones) * 100).toFixed(1)
                    }))}
                    title="Tipos de Donativo"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Gráfico de Facultades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <School className="h-5 w-5 text-amber-300" />
                  Donaciones por Facultad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BarChartComponent 
                  data={estadisticas.topFacultades.map((facultad, idx) => ({
                    label: facultad.facultad,
                    value: facultad.cantidad,
                    porcentaje: facultad.porcentaje
                  }))}
                  title="Facultades"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Top Escuelas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-linear-to-br from-purple-500/10 to-blue-500/10 border-purple-400/20">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-purple-300" />
                  Top 5 Escuelas Más Solidarias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {estadisticas.topEscuelas.map((escuela, idx) => (
                    <div key={idx} className="text-center p-4 rounded-xl bg-white/5">
                      <div className="text-2xl font-bold text-amber-300 mb-2">
                        #{idx + 1}
                      </div>
                      <div className="text-white font-medium text-sm mb-1">
                        {escuela.escuela.split(' - ')[0]}
                      </div>
                      <div className="text-white/70 text-xs">
                        {escuela.cantidad} donaciones
                      </div>
                      <div className="text-amber-300 text-sm font-bold mt-2">
                        {escuela.porcentaje}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Tabla de Donantes */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Lista de Donantes
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Reconocimiento a cada miembro de nuestra comunidad que ha contribuido
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Registro Completo de Donaciones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 text-white/80 font-medium">#</th>
                        <th className="text-left py-3 px-4 text-white/80 font-medium">Nombres Completos</th>
                        <th className="text-left py-3 px-4 text-white/80 font-medium">Universidad</th>
                        <th className="text-left py-3 px-4 text-white/80 font-medium">Código</th>
                        <th className="text-left py-3 px-4 text-white/80 font-medium">Facultad</th>
                        <th className="text-left py-3 px-4 text-white/80 font-medium">Escuela Profesional</th>
                        <th className="text-left py-3 px-4 text-white/80 font-medium">Tipo de Donativo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donaciones.map((donacion, index) => (
                        <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                          <td className="py-3 px-4 text-white/70">{index + 1}</td>
                          <td className="py-3 px-4 text-white/90 font-medium">
                            {donacion.NOMBRES_COMPLETOS}
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                              donacion.CODIGO === '' 
                                ? 'bg-green-500/20 text-green-300' 
                                : 'bg-blue-500/20 text-blue-300'
                            }`}>
                              {donacion.CODIGO === '' ? 'UTP' : 'UNS'}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-white/70">
                            {donacion.CODIGO || '-'}
                          </td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs">
                              {facultadesMap[donacion.FACULTAD] || donacion.FACULTAD}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-white/80">
                            {escuelasMap[donacion.ESCUELA_PROFESIONAL] || donacion.ESCUELA_PROFESIONAL}
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                              donacion.TIPO_DONATIVO === 'JUGUETES' 
                                ? 'bg-blue-500/20 text-blue-300' 
                                : donacion.TIPO_DONATIVO === 'DULCES'
                                ? 'bg-red-500/20 text-red-300'
                                : 'bg-purple-500/20 text-purple-300'
                            }`}>
                              {donacion.TIPO_DONATIVO === 'JUGUETES' && <Package className="h-3 w-3" />}
                              {donacion.TIPO_DONATIVO === 'DULCES' && <Candy className="h-3 w-3" />}
                              {donacion.TIPO_DONATIVO === 'OTRO' && <Gift className="h-3 w-3" />}
                              {tiposDonativoMap[donacion.TIPO_DONATIVO] || donacion.TIPO_DONATIVO}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {donaciones.length === 0 && (
                  <div className="text-center py-12">
                    <Gift className="h-12 w-12 text-white/30 mx-auto mb-4" />
                    <p className="text-white/60">No hay donaciones registradas aún</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Información Adicional */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mt-12">
            <p className="text-white/60 text-sm">
              Estadísticas actualizadas al {new Date().toLocaleDateString('es-PE', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}