import React from 'react';
import AlbumName from './AlbumName';
import ArtistName from './ArtistName';
import CoverImage from './CoverImage';
import '../index.css';

const Album = ({ albumName, artistNames, coverImages, externalUrls }) => {
    return (
        <div className="album">
            <CoverImage images={coverImages} />
            <AlbumName albumName={albumName} externalUrl={externalUrls.spotify} />
            <div className="artists">
                <ArtistName name={artistNames} externalUrl={externalUrls.artist} />
            </div>
            {/* Apply the ellipsis class to the ellipsis pseudo-element */}
            <div className="ellipsis">...</div>
            <a
                href={externalUrls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="album-link"
            >
            </a>
        </div>
    );
};

export default Album;