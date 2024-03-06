import PropTypes from "prop-types";

export const AlbumName = ({ name }) => {
  return (
    <div>
      <span>
        {" "}
        Album name:
        {name}
      </span>
    </div>
  );
};

AlbumName.propTypes = {
  name: PropTypes.string.isRequired,
};

AlbumName.defaultProps = {
  name: "Name is missing",
};
