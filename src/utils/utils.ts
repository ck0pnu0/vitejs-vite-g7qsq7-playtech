import { Dispatch, SetStateAction } from 'react';
import { ProductType } from '../components/Product';

export function loadProducts<T extends ProductType>(
  products: T[],
  currentPage: number,
  currentItems: T[],
  setCurrentItems: Dispatch<SetStateAction<T[]>>,
  setLoadMoreDisable: Dispatch<SetStateAction<boolean>>,
  itemsPerPage: number
): void {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const items = products.slice(startIndex, endIndex);

  if (endIndex === products.length) {
    setLoadMoreDisable(true);
  }

  const itemsExists = items.some((item) =>
    currentItems.find((curr) => curr.id === item.id)
  );
  if (!itemsExists) {
    setCurrentItems([...currentItems, ...items]);
  }
}
