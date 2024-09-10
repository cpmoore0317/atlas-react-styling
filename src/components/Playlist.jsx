import React from "react";
import PlayListItem from "./PlayListItem";

// Example playlist data for demonstration
const playlist = [
  { title: "Song 1", genre: "Pop", length: "3:45" },
  { title: "Song 2", genre: "Rock", length: "4:12" },
  { title: "Song 3", genre: "Jazz", length: "5:03" },
];

const Playlist = () => {
  return (
    <div>
      <h2 className="text-black text-xl font-bold mb-4">Playlist</h2>
      {playlist.map((song, index) => (
        <PlayListItem key={index} title={song.title} genre={song.genre} length={song.length} />
      ))}
    </div>
  );
};

export default Playlist;
