
import React from 'react';
import EffectContainer from './EffectContainer';

const Effect1Glass: React.FC = () => {
  return (
    <EffectContainer className="bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?random=1')` }}>
      <div className="flex flex-col items-center justify-center rounded-2xl border border-white/30 bg-white/20 p-8 shadow-lg backdrop-blur-lg md:p-12">
        <h1 className="mb-2 text-4xl font-bold text-white drop-shadow-lg md:text-6xl">Glass Effect</h1>
        <p className="max-w-md text-lg text-gray-100 drop-shadow-md">
          A demonstration of the glassmorphism aesthetic.
        </p>
      </div>
    </EffectContainer>
  );
};

export default Effect1Glass;
