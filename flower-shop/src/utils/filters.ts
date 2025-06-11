import { FormattedProduct } from "../types/types";

export const filterByCategory = (
  products: FormattedProduct[],
  categoryId: string | null,
  isMainCategory: boolean,
): FormattedProduct[] => {
  if (!categoryId) return products;

  return products.filter((product) => {
    return isMainCategory
      ? product.categories.some((c) => c.id === categoryId)
      : product.categories.some((c) => c.id === categoryId);
  });
};
