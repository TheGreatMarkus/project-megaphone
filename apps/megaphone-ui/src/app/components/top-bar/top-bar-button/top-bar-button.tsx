import React, { useState } from 'react';
import styles from './top-bar-button.module.scss';

/* eslint-disable-next-line */
export interface TopBarButtonProps {
  children?: string;
}

export function TopBarButton({ children }: TopBarButtonProps) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <button
      className={`${styles.container} ${active ? styles.active : ''}`}
      onClick={() => {
        setActive(!active);
      }}
    >
      {children}
    </button>
  );
}

export default TopBarButton;
