
//import PropTypes from "prop-types"
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage"
import { AlbumName } from "./AlbumName"
//import "./Album.css";

export const Album = ({ albumName, imgSrc, albumUrl, artistName }) => {
  return (
    <div className="album-container">
      <div className="album">
        <CoverImage imgSrc={imgSrc} alt={albumName} />
        <AlbumName albumUrl={albumUrl} albumName={albumName} />
        <ArtistName artistName={artistName} />
      </div>
    </div>
  );
};


/*Album.propTypes = {
  data: PropTypes.shape({
    albumName: PropTypes.string.isRequired,
    imgSrc: PropTypes.array.isRequired,
    artists: PropTypes.string.isRequired,
    albumUrl: PropTypes.string.isRequired
  }).isRequired, 
};*/

export default Album;
