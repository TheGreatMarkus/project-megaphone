import React from 'react';
import './about-page.scss';

/* eslint-disable-next-line */
export interface AboutPageProps {}

export function AboutPage(props: AboutPageProps) {
  return (
    <div className="section-container about-page-container" id="about-page">
      <div className="section-content-container">
        <div className="page-title">About Me</div>
        <div className="about-page-info">
          <img src="assets/images/profile-pic.jpeg" className="about-page-picture" />
          <p>Hello! I'm current a last-year Software Engineering Co-op student at Concordia.</p>
          <p>
            I'm interested in everything software, among other things :). I have a lot of pratical experience
            in things such as full-stack development, machine learning and cloud native technologies.
          </p>
          <p>
            I love solving problems and learning new things, and I bring consistency and excellence to any
            project.
          </p>
        </div>
        <p className="about-page-quote">"Today is a gift, that is why we call it the Present."</p>
      </div>
    </div>
  );
}

export default AboutPage;
