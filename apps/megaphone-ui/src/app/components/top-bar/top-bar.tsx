import React from 'react';
import TopBarButton from './top-bar-button/top-bar-button';
import './top-bar.scss';

/* eslint-disable-next-line */
export interface TopBarProps {}

export function TopBar(props: TopBarProps) {
  return (
    <div className="top-bar-container">
      <div className="top-bar-title">Cristian Aldea</div>
      <div className="top-bar-button-group">
        <TopBarButton>Home</TopBarButton>
        <TopBarButton>About</TopBarButton>
        <TopBarButton>Project</TopBarButton>
        <TopBarButton>Contact</TopBarButton>
      </div>
    </div>
  );
}

export default TopBar;
