import PropTypes from 'prop-types';
import { HoverOverlay } from './HoverOverlay';
import { ArtistLinks } from './ArtistLinks';

export const AlbumCard = ({ album }) => {
  return (
    <article className="album-card">
      <div className="album-cover-container">
        <img
          src={album.images[1]?.url}
          alt={`${album.name} cover`}
          className="album-cover"
        />
        <HoverOverlay />
      </div>
      <a
        href={album.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="album-title"
      >
        {album.name}
      </a>
      <p className="artist-names">
        <ArtistLinks artists={album.artists} />
      </p>
    </article>
  );
};

// PropTypes validation
AlbumCard.propTypes = {
  album: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      })
    ),
    name: PropTypes.string.isRequired,
    external_urls: PropTypes.shape({
      spotify: PropTypes.string.isRequired,
    }).isRequired,
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        external_urls: PropTypes.shape({
          spotify: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
};
