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
