import { useEffect, useState } from 'react';
import { loadProducts } from '../utils/utils';
import { MobileDevicesProductType } from '../App';
import CategoryDescription from '../layouts/CategoryDescription';
import ProductList from '../components/ProductList';
import LoadButton from '../components/LoadButton';

interface MobileDevicesProps {
  products: MobileDevicesProductType[];
}

const itemsPerPage = 4;

export default function MobileDevices({ products }: MobileDevicesProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<MobileDevicesProductType[]>(
    []
  );
  const [loadMoreDisable, setLoadMoreDisable] = useState(false);

  const description = `Mobile devices are portable electronic gadgets designed for
  communication, entertainment, and productivity. These devices, such as
  smartphones and tablets, offer a wide range of functionalities
  including calling, messaging, internet browsing, gaming, and app
  usage. They operate on various mobile operating systems like Android
  and iOS, supporting a vast ecosystem of applications and services.
  Mobile devices are essential tools in daily life, providing users with
  access to information, social networks, and digital services on the
  go.`;

  useEffect(() => {
    loadProducts(
      products,
      currentPage,
      currentItems,
      setCurrentItems,
      setLoadMoreDisable,
      itemsPerPage
    );
  }, [currentPage, products]);

  function onLoadMoreHandler() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <>
      <CategoryDescription title="Mobile Devices" description={description} />
      <ProductList products={currentItems} />
      <LoadButton disabled={loadMoreDisable} onClick={onLoadMoreHandler} />
    </>
  );
}
