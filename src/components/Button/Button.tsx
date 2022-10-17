import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import './Button.css';

interface ButtonProps {
  disabled?: boolean;
  label: string;
  icon: IconDefinition;
  type?: string;
  className?: string;
  children?: JSX.Element;
  onClick?: (e: React.MouseEvent) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({
  children,
  disabled,
  label,
  icon,
  type,
  className, onClick,onKeyDown }) => {
  return (
    <div className='button-wrapper'>
      <button
        disabled={disabled}
        className={`button-component ${className}`}
        data-type={type}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        {icon && <FontAwesomeIcon icon={icon} />}
        {label || children }
      </button>
    </div>
  );
};

export default Button;

