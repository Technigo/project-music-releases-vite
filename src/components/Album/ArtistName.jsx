import React from "react";
import PropTypes from "prop-types";

export const ArtistName = ({ artists }) => {
  const allArtists = artists.length;

  // This arrow function uses React Fragment to avoid using empty tags.
  // It loops through the artists array and adds separators between names based on certain conditions.

  // If there is more than one artist and less than three, and the current index is not the first,
  // the & symbol is added between the names.

  // If there are more than two artists and the current index is not the first,
  // a comma is used as a separator between names.
  const renderArtistName = artists.map((artist, i) => (
    <React.Fragment key={i}>
      {allArtists > 1 && allArtists < 3 && i !== 0 && (
        <span className="separator"> &amp; </span>
      )}
      {allArtists > 2 && i !== 0 && <span className="separator">,</span>}

      <a
        className="artist-name"
        target="_blank"
        rel="noopener noreferrer" // Important for security when using target="_blank"
        href={artist.external_urls.spotify}
      >
        {artist.name}
      </a>
    </React.Fragment>
  ));

  // Render all artist names
  return <>{artists && <>{renderArtistName}</>}</>;
};

// Expected data type.
ArtistName.propTypes = {
  artists: PropTypes.array.isRequired,
};
