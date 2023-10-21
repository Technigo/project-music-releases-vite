import { PropTypes } from "prop-types";
import { CoverImage } from './CoverImage';

export const Album = ({ album }) => {
  // TODO: remove this later on
  console.log(album);

  const image = album.images.find(image => image.height === 640)

  return (
    <div className="album-container">
      <CoverImage img={image.url} />
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
