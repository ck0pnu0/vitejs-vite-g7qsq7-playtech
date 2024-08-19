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
};

const Product = ({ product, children }: ProductProps & PropsWithChildren) => {
  const { title, description, image, price } = product;
  return (
    <div className="product">
      <img className="image" src={image} alt={title} />
      <h3 className="heading">{title}</h3>
      <p>{description}</p>
      <div className="price">
        price: <strong>{price}</strong>
      </div>
      {children}
    </div>
  );
};

export default Product;
export type { ProductType };
