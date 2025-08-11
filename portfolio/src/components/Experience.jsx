import React from 'react';
import Section from './Section';
import experience from '../data/experience';

function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Roles and responsibilities" className="experience">
      <div className="grid">
        {experience.map((item) => (
          <div key={item.company + item.title} className="card item">
            <h3>{item.title} — {item.company}</h3>
            <div className="meta">{item.period} · {item.location}</div>
            <ul>
              {item.highlights.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Experience;



