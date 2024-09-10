import React from "react";

const VolumeControl = () => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-light-gray">Volume</span>
      <input
        type="range"
        min="0"
        max="100"
        className="h-1 w-32 bg-teal rounded-lg focus:outline-none"
      />
    </div>
  );
};

export default VolumeControl;
