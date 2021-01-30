import React from 'react';
import styles from './app.module.scss';
import TopBar from './components/top-bar/top-bar';

export function App() {
  return (
    <div className={styles.app}>
      <TopBar />
    </div>
  );
}

export default App;
