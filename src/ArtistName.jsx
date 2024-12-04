import React from 'react';
import './ArtistName.css';

const ArtistName = ({ artist, isLast }) => {
    return (
        <>
            <a href={artist.external_urls.spotify} className="artist-name" target="_blank" rel="noopener noreferrer">
                {artist.name}
            </a>
            {!isLast && ', '}
        </>
    );
};

export default ArtistName;

