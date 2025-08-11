import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Selected work" className="projects">
      <div className="grid cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;



