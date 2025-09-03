import React from 'react';
import EffectContainer from './EffectContainer';

const Effect10Lottie: React.FC = () => {
  return (
    <EffectContainer className="bg-gradient-to-br from-sky-900 to-slate-900">
      <div className="flex flex-col items-center gap-4">
        <div className="w-64 h-64 md:w-80 md:h-80">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <h1 className="text-5xl font-bold md:text-7xl">Lottie Animation</h1>
        <p className="text-xl">Vector Animations</p>
      </div>
    </EffectContainer>
  );
};

export default Effect10Lottie;