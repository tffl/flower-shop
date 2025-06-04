import { FormattedProduct, Product } from "../types/types";

export const transformProducts = (products: Product[]): FormattedProduct[] => {
  return products.map(product => {
     const name = typeof product.name === 'string' 
      ? { 'en-US': product.name }
      : product.name;
        const description = typeof product.description === 'string'
      ? { 'en-US': product.description }
      : product.description || { 'en-US': '' };
    
    const key = product.key || '';
    
    const categories = product.categories?.map(c => ({
      id: c.id,
      typeId: c.typeId
    })) || [];

    return {
      id: product.id,
      key,
      name, 
      description,
      price: product.masterVariant?.prices?.[0]?.value?.centAmount 
        ? product.masterVariant.prices[0].value.centAmount / 100 
        : 0,
        images: product.masterVariant?.images || null,
      attributes: {
        size: product.masterVariant?.attributes?.find(attr => attr.name === 'size')?.value as number[] | undefined,
        shortDescription: product.masterVariant?.attributes
          ?.find(attr => attr.name === 'shortDescription')?.value as string | undefined
      },
      categories
    };
  });
};