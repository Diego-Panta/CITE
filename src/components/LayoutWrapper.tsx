import React, { useState, useEffect } from 'react';
import ContactModal from '@/components/core/ContactModal';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (window as any).setShowModal = setShowModal;

    // Mostrar siempre después de 3 segundos, sin verificar almacenamiento
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {children}
      <ContactModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </>
  );
}