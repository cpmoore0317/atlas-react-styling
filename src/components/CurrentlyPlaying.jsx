import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControl";

// Example song data for demonstration
const currentSong = {
  imageUrl: "./assets/placeholder.svg",
  altText: "Cover Art",
  title: "Song Title",
  author: "Artist Name",
};

const CurrentlyPlaying = () => {
  return (
    <div className="flex flex-col items-start space-y-4 bg-white"> {/* changed to items-start */}
      <CoverArt imageUrl={currentSong.imageUrl} altText={currentSong.altText} />
      <SongTitle title={currentSong.title} author={currentSong.author} />
      <PlayControls />
      <VolumeControl />
    </div>
  );
};

export default CurrentlyPlaying;
