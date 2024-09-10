import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControl";
import placeholderSvg from "../assets/placeholder.svg"; // Import the SVG directly

// Example song data for demonstration
const currentSong = {
  imageUrl: placeholderSvg,  // Use the imported SVG path
  altText: "Cover Art",
  title: "Song Title",
  author: "Artist Name",
};

const CurrentlyPlaying = () => {
  return (
    <div className="flex flex-col items-start space-y-4 bg-white">
      <CoverArt imageUrl={currentSong.imageUrl} altText={currentSong.altText} />
      <SongTitle title={currentSong.title} author={currentSong.author} />
      <PlayControls />
      <VolumeControl />
    </div>
  );
};

export default CurrentlyPlaying;
