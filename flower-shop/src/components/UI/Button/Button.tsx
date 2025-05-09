import { ButtonProps } from '../../../types/types';
import './button.css';

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`button ${className || ''}`.trim() || undefined}
    >
      {children}
    </button>
  );
};
