import {
  FashionProductType,
  MobileDevicesProductType,
  SoftwareProductType,
} from '../App';
import Product, { ProductType } from './Product';

type ModalProductProps<T extends ProductType> = {
  product: T;
};

const isSoftwareProduct = <T extends ProductType>(product: T): product is T & SoftwareProductType => 'platform' in product;
const isMobileDeviceProduct = <T extends ProductType>(product: T): product is T & MobileDevicesProductType => 'camera' in product;
const isFashionProduct = <T extends ProductType>(product: T): product is T & FashionProductType => 'material' in product;

const ModalProduct = <T extends ProductType>({
  product,
}: ModalProductProps<T>) => {

  function onPreventDefault(product: ProductType) {
    // prevent product from trying opening again
    void(0);
  }

  return (
    <Product product={product} onOpenModal={onPreventDefault}>
      {isSoftwareProduct(product) && (
        <>
          <p>Platform: <strong>{product.platform}</strong></p>
          <p>License: <strong>{product.license_type}</strong></p>
        </>
      )}
      {isMobileDeviceProduct(product) && (
        <>
          <p>Screen: <strong>{product.screen_size}</strong></p>
          <p>Camera: <strong>{product.camera}</strong></p>
          <p>Memory: <strong>{product.memory}</strong></p>
          <p>Battery: <strong>{product.battery}</strong></p>
        </>
      )}
      {isFashionProduct(product) && (
        <>
          <p>Material: <strong>{product.material}</strong></p>
          <p>Color: <strong>{product.color.join(', ')}</strong></p>
          <p>Sizes: <strong>{product.size.join(', ')}</strong></p>
        </>
      )}
    </Product>
  );
};

export default ModalProduct;
