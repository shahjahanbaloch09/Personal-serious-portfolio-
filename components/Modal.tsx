
import React, { useEffect } from 'react';

interface ModalProps {
  imageUrl: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 animate-fadeInUp"
      onClick={onClose}
      style={{ animationDuration: '0.3s' }}
    >
      <div className="relative max-w-4xl max-h-[90vh] bg-white p-2 rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="Full-size view" className="max-w-full max-h-[85vh] object-contain rounded" />
      </div>
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-all duration-200 active:scale-90"
        aria-label="Close"
      >
        &times;
      </button>
    </div>
  );
};

export default Modal;