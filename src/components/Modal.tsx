import { useState, forwardRef, useImperativeHandle, Ref, ReactElement } from 'react';
import ModalProduct from './ModalProduct';

import './Modal.css';
import { ProductType } from './Product';

export type ModalHandle = {
  openModal: () => void;
};

type ModalProps<T extends ProductType> = { product: T };

const Modal = <T extends ProductType>(
  props: ModalProps<T>, 
  ref: Ref<ModalHandle>
) => {
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
    <>
    {isModalOpen && (
      <div className="image-modal">
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <ModalProduct product={props.product} />
            </div>
          </div>
        </div>
      )}
    </> 
  );
};

export default forwardRef(Modal) as <T extends ProductType>(
  props: ModalProps<T> & { ref?: Ref<ModalHandle> }
) => ReactElement;
