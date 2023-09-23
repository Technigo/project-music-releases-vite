import PropTypes from 'prop-types';
import AlbumName from './AlbumName';

import CoverImage from './CoverImage'; // Import the new component
import './albumcard.css';

const AlbumCard = (props) => {
  const { album } = props;
  const { images, external_urls, name, artists } = album;
  const coverImage = images[0]?.url;
  const albumUrl = external_urls.spotify;

  return (
    <div className="album-card">
      <CoverImage coverImage={coverImage} /> {/* Use the new component here */}
      
      <div className="album-name">
        <a href={albumUrl} target="_blank" rel="noopener noreferrer">
          <AlbumName albumName={name} />
        </a>
      </div>

      <div className="artist-name">
        {artists.map((artist, index) => (
          <span key={artist.id}>
            {index > 0 && ', '}
            <a
              href={artist.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              {artist.name}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};

AlbumCard.propTypes = {
  album: PropTypes.shape({
    images: PropTypes.array.isRequired,
    external_urls: PropTypes.shape({
      spotify: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        external_urls: PropTypes.shape({
          spotify: PropTypes.string.isRequired,
        }).isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default AlbumCard;
