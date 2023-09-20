// Importing PropTypes to get rid of error saying props missing in validation.
import PropTypes from "prop-types";

export const AlbumName = ({ name }) => {
    // Functional component that destructures the prop album, and sets it as the text of the h2 tag representing the album title.
    return (
        <p className="album-title">{name}</p>
      )
}

// Defining propTypes for this component, to get rid of error saying props is missing in validation.
AlbumName.propTypes = {
  name: PropTypes.string.isRequired,
};