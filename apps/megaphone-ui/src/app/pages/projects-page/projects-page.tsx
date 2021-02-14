import React from 'react';
import './projects-page.scss';

/* eslint-disable-next-line */
export interface ProjectsPageProps {}

export function ProjectsPage(props: ProjectsPageProps) {
  return (
    <div className="section-container projects-page-container" id="projects-page">
      <div className="section-content-container">
        <div className="page-title">Projects</div>
        <div>Coming soon!</div>
      </div>
    </div>
  );
}

export default ProjectsPage;
