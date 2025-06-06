import { FormattedProduct, SortOption } from "../types/types";

export const sortProducts = (
  products: FormattedProduct[],
  option: SortOption,
) => {
  return [...products].sort((a, b) => {
    switch (option) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return (a.name["en-US"] || "").localeCompare(b.name["en-US"] || "");
      case "name-desc":
        return (b.name["en-US"] || "").localeCompare(a.name["en-US"] || "");
      case "size-asc":
        return (
          Number(a.attributes?.size?.[0]) - Number(b.attributes?.size?.[0])
        );
      case "size-desc":
        return (
          Number(b.attributes?.size?.[0]) - Number(a.attributes?.size?.[0])
        );
      default:
        return 0;
    }
  });
};
