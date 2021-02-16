import React, { useEffect, useRef, useState } from 'react';
import BurgerButton from './burger-button/burger-button';
import TopBarButton from './top-bar-button/top-bar-button';
import './top-bar.scss';

/* eslint-disable-next-line */
export interface TopBarProps {}

export function TopBar(props: TopBarProps) {
  const options = ['Home', 'About', 'Projects', 'Contact'];

  const [menuOpen, _setMenuOpen] = useState<boolean>(false);
  const menuOpenRef = useRef<boolean>(false);
  const [activeOption, _setActiveOption] = useState<number>(0);
  const activeOptionRef = useRef<number>(0);

  const pageRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState<boolean>(true);
  const winWidth = useRef<number>(0);

  const topBarRef = useRef<HTMLDivElement>(null);

  const setActiveOption = (value: number) => {
    activeOptionRef.current = value;
    _setActiveOption(value);
  };

  const setMenuOpen = (value: boolean) => {
    menuOpenRef.current = value;
    _setMenuOpen(value);
  };

  useEffect(() => {
    window.addEventListener('mousedown', onClick);
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);

    pageRef.current = document.getElementsByClassName('section-container')[0] as HTMLDivElement;
    winWidth.current = window.innerWidth;

    return () => {
      window.removeEventListener('mousedown', onClick);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onClick = (event: MouseEvent) => {
    if (menuOpenRef.current && !topBarRef.current.contains(event.target as HTMLElement)) {
      setMenuOpen(false);
    }
  };

  const onResize = (event: UIEvent) => {
    if (
      (winWidth.current >= 1024 && window.innerWidth < 1024) ||
      (winWidth.current < 1024 && window.innerWidth >= 1024)
    ) {
      setMenuOpen(false);
      setAnimate(false);
      setTimeout(() => {
        setAnimate(true);
      }, 100);
    }

    winWidth.current = window.innerWidth;
  };

  const onScroll = (event: Event) => {
    const scroll = window.scrollY;
    const height = pageRef.current.offsetHeight;
    const active = activeOptionRef.current;

    if (active !== 0 && scroll < height * 0.33) {
      setActiveOption(0);
    } else if (active != 1 && scroll > height * 0.66 && scroll < height * 1.33) {
      setActiveOption(1);
    } else if (active != 2 && scroll > height * 1.66 && scroll < height * 2.33) {
      setActiveOption(2);
    } else if (active != 3 && scroll > height * 2.66 && scroll < height * 3.33) {
      setActiveOption(3);
    }
  };

  return (
    <nav className="top-bar-container" ref={topBarRef}>
      <a className="top-bar-title" href="#home-page">
        Cristian Aldea
      </a>

      <div
        className={`top-bar-button-group${!menuOpen ? ' top-bar-menu-closed' : ' top-bar-menu-open'}${
          animate ? ' animate' : ''
        }`}
      >
        <div className={`top-bar-slider position-${activeOption}${animate ? ' animate' : ''}`} />
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

      <BurgerButton
        className="top-bar-burger-button"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        activated={menuOpen}
      />
    </nav>
  );
}

export default TopBar;
