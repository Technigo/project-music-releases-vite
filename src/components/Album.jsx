import PropTypes from "prop-types";
import { AlbumName } from "./album-components/AlbumName";
import { ArtistName } from "./album-components/ArtistName";
import { CoverImage } from "./album-components/CoverImage";

export const Album = ({ name, artists, images }) => {
  return (
    <div className="album">
      <CoverImage images={images} />
      <AlbumName name={name} />
      <ArtistName artists={artists} />
    </div>
  );
};

Album.propTypes = {
  name: PropTypes.string.isRequired,
  artists: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
};
