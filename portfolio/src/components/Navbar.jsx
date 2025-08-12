import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand">Prasenjit</div>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} className="nav-link" href={l.href}>{l.label}</a>
          ))}
          <a className="btn" href="#contact">Hire me</a>
        </div>
        <button className="menu-btn btn ghost" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">Menu</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="container"
            style={{ paddingBottom: 12 }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            <motion.div
              className="card"
              style={{ display: 'grid', gap: 8 }}
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              {links.map((l, idx) => (
                <motion.a
                  key={l.href}
                  className="nav-link"
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                >
                  {l.label}
                </motion.a>
              ))}
              <a className="btn" href="#contact" onClick={() => setOpen(false)}>Hire me</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;



