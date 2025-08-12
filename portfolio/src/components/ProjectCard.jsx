import React, { useRef } from 'react';

function ProjectCard({ project }) {
  const cardRef = useRef(null);

  function handleMouseMove(e) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 8;
    const rotateX = (0.5 - py) * 8;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function handleMouseLeave() {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  }

  return (
    <article
      className="card project"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform .15s ease' }}
    >
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



