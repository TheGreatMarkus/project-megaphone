import React, { useState } from 'react';
import './top-bar-button.scss';

/* eslint-disable-next-line */
export interface TopBarButtonProps {
  children?: string;
  href: string;
}

export function TopBarButton({ children, href }: TopBarButtonProps) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <a
      className={`top-bar-button-container ${active ? 'top-bar-button-active' : ''}`}
      onClick={() => {
        setActive(!active);
      }}
      href={href}
    >
      {children}
    </a>
  );
}

export default TopBarButton;
