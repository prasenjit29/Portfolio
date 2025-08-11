import React from 'react';
import personal from '../data/personal';
import Section from './Section';

function Hero() {
  return (
    <Section id="home" className="hero">
      <div className="container">
        <span className="tag">Available for work</span>
        <h1>Hi, I'm {personal.name} — {personal.role}</h1>
        <p>{personal.summary}</p>
        <div className="hero-cta">
          {personal.resumeUrl && (
            <a className="btn" href={personal.resumeUrl} target="_blank" rel="noreferrer">Download Resume</a>
          )}
          <a className="btn ghost" href="#projects">View Projects</a>
          <a className="btn ghost" href="#contact">Contact</a>
        </div>
      </div>
    </Section>
  );
}

export default Hero;



