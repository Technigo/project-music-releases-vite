import React from 'react';

const ArtistName = ({ name, externalUrls }) => {
  // Check if externalUrls is defined
  if (!externalUrls || !externalUrls.spotify) {
    // Handle the case where Spotify URL is not available
    return (
      <div className="artist">
        <p>{name}</p>
        <p>Spotify URL not available</p>
      </div>
    );
  }

  return (
    <div className="artist">
      <a
        href={externalUrls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="artist-link"
      >
        {name}
      </a>
    </div>
  );
};

export default ArtistName;
