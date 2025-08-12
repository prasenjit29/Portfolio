import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Reveal-on-scroll using IntersectionObserver (init after React mounts)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

function observeSections() {
  const sections = document.querySelectorAll('[data-reveal].section');
  sections.forEach((el) => {
    if (!el.dataset.observed) {
      observer.observe(el);
      el.dataset.observed = '1';
    }
  });
}

function initReveal() {
  observeSections();
  // Ensure hero is visible immediately as a safety net
  const hero = document.getElementById('home');
  if (hero) hero.classList.add('is-visible');

  // Watch for dynamically added sections (React StrictMode/double mount safety)
  const mo = new MutationObserver(() => observeSections());
  mo.observe(document.body, { childList: true, subtree: true });

  // Final fallback: if still hidden after a moment, reveal all to avoid blank page
  setTimeout(() => {
    document.querySelectorAll('[data-reveal].section').forEach((el) => el.classList.add('is-visible'));
  }, 1200);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(initReveal), { once: true });
} else {
  requestAnimationFrame(initReveal);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
