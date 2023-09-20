import { AlbumName } from "./AlbumName.jsx";
import { ArtistName } from "./ArtistName.jsx";
import { CoverImage } from "./CoverImage.jsx";
// Importing PropTypes to get rid of error saying props missing in validation.
import PropTypes from "prop-types";

// Functional component that destructures image, name and artist to the component props image, album and artist.
export const Album = ({ fullAlbum }) => {
    const { images, name, artists } = fullAlbum;

    return ( // I'm using the React fragment here to get rid of some of the divs from the HTML structure.
        <>
            <CoverImage image={images[0]} />
            <AlbumName name={name} /> 
            <ArtistName artists={artists}/>
        </>
    );
}

// Defining propTypes for this component, to get rid of error saying props is missing in validation.
Album.propTypes = {
    fullAlbum: PropTypes.shape({
        images: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        artists: PropTypes.array.isRequired,
    }).isRequired,
};