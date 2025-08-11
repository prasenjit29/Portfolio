import React, { useState } from 'react';

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



