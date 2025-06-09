export interface IBasketProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface IPropsProduct {
  product: IBasketProduct;
}

export interface ILineItems{
  productId : string;
  variantId : number;
  quantity : number;
}
