import React, { useState, useRef, useEffect } from 'react';
import EffectsSlider from './components/EffectsSlider';
import FullscreenButton from './components/FullscreenButton';

function App() {
  const mainRef = useRef<HTMLElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = async () => {
    if (!mainRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await mainRef.current.requestFullscreen();
      } else if (document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen mode failed:", error);
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);


  return (
    <main ref={mainRef} className="relative h-screen w-screen bg-neutral-900 text-white antialiased">
      <EffectsSlider />
      <FullscreenButton isFullScreen={isFullScreen} onClick={toggleFullScreen} />
    </main>
  );
}

export default App;
