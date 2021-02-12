import React, { useState } from 'react';
import BurgerButton from './burger-button/burger-button';
import TopBarButton from './top-bar-button/top-bar-button';
import './top-bar.scss';

/* eslint-disable-next-line */
export interface TopBarProps {}

export function TopBar(props: TopBarProps) {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  const handleBurgerClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <nav className="top-bar-container">
      <div className="top-bar-title">Cristian Aldea</div>

      <BurgerButton className="top-bar-burger-button" onClick={handleBurgerClick} activated={burgerOpen} />
      <div className={`top-bar-button-group ${!burgerOpen ? 'top-bar-burger-menu-closed' : ''}`}>
        <TopBarButton href="#home-page">Home</TopBarButton>
        <TopBarButton href="#about-page">About</TopBarButton>
        <TopBarButton href="#projects-page">Projects</TopBarButton>
        <TopBarButton href="#contact-page">Contact</TopBarButton>
      </div>
    </nav>
  );
}

export default TopBar;
