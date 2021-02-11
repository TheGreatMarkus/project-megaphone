import React from 'react';
import './burger-button.scss';

/* eslint-disable-next-line */
export interface BurgerButtonProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
  activated: boolean;
}

export function BurgerButton({ onClick, className = '', activated }: BurgerButtonProps) {
  return (
    <div
      className={`hamburger-button-container ${activated ? 'hamburger-button-activated' : ''} ${className}`}
      onClick={onClick}
    >
      <div className="hamburger-button-line hamburger-button-top"></div>
      <div className="hamburger-button-line hamburger-button-middle"></div>
      <div className="hamburger-button-line hamburger-button-bottom"></div>
    </div>
  );
}

export default BurgerButton;
