
import React from 'react';
import EffectContainer from './EffectContainer';

const GlitchStyleInjector: React.FC = () => (
  // NOTE: A <style> tag is used here to define keyframes and pseudo-element styles
  // because creating separate .css files is disallowed. This is a workaround to
  // enable complex animations within the project's constraints.
  <style>{`
    .glitch {
      position: relative;
      animation: glitch-anim 2s infinite linear alternate-reverse;
    }

    .glitch::before,
    .glitch::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #0a0a0a;
      overflow: hidden;
    }

    .glitch::before {
      left: 2px;
      text-shadow: -2px 0 #ef4444; /* red-500 */
      animation: glitch-anim-2 2s infinite linear alternate-reverse;
    }

    .glitch::after {
      left: -2px;
      text-shadow: -2px 0 #3b82f6; /* blue-500 */
      animation: glitch-anim-3 2s infinite linear alternate-reverse;
    }
    
    @keyframes glitch-anim {
      0% { transform: translate(0); } 20% { transform: translate(-5px, 5px); }
      40% { transform: translate(-5px, -5px); } 60% { transform: translate(5px, 5px); }
      80% { transform: translate(5px, -5px); } 100% { transform: translate(0); }
    }
    @keyframes glitch-anim-2 {
      0% { clip-path: inset(39% 0 56% 0); } 20% { clip-path: inset(10% 0 85% 0); }
      40% { clip-path: inset(78% 0 10% 0); } 60% { clip-path: inset(45% 0 45% 0); }
      80% { clip-path: inset(90% 0 5% 0); } 100% { clip-path: inset(60% 0 30% 0); }
    }
    @keyframes glitch-anim-3 {
      0% { clip-path: inset(68% 0 25% 0); } 20% { clip-path: inset(5% 0 90% 0); }
      40% { clip-path: inset(80% 0 5% 0); } 60% { clip-path: inset(40% 0 40% 0); }
      80% { clip-path: inset(75% 0 13% 0); } 100% { clip-path: inset(55% 0 35% 0); }
    }
  `}</style>
);


const Effect3Glitch: React.FC = () => {
  const text = "Glitch Effect";
  return (
    <EffectContainer className="bg-neutral-950">
      <GlitchStyleInjector />
      <h1 className="glitch text-5xl font-bold md:text-8xl" data-text={text}>
        {text}
      </h1>
    </EffectContainer>
  );
};

export default Effect3Glitch;
