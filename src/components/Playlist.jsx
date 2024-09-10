import React from "react";
import PlayListItem from "./PlayListItem";

// Example playlist data
const playlist = [
  { title: "Song 1", genre: "Pop", length: "3:45" },
  { title: "Song 2", genre: "Rock", length: "4:15" },
  { title: "Song 3", genre: "Jazz", length: "5:30" },
  { title: "Song 4", genre: "Hip-Hop", length: "3:20" }
];

export default function Playlist() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-md mx-auto text-white">
      <h3 className="text-lg font-semibold mb-4">Play List</h3>
      
      <div className="space-y-2">
        {playlist.map((song, index) => (
          <PlayListItem
            key={index}
            title={song.title}
            genre={song.genre}
            length={song.length}
          />
        ))}
      </div>
    </div>
  );
}
