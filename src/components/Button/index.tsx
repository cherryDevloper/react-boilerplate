import React from 'react';
import LoadingSpinner from '../LoadingSpinner';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  text?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  icon?: string;
  loading?: boolean;
  btnStyle?: 'primary' | 'secondary' | 'link';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  loading = false,
  type = 'submit',
  text,
  onClick,
  disabled,
  btnStyle = 'primary',
  size = 'md',
  icon,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`w-full ${
      btnStyle === 'primary'
        ? ' bg-primary text-white'
        : 'bg-transparent text-primary border border-primary'
    }
      flex items-center 
     justify-center rounded-[0.625rem] 
    ${
      size === 'md' ? 'p-btn' : ' py-4 px-4'
    }  disabled:opacity-30 hover:bg-secondary `}
  >
    {icon && <img src={icon} alt="" className="mr-2" />}
    {!loading ? text : <LoadingSpinner className="text-blue-500" />}
  </button>
);

export default Button;
