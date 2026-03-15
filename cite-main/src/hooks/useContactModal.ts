import { useState, useEffect } from 'react';

export function useContactModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Exponer la función al objeto window para que el script inline pueda usarla
    (window as any).setShowModal = setShowModal;

    // Verificar si ya se mostró el modal en esta sesión
    const hasSeenModal = sessionStorage.getItem('navifest_contact_modal_shown');
    
    if (!hasSeenModal) {
      // Mostrar después de 3 segundos
      const timer = setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem('navifest_contact_modal_shown', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return {
    showModal,
    setShowModal
  };
}