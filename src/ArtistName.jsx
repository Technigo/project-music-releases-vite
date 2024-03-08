/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ArtistName = ({ name, externalUrl }) => {
  return (
    <p className="artist-name"> style={{ color: 'white', }}
      <a href={externalUrl} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </p>
  );
};

export default ArtistName;
