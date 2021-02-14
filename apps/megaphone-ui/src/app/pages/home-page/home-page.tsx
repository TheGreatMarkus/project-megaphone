import React from 'react';
import TypingText from '../../components/typing-text/typing-text';
import './home-page.scss';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  return (
    <>
      <div className="section-container home-page-container" id="home-page">
        <div className="section-content-container">
          <div className="home-page-subtext">
            <div>I'm Cristian Aldea</div>
            <div>
              <div className="inline">I build</div>
              <TypingText
                messages={[' websites', ' software', ' solutions', ' what you need']}
                loop={true}
                className=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="home-page-title page-title">Welcome</div>
    </>
  );
}

export default HomePage;
