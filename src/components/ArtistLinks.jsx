import React from 'react';
import PropTypes from 'prop-types';

export const ArtistLinks = ({ artists }) => {
  return artists.map((artist, index) => (
    <React.Fragment key={artist.id}>
      <a
        href={artist.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="artist-link"
      >
        {artist.name}
      </a>
      {index < artists.length - 2
        ? ", "
        : index === artists.length - 2
        ? " & "
        : ""}
    </React.Fragment>
  ));
};

// PropTypes validation
ArtistLinks.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      external_urls: PropTypes.shape({
        spotify: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};
