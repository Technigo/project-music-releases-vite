// Importing PropTypes to get rid of error saying props missing in validation.
import PropTypes from "prop-types";

export const ArtistName = ({ artists }) => {
    // Functional component that destructures the prop artist, and sets it as the text of the h3 tag representing the artist name.
    return (
        <>
            {artists.map((artist, index) => ( // Passing in the index here to check for inside the map
                <a href={artist.external_urls.spotify}  key={artist.id}>{ (index ? ', ': '') + artist.name }</a> // If index exists it will return comma+space, if it doesn't exist then Index is 0, and "nothing" is returned
            ))}
        </>
    );
}

// Defining propTypes for this component, to get rid of error saying props is missing in validation.
ArtistName.propTypes = {
    artists: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            external_urls: PropTypes.shape({
                spotify: PropTypes.string.isRequired,
            }).isRequired,
        })
    ).isRequired,
};