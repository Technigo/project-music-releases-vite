// src/components/Artistame.jsx

import React from 'react';

export const ArtistName = ({ album }) => {
    return (
        <p>
            {/* Map to iterate over each artist in the album's artists array */}
            {album.artists.map((artist, index) => (
                <React.Fragment key={artist.id}>

                    {/* If this isn't the first artist, add a comma and space before the name */}
                    {index > 0 && ", "}

                    {/* Create a link to the artist's Spotify page */}
                    <a href={artist.external_urls.spotify} 

                        // target="_blank" opens the link in a new tab or window
                        target="_blank">

                        {/* This displays the artist name */}
                        {artist.name}
                    </a>
                </React.Fragment>
            ))}
        </p>
    );
}

