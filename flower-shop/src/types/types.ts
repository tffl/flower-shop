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

export type Product = {
  id: string;
  key?: string;
  name: string | Record<string, string>;
  description?: string | Record<string, string>;
  categories?: Array<{
    id: string;
    typeId: string;
  }>;
  masterVariant: {
    prices?: Array<{
      value: {
        centAmount: number;
      };
      discounted?: {
        value: {
          centAmount: number;
        };
      };
    }>;
    images?: Array<{
      url: string;
    }>;
    attributes?: Array<{
      name: string;
      value: unknown;
    }>;
  };
};

export type FormattedProduct = {
  id: string;
  key: string;
  name: Record<string, string>;
  description: Record<string, string>;
  price: number;
  discountedPrice?: number;
  images: Array<{ url: string }> | null;
  attributes: {
    size?: number[];
    shortDescription?: string;
    [key: string]: unknown;
  };
  categories: Array<{
    id: string;
    typeId: string; 
  }>;
};
export type CardProps = {
  id: string;
  image: string | null;
  name: Record<string, string>;
  price: number;
  discountedPrice?: number;
  description?: Record<string, string>;
  // shortDescription?: Record<string, string>;
  shortDescription?: string;
};
export type ApiCategory = {
  id: string;
  parent?: {
    id: string;
  };
  // name:string
};
export type Category = {
  id: string;
  name: string;
  isMain: boolean;
  parentId?: string;
  slug: string;
  description?: string;
};

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'size-asc' | 'size-desc';