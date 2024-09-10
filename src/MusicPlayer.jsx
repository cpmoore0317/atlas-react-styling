import React from "react";
import CoverArt from "./components/CoverArt";
import SongTitle from "./components/SongTitle";
import PlayControls from "./components/PlayControls";
import VolumeControl from "./components/VolumeControl";
import PlayListItem from "./components/PlayListItem";

// Example song data for demonstration
const currentSong = {
  imageUrl: "./assets/placeholder.svg",
  altText: "Cover Art",
  title: "Song Title",
  author: "Artist Name",
  genre: "Pop",
  length: "3:45"
};

export default function MusicPlayer() {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-800 text-white rounded-lg shadow-lg space-y-8">
      {/* Cover Art and Song Title */}
      <div className="flex flex-col items-center space-x-4">
        <CoverArt imageUrl={currentSong.imageUrl} altText={currentSong.altText} />
        <SongTitle title={currentSong.title} author={currentSong.author} />
      </div>

      {/* Play Controls */}
      <PlayControls />

      {/* Volume Control */}
      <VolumeControl />

      {/* Playlist */}
      <div className="flex flex-col items-center space-y-4"> 
        {/* Vertical spacing instead of horizontal */}
        <SongTitle title={currentSong.title} author={currentSong.author} />
      </div>

    </div>
  );
}
