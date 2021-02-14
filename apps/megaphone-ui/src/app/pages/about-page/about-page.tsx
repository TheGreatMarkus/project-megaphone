import React from 'react';
import './about-page.scss';

/* eslint-disable-next-line */
export interface AboutPageProps {}

export function AboutPage(props: AboutPageProps) {
  return (
    <div className="section-container about-page-container" id="about-page">
      <div className="section-content-container">
        <div className="page-title">About Me</div>
        <div>Coming soon!</div>
      </div>
    </div>
  );
}

export default AboutPage;
