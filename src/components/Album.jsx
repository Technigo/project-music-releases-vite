import PropTypes from 'prop-types';
import { ArtistName } from './ArtistName';
import { CoverImage } from './CoverImage';
import { AlbumName } from './AlbumName';

export const Album = ({ album }) => {
  return (
    <div className="album-card">
      <CoverImage imageUrl={album.images[0].url} />
      <div className="album-info">
        <AlbumName name={album.name} url={album.external_urls.spotify} />
        <div className="artist-names">
          {album.artists.map((artist, index) => (
            <ArtistName
              key={artist.id}
              name={artist.name}
              url={artist.external_urls.spotify}
              isLast={index === album.artists.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Album.propTypes = {
  album: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    external_urls: PropTypes.shape({
      spotify: PropTypes.string.isRequired,
    }).isRequired,
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        external_urls: PropTypes.shape({
          spotify: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

