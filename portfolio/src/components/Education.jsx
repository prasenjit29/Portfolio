import React from 'react';
import Section from './Section';
import education from '../data/education';

function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academic background" className="education">
      <div className="grid">
        {education.map((item) => (
          <div key={item.school + item.degree} className="card item">
            <h3>{item.degree} — {item.school}</h3>
            <div className="meta">{item.period} · {item.location}</div>
            {item.details && <p className="muted">{item.details}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Education;



