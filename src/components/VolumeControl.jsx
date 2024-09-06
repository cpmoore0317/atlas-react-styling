import React from 'react';

const VolumeControl = () => {
  return (
    <div className="flex items-center space-x-4">
      <span>Volume</span>
      <input type="range" className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer" />
    </div>
  );
};

export default VolumeControl;
