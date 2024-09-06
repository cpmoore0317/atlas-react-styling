import React from 'react';

const CoverArt = ({ imageUrl, altText }) => {
  return (
    <div className="w-48 h-48">
      <img
        src={imageUrl}
        alt={altText}
        className="object-cover w-full h-full rounded-md"
      />
    </div>
  );
};

export default CoverArt;
