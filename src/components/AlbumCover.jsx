import PropTypes from 'prop-types';
import { AlbumCoverButtons } from "./AlbumCoverButtons";
import "../index.css";

export const AlbumCover = (props) => {
  return (
    <div className="album-cover-box">
      <figure className="album-cover">
        <img src={props.albumcard.images[0].url} alt={props.albumcard.name} />
      </figure>
      <AlbumCoverButtons />
    </div>
  );
};

AlbumCover.propTypes = {
  albumcard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  }).isRequired
};
