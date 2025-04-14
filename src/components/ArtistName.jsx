// – Renders each artist's name and links to their external URL.
// The ArtistName component renders the names of all artists associated with the album.
// It maps over the album's `artists` array and generates a list of clickable artist names.
import React from "react";

export const ArtistName = ({ album }) => {
  return (
    <p className="artist-name">
      {/* Map over the `artists` array and display each artist's name with a link to their Spotify page */}
      {album.artists.map((artist, index) => (
        // React.Fragment is used here to avoid adding extra DOM elements (like <div>s)
        // It is a wrapper component without any impact on the output DOM structure.
        <React.Fragment key={artist.id}>
          {/* If it's not the first artist, display a comma to separate the names */}
          {index > 0 && ", "}
          {/* Link to the artist's Spotify profile */}
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            {artist.name}
          </a>
        </React.Fragment>
      ))}
    </p>
  );
};
