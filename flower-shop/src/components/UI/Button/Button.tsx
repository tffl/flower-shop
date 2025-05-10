import { ButtonProps } from '../../../types/types';
import './button.css';

export const Button = ({
  type = 'button',
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className={`button ${className || ''}`.trim() || undefined}
    >
      {children}
    </button>
  );
};
