import React, { useState, useEffect } from 'react';
import EffectContainer from './EffectContainer';
import LoadingSpinner from '../LoadingSpinner';

const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x: number, y: number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

// This component contains the hook-based logic and is only rendered when the library is confirmed to be loaded.
// This pattern avoids breaking the Rules of Hooks (e.g., conditional hook calls).
const SpringCard = () => {
  const { useSpring, animated } = (window as any).ReactSpring;
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.to(trans as any) }}
    >
      <h1 className="text-5xl font-bold md:text-7xl">React Spring</h1>
      <p className="text-xl">Physics-Based Animation</p>
    </animated.div>
  );
};


const Effect7ReactSpring: React.FC = () => {
  const [isLibReady, setIsLibReady] = useState(false);

  useEffect(() => {
    // Check if the library is already available
    if ((window as any).ReactSpring) {
      setIsLibReady(true);
      return;
    }

    // If not, poll for it. This is a robust way to handle CDN script loading.
    const intervalId = setInterval(() => {
      if ((window as any).ReactSpring) {
        setIsLibReady(true);
        clearInterval(intervalId);
      }
    }, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <EffectContainer className="bg-gradient-to-br from-green-400 to-cyan-500">
      {isLibReady ? <SpringCard /> : <LoadingSpinner />}
    </EffectContainer>
  );
};

export default Effect7ReactSpring;
