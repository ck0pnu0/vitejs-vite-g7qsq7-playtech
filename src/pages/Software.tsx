import { useEffect, useState } from 'react';
import { SoftwareProductType } from '../App';

import ProductList from '../components/ProductList';
import LoadButton from '../components/LoadButton';

import CategoryDescription from '../layouts/CategoryDescription';
import { loadProducts } from '../utils/utils';

interface SoftwareProps {
  products: SoftwareProductType[];
}

const itemsPerPage = 4;

export default function Software({ products }: SoftwareProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<SoftwareProductType[]>([]);
  const [loadMoreDisable, setLoadMoreDisable] = useState(false);
  const [loading, setLoading] = useState(true);

  const description = `Software products are digital solutions designed to perform specific
  tasks or solve particular problems. They range from simple applications,
  like word processors and games, to complex systems like enterprise
  resource planning (ERP) software and cloud-based services. Software
  products are typically developed through a combination of coding,
  testing, and user feedback, and they can be distributed as standalone
  products, integrated into hardware, or offered as services (SaaS)
  accessible over the internet.`;

  useEffect(() => {
    loadProducts(
      products,
      currentPage,
      currentItems,
      setCurrentItems,
      setLoadMoreDisable,
      itemsPerPage
    );
    setLoading(false);
  }, [currentPage, products]);

  function onLoadMoreHandler() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <>
      {!loading && (
        <>
          <CategoryDescription title="Software" description={description} />
          <ProductList products={currentItems} />
          <LoadButton disabled={loadMoreDisable} onClick={onLoadMoreHandler} />
        </>
        )
      }
    {loading && <p>Loading...</p>}
    </>
  );
}
