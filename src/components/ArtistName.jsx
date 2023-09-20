// Importing PropTypes to get rid of error saying props missing in validation.
import PropTypes from "prop-types";

export const ArtistName = ({ artists }) => {
    // Functional component that destructures the prop artist, and sets it as the text of the h3 tag representing the artist name.
    return (
        <>
            {artists.map((artist) => (
                <div key={artist.id}>
                    <p className="artist-name">{artist.name}</p>
                </div>
            ))}
        </>
    );
}

// Defining propTypes for this component, to get rid of error saying props is missing in validation.
ArtistName.propTypes = {
    artists: PropTypes.string.isRequired,
  };