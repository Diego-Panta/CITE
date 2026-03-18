import React from "react";
import { Heart, ExternalLink, Users, Map, BookOpen, Handshake, Mail, Phone, MapPin, FileText, TrendingUp, Award, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#2C312D]/10 bg-white/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Grid principal con 4 columnas simétricas */}
        <div className="grid md:grid-cols-4 gap-6 lg:gap-8 mb-8">
          
          {/* Columna 1: Info CITE - Ocupa 1 columna en mobile y 1 en desktop */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
            <img
                src="/logos/CITE_Logotipo principal-SF-01.webp"
                alt="CITE"
                className="w-40 h-12 object-contain"
                loading="eager"
                decoding="async"
              />
            </div>
            <p className="text-[#2C312D]/70 text-sm leading-relaxed mb-3">
              <strong className="text-[#2C312D]">Laboratorio urbano</strong> liderado por juventudes que imagina y construye ciudades más justas.
            </p>
            <div className="flex items-center gap-1 text-[#D79259] text-sm">
              <Heart className="h-3 w-3" />
              <span>Transformamos territorios</span>
            </div>
          </div>

          {/* Columna 2: Ejes de acción */}
          <div>
            <h3 className="font-semibold mb-3 text-[#2C312D]">Ejes de acción</h3>
            <ul className="space-y-2 text-[#2C312D]/70 text-sm">
              <li className="flex items-start gap-2">
                <Users className="h-4 w-4 text-[#D79259] shrink-0 mt-0.5" />
                <span>Comunidad activa</span>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen className="h-4 w-4 text-[#5BBDD3] shrink-0 mt-0.5" />
                <span>Investigación y formación</span>
              </li>
              <li className="flex items-start gap-2">
                <Handshake className="h-4 w-4 text-[#9E5BD3] shrink-0 mt-0.5" />
                <span>Alianzas con impacto</span>
              </li>
              <li className="flex items-start gap-2">
                <Map className="h-4 w-4 text-[#BDBF65] shrink-0 mt-0.5" />
                <span>CITE en proceso</span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto + Redes */}
          <div>
            <h3 className="font-semibold mb-3 text-[#2C312D]">Contacto</h3>
            <ul className="space-y-2 text-[#2C312D]/70 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-[#BDBF65] shrink-0 mt-0.5" />
                <a 
                  href="mailto:cite@laboratoriourbano.org"
                  className="hover:text-[#BDBF65] transition-colors"
                >
                  cite@laburbano.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-[#BDBF65] shrink-0 mt-0.5" />
                <a 
                  href="https://wa.link/cite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#BDBF65] transition-colors flex items-center gap-1"
                >
                  (+51) 951 011 604
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#BDBF65] shrink-0 mt-0.5" />
                <span>Lima, Perú</span>
              </li>
            </ul>

            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-xs uppercase text-[#2C312D]/60">Redes</h4>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/cite.urb/" className="text-[#2C312D]/70 hover:text-[#BDBF65] transition-colors text-sm">Instagram</a>
                <a href="https://www.youtube.com/channel/UCDVi2AdPzPFqyNJjBDU8Lig" className="text-[#2C312D]/70 hover:text-[#BDBF65] transition-colors text-sm">Youtube</a>
                <a href="https://www.linkedin.com/company/cite-ciudadresiliente/" className="text-[#2C312D]/70 hover:text-[#BDBF65] transition-colors text-sm">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Columna 4: Transparencia + Desarrollador - NUEVA COLUMNA */}
          <div>
            <h3 className="font-semibold mb-3 text-[#2C312D]">Transparencia</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li>
                <a href="#" className="text-[#2C312D]/70 hover:text-[#BDBF65] transition-colors flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#BDBF65]" />
                  Política de la empresa
                </a>
              </li>
              <li>
                <a href="#" className="text-[#2C312D]/70 hover:text-[#BDBF65] transition-colors flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[#BDBF65]" />
                  Informe de uso de fondos
                </a>
              </li>
              <li>
                <a href="#" className="text-[#2C312D]/70 hover:text-[#BDBF65] transition-colors flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-[#BDBF65]" />
                  Rendición de cuentas 2025
                </a>
              </li>
              <li>
                <a href="#" className="text-[#2C312D]/70 hover:text-[#BDBF65] transition-colors flex items-center gap-2">
                  <Award className="h-4 w-4 text-[#BDBF65]" />
                  Reporte de impacto
                </a>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#2C312D]/20">
              <h4 className="font-semibold mb-2 text-xs uppercase text-[#2C312D]/60">Desarrollado por</h4>
              <div className="space-y-1">
                <div className="font-medium text-sm text-[#BDBF65]">José Diego Panta Piscoche</div>
                <div className="flex gap-3 text-xs">
                  <a 
                    href="https://www.linkedin.com/in/diego-panta-piscoche/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2C312D]/70 hover:text-[#BDBF65] transition-colors flex items-center gap-1"
                  >
                    LinkedIn
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2C312D]/70 hover:text-[#BDBF65] transition-colors flex items-center gap-1"
                  >
                    Portafolio
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria inferior */}
        <div className="border-t border-[#2C312D]/10 pt-6 text-center">
          <p className="text-[#2C312D]/60 text-sm">
            © {new Date().getFullYear()} CITE — Laboratorio urbano por ciudades más justas
          </p>
          <p className="text-[#2C312D]/40 text-xs mt-2">
            Diseño y desarrollo con enfoque participativo y transparente
          </p>
        </div>
      </div>
    </footer>
  );
}