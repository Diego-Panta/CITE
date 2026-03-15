import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Phone, MessageCircle, Send } from "lucide-react";
import { WhatsAppService } from "@/services/whatsappService";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Resetear el estado cuando se cierra el modal
  useEffect(() => {
    if (!isOpen) {
      setPhone("");
      setIsSubmitting(false);
      setShowSuccess(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone.trim()) {
      alert("Por favor ingresa tu número de teléfono");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await WhatsAppService.sendImageMessage(
        phone, 
        `¡Hola! 🎄\n\nGracias por tu interés en NaviFest 2025. Te comparto información sobre nuestro evento benéfico organizado por el Centro Pastoral Universitario de la UNS.\n\n🎁 *Qué incluye tu participación:*\n• Show en vivo con artistas locales\n• Experiencia navideña única\n• Apoyo directo a familias necesitadas\n\n📍 *Fecha:* 28 de Noviembre, 2025\n🕕 *Hora:* 6:00 PM\n🎫 *Entrada:* 1 juguete o donación voluntaria\n\n¿Te gustaría saber más sobre cómo participar o apoyar nuestra causa? ¡Estamos aquí para ayudarte! 🎁`
      );
      
      if (result.success) {
        setShowSuccess(true);
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        alert("No pudimos enviar el mensaje automáticamente. Por favor, contáctanos directamente al +51 951 011 604");
        onClose();
      }
    } catch (error) {
      alert("Ocurrió un error al enviar el mensaje. Por favor, contáctanos directamente al +51 951 011 604");
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={onClose} />
      
      <Card className="w-full max-w-md bg-linear-to-br from-red-900 to-amber-900 border-amber-400/30 shadow-2xl relative z-10">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-white text-xl flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-amber-300" />
              ¡Te damos la bienvenida!
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="pb-6">
          {!showSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-3">
                  <Phone className="h-8 w-8 text-amber-300" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  ¿Quieres recibir toda la información?
                </h3>
                <p className="text-white/70 text-sm">
                  Te enviaremos por WhatsApp los detalles del evento, cómo participar y los beneficios
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/80 font-medium">
                  Número de WhatsApp *
                </label>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+51 999 999 999"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-amber-400/50"
                  required
                  disabled={isSubmitting}
                />
                <p className="text-xs text-amber-300/80">
                  Recibirás el flyer oficial con todos los detalles
                </p>
              </div>

              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitting || !phone.trim()}
                className="w-full bg-linear-to-r from-amber-400 to-amber-500 text-red-950 hover:from-amber-500 hover:to-amber-600 font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? "Enviando..." : "Recibir Info Completa"}
              </Button>

              <p className="text-center text-white/60 text-xs">
                Te enviaremos el flyer oficial con fecha, hora, artistas y cómo participar
              </p>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="h-8 w-8 text-green-300" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                ¡Información enviada!
              </h3>
              <p className="text-white/70 text-sm mb-4">
                Revisa tu WhatsApp, te hemos enviado el flyer oficial con todos los detalles del evento.
              </p>
              <div className="w-8 h-8 border-2 border-green-300 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-white/50 text-xs mt-4">
                Cerrando automáticamente...
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}