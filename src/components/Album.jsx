import { PropTypes } from "prop-types";

export const Album = ({ album }) => {
  // TODO: remove this later on
  console.log(album);

  return (
    <div className="album-container">
      {/* 
        // CoverImage component here
        // AlbumName component here
        // ArtistName component here
      */}
    </div>
  );
};

Album.propTypes = {
  album: PropTypes.object.isRequired,
};
