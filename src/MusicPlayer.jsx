import React from "react";
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";

export default function MusicPlayer() {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-900 text-white rounded-lg shadow-lg">
      {/* Flex container that changes layout based on screen size */}
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {/* Currently Playing section */}
        <div className="flex-1">
          <CurrentlyPlaying />
        </div>

        {/* Playlist section */}
        <div className="flex-1">
          <Playlist />
        </div>
      </div>
    </div>
  );
}
