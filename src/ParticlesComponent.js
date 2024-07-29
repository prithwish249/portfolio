import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState, useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 700);

  // Handle window resize to adjust particle settings based on screen size
  const handleResize = useCallback(() => {
    setIsSmallScreen(window.innerWidth < 700);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Initialize particles engine
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    // Clean up resize event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 50,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: isSmallScreen ? "push" : "repulse", // Adjust interactivity mode based on screen size
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            particles_nb: 3, // Adds 3 particles when the push mode is activated
          },
          repulse: {
            distance: 200, // Repels particles within a 200px radius around the cursor
            duration: 0.4, // The repulsion effect lasts for 0.4 seconds
          },
          grab: {
            distance: 200, // Grabs particles within a 200px radius around the cursor
            line_linked: {
              opacity: 1, // Lines linking the particles are fully opaque
            },
          },
        },
      },
      particles: {
        color: {
          value: "#7aeb34",
        },
        links: {
          color: "#7aeb34",
          distance: isSmallScreen ? 80 : 100, // Adjust link distance based on screen size
          enable: true,
          opacity: 0.8,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: isSmallScreen ? 0.5 : 1, // Adjust speed based on screen size
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: isSmallScreen ? 50 : 200, // Reduce number of particles on small screens
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: isSmallScreen ? 3 : 2 }, // Adjust size based on screen size
        },
      },
      detectRetina: true,
    };
  }, [isSmallScreen]);

  return (
    <>
      {!isSmallScreen && (
        <Particles id={props.id} init={particlesLoaded} options={options} />
      )}
    </>
  );
};

export default ParticlesComponent;
