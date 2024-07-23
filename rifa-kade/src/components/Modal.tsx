import React from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        onClick={onClose}
      >
        <div
          className="bg-white p-4 rounded shadow-lg"
          onClick={(e) => e.stopPropagation()}   // pra não deixa fechar caso o clique seja fora do modal
        >
   
      
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
