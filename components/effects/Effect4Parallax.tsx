
import React from 'react';
import EffectContainer from './EffectContainer';

const Effect4Parallax: React.FC = () => {
  return (
    <div 
      className="h-full w-full bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('https://picsum.photos/1920/1080?random=4')` }}
    >
      <EffectContainer className="bg-black/40">
        <div className="rounded-lg bg-black/50 p-8">
            <h1 className="text-4xl font-bold md:text-6xl">Parallax Effect</h1>
        </div>
      </EffectContainer>
    </div>
  );
};

export default Effect4Parallax;
