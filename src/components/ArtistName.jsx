import React from 'react';

const ArtistName = ({ artists }) => {
  return (
    <div className="artists">
      {artists.map((artist) => (
        <div className="artist" key={artist.id || artist.name}>
          {artist.external_urls && artist.external_urls.spotify ? (
            <a
              href={artist.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="artist-link"
            >
              {artist.name}
            </a>
          ) : (
            <div>
              <p>{artist.name}</p>
              <p>Spotify URL not available</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ArtistName;



