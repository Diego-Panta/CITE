import { useState } from 'react';

interface UsePDFDownloadProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const usePDFDownload = ({ onSuccess, onError }: UsePDFDownloadProps = {}) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPDF = async (pdfData: any) => {
    setIsGenerating(true);
    try {
      // Importación dinámica para mejor performance
      const { generateEventPDF } = await import('../utils/pdfGenerator');
      await generateEventPDF(pdfData);
      onSuccess?.();
    } catch (error) {
      console.error('PDF Generation Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido al generar PDF';
      onError?.(errorMessage);
      
      // Fallback: descargar una versión simple
      if (errorMessage.includes('color function')) {
        onError?.('Error de compatibilidad. Generando versión simplificada...');
        await generateSimplePDF(pdfData);
      }
    } finally {
      setIsGenerating(false);
    }
  };

  // Fallback simple sin gradientes
  const generateSimplePDF = async (pdfData: any) => {
    const pdf = new (await import('jspdf')).default('p', 'mm', 'a4');
    
    // Configuración básica
    pdf.setFont('helvetica');
    pdf.setFontSize(20);
    pdf.setTextColor(127, 29, 29);
    pdf.text('NaviFest 2025', 105, 20, { align: 'center' });
    
    pdf.setFontSize(16);
    pdf.setTextColor(251, 191, 36);
    pdf.text('Programa del Evento', 105, 30, { align: 'center' });
    
    // Contenido simple
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    let yPosition = 50;
    
    pdf.text('Cronograma:', 20, yPosition);
    yPosition += 10;
    
    pdfData.scheduleItems.forEach((item: any) => {
      if (yPosition > 270) {
        pdf.addPage();
        yPosition = 20;
      }
      pdf.text(`${item.time} - ${item.title}`, 25, yPosition);
      yPosition += 7;
    });
    
    pdf.save('NaviFest-Programa-Simple.pdf');
  };

  return {
    downloadPDF,
    isGenerating
  };
};