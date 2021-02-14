import React, { useEffect, useRef, useState } from 'react';
import BurgerButton from './burger-button/burger-button';
import TopBarButton from './top-bar-button/top-bar-button';
import './top-bar.scss';

/* eslint-disable-next-line */
export interface TopBarProps {}

export function TopBar(props: TopBarProps) {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  const options = ['Home', 'About', 'Projects', 'Contact'];
  const [activeOption, _setActiveOption] = useState<number>(0);
  const activeOptionRef = useRef<number>(0);

  const setActiveOption = (value: number) => {
    activeOptionRef.current = value;
    _setActiveOption(value);
  };

  const handleBurgerClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setBurgerOpen(!burgerOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  const onScroll = (ev: Event) => {
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const activeOption = activeOptionRef.current;

    // If in activate space and either (this is the target or there is no target and this isn't the active option)
    if (activeOption !== 0 && scroll < windowHeight * 0.33) {
      setActiveOption(0);
    } else if (activeOption != 1 && scroll > windowHeight * 0.66 && scroll < windowHeight * 1.33) {
      setActiveOption(1);
    } else if (activeOption != 2 && scroll > windowHeight * 1.66 && scroll < windowHeight * 2.33) {
      setActiveOption(2);
    } else if (activeOption != 3 && scroll > windowHeight * 2.66 && scroll < windowHeight * 3.33) {
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
