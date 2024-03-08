import React from 'react';
import AlbumName from './AlbumName';
import CoverImage from './CoverImage';
import DotsIcon from './assets/icons/dots.svg';
import HeartIcon from './assets/icons/heart.svg';
import PlayIcon from './assets/icons/play.svg';

const Album = ({ albumData }) => {
    // Skapar en länk för varje artist
    const artistLinks = albumData.artists.map((artist, index) => (
        <React.Fragment key={artist.id}>
            <a href={artist.external_urls.spotify} className="artist-name">
                {artist.name}
            </a>
            {/* Lägger till kommatecken mellan artistnamnen, men inte efter sista namnet */}
            {index < albumData.artists.length - 1 ? ', ' : ''}
        </React.Fragment>
    ));

    return (
      <div className="music-card">
        <CoverImage coverUrl={albumData.images[0].url} />
        <div className="overlay">
          <div className="buttons">
            <img src={HeartIcon} className="favorite-button" alt="Favorite" />
            <img src={PlayIcon} className="play-button" alt="Play" />
            <img src={DotsIcon} className="more-button" alt="More options" />
          </div>
        </div>
        <AlbumName title={albumData.name} externalUrl={albumData.external_urls.spotify} />
        {/* Renderar artistlänkarna här */}
        <div className="artist-names">
            {artistLinks}
        </div>
      </div>
    );
};

export default Album;
