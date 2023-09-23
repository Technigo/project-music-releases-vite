import React from 'react';
import { ArtistNameSeparator } from './ArtistNameSeparator';

export const ArtistName = ({ artists, albumURL }) => {
    return (
        <div className="ArtistName">
        {artists.map((artist, index) => ( //map method to iterate over the 'artists' array and render artist names.
            <div key={artist.id}>
                <p className="artist-name">
                    <a href={artist.external_urls.spotify} target="_blank" rel="noopener norefferer">
                        {artist.name}
                    </a>
                    {index < artists.length - 1 && <ArtistNameSeparator />}
                    </p>
                    </div>
        ))}
        </div>
    );
}
export default ArtistName;
      