import React from 'react';

function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`} data-reveal>
      <div className="container">
        {(title || subtitle) && (
          <header className="section-header">
            {title && <h2 className="section-title gradient-text">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;



