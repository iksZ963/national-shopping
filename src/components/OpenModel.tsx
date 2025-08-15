"use client"
import { useState, useEffect, FC } from 'react';
import { Button } from './ui/button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: Readonly<React.ReactNode>
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      document.body.classList.add('overflow-hidden');
    } else {
      setTimeout(() => {
        setShowModal(false);
        document.body.classList.remove('overflow-hidden');
      }, 300); // Match the transition duration
    }
  }, [isOpen]);

  if (!isOpen && !showModal) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'} duration-300`}>
      <div className="fixed inset-0 bg-black bg-opacity-70" onClick={onClose}></div>
      <div className={`bg-white p-6 rounded shadow-lg z-50 transition-transform transform ${isOpen ? 'scale-100' : 'scale-90'} duration-300`}>
        {children}
      </div>
    </div>
  );
};

export default Modal;