import React from "react";
import './ArtistName.css';

export const ArtistName = ({ artist, index, totalArtists }) => {
    let separator = "";


    if (index < totalArtists - 1) {
        separator = " & ";
    }

    return (
        <span>
            <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="artist-name">
                {artist.name}
            </a>
            {separator}
        </span>
    );
};