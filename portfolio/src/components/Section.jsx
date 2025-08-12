import React, { useEffect, useRef } from 'react';

function Section({ id, title, subtitle, children, className = '' }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.unobserve(element);
        }
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} className={`section ${className}`} data-reveal ref={sectionRef}>
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



