import PropTypes from "prop-types";

export const ArtistName = ({ artistName, artistURL }) => {
  return (
    <div className="artist-name">
      <a href={artistURL} target="_blank" rel="noopener noreferrer">
        {artistName}
      </a>
    </div>
  );
};

ArtistName.propTypes = {
  artistName: PropTypes.string.isRequired,
  artistURL: PropTypes.any.isRequired,
};
