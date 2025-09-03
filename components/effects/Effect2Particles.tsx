
import React, { useState, useEffect } from 'react';
import EffectContainer from './EffectContainer';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const ParticleStyleInjector: React.FC = () => (
  // NOTE: A <style> tag is used here to define keyframes because creating separate .css files is disallowed.
  // This is a workaround to enable complex animations within the project's constraints.
  <style>{`
    @keyframes float {
      0% { transform: translateY(0px) rotate(0deg); opacity: 1; }
      50% { opacity: 0.8; }
      100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
    }
    .particle {
      animation-name: float;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  `}</style>
);


const Effect2Particles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    const numParticles = 50;
    for (let i = 0; i < numParticles; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100 + 100, // Start below the screen
        size: Math.random() * 5 + 2,
        delay: Math.random() * 15,
        duration: Math.random() * 10 + 10,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <EffectContainer className="bg-gradient-to-br from-blue-900 to-indigo-900">
      <ParticleStyleInjector />
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle absolute rounded-full bg-white/50"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
      <h1 className="text-4xl font-bold md:text-6xl">Particle Effect</h1>
    </EffectContainer>
  );
};

export default Effect2Particles;
