import PropTypes from "prop-types";
import { AlbumName } from "./AlbumName";
import { CoverImage } from "./CoverImage";
import { ArtistName } from "./ArtistName";
import "./Album.css";

export const Album = ({ albumName, image, artists, url }) => {
  return (
    <div className="album">
      <CoverImage image={image} />
      <AlbumName albumName={albumName} url={url}/>
      <ArtistName artists={artists} />
    </div>
  );
};

Album.propTypes = {
  albumName: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  url: PropTypes.string.isRequired
};
