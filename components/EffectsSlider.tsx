import React from 'react';

// NOTE: Global type declarations for custom elements and CDN libraries have been moved to App.tsx
// to ensure they are available across the entire project.

import Effect1Glass from './effects/Effect1Glass';
import Effect2Particles from './effects/Effect2Particles';
import Effect3Glitch from './effects/Effect3Glitch';
import Effect4Parallax from './effects/Effect4Parallax';
import Effect5Boom from './effects/Effect5Boom';
import Effect6FramerMotion from './effects/Effect6FramerMotion';
import Effect7ReactSpring from './effects/Effect7ReactSpring';
import Effect8GsapTimeline from './effects/Effect8GsapTimeline';
import Effect9ThreeJs from './effects/Effect9ThreeJs';
import Effect10Lottie from './effects/Effect10Lottie';

const EffectsSlider: React.FC = () => {
  return (
    // FIX: Replaced 'class' with 'className' for React JSX compatibility.
    // The global type definitions in App.tsx now correctly type this custom element.
    <swiper-container
      navigation="true"
      pagination="true"
      effect="fade"
      className="h-full w-full"
    >
      <swiper-slide><Effect1Glass /></swiper-slide>
      <swiper-slide><Effect2Particles /></swiper-slide>
      <swiper-slide><Effect3Glitch /></swiper-slide>
      <swiper-slide><Effect4Parallax /></swiper-slide>
      <swiper-slide><Effect5Boom /></swiper-slide>
      <swiper-slide><Effect6FramerMotion /></swiper-slide>
      <swiper-slide><Effect7ReactSpring /></swiper-slide>
      <swiper-slide><Effect8GsapTimeline /></swiper-slide>
      <swiper-slide><Effect9ThreeJs /></swiper-slide>
      <swiper-slide><Effect10Lottie /></swiper-slide>
    </swiper-container>
  );
};

export default EffectsSlider;
