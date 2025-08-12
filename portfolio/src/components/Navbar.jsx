import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const onScroll = () => {
      const top = window.scrollY + 120;
      let current = '#home';
      for (const s of sections) {
        if (top >= s.offsetTop) current = `#${s.id}`;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand">Prasenjit</div>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} className="nav-link" href={l.href} style={active === l.href ? { color: 'var(--text)' } : undefined}>{l.label}</a>
          ))}
          <a className="btn" href="#contact">Hire me</a>
          <a className="nav-link" href="https://github.com/prasenjit29" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a className="nav-link" href="https://www.linkedin.com/in/prasenjit-urade-a96155323/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
        <button className="menu-btn btn ghost" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">Menu</button>
      </div>
      {open && (
        <div className="container" style={{ paddingBottom: 12 }}>
          <div className="card" style={{ display: 'grid', gap: 8 }}>
            {links.map((l) => (
              <a key={l.href} className="nav-link" href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a className="btn" href="#contact" onClick={() => setOpen(false)}>Hire me</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;



