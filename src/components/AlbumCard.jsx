import PropTypes from 'prop-types';
import AlbumName from './AlbumName';
import CoverImage from './CoverImage'; // Import the new component
import './albumcard.css';


// Define component AlbumCard
const AlbumCard = (props) => {
  const { album } = props;
    // Destructure properties from object
  const { images, external_urls, name, artists } = album;
    // Get URL of cover image
  const coverImage = images[0]?.url;
    // Get URL for album
  const albumUrl = external_urls.spotify;


  // Render AlbumCard component
  return (
    <div className="album-card">
      {/* Render CoverImage component, passing a prop */}
      <CoverImage coverImage={coverImage} />
      
      <div className="album-name">
        <a href={albumUrl} target="_blank" rel="noopener noreferrer">
          {/* Render AlbumName component, passing a prop */}
          <AlbumName albumName={name} />
        </a>
      </div>

      <div className="artist-name">
        {/* Map through array and render artist names with URLs */}
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

// Prop types for AlbumCard component
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
