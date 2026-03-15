import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Building2, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function PartnerSection() {
  const sponsorTiers = [
    {
      name: "Patrocinador Oro",
      size: "large" as const,
      logos: [
        { name: "EPISI", logo: "/logos/logo_episi.webp" },
        { name: "Los Primos", logo: "/logos/los_primos.webp" },
        { name: "Centro Pastoral", logo: "/logos/logo_pastoral_uns.webp" },

      ]
    },

    {
      name: "Patrocinador Plata",
      size: "medium" as const,
      logos: [
        { name: "PUESCHIMBOTE", logo: "/logos/pueschimbote.webp" },
        { name: "Universidad Nacional del Santa", logo: "/logos/logouns.webp" },
        { name: "Nilton Ramos Encarnacion", logo: "/logos/logo_nilton.png" },
        { name: "Próximamente...", logo: "" }
      ]
    },
    /*
    { 
      name: "Aliado", 
      size: "small" as const,
      logos: [
        { name: "Universidad Nacional del Santa", logo: "/logos/logouns.webp"},
        { name: "Slack", logo: "/logos/slack.png"},
        { name: "Figma", logo: "/logos/figma.png"},
        { name: "Notion", logo: "/logos/notion.png"},
        { name: "Zoom", logo: "/logos/zoom.png"},
        { name: "Dropbox", logo: "/logos/dropbox.png"}
      ] 
    }*/
  ];

  type SizeType = "large" | "medium" | "small";

  const getMaxSize = (size: SizeType) => {
    switch (size) {
      case "large":
        return { maxWidth: '280px', maxHeight: '160px' };
      case "medium":
        return { maxWidth: '200px', maxHeight: '120px' };
      case "small":
        return { maxWidth: '150px', maxHeight: '80px' };
      default:
        return { maxWidth: '200px', maxHeight: '120px' };
    }
  };

  const getPadding = (size: SizeType) => {
    switch (size) {
      case "large":
        return "p-6";
      case "medium":
        return "p-5";
      case "small":
        return "p-4";
      default:
        return "p-4";
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-8xl">🤝</div>
        <div className="absolute bottom-20 right-10 text-8xl">⭐</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 mb-6">
            <Handshake className="h-4 w-4 text-blue-300" />
            <span className="text-blue-200 text-sm font-medium">Nuestros Aliados</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Gracias a Quienes Hacen
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-yellow-300">
              Posible el Milagro
            </span>
          </h2>

          <p className="text-lg text-white/80 leading-relaxed">
            NaviFest es realidad gracias al compromiso de personas con corazón solidario
            que comparten nuestra visión: una comunidad más justa, unida y llena de esperanza.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-linear-to-br from-blue-500/10 to-purple-500/10 border-blue-400/20 backdrop-blur-md">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  A todos nuestros <span className="text-amber-300 font-semibold">patrocinadores</span>, <span className="text-amber-300 font-semibold">colaboradores</span>,
                  medios de comunicación y <span className="text-amber-300 font-semibold">voluntarios</span>:
                </p>
                <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-yellow-300 to-amber-400 mb-6">
                  ¡GRACIAS!
                </div>
                <p className="text-white/75 leading-relaxed">
                  Su confianza y generosidad permiten que cada sol recaudado llegue directamente a quienes
                  más lo necesitan, con <span className="text-emerald-300 font-medium">transparencia total</span> y un
                  compromiso inquebrantable con el impacto social.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Patrocinadores y Aliados 2025
          </h3>

          <div className="space-y-16">
            {sponsorTiers.map((tier, tierIdx) => (
              <div key={tierIdx}>
                <div className="text-center mb-8">
                  <span className={`inline-block px-8 py-4 rounded-full text-white/90 text-xl font-bold border ${tier.size === "large"
                    ? "bg-linear-to-r from-amber-500/20 to-yellow-500/20 border-amber-400/40 shadow-lg shadow-amber-500/10"
                    : tier.size === "medium"
                      ? "bg-linear-to-r from-gray-400/20 to-gray-300/20 border-gray-400/40 shadow-md shadow-gray-500/10"
                      : "bg-linear-to-r from-blue-400/20 to-cyan-400/20 border-blue-400/40 shadow-sm shadow-blue-500/10"
                    }`}>
                    {tier.name}
                  </span>
                </div>
                <div className={`grid ${tier.logos.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
                  tier.logos.length === 4 ? 'grid-cols-2 md:grid-cols-4' :
                    'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
                  } gap-8 md:gap-10`}>
                  {tier.logos.map((sponsor, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className={`aspect-video rounded-2xl transition-all duration-300 flex items-center justify-center group cursor-pointer hover:scale-105 ${getPadding(tier.size)
                        } ${tier.size === "large"
                          ? "bg-amber-400/90 border-amber-500/90 shadow-lg shadow-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/30"
                          : tier.size === "medium"
                            ? "bg-white/80 border-gray-300/90 shadow-md shadow-gray-300/20 hover:shadow-2x1 hover:shadow-gray-500/30"
                            : "bg-blue-400/90 border-blue-500/90 shadow-sm shadow-blue-500/10 hover:shadow-md hover:shadow-blue-500/30"
                        }`}



                      title={sponsor.name}
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="object-contain transition-all duration-300 group-hover:brightness-110"
                          style={getMaxSize(tier.size)}
                        />

                        <div
                          className="hidden flex-col items-center justify-center text-center w-full h-full"
                          style={{ display: 'none' }}
                        >
                          <Building2 className={`${tier.size === "large" ? "h-12 w-12" :
                            tier.size === "medium" ? "h-10 w-10" : "h-8 w-8"
                            } text-white/40 mx-auto mb-3 group-hover:text-white/60 transition-colors`} />
                          <span className={`${tier.size === "large" ? "text-sm" :
                            tier.size === "medium" ? "text-xs" : "text-xs"
                            } text-white/50 group-hover:text-white/70 transition-colors line-clamp-2`}>
                            {sponsor.name}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-purple-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">
                ¿Quieres ayudar con tu tiempo y talento?
              </h3>
              <p className="text-white/75 max-w-2xl mx-auto mb-6">
                También necesitamos voluntarios para logística, comunicación, atención al público y producción.
                Si quieres ser parte del equipo que hace posible la magia, contáctanos.
              </p>
              <Button
                variant="outline"
                className="border-2 border-purple-400/40 bg-purple-500/10 hover:bg-purple-500/20 text-purple-200"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Únete como Voluntario
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}