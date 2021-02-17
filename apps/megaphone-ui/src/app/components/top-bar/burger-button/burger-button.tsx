import React from 'react';
import './burger-button.scss';

/* eslint-disable-next-line */
export interface BurgerButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  activated: boolean;
}

export function BurgerButton({ onClick, className = '', activated }: BurgerButtonProps) {
  return (
    <button
      className={`hamburger-button-container ${className} ${activated ? 'hamburger-button-activated' : ''}`}
      onClick={onClick}
      aria-label="hamburger-menu"
    >
      <div className="hamburger-button-line hamburger-button-top"></div>
      <div className="hamburger-button-line hamburger-button-middle"></div>
      <div className="hamburger-button-line hamburger-button-bottom"></div>
    </button>
  );
}

export default BurgerButton;
