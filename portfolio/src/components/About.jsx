import React from 'react';
import Section from './Section';
import personal from '../data/personal';

function About() {
  return (
    <Section id="about" title="About" subtitle="A quick introduction" className="about">
      <div className="grid cols-2">
        <div className="card">
          <p>{personal.about}</p>
        </div>
        <div className="card">
          <h3>Quick facts</h3>
          <ul>
            <li><span className="muted">Location:</span> {personal.location}</li>
            <li><span className="muted">Interests:</span> {personal.interests.join(', ')}</li>
            <li><span className="muted">Languages:</span> {personal.languages.join(', ')}</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default About;



