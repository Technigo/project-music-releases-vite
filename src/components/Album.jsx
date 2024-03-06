import PropTypes from "prop-types";
import { AlbumName } from "./album-components/AlbumName";
import { ArtistName } from "./album-components/ArtistName";
import { CoverImage } from "./album-components/CoverImage";

export const Album = ({ name, artists, images, external_urls }) => {
  return (
    <div className="album">
      <CoverImage images={images} />
      <AlbumName name={name} external_urls={external_urls} />
      <ArtistName artists={artists} />
    </div>
  );
};

Album.propTypes = {
  name: PropTypes.string.isRequired,
  artists: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
  external_urls: PropTypes.object.isRequired,
};
