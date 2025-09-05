import React from 'react';

interface FullscreenButtonProps {
  isFullScreen: boolean;
  onClick: () => void;
}

const EnterFullscreenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4h4m12 4V4h-4M4 16v4h4m12-4v4h-4" />
  </svg>
);

const ExitFullscreenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 4H4v4m12 0V4h-4M8 20H4v-4m12 0v4h-4" />
  </svg>
);

const FullscreenButton: React.FC<FullscreenButtonProps> = ({ isFullScreen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed top-4 right-4 z-50 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
      aria-label={isFullScreen ? 'Exit fullscreen' : 'Enter fullscreen'}
    >
      {isFullScreen ? <ExitFullscreenIcon /> : <EnterFullscreenIcon />}
    </button>
  );
};

export default FullscreenButton;
