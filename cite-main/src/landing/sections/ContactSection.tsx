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
          // No mostramos error al usuario para no interrumpir la experiencia
        }
      }

      // Limpiar formulario
      setFormData({
        nombres: "",
        correo: "",
        telefono: "",
        tipo: "donante",
        mensaje: ""
      });

      // Mostrar mensaje de éxito
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
    { icon: Instagram, label: "Instagram", link: "https://instagram.com", handle: "@navifest" },
    { icon: Facebook, label: "Facebook", link: "https://facebook.com", handle: "NaviFest Oficial" },
    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/company/", handle: "NaviFest" }
  ];

  const tipoOpciones = [
    { value: "Donante", label: "Donante" },
    { value: "Voluntario", label: "Voluntario" },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-400/10 border border-green-400/20 mb-6">
            <Send className="h-4 w-4 text-green-300" />
            <span className="text-green-200 text-sm font-medium">Hablemos</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Conversemos:
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-yellow-300">
              Tu Voz Importa
            </span>
          </h2>

          <p className="text-lg text-white/80 leading-relaxed">
            Ya sea que quieras conocer más sobre la causa, convertirte en voluntario, proponer una alianza 
            o simplemente compartir tus ideas, <span className="text-amber-300 font-semibold">estamos aquí para escucharte</span>.
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
            <Card className="bg-white/5 border-white/10 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm text-white/80 font-medium">
                      Nombres Completos <span className="text-red-400">*</span>
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

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-white/80 font-medium">
                        Correo electrónico <span className="text-red-400">*</span>
                      </label>
                      <Input
                        name="correo"
                        type="email"
                        value={formData.correo}
                        onChange={handleInputChange}
                        placeholder="ejemplo@gmail.com"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-amber-400/50"
                        required
                      />
                      <p className="text-xs text-amber-300/80">
                        * Solo aceptamos correos de Gmail
                      </p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-white/80 font-medium">
                        Teléfono <span className="text-red-400">*</span>
                      </label>
                      <Input
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        placeholder="+51 999 999 999"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-amber-400/50"
                        required
                      />
                      <p className="text-xs text-amber-300/80">
                        * Te enviaremos información automáticamente por WhatsApp
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-white/80 font-medium">
                      ¿Cómo quieres apoyar? <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
                      required
                    >
                      {tipoOpciones.map((opcion) => (
                        <option 
                          key={opcion.value} 
                          value={opcion.value}
                          className="bg-red-950 text-white"
                        >
                          {opcion.label}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-amber-300/80">
                      * Selecciona cómo te gustaría participar
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-white/80 font-medium">
                      Mensaje <span className="text-red-400">*</span>
                    </label>
                    <Textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      placeholder="Comparte tus ideas, preguntas o propuestas..."
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-amber-400/50 resize-none"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="flex-1 bg-linear-to-r from-amber-400 to-amber-500 text-red-950 hover:from-amber-500 hover:to-amber-600 font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
                      className="flex-1 border-2 border-green-500/50 bg-green-500/10 text-green-300 hover:bg-green-500/20 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
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
            <Card className="bg-linear-to-br from-amber-500/20 to-red-500/20 border-amber-400/30 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-lg text-white">Contacto Directo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-amber-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-white/70">{item.label}</div>
                      {item.link ? (
                        <a 
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-medium hover:text-amber-300 transition-colors wrap-break-word"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium wrap-break-word">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg text-white">Síguenos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <social.icon className="h-5 w-5 text-white/70 group-hover:text-amber-300 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-white/90 font-medium group-hover:text-amber-300 transition-colors">
                        {social.handle}
                      </div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-linear-to-br from-purple-500/20 to-blue-500/20 border-purple-400/30">
              <CardContent className="p-6 text-center">
                <p className="text-white/90 text-sm leading-relaxed italic">
                  "Cada mensaje que recibimos nos inspira a seguir trabajando por una Navidad más justa y solidaria."
                </p>
                <p className="text-amber-300 font-semibold mt-3">
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