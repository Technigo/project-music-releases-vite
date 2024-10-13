import React from "react";

const ArtistName = ({ artist }) => {
  return (
    <span className="artist">
      <a href={artist.external_urls.spotify} target="_blank" rel="noreferrer">
        {artist.name}
      </a>
    </span>
  );
};

export default ArtistName;
