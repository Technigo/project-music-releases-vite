import PropTypes from "prop-types";
import { AlbumName } from "./AlbumName.jsx";
import { ArtistName } from "./ArtistName.jsx";
import { CoverImage } from "./CoverImage.jsx";

export const Album = ({ name, albumUrl, artists, image }) => {
  return (
    <div className="album">
      <CoverImage image={image} />
      <AlbumName name={name} albumUrl={albumUrl} />
      <ArtistName artists={artists} />
    </div>
  );
};


Album.propTypes = {
  name: PropTypes.string.isRequired,
  albumUrl: PropTypes.string.isRequired,
  artists: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
};