import React from 'react';

const PlayListItem = ({ title, genre, length }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{genre}</p>
      </div>
      <span className="text-sm text-gray-400">{length}</span>
    </div>
  );
};

export default PlayListItem;
