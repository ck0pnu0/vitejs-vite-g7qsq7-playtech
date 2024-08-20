import { useRef, useState } from 'react';
import Modal, { ModalHandle } from './Modal';
import Product, { ProductType } from './Product';
import './ProductList.css';

interface ProductList {
  products: ProductType[];
}

export default function ProductList({ products }: ProductList) {
  const modalRef = useRef<ModalHandle>(null);
  const [currentProduct, setCurrentProduct] = useState<ProductType | null>(null);

  function onModalHandle(product: ProductType) {
    setCurrentProduct(product);
    modalRef.current?.openModal();
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product product={product} key={product.id} onOpenModal={onModalHandle} />
      ))}
      <Modal ref={modalRef} product={currentProduct!} />
    </div>
  );
}
