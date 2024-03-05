import PropTypes from "prop-types";

export const AlbumName = ({ name }) => {
    return (
      <div className="album-name">
        <p>{name}</p>
      </div>
    );
};

AlbumName.propTypes = {
  name: PropTypes.string.isRequired,
}
