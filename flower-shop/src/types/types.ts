import { ReactNode, ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type InputProps = {
  className?: string;
  error?: boolean;
  label?: string;
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type HeaderProps = {
  textColor?: `var(--${string})` | string;
  position?: "fixed" | "absolute" | "relative" | "static" | "sticky";
  backColor?: string;
  iconColor?: `var(--${string})` | string;
  // className?: string;
};
export type MenuProps = {
  textColor?: string;
  className?: string;
  onClick?: (menuVisible: boolean) => void;
};

export type SubMenuProps = {
  textColor?: string;
  iconColor?: string;
};
export type BurgerProps = {
  onClick: (menuVisible: boolean) => void;
  className: string;
  iconColor: string;
};
export type TokenData ={
  access_token: string;
  expires_in?: number;
  token_type?: string;
}
export type ApiRequestParams ={
  endpoint: string; 
  method?: 'GET' | 'POST' | 'DELETE'; 
  path?: string; 
  query?: Record<string, string>; 
  body?: unknown; 
  isAuthRequest?: boolean; 
}

export type ProductAttribute = {
  name: string;
  value: number;
};
export type ProductVariant = {
  id: number;
  prices?: Array<{
    value: {
      centAmount: number;
      currencyCode: string;
    };
  }>;
  images?: Array<{
    url: string;
  }>;
  attributes?: ProductAttribute[];
};

export type Product = {
  id: string;
  key?: string; 
  name: Record<string, string>; 
  description:string;
  masterVariant: ProductVariant;
};

export type FormattedProduct = {
  id: string;
  key: string;
  name: Record<string, string>;
  description: Record<string, string>;
  price: number;
  image: string | null;
  attributes: Record<string, string | number | boolean>;
};
export type CardProps = {
  id: string;
  image: string | null;
  name: Record<string, string>;
  price: number;
  description: Record<string, string>;
};

