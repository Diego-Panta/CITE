interface WhatsAppResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export class WhatsAppService {
  //private static readonly API_URL = 'https://corsproxy.io/?https://whatsapi.tamimaquinarias.com/api/send-image';
  private static readonly API_URL = 'https://whatsapi.tamimaquinarias.com/api/send-image';
  private static readonly AVAILABLE_IMAGES = [
    '/flyer-light.webp'
  ];
  
  private static getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.AVAILABLE_IMAGES.length);
    return this.AVAILABLE_IMAGES[randomIndex];
  }

  private static async imageToBase64(imageUrl: string): Promise<string> {
    try {
      const response = await fetch(imageUrl);
      
      if (!response.ok) {
        throw new Error(`Error al cargar la imagen: ${response.status}`);
      }

      const mimeType = response.headers.get('Content-Type') || 'image/png';
      const arrayBuffer = await response.arrayBuffer();
      const base64 = btoa(
        new Uint8Array(arrayBuffer).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );

      return `data:${mimeType};base64,${base64}`;
    } catch (error) {
      console.error('Error converting image to base64:', error);
      throw new Error('No se pudo procesar la imagen');
    }
  }

  private static formatPhoneNumber(phone: string): string {
    const cleanPhone = phone.replace(/\D/g, '');
    
    if (cleanPhone.startsWith('51')) {
      return `+${cleanPhone}`;
    }
    
    if (cleanPhone.startsWith('9') && cleanPhone.length === 9) {
      return `+51${cleanPhone}`;
    }
    
    if (cleanPhone.length === 9) {
      return `+51${cleanPhone}`;
    }
    
    return `+${cleanPhone}`;
  }

  static async sendImageMessage(phone: string, caption: string = ''): Promise<WhatsAppResponse> {
    try {
      if (!phone || phone.trim().length === 0) {
        return {
          success: false,
          error: 'El número de teléfono es requerido'
        };
      }

      const formattedPhone = this.formatPhoneNumber(phone);
      
      const randomImage = this.getRandomImage();
      console.log('📸 Usando imagen:', randomImage);
      
      const imageData = await this.imageToBase64(randomImage);

      const defaultCaption = `¡Hola! Gracias por tu interés en NaviFest 🎄\n\nTe comparto información sobre nuestro evento benéfico. ¿En qué más puedo ayudarte?`;
      const finalCaption = caption || defaultCaption;

      const response = await fetch(this.API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          caption: finalCaption,
          phone: formattedPhone,
          imageData: imageData
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Error en la API: ${response.status} - ${errorData}`);
      }

      const data = await response.json();

      return {
        success: true,
        message: 'Mensaje enviado correctamente'
      };

    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Error desconocido al enviar el mensaje'
      };
    }
  }

  static async sendWelcomeMessage(phone: string, userName: string = ''): Promise<WhatsAppResponse> {
    const personalizedCaption = userName 
      ? `¡Hola ${userName.toUpperCase()}! 🎄\n\nGracias por contactarnos desde el formulario de NaviFest. Te comparto información sobre nuestro evento benéfico. Estamos aquí para resolver todas tus dudas. ¡Juntos haremos una Navidad más feliz! 🎁\n\n¿En qué más puedo ayudarte?`
      : `¡Hola! 🎄\n\nGracias por contactarnos desde el formulario de NaviFest. Te comparto información sobre nuestro evento benéfico. Estamos aquí para resolver todas tus dudas. ¡Juntos haremos una Navidad más feliz! 🎁\n\n¿En qué más puedo ayudarte?`;

    return this.sendImageMessage(phone, personalizedCaption);
  }
}