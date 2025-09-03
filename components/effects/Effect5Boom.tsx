
import React from 'react';
import EffectContainer from './EffectContainer';

const BoomStyleInjector: React.FC = () => (
  // NOTE: A <style> tag is used here to define keyframes because creating separate .css files is disallowed.
  // This is a workaround to enable complex animations within the project's constraints.
  <style>{`
    .boom {
      animation: boom-anim 2s infinite ease-out;
    }
    @keyframes boom-anim {
      0% {
        transform: scale(0.8);
        opacity: 1;
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ec4899, 0 0 40px #ec4899, 0 0 50px #ec4899;
      }
      100% {
        transform: scale(1.8);
        opacity: 0;
        text-shadow: none;
      }
    }
  `}</style>
);

const Effect5Boom: React.FC = () => {
  return (
    <EffectContainer className="bg-neutral-900">
      <BoomStyleInjector />
      <h1 className="boom font-black tracking-widest text-6xl md:text-9xl">BOOM!</h1>
    </EffectContainer>
  );
};

export default Effect5Boom;
