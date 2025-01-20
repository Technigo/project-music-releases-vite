import React from 'react';
import data from '../data.json';
import './MusicGallery.css';
import dotsIcon from '../assets/icons/dots.svg'
import heartIcon from '../assets/icons/heart.svg'
import playIcon from '../assets/icons/play.svg'


console.log(data);

const MusicGallery = ({ albums }) => {


    return (
        <>
        <div className="album-grid-container">
          { albums.map((album) => (
            <div key={album.id} className="album-card">
                <div className="album-cover-hover">
                    <img src={album.images?.[0]?.url} alt={album.name} className="album-image" />
                    <div className="album-cover-icons">
                        <img src={heartIcon} width="30" alt="Icon - Like album" />
                        <img src={playIcon} className="play-icon" width="60" alt="Icon - Play album" />
                        <img src={dotsIcon} width="30" alt="Icon - Other" />
                    </div>
                </div>
                <p className="album-name-container">
                    <a className="album-name" href={album.external_urls.spotify} target='_blank'>{album.name}</a>
                </p>
                <div>
                    <p className="album-artist">
                        {album.artists.map((artist, index) => 
                        <a 
                        key={artist.id}
                        href={artist.external_urls.spotify} 
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            {artist.name}
                            {index < album.artists.length - 1 && ", "}
                        </a>
                        )}
                    </p>
                </div>
            </div>
          ))}
        </div>
        </>
    );
};

export default MusicGallery