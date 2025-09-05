import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// FIX: Moved global type declarations to the application entry point (index.tsx)
// to ensure they are parsed and available before any components are rendered.
// This resolves errors related to custom JSX elements like 'swiper-container'
// and 'lottie-player' not being found in JSX.IntrinsicElements.
declare global {
  interface Window {
    motion: typeof import('framer-motion').motion;
    ReactSpring: typeof import('@react-spring/web');
    gsap: any;
  }

  // `THREE` is used as a true global (e.g., `new THREE.Scene()`), not on `window`, so `var` is correct.
  var THREE: typeof import('three');

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

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
