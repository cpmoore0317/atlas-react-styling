import React from "react";
import { PlayIcon, ArrowUturnLeftIcon, ArrowRightIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

const PlayControls = () => {
  return (
    <div className="flex justify-between items-center space-x-4">
      <button>
        <ArrowUturnLeftIcon className="h-6 w-6 text-gray-700" />
      </button>
      <button>
        <PlayIcon className="h-6 w-6 text-gray-700" />
      </button>
      <button>
        <ArrowRightIcon className="h-6 w-6 text-gray-700" />
      </button>
      <button>
        <ArrowPathIcon className="h-6 w-6 text-gray-700" />
      </button>
    </div>
  );
};

export default PlayControls;
