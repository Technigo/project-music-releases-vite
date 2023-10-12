import React from 'react';

const ArtistName = ({ artists }) => {
  return (
    <div className="artists">
      {artists.map((artist, index) => (
        <div className="artist" key={index}>
          <a
            href={artist.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="artist-link"
          >
            {artist.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ArtistName;

