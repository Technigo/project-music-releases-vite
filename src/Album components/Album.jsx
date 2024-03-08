import PropTypes from "prop-types";
import { AlbumName } from "./AlbumName.jsx";
import { CoverImage } from "./CoverImage.jsx";
import { ArtistName } from "./ArtistName.jsx";
import "./Album.css";

export const Album = ({
  albumName,
  coverImage,
  artists,
  albumURL,
}) => {
  return (
    <div className="album-container">
      <div className="image-container">
        <CoverImage coverImage={coverImage} alt={albumName} albumURL={albumURL}/>
      </div>
      <div className="album-name">
        <AlbumName albumName={albumName} albumURL={albumURL} />
      </div>
      <div className="artist-name">
        <ArtistName artists={artists} />
      </div>
    </div>
  );
};

Album.propTypes = {
  albumName: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  artists: PropTypes.string.isRequired,
  albumURL: PropTypes.any.isRequired,

};
