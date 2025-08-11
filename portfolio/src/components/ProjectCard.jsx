import React from 'react';

function ProjectCard({ project }) {
  return (
    <article className="card project">
      <h3>{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      {project.tags && (
        <div className="project-tags">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      )}
      <div className="project-links">
        {project.demo && (
          <a className="btn ghost" href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
        )}
        {project.source && (
          <a className="btn ghost" href={project.source} target="_blank" rel="noreferrer">Source</a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;



