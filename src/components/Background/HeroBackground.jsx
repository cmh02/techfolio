import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

const HeroBackground = ({ children }) => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="relative z-0 bg-gradient-to-r from-blue-400 via-teal-300 to-gray-200 animate-gradient">
      {/* Thematic Particles */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: true, zIndex: -1 },
            particles: {
              number: { value: 30 },
              shape: {
                type: ['circle', 'square'], // Symbols like gears or blocks can be added with custom SVG
              },
              size: { value: 5 },
              move: { speed: 1 },
              color: { value: ['#ffffff', '#3b82f6'] },
              opacity: { value: 0.7 },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: 'bubble' },
                onClick: { enable: true, mode: 'repulse' },
              },
            },
          }}
          className="absolute inset-0"
        />
      )}
      {children}
    </div>
  );
};

export default HeroBackground;
