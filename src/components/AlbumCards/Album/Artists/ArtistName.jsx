import PropTypes from "prop-types";

// Functional component that destructures the prop artist, and sets it as the text of the link tag and using, the href is also being passed in.
export const ArtistName = ({ artist }) => (
    <a href={artist.external_urls.spotify}>{artist.name}</a> 
  );

// Defining propTypes for the Artist component.
ArtistName.propTypes = {
    artist: PropTypes.shape({
        name: PropTypes.string.isRequired,
        external_urls: PropTypes.shape({
            spotify: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};