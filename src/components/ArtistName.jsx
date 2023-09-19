import React from 'react';

const ArtistName = ({ name, externalUrl }) => {
  // Check if externalUrl is defined
  if (!externalUrl) {
    // Handle the case where the external URL is not available
    return (
      <div className="artist">
        <p>{name}</p>
        <p>External URL not available</p>
      </div>
    );
  }

  return (
    <div className="artist">
      <a
        href={externalUrl}
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
