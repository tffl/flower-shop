import { ReactNode, ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type InputProps = {
  className?: string;
  error?: boolean;
  label?: string;
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
