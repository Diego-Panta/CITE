import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Gift, Camera, Calendar, Sparkles, Download } from "lucide-react";
import { motion } from "framer-motion";
import { usePDFDownload } from "@/hooks/usePDFDownload";

export default function ProposalSection() {
  const activities = [
    {
      icon: Music,
      title: "Show en Vivo",
      description:
        "Artistas invitados y presentaciones especiales llenarán el escenario con música, alegría y espíritu navideño. 🎶",
      color: "from-red-500/20 to-rose-500/20",
      iconColor: "text-rose-300",
      badge: "Escenario Principal"
    },
    {
      icon: Gift,
      title: "Recepción de Donaciones",
      description:
        "Durante el evento recibiremos los regalos que cada asistente traerá: juguetes, dulces o artículos navideños. Cada obsequio será destinado a una familia que lo necesita. 🎁",
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-300",
      badge: "Tu Entrada es un Regalo"
    },
    {
      icon: Camera,
      title: "Zona de Fotos",
      description:
        "Captura los mejores momentos del NaviFest y sé parte de nuestra galería oficial. Las fotos se compartirán en la página web y redes sociales. 📸",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-300",
      badge: "#Navifest2025"
    }
  ];

  const SCHEDULE_ITEMS = [
    {
      time: "6:00 pm",
      title: "Apertura & Bienvenida",
      desc: "Inicio del evento con un mensaje de bienvenida, presentando la causa solidaria y los objetivos del encuentro.",
      highlight: true
    },
    {
      time: "6:30 pm",
      title: "Ángel Oyola",
      desc: "Presentación vocal que transmite alegría y emoción, capturando el espíritu festivo del evento."
    },
    {
      time: "7:00 pm",
      title: "Sonora Santeña",
      desc: "Show musical con ritmos festivos que invitan a disfrutar y celebrar en comunidad."
    },
    {
      time: "8:00 pm",
      title: "Marco Gonzales Arena",
      desc: "Una noche de música y emoción con Marco Gonzales. ¡No faltes!"
    },
    {
      time: "8:15 pm",
      title: "Maribel Astete",
      desc: "Actuación con una voz cálida y expresiva, que celebra la unión y el espíritu colectivo."
    },
    {
      time: "8:30 pm",
      title: "Fer Burgos",
      desc: "Fer Burgos conecta con el público a través de sus poderosas canciones, creando un espacio agradable."
    },
    {
      time: "9:00 pm",
      title: "Cuba Libre",
      desc: "Grupo musical que pone energía y ritmo al cierre del evento."
    },
    {
      time: "9:45 pm",
      title: "DJ Kleider Aliaga",
      desc: "DJ que viene con toda la vibra :D."
    },
    {
      time: "",
      title: "Cierre y Agradecimientos",
      desc: "Despedida agradeciendo a los participantes, artistas y asistentes por su apoyo y compromiso."
    }
  ];

  const { downloadPDF, isGenerating } = usePDFDownload({
    onSuccess: () => console.log('PDF descargado exitosamente'),
    onError: (error) => alert(`Error: ${error}`)
  });

  const handleDownloadPDF = () => {
    downloadPDF({
      scheduleItems: SCHEDULE_ITEMS,
      activities: activities.map(({ title, description, badge }) => ({
        title,
        description,
        badge
      }))
    });
  };

  return (
    <section id="schedule" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 text-9xl rotate-12">🎵</div>
        <div className="absolute bottom-40 left-20 text-9xl -rotate-12">🎪</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-400/10 border border-purple-400/20 mb-6">
            <Sparkles className="h-4 w-4 text-purple-300" />
            <span className="text-purple-200 text-sm font-medium">Programa Completo</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Una Noche Llena de Magia,
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-yellow-300">
              Música y Propósito
            </span>
          </h2>

          <p className="text-lg text-white/80 leading-relaxed">
            NaviFest no es solo un concierto, es una <span className="text-amber-300 font-semibold">experiencia completa</span> donde 
            cada actividad está diseñada para unir a la comunidad y celebrar el verdadero sentido de la Navidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {activities.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full group hover:scale-105 hover:shadow-xl hover:shadow-white/5">
                <CardHeader>
                  <div className={`w-full h-32 rounded-2xl bg-linear-to-br ${activity.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                    <activity.icon className={`h-16 w-16 ${activity.iconColor}`} strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-xl text-white">{activity.title}</CardTitle>
                    <span className="text-xs px-2 py-1 rounded-full bg-amber-400/20 text-amber-200 whitespace-nowrap">
                      {activity.badge}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/75 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Cronograma del Evento
          </h3>

          <div className="max-w-4xl mx-auto space-y-4">
            {SCHEDULE_ITEMS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card className={`${item.highlight ? 'bg-linear-to-r from-amber-500/20 to-red-500/20 border-amber-400/30' : 'bg-white/5 border-white/10'} hover:bg-white/10 transition-all duration-300`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-center gap-3 md:min-w-[120px]">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${item.highlight ? 'bg-amber-400/30' : 'bg-white/10'}`}>
                          <Calendar className={`h-5 w-5 ${item.highlight ? 'text-amber-300' : 'text-white/70'}`} />
                        </div>
                        <span className={`text-2xl font-bold ${item.highlight ? 'text-amber-300' : 'text-white'}`}>
                          {item.time}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-lg mb-1">
                          {item.title}
                        </h4>
                        <p className="text-white/70 text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-white/80 mb-6 mt-12">
            🎙️ <strong>Animación general:</strong> Dennis Dominguez — Educación Matemática
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-br from-amber-500/20 via-red-500/20 to-rose-500/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Vive una noche inolvidable
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Sabiendo que cada sonrisa, cada canción y cada momento compartido está construyendo 
            un futuro mejor para nuestra comunidad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              className="bg-linear-to-r from-amber-400 to-amber-500 text-red-950 hover:from-amber-500 hover:to-amber-600 font-bold shadow-lg"
              onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
            >
              Apoya de forma solidaria
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm flex items-center gap-2"
              onClick={handleDownloadPDF}
              disabled={isGenerating}
            >
              <Download className="h-4 w-4" />
              {isGenerating ? 'Generando...' : 'Descargar Programa PDF'}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}