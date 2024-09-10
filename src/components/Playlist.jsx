import React from "react";

// Example playlist data
const playlistData = [
  { title: "Painted in Blue", artist: "Soul Canvas", duration: "5:55" },
  { title: "Tidal Drift", artist: "Echoes of the Sea", duration: "8:02" },
  { title: "Fading Shadows", artist: "The Emberlight", duration: "3:01" },
  { title: "Cosmic Drift", artist: "Solar Flare", duration: "5:01" },
  { title: "Urban Serenade", artist: "Midnight Groove", duration: "4:54" },
  { title: "Whispers in the Wind", artist: "Rust & Ruin", duration: "6:13" },
  { title: "Electric Fever", artist: "Neon Jungle", duration: "8:41" },
  { title: "Edge of the Abyss", artist: "Steel Horizon", duration: "2:27" },
  { title: "Golden Haze", artist: "Velvet Waves", duration: "3:15" },
  { title: "Shatter the Silence", artist: "Thunderclap Echo", duration: "8:22" },
];

const Playlist = () => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-black text-xl font-bold mb-4">Playlist</h2>
      <ul className="space-y-4">
        {playlistData.map((item, index) => (
          <li key={index} className="flex justify-between">
            <div>
              <h3 className="text-black font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.artist}</p>
            </div>
            <span className="text-gray-600">{item.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
