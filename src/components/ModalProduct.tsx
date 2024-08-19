import {
  FashionProductType,
  MobileDevicesProductType,
  SoftwareProductType,
} from '../App';
import Product, { ProductType } from './Product';

type ModalProductProps<T extends ProductType> = {
  product: T;
};

const isSoftwareProduct = <T extends ProductType>(
  product: T
): product is T & SoftwareProductType => 'platform' in product;
const isMobileDeviceProduct = <T extends ProductType>(
  product: T
): product is T & MobileDevicesProductType => 'camera' in product;
const isFashionProduct = <T extends ProductType>(
  product: T
): product is T & FashionProductType => 'material' in product;

const ModalProduct = <T extends ProductType>({
  product,
}: ModalProductProps<T>) => {
  return (
    <Product product={product}>
      {isSoftwareProduct(product) && (
        <>
          <p>Platform: ${product.platform}</p>
          <p>License: ${product.license_type}</p>
        </>
      )}
      {isMobileDeviceProduct(product) && (
        <>
          <p>Screen: {product.screen_size}</p>
          <p>Camera: {product.camera}</p>
          <p>Memory: {product.memory}</p>
          <p>Battery: {product.battery}</p>
        </>
      )}
      {isFashionProduct(product) && (
        <>
          <p>Material: {product.material}</p>
          <p>Color: {product.color.join(', ')}</p>
          <p>Sizes: {product.size.join(', ')}</p>
        </>
      )}
    </Product>
  );
};

export default ModalProduct;
