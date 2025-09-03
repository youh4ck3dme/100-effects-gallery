import React from 'react';

interface EffectContainerProps {
  children: React.ReactNode;
  className?: string;
  // FIX: Add style prop to allow passing inline styles. This resolves the error in Effect1Glass.tsx.
  style?: React.CSSProperties;
}

const EffectContainer: React.FC<EffectContainerProps> = ({ children, className = '', style }) => {
  return (
    // FIX: Apply the style prop to the container div.
    <div className={`relative flex h-full w-full items-center justify-center overflow-hidden ${className}`} style={style}>
      <div className="relative z-10 text-center text-white">
        {children}
      </div>
    </div>
  );
};

export default EffectContainer;