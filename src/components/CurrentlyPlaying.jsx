import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControl";

// Example song data
const currentSong = {
  imageUrl: "./assets/placeholder.svg",
  altText: "Cover Art",
  title: "Song Title",
  author: "Artist Name"
};

export default function CurrentlyPlaying() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-md mx-auto text-white">
      {/* Cover Art and Song Title */}
      <div className="flex items-center space-x-4">
        <CoverArt imageUrl={currentSong.imageUrl} altText={currentSong.altText} />
        <SongTitle title={currentSong.title} author={currentSong.author} />
      </div>

      {/* Play Controls */}
      <div className="mt-4">
        <PlayControls />
      </div>

      {/* Volume Control */}
      <div className="mt-4">
        <VolumeControl />
      </div>
    </div>
  );
}
