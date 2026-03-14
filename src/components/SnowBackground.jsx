import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

function SnowBackground() {

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="particles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true, zIndex: -1 },

                background: {
                    color: "transparent"
                },

                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            area: 800
                        }
                    },

                    color: {
                        value: "#64ffda"
                    },

                    shape: {
                        type: "circle"
                    },

                    opacity: {
                        value: 0.5
                    },

                    size: {
                        value: { min: 2, max: 4 }
                    },

                    links: {
                        enable: true,
                        distance: 150,
                        color: "#64ffda",
                        opacity: 0.2,
                        width: 1
                    },

                    move: {
                        enable: true,
                        speed: 0.4,
                        direction: "none",
                        outModes: {
                            default: "bounce"
                        }
                    }
                },

                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse"
                        },
                        onClick: {
                            enable: true,
                            mode: "push"
                        }
                    },

                    modes: {
                        repulse: {
                            distance: 120
                        },
                        push: {
                            quantity: 4
                        }
                    }
                }
            }}
        />
    );
}

export default SnowBackground;