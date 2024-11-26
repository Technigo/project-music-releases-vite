import PropTypes from "prop-types";

// Album Name
export const AlbumName = ({ name, albumUrl }) => {
  return (
    <div>
      <a
        href={albumUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="album-name-a">
        <h2 className="album-name">{name}</h2>
      </a>
    </div>
  )
}

// Define PropTypes for AlbumName
AlbumName.propTypes = {
  name: PropTypes.string.isRequired,
  albumUrl: PropTypes.string.isRequired
};