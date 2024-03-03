import React from "react";

export const ArtistName = (artists, index) => {
  const allArtists = artists.artists.length;

  return (
    <>
      {artists.artists && (
        <>
          {artists.artists.map((artist, index) => (
            // Using React.Fragment so I don´t need to add additional DOM element
            <React.Fragment key={index}>
              {allArtists > 1 && allArtists < 3 && index !== 0 && (
                <span className="separator"> & </span>
              )}
              {allArtists > 2 && index !== 0 && (
                <span className="separator">,</span>
              )}

              <a
                className="artist-name"
                target="_blank"
                rel="noopener noreferrer" // Important for security when using target="_blank"
                href={artist.external_urls.spotify}
              >
                {artist.name}
              </a>
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
};
