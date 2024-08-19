import { useEffect, useState } from 'react';
import { FashionProductType } from '../App';

import { loadProducts } from '../utils/utils';
import CategoryDescription from '../layouts/CategoryDescription';
import ProductList from '../components/ProductList';
import LoadButton from '../components/LoadButton';

interface FashionProps {
  products: FashionProductType[];
}

const itemsPerPage = 4;

export default function Fashion({ products }: FashionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<FashionProductType[]>([]);
  const [loadMoreDisable, setLoadMoreDisable] = useState(false);

  const description = `The fashion category encompasses products related to clothing, accessories, and personal style. It includes a wide range of items such as apparel, footwear, jewelry, and bags, all designed to enhance appearance and express individual identity. Fashion products are often influenced by trends, cultural movements, and seasonal changes, offering consumers a way to stay stylish and current. This category not only focuses on aesthetics but also on functionality, comfort, and the sustainable use of materials, catering to diverse tastes and preferences in the ever-evolving world of fashion.`;

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
      <CategoryDescription title="Fashion" description={description} />
      <ProductList products={currentItems} />
      <LoadButton disabled={loadMoreDisable} onClick={onLoadMoreHandler} />
    </>
  );
}
