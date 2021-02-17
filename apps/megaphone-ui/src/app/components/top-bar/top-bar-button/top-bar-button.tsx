import React from 'react';
import './top-bar-button.scss';

/* eslint-disable-next-line */
export interface TopBarButtonProps {
  active: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  href: string;
  children?: string;
}

export function TopBarButton({ active, onClick = null, href, children }: TopBarButtonProps) {
  return (
    <a
      className={`top-bar-button-container plain-link noselect ${active ? 'top-bar-button-active' : ''}`}
      href={href}
      onClick={onClick}
      draggable="false"
    >
      {children}
    </a>
  );
}

export default TopBarButton;
