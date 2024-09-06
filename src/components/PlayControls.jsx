import React from 'react';
import { PlayIcon, RewindIcon, FastForwardIcon, RefreshIcon } from '@heroicons/react/solid';

const PlayControls = () => {
  return (
    <div className="flex justify-between items-center space-x-4">
      <button className="p-2 bg-gray-200 rounded-full">
        <RefreshIcon className="h-6 w-6" />
      </button>
      <button className="p-2 bg-gray-200 rounded-full">
        <RewindIcon className="h-6 w-6" />
      </button>
      <button className="p-3 bg-green-500 rounded-full">
        <PlayIcon className="h-8 w-8 text-white" />
      </button>
      <button className="p-2 bg-gray-200 rounded-full">
        <FastForwardIcon className="h-6 w-6" />
      </button>
      <button className="p-2 bg-gray-200 rounded-full">
        <ShuffleIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default PlayControls;
