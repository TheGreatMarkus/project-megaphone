import { IProject } from '@project-megaphone/types';
import React from 'react';
import './project-card.scss';

export interface ProjectCardProps {
  project: IProject;
  className?: string;
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <a
      className={`project-card-container plain-link button-like ${className}`}
      href={project.url}
      target="_blank"
    >
      <img src={project.imageUrl} className="project-card-image"></img>
      <div>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
