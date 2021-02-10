import React from 'react';
import TypingText from '../../components/typing-text/typing-text';
import './home-page.scss';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  return (
    <div className="section-container home-page-container">
      <div className="section-content-container">
        <div className="home-page-title">Welcome</div>
        <div className="home-page-subtext">
          <div>I'm Cristian Aldea</div>
          <div>
            <div className="inline">I build</div>
            <TypingText messages={[' websites', ' software', ' solutions']} loop={true} className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
