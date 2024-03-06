import PropTypes from "prop-types"
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";


export const Album = ({albumName, coverImg, artists}) => {
    return (
        <div className="album-card">
            <div className="album-container">
                <CoverImage coverImg={coverImg}/>
                <AlbumName albumName={albumName} />
                <ArtistName artists={artists}/>
            </div>
        </div>
    )
}

//Define proptypes
Album.propTypes = {
    albumName: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.string).isRequired
};