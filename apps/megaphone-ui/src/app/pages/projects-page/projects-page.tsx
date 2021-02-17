import { IProject } from '@project-megaphone/types';
import React from 'react';
import { ProjectCard } from '../../components';
import './projects-page.scss';

/* eslint-disable-next-line */
export interface ProjectsPageProps {}

export function ProjectsPage(props: ProjectsPageProps) {
  // TODO possibly fetch this information from an api
  const projects: IProject[] = [
    {
      name: 'Project Megaphone',
      description: 'The repo where my public webapps and tools (including this website!) will be in put in.',
      url: 'https://github.com/TheGreatMarkus/project-megaphone',
      imageUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    },
    {
      name: 'Auto Made It',
      description: 'Various utilities and scripts I made, made accessible to anyone on any system.',
      url: 'https://github.com/TheGreatMarkus/auto-made-it',
      imageUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    },
    {
      name: 'Risky Warfare',
      description: 'A small game I developed in C++ based on the games and WarZone.',
      url: 'https://github.com/TheGreatMarkus/risky-warfare',
      imageUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    },
  ];

  return (
    <div className="section-container projects-page-container" id="projects-page">
      <div className="section-content-container">
        <div className="page-title">Projects</div>
        <p className="projects-page-info">
          My whole portfolio can be found on <a href="https://github.com/TheGreatMarkus">Github</a>, but here
          I've picked out a few of my favorites.
        </p>
        {projects.map((project, i) => (
          <ProjectCard project={project} className="project-page-card" key={i} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
