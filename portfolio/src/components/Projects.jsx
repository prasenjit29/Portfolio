import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Selected work" className="projects">
      <div className="grid cols-2">
        {projects.map((p, idx) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10% 0px' }} transition={{ duration: .5, delay: idx * 0.06 }}>
            <div className="project-cover" />
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default Projects;



