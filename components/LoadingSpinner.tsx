import React from 'react';

const SpinnerStyleInjector: React.FC = () => (
  // NOTE: A <style> tag is used here to define keyframes because creating separate .css files is disallowed.
  <style>{`
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .loader {
      animation: spin 1s linear infinite;
    }
  `}</style>
);

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4" role="status">
      <SpinnerStyleInjector />
      <div
        className="loader h-12 w-12 rounded-full border-4 border-t-4 border-gray-200 border-t-blue-500 ease-linear"
        aria-hidden="true"
      />
      <p className="text-lg text-white/80">Loading Animation...</p>
    </div>
  );
};

export default LoadingSpinner;
