/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ArtistName = ({ artists }) => {
    return (
        <div className="artist-list">
            {/* Map over the artists array and render each artist as plain text */}
            {artists.map((artist, index) => (
                <span key={artist.id}>
                    {/* Render the artist name as a link to their Spotify profile */}
                    <a className="artist-link" href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                        {artist.name}
                    </a>
                    {/* Add a comma separator between artist names, but not after the last one */}
                    {index < artists.length - 1 && ', '}
                </span>
            ))}
        </div>
    );
};

export default ArtistName;
