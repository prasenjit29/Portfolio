import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import skills from '../data/skills';

function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Tools and technologies I use" className="skills">
      <div className="grid cols-3">
        {skills.map((group, idx) => (
          <motion.div
            key={group.title}
            className="card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
          >
            <h3>{group.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
              {group.items.map((s, i) => (
                <motion.div
                  key={s}
                  className="skill"
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-15% 0px' }}
                  transition={{ duration: 0.35, delay: 0.03 * i }}
                >
                  {s}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;



