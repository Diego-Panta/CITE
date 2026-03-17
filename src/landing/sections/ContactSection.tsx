import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { WhatsAppService } from "@/services/whatsappService";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombres: "",
    correo: "",
    telefono: "",
    tipo: "Donante",
    mensaje: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSendingWhatsApp, setIsSendingWhatsApp] = useState(false);

  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/1N5C43zzodL3fngD3g64T-fRXEaOyQ5QsQyzFzSwdYlA/formResponse";
  const FIELD_IDS = {
    nombres: "entry.1399437702",
    correo: "entry.416189898",
    telefono: "entry.50690292",
    tipo: "entry.1278678446",
    mensaje: "entry.353922949"
  };

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
  };

  const validateForm = () => {
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    let valid = true;

    if (!gmailPattern.test(formData.correo)) {
      valid = false;
      alert("Por favor ingresa un correo de Gmail válido (ejemplo@gmail.com)");
      return false;
    }

    if (!formData.nombres.trim() || !formData.correo.trim() || !formData.telefono.trim() || !formData.mensaje.trim()) {
      valid = false;
      alert("Por favor completa todos los campos obligatorios");
      return false;
    }

    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Enviar a Google Forms
      const formDataToSend = new FormData();
      formDataToSend.append(FIELD_IDS.nombres, formData.nombres);
      formDataToSend.append(FIELD_IDS.correo, formData.correo);
      formDataToSend.append(FIELD_IDS.telefono, formData.telefono);
      formDataToSend.append(FIELD_IDS.tipo, formData.tipo);
      formDataToSend.append(FIELD_IDS.mensaje, formData.mensaje);

      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors"
      });

      // 2. Enviar mensaje de WhatsApp automáticamente
      if (formData.telefono) {
        setIsSendingWhatsApp(true);
        const whatsappResult = await WhatsAppService.sendWelcomeMessage(formData.telefono, formData.nombres);
        
        if (!whatsappResult.success) {
          console.warn('WhatsApp no se pudo enviar:', whatsappResult.error);
        }
      }

      setFormData({
        nombres: "",
        correo: "",
        telefono: "",
        tipo: "donante",
        mensaje: ""
      });

      alert("¡Mensaje enviado correctamente! Te contactaremos pronto." + (formData.telefono ? " También te hemos enviado información por WhatsApp." : ""));

    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
      setIsSendingWhatsApp(false);
    }
  };

  const handleSendWhatsApp = async () => {
    if (!formData.telefono) {
      alert("Por favor ingresa tu número de teléfono primero");
      return;
    }

    setIsSendingWhatsApp(true);
    try {
      const result = await WhatsAppService.sendWelcomeMessage(formData.telefono, formData.nombres);
      
      if (result.success) {
        alert("¡Te hemos enviado información por WhatsApp! Revisa tu teléfono.");
      } else {
        alert("No pudimos enviar el WhatsApp automáticamente. Pero puedes contactarnos directamente.");
      }
    } catch (error) {
      alert("Error al enviar WhatsApp. Pero puedes contactarnos directamente.");
    } finally {
      setIsSendingWhatsApp(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "202114013@uns.edu.pe",
      link: "mailto:202114013@uns.edu.pe"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(+51) 951011604",
      link: "https://wa.link/tpuxiu"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Chimbote, Ancash, Perú",
      link: null
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", link: "https://instagram.com", handle: "@cite" },
    { icon: Facebook, label: "Facebook", link: "https://facebook.com", handle: "CITE Oficial" },
    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/company/", handle: "CITE" }
  ];

  const tipoOpciones = [
    { value: "Donante", label: "Donante" },
    { value: "Voluntario", label: "Voluntario" },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-[#F8F7F3]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 text-9xl">📧</div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BDBF65]/10 border border-[#BDBF65]/20 mb-6">
            <Send className="h-4 w-4 text-[#5BBDD3]" />
            <span className="text-[#2C312D] text-sm font-medium">Hablemos</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C312D] mb-6">
            Conversemos:
            <span className="block text-[#BDBF65]">
              Tu Voz Importa
            </span>
          </h2>

          <p className="text-lg text-[#2C312D]/80 leading-relaxed">
            Ya sea que quieras conocer más sobre la causa, convertirte en voluntario, proponer una alianza 
            o simplemente compartir tus ideas, <span className="text-[#D79259] font-semibold">estamos aquí para escucharte</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
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
                  <div className="space-y-2">
                    <label className="text-sm text-[#2C312D]/80 font-medium">
                      Nombres Completos <span className="text-red-400">*</span>
                    </label>
                    <Input
                      name="nombres"
                      value={formData.nombres}
                      onChange={handleInputChange}
                      placeholder="NILTON RAMOS ENCARNACION"
                      className="bg-white border border-[#2C312D]/20 text-[#2C312D] placeholder:text-[#2C312D]/40 focus:border-[#BDBF65] focus:ring-[#BDBF65]/20"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-[#2C312D]/80 font-medium">
                        Correo electrónico <span className="text-red-400">*</span>
                      </label>
                      <Input
                        name="correo"
                        type="email"
                        value={formData.correo}
                        onChange={handleInputChange}
                        placeholder="ejemplo@gmail.com"
                        className="bg-white border border-[#2C312D]/20 text-[#2C312D] placeholder:text-[#2C312D]/40 focus:border-[#BDBF65] focus:ring-[#BDBF65]/20"
                        required
                      />
                      <p className="text-xs text-[#5BBDD3]">
                        * Solo aceptamos correos de Gmail
                      </p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-[#2C312D]/80 font-medium">
                        Teléfono <span className="text-red-400">*</span>
                      </label>
                      <Input
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        placeholder="+51 999 999 999"
                        className="bg-white border border-[#2C312D]/20 text-[#2C312D] placeholder:text-[#2C312D]/40 focus:border-[#BDBF65] focus:ring-[#BDBF65]/20"
                        required
                      />
                      <p className="text-xs text-[#5BBDD3]">
                        * Te enviaremos información automáticamente por WhatsApp
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-[#2C312D]/80 font-medium">
                      ¿Cómo quieres apoyar? <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#2C312D]/20 text-[#2C312D] focus:border-[#BDBF65] focus:outline-none focus:ring-2 focus:ring-[#BDBF65]/20"
                      required
                    >
                      {tipoOpciones.map((opcion) => (
                        <option 
                          key={opcion.value} 
                          value={opcion.value}
                          className="bg-white text-[#2C312D]"
                        >
                          {opcion.label}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-[#5BBDD3]">
                      * Selecciona cómo te gustaría participar
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-[#2C312D]/80 font-medium">
                      Mensaje <span className="text-red-400">*</span>
                    </label>
                    <Textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      placeholder="Comparte tus ideas, preguntas o propuestas..."
                      rows={5}
                      className="bg-white border border-[#2C312D]/20 text-[#2C312D] placeholder:text-[#2C312D]/40 focus:border-[#BDBF65] focus:ring-[#BDBF65]/20 resize-none"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="flex-1 bg-[#BDBF65] text-[#2C312D] hover:bg-[#BDBF65]/90 font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                    </Button>
                    
                    <Button 
                      type="button"
                      size="lg"
                      variant="outline"
                      onClick={handleSendWhatsApp}
                      disabled={isSendingWhatsApp || !formData.telefono}
                      className="flex-1 border-2 border-[#5BBDD3] bg-[#5BBDD3]/10 text-[#2C312D] hover:bg-[#5BBDD3]/20 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      {isSendingWhatsApp ? "Enviando..." : "Recibir Info por WhatsApp"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="bg-[#D79259]/10 border-[#D79259]/30">
              <CardHeader>
                <CardTitle className="text-lg text-[#2C312D]">Contacto Directo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-[#BDBF65]/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-[#BDBF65]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-[#2C312D]/70">{item.label}</div>
                      {item.link ? (
                        <a 
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#2C312D] font-medium hover:text-[#BDBF65] transition-colors wrap-break-word"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-[#2C312D] font-medium wrap-break-word">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white border border-[#2C312D]/10">
              <CardHeader>
                <CardTitle className="text-lg text-[#2C312D]">Síguenos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F7F3] hover:bg-[#BDBF65]/10 transition-all duration-300 group"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-[#BDBF65]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <social.icon className="h-5 w-5 text-[#2C312D]/70 group-hover:text-[#BDBF65] transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-[#2C312D] font-medium group-hover:text-[#BDBF65] transition-colors">
                        {social.handle}
                      </div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-[#9E5BD3]/10 border-[#9E5BD3]/30">
              <CardContent className="p-6 text-center">
                <p className="text-[#2C312D]/80 text-sm leading-relaxed italic">
                  "Cada mensaje que recibimos nos inspira a seguir trabajando por una Navidad más justa y solidaria."
                </p>
                <p className="text-[#BDBF65] font-semibold mt-3">
                  ¡Esperamos saber de ti pronto! 💛
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}