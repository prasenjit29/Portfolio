import React from 'react';
import { motion } from 'framer-motion';
import personal from '../data/personal';
import Section from './Section';
import profileImage from '../assets/prasenjiturade.jpg';

function Hero() {
  return (
    <Section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <motion.span className="tag" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .1 }}>Available for work</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .2 }}>
              Hi, I'm <span className="gradient-text">{personal.name}</span> — {personal.role}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .3 }}>{personal.summary}</motion.p>
            <motion.div className="hero-cta" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .4 }}>
              {personal.resumeUrl && (
                <a className="btn" href={personal.resumeUrl} target="_blank" rel="noreferrer">Download Resume</a>
              )}
              <a className="btn ghost" href="#projects">View Projects</a>
              <a className="btn ghost" href="#contact">Contact</a>
            </motion.div>
          </div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: .8, delay: .5, ease: "easeOut" }}
          >
            <img src={profileImage} alt={`${personal.name} - ${personal.role}`} />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

export default Hero;



