import PropTypes from "prop-types";

export const AlbumName = ({ name, external_urls }) => {
  return (
    <div className="album-name">
      <a href={external_urls.spotify}>{name}</a>
    </div>
  );
};

AlbumName.propTypes = {
  name: PropTypes.string.isRequired,
  external_urls: PropTypes.object.isRequired,
};
