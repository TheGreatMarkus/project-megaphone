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
  const targetOptionRef = useRef<number>(-1);

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
    const target = targetOptionRef.current;

    // If in activate space and either (this is the target or there is no target and this isn't the active option)
    if (((activeOption !== 0 && target === -1) || target === 0) && scroll < windowHeight * 0.4) {
      setActiveOption(0);
      targetOptionRef.current = -1;
    } else if (
      ((activeOption != 1 && target === -1) || target === 1) &&
      scroll > windowHeight &&
      scroll < windowHeight * 1.4
    ) {
      setActiveOption(1);
      targetOptionRef.current = -1;
    } else if (
      ((activeOption != 2 && target === -1) || target === 2) &&
      scroll > windowHeight * 2 &&
      scroll < windowHeight * 2.4
    ) {
      setActiveOption(2);
      targetOptionRef.current = -1;
    } else if (
      ((activeOption != 3 && target === -1) || target === 3) &&
      scroll > windowHeight * 3 &&
      scroll < windowHeight * 3.4
    ) {
      setActiveOption(3);
      targetOptionRef.current = -1;
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
                targetOptionRef.current = i;
                setBurgerOpen(false);
                setTimeout(() => {
                  if (targetOptionRef.current !== -1) {
                    targetOptionRef.current = -1;
                  }
                }, 1000);
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
