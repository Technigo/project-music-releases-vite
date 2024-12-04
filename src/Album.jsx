import React from 'react';
import ArtistName from './ArtistName.jsx';
import './Album.css';

const Album = ({ album }) => {
    return (
        <div className="album-container">
            <div className="album-cover">
                <img src={album.images[0].url} alt={album.name} />
                <div className="album-hover">
                    <button className="play-button">
                        <img src="/assets/icons/play-icon.svg" alt="Play" />
                    </button>
                    <button className="heart-button">
                        <img src="/assets/icons/heart-icon.svg" alt="Favorite" />
                    </button>
                    <button className="ellipsis-button">
                        <img src="/assets/icons/ellipsis-icon.svg" alt="More" />
                    </button>
                </div>
            </div>
            <div className="album-info">
                <a href={album.external_urls.spotify} className="album-title" target="_blank" rel="noopener noreferrer">
                    {album.name}
                </a>
                <div className="artist-names">
                    {album.artists.map((artist, index) => (
                        <ArtistName key={artist.id} artist={artist} isLast={index === album.artists.length - 1} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Album;