import React from "react";

export const ArtistName = ({ artists }) => {
  return (
    <span>
      {artists.map((artist, index) => (
        <span key={index}>
          <a key={artist.id} href={artist.external_urls.spotify}>
            <span className="artist-name">
              {artist.name} {index === artists.length - 2 && " & "}
            </span>
          </a>
        </span>
      ))}
    </span>
  );
};
