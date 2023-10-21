import { PropTypes } from "prop-types";
import { CoverImage } from './CoverImage';

export const Album = ({ album }) => {
  // TODO: remove this later on
  console.log(album);

  return (
    <div className="album-container">
      <CoverImage img={album.images[1].url} alt={album.name} />
      {/* 
        // AlbumName component here
        // ArtistName component here
      */}
    </div>
  );
};

Album.propTypes = {
  album: PropTypes.object.isRequired,
};
