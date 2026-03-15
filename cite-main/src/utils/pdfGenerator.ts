import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface ScheduleItem {
  time: string;
  title: string;
  desc: string;
  highlight?: boolean;
}

interface Activity {
  title: string;
  description: string;
  badge: string;
}

interface PDFData {
  scheduleItems: ScheduleItem[];
  activities: Activity[];
}

export const generateEventPDF = async (data: PDFData) => {
  const pdfElement = document.createElement("div");
  pdfElement.style.width = "210mm";
  pdfElement.style.minHeight = "297mm";
  pdfElement.style.padding = "20mm";
  // Usar gradientes compatibles con html2canvas
  pdfElement.style.background = "linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #92400e 100%)";
  pdfElement.style.color = "white";
  pdfElement.style.fontFamily = "Arial, sans-serif";
  pdfElement.style.position = "fixed";
  pdfElement.style.left = "-9999px";
  pdfElement.style.top = "0";
  
  pdfElement.innerHTML = `
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
        ${data.activities.map(activity => `
          <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 15px; border-left: 4px solid #fbbf24;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
              <span style="font-size: 20px;">${activity.title === 'Show en Vivo' ? '🎵' : activity.title === 'Recepción de Donaciones' ? '🎁' : '📸'}</span>
              <h4 style="font-size: 18px; font-weight: bold; margin: 0; color: white;">${activity.title}</h4>
              <span style="font-size: 12px; padding: 4px 12px; background: rgba(251, 191, 36, 0.3); color: #fbbf24; border-radius: 20px; margin-left: auto;">${activity.badge}</span>
            </div>
            <p style="font-size: 14px; color: #fecaca; margin: 0; line-height: 1.5;">${activity.description}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="background: rgba(255, 255, 255, 0.1); padding: 25px; border-radius: 20px; margin-bottom: 30px; border: 1px solid rgba(255, 255, 255, 0.2);">
      <h3 style="font-size: 24px; font-weight: bold; margin: 0 0 25px 0; color: #fbbf24; text-align: center;">📅 Cronograma del Evento</h3>
      <div style="display: grid; gap: 12px;">
        ${data.scheduleItems.map(item => `
          <div style="display: flex; align-items: flex-start; gap: 15px; padding: 18px; background: ${item.highlight ? 'rgba(251, 191, 36, 0.15)' : 'rgba(255, 255, 255, 0.05)'}; border-radius: 15px; border: 1px solid ${item.highlight ? 'rgba(251, 191, 36, 0.3)' : 'rgba(255, 255, 255, 0.1)'};">
            <div style="display: flex; align-items: center; gap: 10px; min-width: 100px;">
              <div style="width: 40px; height: 40px; border-radius: 10px; background: ${item.highlight ? 'rgba(251, 191, 36, 0.3)' : 'rgba(255, 255, 255, 0.1)'}; display: flex; align-items: center; justify-content: center;">
                <span style="color: ${item.highlight ? '#fbbf24' : '#ffffff'}; font-size: 14px;">🕒</span>
              </div>
              <span style="font-size: 20px; font-weight: bold; color: ${item.highlight ? '#fbbf24' : 'white'};">${item.time}</span>
            </div>
            <div style="flex: 1;">
              <h4 style="font-size: 18px; font-weight: bold; margin: 0 0 5px 0; color: white;">${item.title}</h4>
              <p style="font-size: 14px; color: #fecaca; margin: 0; line-height: 1.4;">${item.desc}</p>
            </div>
          </div>
        `).join('')}
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
      <p style="font-size: 10px; color: #fca5a5; margin: 5px 0;">Programa generado el ${new Date().toLocaleDateString('es-PE')}</p>
    </div>
  `;

  document.body.appendChild(pdfElement);

  try {
    const canvas = await html2canvas(pdfElement, {
      scale: 2,
      useCORS: true,
      allowTaint: false, // Cambiar a false
      backgroundColor: "#7f1d1d",
      logging: false, // Desactivar logs
      removeContainer: true // Limpiar contenedor después
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Manejar páginas múltiples si es necesario
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save('NaviFest-Programa-2025.pdf');
    
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Error al generar el PDF. Por favor, intenta nuevamente.');
  } finally {
    // Limpiar el elemento
    if (document.body.contains(pdfElement)) {
      document.body.removeChild(pdfElement);
    }
  }
};