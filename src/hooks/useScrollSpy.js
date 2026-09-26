import { useState, useEffect } from 'react';

/**
 * Scroll spy hook: highlights the active section using IntersectionObserver.
 * @param {string[]} sectionIds - Array of section element IDs to observe.
 * @returns {string} The currently active section ID.
 */
export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observers = [];
    const visibleSections = new Map();

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        visibleSections.set(entry.target.id, entry.intersectionRatio);
      });

      // Find the section with the highest intersection ratio
      let maxRatio = 0;
      let maxId = '';

      visibleSections.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          maxId = id;
        }
      });

      if (maxId) {
        setActiveId(maxId);
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -60% 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observers.push(el);
      }
    });

    return () => {
      observers.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeId;
}
