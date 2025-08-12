import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Selected work" className="projects">
      <div className="grid cols-2">
        {projects.map((p) => (
          <div key={p.title}>
            <div className="project-cover" />
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Projects;



