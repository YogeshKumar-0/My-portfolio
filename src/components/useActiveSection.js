import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds) {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const observers = [];

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) {
                const observer = new IntersectionObserver(handleIntersect, {
                    // Nav bar ke top area me aate hi switch karne ke liye perfect offsetting
                    rootMargin: '-20% 0px -60% 0px',
                    threshold: 0,
                });
                observer.observe(el);
                observers.push({ observer, el });
            }
        });

        return () => {
            observers.forEach(({ observer, el }) => observer.unobserve(el));
        };
    }, [sectionIds]);

    return activeSection;
}