import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cómo se utilizarán las donaciones?",
      answer:
        "Todo lo recaudado será destinado a la compra de insumos para la chocolatada, panetones, juguetes y artículos para el compartir navideño. Las donaciones materiales —como juguetes o dulces— se entregarán directamente a los niños y niñas de hasta 13 años de edad, pertenecientes a familias de bajos recursos de nuestra comunidad."
    },
    {
      question: "¿Puedo donar sin asistir al evento?",
      answer:
        "¡Sí! Puedes colaborar sin estar presente. Solo necesitas ponerte en contacto con alguno de los miembros voluntarios para entregar tu donación física, o hacerlo de forma monetaria escaneando nuestro código QR oficial."
    },
    {
      question: "¿Qué puedo donar?",
      answer:
        "Aceptamos juguetes nuevos o en buen estado, dulces, panetones, artículos escolares y cualquier detalle que pueda llevar alegría a los niños. También puedes donar dinero mediante el QR disponible en el evento o en nuestra web."
    },
    {
      question: "¿Dónde se realizará el evento?",
      answer:
        "El CITE se llevará a cabo en el Anfiteatro de la Universidad Nacional del Santa. Contaremos con señalización y apoyo del equipo de voluntarios para orientarte al llegar."
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden bg-[#F8F7F3]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 text-9xl">❓</div>
        <div className="absolute bottom-20 left-10 text-9xl">💡</div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5BBDD3]/10 border border-[#5BBDD3]/20 mb-6">
            <HelpCircle className="h-4 w-4 text-[#5BBDD3]" />
            <span className="text-[#2C312D] text-sm font-medium">Preguntas Frecuentes</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C312D] mb-4">
            ¿Tienes dudas?
          </h2>
          <p className="text-lg text-[#2C312D]/80">
            Aquí encontrarás las respuestas a las preguntas más comunes
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
            >
              <Card 
                className={`cursor-pointer transition-all duration-300 ${
                  openIndex === idx 
                    ? 'bg-white border-2 border-[#BDBF65] shadow-lg' 
                    : 'bg-white border border-[#2C312D]/10 hover:border-[#BDBF65]/50'
                }`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[#2C312D] font-semibold text-lg flex-1 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <ChevronDown className={`h-5 w-5 ${openIndex === idx ? 'text-[#BDBF65]' : 'text-[#2C312D]/50'}`} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-[#2C312D]/10">
                          <p className="text-[#2C312D]/75 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}