'use client';

import { useEffect } from 'react';

export default function Motion() {
  useEffect(() => {
    window.__pfMotion = true;
    const root = document.documentElement;
    const items = document.querySelectorAll('[data-reveal]');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      root.removeAttribute('data-motion');
      items.forEach((item) => item.classList.add('is-in'));
      return;
    }

    root.setAttribute('data-motion', 'ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return null;
}
