export interface IBasketProduct {
  id: string;
  productId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface IPropsProduct {
  product: IBasketProduct;
}

export interface ILineItems {
  productId: string;
  variantId: number;
  quantity: number;
}

export interface IProductImages {
  id: string;
  image: string | null;
}
