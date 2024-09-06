import React from 'react';

const SongTitle = ({ title, author }) => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm text-gray-500">{author}</p>
    </div>
  );
};

export default SongTitle;
