import PropTypes from 'prop-types';

import "../index.css"

export const ArtistName = (props) => {
  return (
    <div className="artist-name">
      {props.albumcard.artists.map((artist, index) => {
        const isLastArtist = index === props.albumcard.artists.length - 1;
        const isSecondLastArtist = index === props.albumcard.artists.length - 2;

        return (
          <span key={artist.id}>
            <a
              href={artist.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer">
              {artist.name}
            </a>
            {!isLastArtist && (isSecondLastArtist ? ' & ' : ', ')}
          </span>
        );
      })}
    </div>
  );
};

// PropTypes validation
ArtistName.propTypes = {
  albumcard: PropTypes.shape({
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        external_urls: PropTypes.shape({
          spotify: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    ).isRequired
  }).isRequired
};
