import PropTypes from "prop-types";

export const ArtistName = ({ artists }) => {
  const getArtist = artists.map(({ name }) => (name));
    return (
      <div className="artist-name">
        <p>{getArtist.join(", ")}</p>
      </div>
    );
};

ArtistName.propTypes = {
  artists: PropTypes.array.isRequired,
};
