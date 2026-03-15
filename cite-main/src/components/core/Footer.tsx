import React from "react";
import { Gift, ExternalLink, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-red-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Gift className="h-5 w-5 text-red-950" />
              </div>
              <span className="font-bold text-xl">NaviFest</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-3">
              Un evento benéfico organizado con amor por el <strong>Centro Pastoral Universitario</strong> 
              de la <strong>Universidad Nacional del Santa</strong>, comprometidos con transformar vidas esta Navidad.
            </p>
            <div className="flex items-center gap-1 text-amber-300 text-sm">
              <Heart className="h-3 w-3" />
              <span>Juntos llevamos alegría a quienes más lo necesitan</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contacto</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span>📧</span>
                <a 
                  href="mailto:niltonencarnacion17@gmail.com"
                  className="hover:text-amber-300 transition-colors"
                >
                  niltonencarnacion17@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📱</span>
                <a 
                  href="https://wa.link/tpuxiu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  (+51) 951 011 604
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Chimbote, Ancash, Perú</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🏫</span>
                <span>Universidad Nacional del Santa</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Transparencia</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <a href="/politica-donaciones" className="text-white/70 hover:text-amber-300 transition-colors flex items-center gap-1">
                  Política de donaciones
                </a>
              </li>
              <li>
                <a href="/fondos" className="text-white/70 hover:text-amber-300 transition-colors flex items-center gap-1">
                  Informe de uso de fondos
                </a>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/20">
              <h4 className="font-semibold mb-2 text-xs uppercase text-white/60">Desarrollado por</h4>
              <div className="space-y-1 text-xs text-white/70">
                <div className="font-medium text-amber-300">Nilton Ramos Encarnacion</div>
                <div className="flex flex-col gap-1">
                  <a 
                    href="https://www.linkedin.com/in/niltonramosencarnacion/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-300 transition-colors flex items-center gap-1"
                  >
                    LinkedIn
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a 
                    href="https://niltonramosencarnacion.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-300 transition-colors flex items-center gap-1"
                  >
                    Portafolio
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} NaviFest — Centro Pastoral Universitario UNS <br></br>
            <a 
              href="https://www.linkedin.com/in/niltonramosencarnacion/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors"
            >
              Nilton Ramos Encarnacion
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}