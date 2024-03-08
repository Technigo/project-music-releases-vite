import PropTypes from "prop-types";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";

export const Album = ({ albumData }) => {
  return (
    <div className="album-container">
      <CoverImage
        imageUrl={albumData.images[0].url}
        externalUrl={albumData.external_urls.spotify}
      ></CoverImage>
      <AlbumName
        title={albumData.name}
        externalUrl={albumData.external_urls.spotify}
      ></AlbumName>
      <ArtistName artistList={albumData.artists}></ArtistName>
    </div>
  );
};

// Prop type validation
// For albumData
Album.propTypes = {
  albumData: PropTypes.object.isRequired,
};

// For CoverImage.jsx
CoverImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  externalUrl: PropTypes.string.isRequired,
};

// For AlbumName.jsx
AlbumName.propTypes = {
  title: PropTypes.string.isRequired,
  externalUrl: PropTypes.string.isRequired,
};

// For ArtistName.jsx
ArtistName.propTypes = {
  artistList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
