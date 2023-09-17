import React from 'react';

const ArtistName = ({ artistData }) => {
  const { name, external_urls } = artistData;

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