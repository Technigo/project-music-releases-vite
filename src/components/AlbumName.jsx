import PropTypes from 'prop-types';

import "../index.css"

export const AlbumName = (props) => {
  return (
    <div className="album-name">
      <a
        href={props.albumcard.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer">
        {props.albumcard.name}
      </a>
    </div>
  );
};

// PropTypes validation
AlbumName.propTypes = {
  albumcard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    external_urls: PropTypes.shape({
      spotify: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
