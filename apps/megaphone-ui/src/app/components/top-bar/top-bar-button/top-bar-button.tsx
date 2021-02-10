import React, { useState } from 'react';
import './top-bar-button.scss';

/* eslint-disable-next-line */
export interface TopBarButtonProps {
  children?: string;
}

export function TopBarButton({ children }: TopBarButtonProps) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <button
      className={`top-bar-button-container ${active ? 'top-bar-button-active' : ''}`}
      onClick={() => {
        setActive(!active);
      }}
    >
      {children}
    </button>
  );
}

export default TopBarButton;
