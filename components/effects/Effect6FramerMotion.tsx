import React, { useState, useEffect } from 'react';
import EffectContainer from './EffectContainer';
import LoadingSpinner from '../LoadingSpinner';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
} as const;

// This component contains the animation logic and is only rendered when the library is confirmed to be loaded.
// This pattern avoids breaking the Rules of Hooks (e.g., conditional hook calls).
const MotionCard = () => {
  const { div: MotionDiv } = (window as any).motion;
  const title = "Framer Motion";

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center"
    >
      <MotionDiv variants={itemVariants} className="mb-4">
        <h1 className="text-5xl font-bold md:text-7xl">{title}</h1>
      </MotionDiv>
      <MotionDiv variants={itemVariants}>
        <p className="text-xl">Staggered Animation</p>
      </MotionDiv>
    </MotionDiv>
  );
};


const Effect6FramerMotion: React.FC = () => {
  const [isLibReady, setIsLibReady] = useState(false);

  useEffect(() => {
    // Check if the library is already available
    if ((window as any).motion) {
      setIsLibReady(true);
      return;
    }

    // If not, poll for it. This is a robust way to handle CDN script loading.
    const intervalId = setInterval(() => {
      if ((window as any).motion) {
        setIsLibReady(true);
        clearInterval(intervalId);
      }
    }, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <EffectContainer className="bg-gradient-to-br from-purple-600 to-blue-500">
      {isLibReady ? <MotionCard /> : <LoadingSpinner />}
    </EffectContainer>
  );
};

export default Effect6FramerMotion;
