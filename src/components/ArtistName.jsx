import React from 'react';

const ArtistName = ({ artistData }) => {
  const { name, external_urls } = artistData;

  // Check if external_urls is defined
  if (!external_urls || !external_urls.spotify) {
    // Handle the case where spotify URL is not available
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
        href={external_urls.spotify}
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

