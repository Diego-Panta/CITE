import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Gift, Send, CheckCircle, Package, Candy } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/core/Footer";

export default function DonationForm() {
  const [formData, setFormData] = useState({
    nombres: "",
    codigo: "",
    facultad: "",
    escuela: "",
    donativo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reemplaza con tu ACTION de Google Forms
  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/10NOuceWGljoEh4h1jozRTZf_1J1oNtLPckkvQY2zhrI/formResponse";
  
  // Reemplaza con tus FIELD_IDS reales
  const FIELD_IDS = {
    nombres: "entry.1986265912",
    codigo: "entry.299733493",
    facultad: "entry.1807706493",
    escuela: "entry.106031614",
    donativo: "entry.1491230262",
  };

  const facultades = [
    { value: "", label: "Selecciona tu facultad" },
    { value: "INGENIERIA", label: "Facultad de Ingeniería" },
    { value: "CIENCIAS", label: "Facultad de Ciencias" },
    { value: "EDUCACION", label: "Facultad de Educación y Humanidades" }
  ];

  const escuelasPorFacultad = {
    INGENIERIA: [
      { value: "", label: "Selecciona tu escuela" },
      { value: "SISTEMAS", label: "Ingeniería de Sistemas e Informática" },
      { value: "CIVIL", label: "Ingeniería Civil" },
      { value: "AGROINDUSTRIAL", label: "Ingeniería Agroindustrial" },
      { value: "ENERGIA", label: "Ingeniería en Energía" },
      { value: "AGRONOMA", label: "Ingeniería Agrónoma" },
      { value: "MECANICA", label: "Ingeniería Mecánica" }
    ],
    CIENCIAS: [
      { value: "", label: "Selecciona tu escuela" },
      { value: "ACUICULTURA", label: "Biología en Acuicultura" },
      { value: "ENFERMERIA", label: "Enfermería" },
      { value: "BIOTECNOLOGIA", label: "Biotecnología" },
      { value: "MEDICINA", label: "Medicina Humana" }
    ],
    EDUCACION: [
      { value: "", label: "Selecciona tu escuela" },
      { value: "INICIAL", label: "Educación Inicial" },
      { value: "PRIMARIA", label: "Educación Primaria" },
      { value: "COMUNICACION", label: "Comunicación Social" },
      { value: "DERECHO", label: "Derecho y Ciencias Políticas" },
      { value: "LENGUA_LITERATURA", label: "Educación Secundaria - Esp. Lengua y Literatura" },
      { value: "MATEMATICA_FISICA", label: "Educación Secundaria - Esp. Matemática, Computación y Física" },
      { value: "HISTORIA_GEOGRAFIA", label: "Educación Secundaria - Esp. Historia, Geografía y CCSS" },
      { value: "FILOSOFIA_PSICOLOGIA", label: "Educación Secundaria - Esp. Filosofía, Psicología y CCSS" },
      { value: "BIOLOGIA_QUIMICA", label: "Educación Secundaria - Esp. Biología, Química y Física" },
      { value: "IDIOMAS", label: "Educación Secundaria - Esp. Idiomas: Inglés - Francés" }
    ]
  };

  const tiposDonativo = [
    { value: "", label: "Selecciona tu donativo" },
    { value: "JUGUETES", label: "Juguetes", icon: Package },
    { value: "DULCES", label: "Dulces", icon: Candy },
    { value: "OTRO", label: "Otro", icon: Gift }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'nombres') {
      setFormData(prev => ({
        ...prev,
        [name]: value.toUpperCase()
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Si cambia la facultad, resetear la escuela
    if (name === 'facultad') {
      setFormData(prev => ({
        ...prev,
        escuela: ""
      }));
    }
  };

  const validateForm = () => {
    if (!formData.nombres.trim() || !formData.codigo.trim() || 
        !formData.facultad || !formData.escuela || !formData.donativo) {
      alert("Por favor completa todos los campos obligatorios");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar a Google Forms
      const formDataToSend = new FormData();
      formDataToSend.append(FIELD_IDS.nombres, formData.nombres);
      formDataToSend.append(FIELD_IDS.codigo, formData.codigo);
      formDataToSend.append(FIELD_IDS.facultad, formData.facultad);
      formDataToSend.append(FIELD_IDS.escuela, formData.escuela);
      formDataToSend.append(FIELD_IDS.donativo, formData.donativo);
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors"
      });

      // Limpiar formulario
      setFormData({
        nombres: "",
        codigo: "",
        facultad: "",
        escuela: "",
        donativo: "",
      });

      // Mostrar mensaje de éxito
      alert("¡Donación registrada correctamente! Gracias por tu solidaridad.");

    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al registrar tu donación. Por favor, intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-red-950 via-red-900 to-amber-900 text-white">
      {/* Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 text-9xl">🎁</div>
          <div className="absolute bottom-20 left-20 text-9xl">❤️</div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-400/10 border border-green-400/20 mb-6">
              <Gift className="h-4 w-4 text-green-300" />
              <span className="text-green-200 text-sm font-medium">Registro de Donaciones</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Registra Tu
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-yellow-300">
                Donación
              </span>
            </h1>

            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              Tu generosidad hará posible que más niños disfruten de una Navidad especial. 
              Registra tu donación y sé parte de esta causa solidaria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulario de Donación */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-md">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-white">
                  Formulario de Donación
                </CardTitle>
                <p className="text-white/70 mt-2">
                  Completa la información solicitada para registrar tu donación
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombres y Apellidos */}
                  <div className="space-y-2">
                    <label className="text-sm text-white/80 font-medium">
                      Nombres y Apellidos <span className="text-red-400">*</span>
                    </label>
                    <Input
                      name="nombres"
                      value={formData.nombres}
                      onChange={handleInputChange}
                      placeholder="NILTON RAMOS ENCARNACION"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-amber-400/50"
                      required
                    />
                  </div>

                  {/* Código de Matrícula */}
                  <div className="space-y-2">
                    <label className="text-sm text-white/80 font-medium">
                      Código de Matrícula <span className="text-red-400">*</span>
                    </label>
                    <Input
                      name="codigo"
                      value={formData.codigo}
                      onChange={handleInputChange}
                      placeholder="202114013"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-amber-400/50"
                      required
                    />
                  </div>

                  {/* Facultad y Escuela Profesional */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-white/80 font-medium">
                        Facultad <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="facultad"
                        value={formData.facultad}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
                        required
                      >
                        {facultades.map((facultad) => (
                          <option 
                            key={facultad.value} 
                            value={facultad.value}
                            className="bg-red-950 text-white"
                          >
                            {facultad.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-white/80 font-medium">
                        Escuela Profesional <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="escuela"
                        value={formData.escuela}
                        onChange={handleInputChange}
                        disabled={!formData.facultad}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/20 disabled:opacity-50"
                        required
                      >
                        {(escuelasPorFacultad[formData.facultad as keyof typeof escuelasPorFacultad] || [{ value: "", label: "Primero selecciona una facultad" }]).map((escuela) => (
                          <option 
                            key={escuela.value} 
                            value={escuela.value}
                            className="bg-red-950 text-white"
                          >
                            {escuela.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Tipo de Donativo */}
                  <div className="space-y-4">
                    <label className="text-sm text-white/80 font-medium">
                      Tipo de Donativo <span className="text-red-400">*</span>
                    </label>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {tiposDonativo.filter(tipo => tipo.value !== "").map((tipo) => {
                        const IconComponent = tipo.icon;
                        return (
                          <div
                            key={tipo.value}
                            className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              formData.donativo === tipo.value
                                ? "border-amber-400 bg-amber-400/10"
                                : "border-white/20 bg-white/5 hover:border-white/40"
                            }`}
                            onClick={() => setFormData(prev => ({
                              ...prev,
                              donativo: tipo.value,
                            }))}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg ${
                                formData.donativo === tipo.value
                                  ? "bg-amber-400/20"
                                  : "bg-white/10"
                              }`}>
                                <CheckCircle className={`h-5 w-5 ${
                                  formData.donativo === tipo.value
                                    ? "text-amber-300"
                                    : "text-white/70"
                                }`} />
                              </div>
                              <span className="text-white font-medium">
                                {tipo.label}
                              </span>
                            </div>
                            
                            {formData.donativo === tipo.value && (
                              <CheckCircle className="absolute top-2 right-2 h-5 w-5 text-amber-300" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex justify-center pt-4">
                    <Button 
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="bg-linear-to-r from-amber-400 to-amber-500 text-red-950 hover:from-amber-500 hover:to-amber-600 font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed px-8"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {isSubmitting ? "Registrando..." : "Registrar Donación"}
                    </Button>
                  </div>

                  {/* Información adicional */}
                  <div className="text-center pt-4 border-t border-white/10">
                    <p className="text-white/60 text-sm">
                      Al registrar tu donación, aceptas que esta información sea utilizada para 
                      fines de transparencia y organización del programa CITE.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Necesitas Ayuda?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Si tienes alguna duda sobre el proceso de donación o necesitas asistencia, 
              no dudes en contactarnos.
            </p>
            
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400/10 border border-amber-400/20">
              <Gift className="h-5 w-5 text-amber-300" />
              <span className="text-amber-200 font-medium">
                Contacto: 202114013@uns.edu.pe
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}