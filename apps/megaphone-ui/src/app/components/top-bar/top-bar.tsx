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
    <div className="top-bar-container">
      <div className="top-bar-title">Cristian Aldea</div>
      <div className="top-bar-button-group">
        <TopBarButton>Home</TopBarButton>
        <TopBarButton>About</TopBarButton>
        <TopBarButton>Project</TopBarButton>
        <TopBarButton>Contact</TopBarButton>
      </div>

      <BurgerButton className="top-bar-burger-button" onClick={handleBurgerClick} activated={burgerOpen} />
      <div className={`top-bar-burger-menu ${!burgerOpen ? 'top-bar-burger-menu-closed' : ''}`}>
        <TopBarButton>Home</TopBarButton>
        <TopBarButton>About</TopBarButton>
        <TopBarButton>Project</TopBarButton>
        <TopBarButton>Contact</TopBarButton>
      </div>
    </div>
  );
}

export default TopBar;
