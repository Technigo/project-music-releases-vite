import PropTypes from "prop-types";
import { AlbumName } from "./album-components/AlbumName";
import { ArtistName } from "./album-components/ArtistName";

export const Album = ({ name, artists }) => {
  return (
    <div className="album">
      <img src="" alt="" />
      <AlbumName name={name} />
      <ArtistName artists={artists} />
    </div>
  );
};

Album.propTypes = {
  name: PropTypes.string.isRequired,
  artists: PropTypes.array.isRequired,
};
