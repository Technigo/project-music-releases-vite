// Importing PropTypes to get rid of error saying props missing in validation.
import PropTypes from "prop-types";

export const AlbumName = ({ name, albumUrl }) => {
    // Functional component that destructures the prop album, and sets it as the text of the h2 tag representing the album title.
    return (
        <a className="album-title" href={albumUrl.spotify}>{name}</a>
      )
}

// Defining propTypes for this component, to get rid of error saying props is missing in validation.
AlbumName.propTypes = {
  name: PropTypes.string.isRequired,
  albumUrl: PropTypes.shape({
      spotify: PropTypes.string.isRequired,
      // Add other named URLs if needed
  }).isRequired,
};