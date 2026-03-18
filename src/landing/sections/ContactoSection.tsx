import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Instagram, 
  Youtube, 
  Linkedin, 
  MessageCircle,
  Users,
  Building2,
  User
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactoSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    organizacion: "",
    tipo: "voluntario",
    mensaje: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      alert("¡Mensaje enviado! Te contactaremos pronto.");
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        organizacion: "",
        tipo: "voluntario",
        mensaje: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "cite@laboratoriourbano.org",
      link: "mailto:cite@laboratoriourbano.org",
      color: "#BDBF65"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(+51) 951 011 604",
      link: "https://wa.link/cite",
      color: "#5BBDD3"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Lima, Perú",
      link: null,
      color: "#D79259"
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", link: "https://www.instagram.com/cite.urb/", handle: "@cite.urb", color: "#D79259" },
    { icon: Youtube, label: "Youtube", link: "https://www.youtube.com/channel/UCDVi2AdPzPFqyNJjBDU8Lig", handle: "CITE Laboratorio Urbano", color: "#5BBDD3" },
    { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/company/cite-ciudadresiliente/", handle: "CITE Lab", color: "#9E5BD3" }
  ];

  const tipoOpciones = [
    { value: "voluntario", label: "Voluntario/a", icon: Users },
    { value: "aliado", label: "Posible aliado", icon: Building2 },
    { value: "comunidad", label: "Miembro de comunidad", icon: User },
    { value: "otro", label: "Otro", icon: User }
  ];

  return (
    <section id="contacto" className="py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 text-9xl">📬</div>
        <div className="absolute bottom-40 right-20 text-9xl">💬</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C312D] mb-6">
            Conversemos para
            <span className="block text-[#BDBF65]">
              construir juntos
            </span>
          </h2>

          <p className="text-lg text-[#2C312D]/80 leading-relaxed">
            ¿Quieres sumarte como voluntario, establecer una alianza o proponer una idea para tu territorio? 
            Estamos aquí para escucharte y co-crear soluciones.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white border border-[#2C312D]/10 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-[#2C312D]">Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-[#2C312D]/80 font-medium">
                        Nombre completo <span className="text-[#D79259]">*</span>
                      </label>
                      <Input
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        className="bg-white border border-[#2C312D]/20 text-[#2C312D] placeholder:text-[#2C312D]/40 focus:border-[#BDBF65] focus:ring-[#BDBF65]/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-[#2C312D]/80 font-medium">
                        Email <span className="text-[#D79259]">*</span>
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tucorreo@ejemplo.com"
                        className="bg-white border border-[#2C312D]/20 text-[#2C312D] placeholder:text-[#2C312D]/40 focus:border-[#BDBF65] focus:ring-[#BDBF65]/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-[#2C312D]/80 font-medium">
                        Teléfono
                      </label>
                      <Input
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        placeholder="+51 999 999 999"
                        className="bg-white border border-[#2C312D]/20 text-[#2C312D] placeholder:text-[#2C312D]/40 focus:border-[#BDBF65] focus:ring-[#BDBF65]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-[#2C312D]/80 font-medium">
                        Organización (opcional)
                      </label>
                      <Input
                        name="organizacion"
                        value={formData.organizacion}
                        onChange={handleInputChange}
                        placeholder="¿Representas a alguna organización?"
                        className="bg-white border border-[#2C312D]/20 text-[#2C312D] placeholder:text-[#2C312D]/40 focus:border-[#BDBF65] focus:ring-[#BDBF65]/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-[#2C312D]/80 font-medium">
                      ¿Cómo te gustaría participar? <span className="text-[#D79259]">*</span>
                    </label>
                    <select
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#2C312D]/20 text-[#2C312D] focus:border-[#BDBF65] focus:outline-none focus:ring-2 focus:ring-[#BDBF65]/20"
                      required
                    >
                      {tipoOpciones.map((opcion) => (
                        <option key={opcion.value} value={opcion.value}>
                          {opcion.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-[#2C312D]/80 font-medium">
                      Mensaje <span className="text-[#D79259]">*</span>
                    </label>
                    <Textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      placeholder="Cuéntanos tu idea, propuesta o cómo te gustaría colaborar..."
                      rows={5}
                      className="bg-white border border-[#2C312D]/20 text-[#2C312D] placeholder:text-[#2C312D]/40 focus:border-[#BDBF65] focus:ring-[#BDBF65]/20 resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-[#BDBF65] text-[#2C312D] hover:bg-[#BDBF65]/90 font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contacto directo */}
            <Card className="bg-white border border-[#2C312D]/10">
              <CardHeader>
                <CardTitle className="text-lg text-[#2C312D]">Contacto directo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-[#F8F7F3] flex items-center justify-center">
                      <item.icon className="h-5 w-5" style={{ color: item.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-[#2C312D]/70">{item.label}</div>
                      {item.link ? (
                        <a 
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#2C312D] font-medium hover:text-[#BDBF65] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-[#2C312D] font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Redes sociales */}
            <Card className="bg-white border border-[#2C312D]/10">
              <CardHeader>
                <CardTitle className="text-lg text-[#2C312D]">Síguenos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F7F3] hover:bg-[#BDBF65]/10 transition-all duration-300 group"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="h-5 w-5" style={{ color: social.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-[#2C312D] font-medium group-hover:text-[#BDBF65] transition-colors">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Mensaje inspirador */}
            <Card className="bg-gradient-to-br from-[#BDBF65]/10 to-[#5BBDD3]/10 border-2 border-[#BDBF65]/30">
              <CardContent className="p-6 text-center">
                <p className="text-[#2C312D]/80 text-sm leading-relaxed italic">
                  "Construir ciudades más justas es posible cuando personas, organizaciones e instituciones 
                  trabajamos juntas con un propósito común."
                </p>
                <p className="text-[#BDBF65] font-semibold mt-3">
                  ¡Hablemos para hacerlo realidad! 💚
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}