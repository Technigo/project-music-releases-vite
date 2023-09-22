import PropTypes from 'prop-types';
import IconHeart from './assets/icons/heart.svg';
import IconPlay from './assets/icons/play.svg';
import IconDots from './assets/icons/dots.svg';
import AlbumName from './AlbumName';
import './index.css';

function AlbumCard(props) {
  const { album } = props;
  const { images, external_urls, name, artists } = album;
  const coverImage = images[0]?.url;
  const albumUrl = external_urls.spotify;

  return (
    <div className="album-card">
      <div className="cover-image-wrapper">
        <div className="cover-image">
          <img src={coverImage} alt="Album Cover" />
        </div>
        <div className="overlay">
          <div className="overlay-buttons-container">
            <img src={IconHeart} className="custom-button" alt="Heart Icon" />
            <img src={IconPlay} className="custom-button" alt="Play Icon" />
            <img src={IconDots} className="custom-button" alt="Dots Icon" />
          </div>
        </div>
      </div>

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
}

// AlbumCard.propTypes = {
//   album: PropTypes.shape({
//     images: PropTypes.array.isRequired,
//     external_urls: PropTypes.shape({
//       spotify: PropTypes.string.isRequired,
//     }).isRequired,
//     name: PropTypes.string.isRequired,
//     artists: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         external_urls: PropTypes.shape({
//           spotify: PropTypes.string.isRequired,
//         }).isRequired,
//         name: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//   }).isRequired,
// };

export default AlbumCard;