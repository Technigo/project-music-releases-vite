import PropTypes from 'prop-types';
import { AlbumCover } from "./AlbumCover";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";

import "../index.css"


export const AlbumCard = (props) => {
  return (
    <article className="album-card">
      <AlbumCover albumcard={props.albumcard} />
      <AlbumName albumcard={props.albumcard} />
      <ArtistName albumcard={props.albumcard} />
    </article>
  );
};

AlbumCard.propTypes = {
  albumcard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        external_urls: PropTypes.shape({
          spotify: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    ).isRequired
  }).isRequired
};
