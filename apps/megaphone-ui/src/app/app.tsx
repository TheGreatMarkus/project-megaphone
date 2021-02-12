import React from 'react';
import './app.scss';
import { TopBar } from './components';
import { AboutPage, ContactPage, HomePage, ProjectsPage } from './pages';

export function App() {
  return (
    <div>
      <div className="app-main-container">
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
      </div>

      <TopBar />
    </div>
  );
}

export default App;
