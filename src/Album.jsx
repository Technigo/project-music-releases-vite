/* eslint-disable react/prop-types */
// Album.jsx
import AlbumName from './AlbumName';
import ArtistName from './ArtistName';
import CoverImage from './CoverImage';
import DotsIcon from './assets/icons/dots.svg';
import HeartIcon from './assets/icons/heart.svg';
import PlayIcon from './assets/icons/play.svg';

// eslint-disable-next-line react/prop-types
const Album = ({ albumData }) => {
    const artistNames = albumData.artists.map(artist => artist.name).join(', ');

    return (
      <div className="music-card"> {}
        <CoverImage coverUrl={albumData.images[0].url} />
        <div className="overlay">
          <div className="buttons">
            <img src={PlayIcon} className="play-button" alt="Play" /> {}
            <img src={HeartIcon} className="favorite-button" alt="Favorite" /> {}
            <img src={DotsIcon} className="more-button" alt="More options" /> {}
          </div>
        </div>
        <AlbumName title={albumData.name} externalUrl={albumData.external_urls.spotify} />
        <ArtistName name={artistNames} externalUrl={albumData.artists[0].external_urls.spotify} />
      </div>
    );
};

export default Album;
