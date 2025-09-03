
import React, { useRef, useEffect } from 'react';
import EffectContainer from './EffectContainer';

const Effect8GsapTimeline: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // FIX: Access gsap via `window.gsap` to match the updated global type definition in App.tsx,
    // which was changed to resolve a module augmentation conflict.
    const tl = window.gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    // Reset initial states
    window.gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], { autoAlpha: 0 });
    window.gsap.set(titleRef.current, { y: -50 });
    window.gsap.set(subtitleRef.current, { y: -20 });
    window.gsap.set(buttonRef.current, { scale: 0.5 });


    tl.to(titleRef.current, { y: 0, autoAlpha: 1, duration: 0.8 })
      .to(subtitleRef.current, { y: 0, autoAlpha: 1, duration: 0.6 }, '-=0.4')
      .to(buttonRef.current, { scale: 1, autoAlpha: 1, duration: 0.5 }, '-=0.4');

    return () => {
      tl.kill(); // Cleanup the timeline on unmount
    };
  }, []);


  return (
    <EffectContainer className="bg-gradient-to-br from-gray-700 via-gray-900 to-black">
      <div className="flex flex-col items-center gap-6">
        <h1 ref={titleRef} className="text-5xl font-bold md:text-7xl">GSAP Timeline</h1>
        <p ref={subtitleRef} className="text-xl">Sequenced Animation</p>
        <button ref={buttonRef} className="rounded-full bg-indigo-500 px-6 py-3 font-bold text-white shadow-lg">
          Animate In
        </button>
      </div>
    </EffectContainer>
  );
};

export default Effect8GsapTimeline;
