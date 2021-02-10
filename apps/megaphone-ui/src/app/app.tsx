import React from 'react';
import './app.scss';
import TopBar from './components/top-bar/top-bar';
import AboutPage from './pages/about-page/about-page';
import ContactPage from './pages/contact-page/contact-page';
import HomePage from './pages/home-page/home-page';
import ProjectsPage from './pages/projects-page/projects-page';

export function App() {
  return (
    <div>
      <div className="app-main-container contact-page-container">
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
