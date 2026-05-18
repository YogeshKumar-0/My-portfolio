import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function SnowBackground({ theme }) {
    // --- MOUSE SPOTLIGHT TRACKER ---
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    // --- PARTICLES ENGINE ---
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const accentColor =
        theme === 'aurora'
            ? '#8b5cf6'
            : '#64ffda';

    return (
        <>
            {/* 1. Dynamic Spotlight Aura */}
            <div
                className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                    theme === 'aurora'
                        ? 'rgba(139,92,246,0.10)'
                        : 'rgba(100,255,218,0.06)', 
                    transparent 80%)`,
                }}
            />

            {/* 2. Interactive Nexus Mesh Particles */}
            <Particles
                id="particles"
                init={particlesInit}
                className="z-0"
                options={{
                    fullScreen: { enable: true, zIndex: 0 },
                    background: {
                        color: theme === 'aurora'
                            ? '#050816'
                            : '#0a192f'
                    },
                    particles: {
                        number: { value: 60, density: { enable: true, area: 800 } },
                        color: { value: accentColor },
                        shape: { type: "circle" },
                        opacity: { value: 0.3 },
                        size: { value: { min: 1, max: 3 } },
                        links: {
                            enable: true,
                            distance: 150,
                            color: accentColor,
                            opacity: 0.2,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 0.6,
                            direction: "none",
                            outModes: { default: "bounce" },
                        },
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                // "grab" mode particles ko mouse ki taraf connect karta hai
                                mode: "grab",
                            },
                        },
                        modes: {
                            grab: {
                                distance: 220,
                                links: { opacity: 0.6, color: accentColor },
                            },
                        },
                    },
                }}
            />
        </>
    );
}

export default SnowBackground;