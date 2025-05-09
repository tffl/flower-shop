import { InputProps } from '../../../types/types';
import './input.css';

export const Input = ({
  className = '',
  error,
  label,
  errorMessage,
  ...props
}: InputProps) => {
  const inputClass = `input ${error ? 'input__error' : ''} ${className}`.trim();

  return (
    <div className='input__wrapper'>
      {label && (
        <label className='input__label'>
          {label}
          <input className={inputClass || undefined} {...props} />
        </label>
      )}
      {error && errorMessage && (
        <span className='input__errorMessage'>{errorMessage}</span>
      )}
    </div>
  );
};
