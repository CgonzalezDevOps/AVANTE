import React from 'react';
import './WhatsAppFloat.css';

const WhatsAppFloat = ({ 
  phoneNumber = "50377772397", 
  message = "Hola! Me gustaría obtener más información sobre los servicios del Centro Médico AVANTE.",
  className = ""
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`whatsapp-float ${className}`}
      aria-label="Contactar por WhatsApp"
      title="¿Necesitas ayuda? Escríbenos por WhatsApp"
    >
      <div className="icon-whatsapp"></div>
    </a>
  );
};

export default WhatsAppFloat;
