import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, HeartHandshake, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const EVENT_START = new Date("2025-11-28T18:00:00-05:00");

function useCountdown(targetDate: Date) {
  const [diff, setDiff] = useState(targetDate.getTime() - new Date().getTime());
  useEffect(() => {
    const i = setInterval(() => setDiff(targetDate.getTime() - new Date().getTime()), 1000);
    return () => clearInterval(i);
  }, [targetDate]);

  const time = useMemo(() => {
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    return { d, h, m, s };
  }, [diff]);

  return time;
}

export default function HeroSection() {
  const time = useCountdown(EVENT_START);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
                             radial-gradient(2px 2px at 60% 70%, white, transparent),
                             radial-gradient(1px 1px at 50% 50%, white, transparent),
                             radial-gradient(1px 1px at 80% 10%, white, transparent),
                             radial-gradient(2px 2px at 90% 60%, white, transparent),
                             radial-gradient(1px 1px at 33% 80%, white, transparent)`,
            backgroundSize: "200px 200px, 300px 300px, 250px 250px, 400px 400px, 350px 350px, 450px 450px",
            animation: "twinkle 3s ease-in-out infinite"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 grid md:grid-cols-2 items-center gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/20 border border-amber-400/30 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="text-amber-200 text-sm font-medium">Edición Benéfica 2025</span>
          </motion.div>

          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="text-white">II NaviFest</span>
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-amber-400 to-yellow-300 mt-2">
                Celebra. Ayuda. Inspira.
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
            Una noche mágica donde la <span className="text-amber-300 font-semibold">música</span> y la{" "}
            <span className="text-amber-300 font-semibold">solidaridad</span> se unen para transformar vidas esta Navidad.
          </p>

          <p className="text-white/75 leading-relaxed">
            Un festival navideño benéfico que reúne música en vivo, arte y generosidad para llevar esperanza 
            a las familias más vulnerables. <span className="text-amber-300 font-medium">Cada entrada, cada donación, cada sonrisa cuenta.</span>
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg"
              className="bg-linear-to-r from-amber-400 to-amber-500 text-red-950 hover:from-amber-500 hover:to-amber-600 font-bold shadow-lg shadow-amber-500/30 transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
            >
              <HeartHandshake className="mr-2 h-5 w-5" />
              Dona y Cambia una Navidad
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Ver Programa
            </Button>
          </div>

          <div className="pt-6">
            <div className="grid grid-cols-4 gap-3 max-w-md">
              {[
                { label: "DÍAS", value: time.d },
                { label: "HORAS", value: time.h },
                { label: "MIN", value: time.m },
                { label: "SEG", value: time.s },
              ].map((t, idx) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                >
                  <Card className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/15 transition-colors">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl md:text-4xl font-extrabold text-amber-300 tabular-nums">
                        {String(t.value).padStart(2, "0")}
                      </div>
                      <div className="text-xs tracking-wider text-white/80 mt-1 font-medium">
                        {t.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-6 text-sm text-white/70 pt-2"
          >
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-amber-300" />
              <span>28 de noviembre, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-amber-300" />
              <span>6:00 PM</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
            <div className="absolute inset-0 bg-linear-to-br from-red-600/90 via-amber-500/90 to-yellow-500/90 flex items-center justify-center">
              <img src="/reno.webp" alt="" />
            </div>
            
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-amber-300/20 rounded-full blur-3xl animate-pulse delay-75" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="absolute -bottom-6 -left-6 bg-linear-to-br from-green-500 to-emerald-600 text-white px-6 py-4 rounded-2xl shadow-xl"
          >
            <div className="text-sm font-medium opacity-90">Ayudemos a los niños de:</div>
            <div className="text-2xl font-extrabold">AA. HH. Los Jardines de Nuevo Chimbote</div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}