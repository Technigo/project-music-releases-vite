import React from 'react';

const AlbumName = ({ albumName, albumExternalUrl }) => {
  return (
    <a href={albumExternalUrl} target="_blank" rel="noopener noreferrer">
      <div className="album-name">
        <h2>{albumName}</h2>
      </div>
    </a>
  );
};

export default AlbumName;