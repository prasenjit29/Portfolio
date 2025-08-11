import React from 'react';
import Section from './Section';
import personal from '../data/personal';

function Contact() {
  const mailto = `mailto:${personal.email}?subject=Inquiry%20from%20Portfolio`;
  return (
    <Section id="contact" title="Contact" subtitle="Let's work together" className="contact">
      <div className="grid cols-2">
        <div className="card">
          <h3>Get in touch</h3>
          <p className="muted">I'm open to freelance, full-time, and collaboration opportunities.</p>
          <div style={{ marginTop: 12, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn" href={mailto}>Email me</a>
            {personal.linkedin && <a className="btn ghost" href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
            {personal.github && <a className="btn ghost" href={personal.github} target="_blank" rel="noreferrer">GitHub</a>}
            {personal.twitter && <a className="btn ghost" href={personal.twitter} target="_blank" rel="noreferrer">Twitter</a>}
          </div>
        </div>
        <div className="card">
          <h3>Location</h3>
          <p className="muted">{personal.location}</p>
        </div>
      </div>
    </Section>
  );
}

export default Contact;



