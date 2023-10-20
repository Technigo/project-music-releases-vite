import { PropTypes } from "prop-types";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";

export const Album = ({ album }) => {
  // TODO: remove this later on
  // console.log(album);

  return (
    <div className="album-container">
      {
        // CoverImage component here
        <div>
          <AlbumName albumName={album.name} uri={album.uri} />

          <ArtistName artists={album.artists} />
        </div>
      }
    </div>
  );
};

Album.propTypes = {
  album: PropTypes.object.isRequired,
};
