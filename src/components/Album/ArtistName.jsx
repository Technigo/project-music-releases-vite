// Importing PropTypes to get rid of error saying props missing in validation.
import PropTypes from "prop-types";

export const ArtistName = ({ artists }) => {
    // Functional component that destructures the prop artist, and sets it as the text of the h3 tag representing the artist name.
    return (
        <>
            {artists.map((artist, index) => ( // Passing in the index here to check for inside the map
                <p className="artist-name" key={artist.id}>{ (index ? ', ': '') + artist.name }</p> // If index exists it will return comma+space, if it doesn't exist then Index is 0, and "nothing" is returned
            ))}
        </>
    );
}

//map((item, index) => ({ (index ? ', ': '') + item }))

// Defining propTypes for this component, to get rid of error saying props is missing in validation.
ArtistName.propTypes = {
    artists: PropTypes.string.isRequired,
  };