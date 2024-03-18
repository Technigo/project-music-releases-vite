import PropTypes from "prop-types";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";

export const Album = ({ artistName, albumName, coverImage, artistUrl, albumUrl }) => {
  return (
    <div className="album">
      <CoverImage coverImage={coverImage} />
      <ArtistName artistName={artistName} artistUrl={artistUrl} />
      <AlbumName albumName={albumName} albumUrl={albumUrl} />
    </div>
  );
};

Album.propTypes = {
  artistName: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  artistUrl: PropTypes.string.isRequired,
  albumUrl: PropTypes.string.isRequired
};

