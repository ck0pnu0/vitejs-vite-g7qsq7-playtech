import Product, { ProductType } from './Product';
import './ProductList.css';

interface ProductList {
  products: ProductType[];
}

export default function ProductList({ products }: ProductList) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}
