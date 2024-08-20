import { PropsWithChildren } from 'react';
import './Product.css';

interface ProductType {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

type ProductProps = {
  product: ProductType;
  onOpenModal: (product: ProductType) => void
};

const Product = ({ product, onOpenModal, children }: ProductProps & PropsWithChildren) => {
  const { title, description, image, price } = product;

  return (
    <div className="product" onClick={() => onOpenModal(product)}>
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="product-cnt">
        <h3 className="heading">{title}</h3>
        <p>{description}</p>
        <p>price: <strong>{price}</strong></p>
        {children}
      </div>  
    </div>
  );
};

export default Product;
export type { ProductType };
