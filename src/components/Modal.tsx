import { useState, forwardRef, useImperativeHandle } from 'react';
import './Modal.css';

export type ModalHandle = {
  openModal: () => void;
};

// type ModalProps = {};

const Modal = forwardRef<ModalHandle>(({ props, ref }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useImperativeHandle(ref, () => ({
    openModal,
  }));

  return (
    <div className="image-modal">
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <ModalProduct />
          </div>
        </div>
      )}
    </div>
  );
});

export default Modal;
