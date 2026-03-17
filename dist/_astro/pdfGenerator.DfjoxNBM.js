import{E as d}from"./jspdf.es.min.BWgadCDC.js";import g from"./html2canvas.esm.B0tyYwQk.js";import"./preload-helper.BlTxHScW.js";const b=async l=>{const i=document.createElement("div");i.style.width="210mm",i.style.minHeight="297mm",i.style.padding="20mm",i.style.background="linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #92400e 100%)",i.style.color="white",i.style.fontFamily="Arial, sans-serif",i.style.position="fixed",i.style.left="-9999px",i.style.top="0",i.innerHTML=`
    <div style="text-align: center; margin-bottom: 30px;">
      <div style="display: inline-flex; align-items: center; gap: 12px; margin-bottom: 20px; padding: 12px 24px; background: rgba(251, 191, 36, 0.2); border-radius: 50px; border: 1px solid rgba(251, 191, 36, 0.3);">
        <span style="font-size: 18px; color: #fbbf24;">🎄 Programa Oficial 🎄</span>
      </div>
      <h1 style="font-size: 36px; font-weight: bold; margin: 0 0 10px 0; color: white;">NaviFest 2025</h1>
      <h2 style="font-size: 24px; font-weight: 300; margin: 0 0 20px 0; color: #fbbf24;">Una Noche de Magia y Solidaridad</h2>
      <p style="font-size: 16px; color: #fecaca; margin: 0;">Centro Pastoral Universitario - Universidad Nacional del Santa</p>
      <p style="font-size: 14px; color: #fecaca; margin: 5px 0 0 0;">Chimbote, Ancash, Perú</p>
    </div>

    <div style="background: rgba(255, 255, 255, 0.1); padding: 25px; border-radius: 20px; margin-bottom: 30px; border: 1px solid rgba(255, 255, 255, 0.2);">
      <h3 style="font-size: 20px; font-weight: bold; margin: 0 0 15px 0; color: #fbbf24; text-align: center;">✨ Actividades Principales</h3>
      <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
        ${l.activities.map(e=>`
          <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 15px; border-left: 4px solid #fbbf24;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
              <span style="font-size: 20px;">${e.title==="Show en Vivo"?"🎵":e.title==="Recepción de Donaciones"?"🎁":"📸"}</span>
              <h4 style="font-size: 18px; font-weight: bold; margin: 0; color: white;">${e.title}</h4>
              <span style="font-size: 12px; padding: 4px 12px; background: rgba(251, 191, 36, 0.3); color: #fbbf24; border-radius: 20px; margin-left: auto;">${e.badge}</span>
            </div>
            <p style="font-size: 14px; color: #fecaca; margin: 0; line-height: 1.5;">${e.description}</p>
          </div>
        `).join("")}
      </div>
    </div>

    <div style="background: rgba(255, 255, 255, 0.1); padding: 25px; border-radius: 20px; margin-bottom: 30px; border: 1px solid rgba(255, 255, 255, 0.2);">
      <h3 style="font-size: 24px; font-weight: bold; margin: 0 0 25px 0; color: #fbbf24; text-align: center;">📅 Cronograma del Evento</h3>
      <div style="display: grid; gap: 12px;">
        ${l.scheduleItems.map(e=>`
          <div style="display: flex; align-items: flex-start; gap: 15px; padding: 18px; background: ${e.highlight?"rgba(251, 191, 36, 0.15)":"rgba(255, 255, 255, 0.05)"}; border-radius: 15px; border: 1px solid ${e.highlight?"rgba(251, 191, 36, 0.3)":"rgba(255, 255, 255, 0.1)"};">
            <div style="display: flex; align-items: center; gap: 10px; min-width: 100px;">
              <div style="width: 40px; height: 40px; border-radius: 10px; background: ${e.highlight?"rgba(251, 191, 36, 0.3)":"rgba(255, 255, 255, 0.1)"}; display: flex; align-items: center; justify-content: center;">
                <span style="color: ${e.highlight?"#fbbf24":"#ffffff"}; font-size: 14px;">🕒</span>
              </div>
              <span style="font-size: 20px; font-weight: bold; color: ${e.highlight?"#fbbf24":"white"};">${e.time}</span>
            </div>
            <div style="flex: 1;">
              <h4 style="font-size: 18px; font-weight: bold; margin: 0 0 5px 0; color: white;">${e.title}</h4>
              <p style="font-size: 14px; color: #fecaca; margin: 0; line-height: 1.4;">${e.desc}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <div style="background: rgba(251, 191, 36, 0.2); padding: 25px; border-radius: 20px; text-align: center; border: 1px solid rgba(251, 191, 36, 0.3);">
      <h3 style="font-size: 20px; font-weight: bold; margin: 0 0 15px 0; color: #fbbf24;">🎙️ Animación General</h3>
      <p style="font-size: 16px; color: white; margin: 0 0 20px 0;">Dennis Dominguez — Educación Matemática</p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 25px;">
        <div style="text-align: left;">
          <h4 style="font-size: 16px; font-weight: bold; margin: 0 0 10px 0; color: #fbbf24;">📞 Contacto</h4>
          <p style="font-size: 12px; color: #fecaca; margin: 2px 0;">niltonencarnacion17@gmail.com</p>
          <p style="font-size: 12px; color: #fecaca; margin: 2px 0;">(+51) 951 011 604</p>
        </div>
        <div style="text-align: left;">
          <h4 style="font-size: 16px; font-weight: bold; margin: 0 0 10px 0; color: #fbbf24;">ℹ️ Información</h4>
          <p style="font-size: 12px; color: #fecaca; margin: 2px 0;">Centro Pastoral Universitario UNS</p>
          <p style="font-size: 12px; color: #fecaca; margin: 2px 0;">Chimbote, Ancash</p>
        </div>
      </div>
    </div>

    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.2);">
      <p style="font-size: 12px; color: #fecaca; margin: 5px 0;">¡Gracias por ser parte de esta causa solidaria!</p>
      <p style="font-size: 10px; color: #fca5a5; margin: 5px 0;">Programa generado el ${new Date().toLocaleDateString("es-PE")}</p>
    </div>
  `,document.body.appendChild(i);try{const e=await g(i,{scale:2,useCORS:!0,allowTaint:!1,backgroundColor:"#7f1d1d",logging:!1,removeContainer:!0}),p=e.toDataURL("image/png"),t=new d("p","mm","a4"),r=210,s=297,a=e.height*r/e.width;let o=a,n=0;for(t.addImage(p,"PNG",0,n,r,a),o-=s;o>=0;)n=o-a,t.addPage(),t.addImage(p,"PNG",0,n,r,a),o-=s;return t.save("NaviFest-Programa-2025.pdf"),!0}catch(e){throw console.error("Error generating PDF:",e),new Error("Error al generar el PDF. Por favor, intenta nuevamente.")}finally{document.body.contains(i)&&document.body.removeChild(i)}};export{b as generateEventPDF};
