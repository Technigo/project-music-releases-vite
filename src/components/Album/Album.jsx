import "./album.css";
import { AlbumName } from "./AlbumName.jsx";
import { ArtistName } from "./ArtistName.jsx";
import { CoverImage } from "./CoverImage.jsx";
// Importing PropTypes to get rid of error saying props missing in validation.
import PropTypes from "prop-types";

// Functional component that destructures image, name and artist to the component props image, album and artist.
export const Album = ({ fullAlbum }) => {
    const { images, name, artists, external_urls } = fullAlbum;
    console.log(fullAlbum);

    return (
        <div className="card-content">
            <CoverImage image={images[0]} />
            <div className="names">
                <AlbumName name={name} albumUrl={external_urls} /> 
                    <span className="artist-name">
                        <ArtistName artists={artists} />
                    </span>
            </div>
        </div>
    );
}

// Defining propTypes for this component, to get rid of error saying props is missing in validation.
Album.propTypes = {
    fullAlbum: PropTypes.shape({
        images: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        artists: PropTypes.array.isRequired,
        external_urls: PropTypes.object.isRequired,
    }).isRequired,
};