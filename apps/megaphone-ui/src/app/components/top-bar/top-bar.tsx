import React from 'react';
import TopBarButton from './top-bar-button/top-bar-button';
import styles from './top-bar.module.scss';

/* eslint-disable-next-line */
export interface TopBarProps {}

export function TopBar(props: TopBarProps) {
  return (
    <div className={styles.container}>
      <div className={styles.topBarTitle}>Cristian Aldea</div>
      <div className={styles.buttonContainer}>
        <TopBarButton>Home</TopBarButton>
        <TopBarButton>About</TopBarButton>
        <TopBarButton>Project</TopBarButton>
        <TopBarButton>Contact</TopBarButton>
      </div>
    </div>
  );
}

export default TopBar;
