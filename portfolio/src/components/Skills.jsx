import React from 'react';
import Section from './Section';
import skills from '../data/skills';

function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Tools and technologies I use" className="skills">
      <div className="grid cols-3">
        {skills.map((group) => (
          <div key={group.title} className="card">
            <h3>{group.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
              {group.items.map((s) => (
                <div key={s} className="skill">{s}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;



