
import React from 'react';
import EffectsSlider from './components/EffectsSlider';

// FIX: Moved global type definitions here to ensure they are available project-wide.
// This resolves errors related to custom elements like swiper-container and lottie-player.
declare global {
  // FIX: Changed `const` to `var` to correctly declare ambient global variables.
  // Using `const` here was causing a fatal type error with `gsap` that prevented
  // the JSX definitions below from being recognized, leading to errors with custom elements.
  var motion: typeof import('framer-motion').motion;
  var ReactSpring: typeof import('@react-spring/web');
  var THREE: typeof import('three');

  // FIX: Declaring `gsap` on the `Window` interface resolves the "Cannot augment module 'gsap'"
  // error. This error was blocking TypeScript from processing the JSX namespace definitions below,
  // causing all custom element errors.
  interface Window {
    gsap: any;
  }

  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        navigation?: string;
        pagination?: string;
        effect?: string;
      };
      'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'lottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        background?: string;
        speed?: string;
        loop?: boolean;
        autoplay?: boolean;
      };
    }
  }
}

function App() {
  return (
    <main className="h-screen w-screen bg-neutral-900 text-white antialiased">
      <EffectsSlider />
    </main>
  );
}

export default App;
