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
      description: "I'm putting my public web apps and tools here, including the website you're on!",
      url: 'https://github.com/TheGreatMarkus/project-megaphone',
      imageUrl: 'assets/images/github.jpg',
    },
    {
      name: 'Auto Made It',
      description:
        'I put various utilities and scripts I made to make them accessible to anyone, on any system.',
      url: 'https://github.com/TheGreatMarkus/auto-made-it',
      imageUrl: 'assets/images/github.jpg',
    },
    {
      name: 'Risky Warfare',
      description: 'A small game I developed in C++ based on the game Risk.',
      url: 'https://github.com/TheGreatMarkus/risky-warfare',
      imageUrl: 'assets/images/github.jpg',
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
