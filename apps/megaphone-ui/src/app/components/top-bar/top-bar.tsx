import React, { useEffect, useState } from 'react';
import BurgerButton from './burger-button/burger-button';
import TopBarButton from './top-bar-button/top-bar-button';
import './top-bar.scss';

/* eslint-disable-next-line */
export interface TopBarProps {}

export function TopBar(props: TopBarProps) {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  const options = ['Home', 'About', 'Projects', 'Contact'];
  const [activeOption, setActiveOption] = useState<number>(0);

  const handleBurgerClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setBurgerOpen(!burgerOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  const onScroll = (ev: Event) => {
    const scroll = window.scrollY;
    const height = window.innerHeight;

    console.log({ scroll, height });

    if (scroll < window.innerHeight) {
      setActiveOption(0);
    } else if (scroll > window.innerHeight && scroll < window.innerHeight * 1.4) {
      setActiveOption(1);
    } else if (scroll > window.innerHeight * 2 && scroll < window.innerHeight * 2.4) {
      setActiveOption(2);
    } else if (scroll > window.innerHeight * 3 && scroll < window.innerHeight * 3.4) {
      setActiveOption(3);
    }
  };

  return (
    <nav className="top-bar-container">
      <a className="top-bar-title" href="#home-page">
        Cristian Aldea
      </a>

      <div className={`top-bar-button-group ${!burgerOpen ? 'top-bar-burger-menu-closed' : ''}`}>
        <div className={`top-bar-slide-box position-${activeOption}`} />
        {options.map((option, i) => {
          return (
            <TopBarButton
              href={`#${option.toLowerCase()}-page`}
              active={activeOption === i}
              key={i}
              onClick={() => {
                setActiveOption(i);
                setBurgerOpen(false);
              }}
            >
              {option}
            </TopBarButton>
          );
        })}
      </div>

      <BurgerButton className="top-bar-burger-button" onClick={handleBurgerClick} activated={burgerOpen} />
    </nav>
  );
}

export default TopBar;
