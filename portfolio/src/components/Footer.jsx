import React from 'react';
import personal from '../data/personal';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        © {year} {personal.name}. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;



