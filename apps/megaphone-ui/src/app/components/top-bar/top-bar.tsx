import React, { useEffect, useRef, useState } from 'react';
import BurgerButton from './burger-button/burger-button';
import TopBarButton from './top-bar-button/top-bar-button';
import './top-bar.scss';

/* eslint-disable-next-line */
export interface TopBarProps {}

export function TopBar(props: TopBarProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const options = ['Home', 'About', 'Projects', 'Contact'];
  const [activeOption, _setActiveOption] = useState<number>(0);
  const activeOptionRef = useRef<number>(0);
  const pageHeightRef = useRef<number>(0);

  const setActiveOption = (value: number) => {
    activeOptionRef.current = value;
    _setActiveOption(value);
  };

  const handleBurgerClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);

    const pageElement = document.getElementsByClassName('section-container')[0] as HTMLDivElement;
    pageHeightRef.current = pageElement.offsetHeight;

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const onResize = (event: Event) => {
    const pageElement = document.getElementsByClassName('section-container')[0] as HTMLDivElement;
    pageHeightRef.current = pageElement.offsetHeight;
  };

  const onScroll = (event: Event) => {
    const scroll = window.scrollY;
    const pageHeight = pageHeightRef.current;
    const activeOption = activeOptionRef.current;

    if (activeOption !== 0 && scroll < pageHeight * 0.33) {
      setActiveOption(0);
    } else if (activeOption != 1 && scroll > pageHeight * 0.66 && scroll < pageHeight * 1.33) {
      setActiveOption(1);
    } else if (activeOption != 2 && scroll > pageHeight * 1.66 && scroll < pageHeight * 2.33) {
      setActiveOption(2);
    } else if (activeOption != 3 && scroll > pageHeight * 2.66 && scroll < pageHeight * 3.33) {
      setActiveOption(3);
    }
  };

  return (
    <nav className="top-bar-container">
      <a className="top-bar-title" href="#home-page">
        Cristian Aldea
      </a>

      <div className={`top-bar-button-group ${!menuOpen ? 'top-bar-menu-closed' : ''}`}>
        <div className={`top-bar-slide-box position-${activeOption}`} />
        {options.map((option, i) => {
          return (
            <TopBarButton
              href={`#${option.toLowerCase()}-page`}
              active={activeOption === i}
              key={i}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              {option}
            </TopBarButton>
          );
        })}
      </div>

      <BurgerButton className="top-bar-burger-button" onClick={handleBurgerClick} activated={menuOpen} />
    </nav>
  );
}

export default TopBar;
