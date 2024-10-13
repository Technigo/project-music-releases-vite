// Display the album cover iamge and link to the album's external URL

import Heart from '../assets/icons/heart.svg';
import Play from '../assets/icons/play.svg';
import Dots from '../assets/icons/dots.svg';

import './AlbumImage.css';

export const AlbumImage = ({ album }) => {
  const albumUrl = album.external_urls.spotify;
  return (
    <div className="album-image-container">
      <img
        src={album.images[1].url}
        alt={`${album.name} cover`} className="album-cover"
      />

      <div className="overlay">
        <img className="icon favorite-icon" src={Heart} alt="Favorite" />

        <a
          href={albumUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Listen to ${album.name} on Spotify`}>
          <img className="icon play-icon" src={Play} alt="Play button (opens in new tab)" />
        </a>
        <img className="icon ellipsis-icon" src={Dots} alt="More options" />
      </div>
    </div>
  );
};

export default AlbumImage;