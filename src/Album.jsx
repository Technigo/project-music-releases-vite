import React from "react";
import ArtistName from "./ArtistName";  // Import ArtistName component
import "./index.css"; 

const Album = ({ album }) => {

  // Function to format the artist names based on the number of artists
  const formatArtistNames = (artists) => {
    if (artists.length === 2) {
      // If there are only 2 artists, return them with "&"
      return (
        <>
          <ArtistName artist={artists[0]} /> 
          <span className="separator"> & </span>
          <ArtistName artist={artists[1]} />
        </>
      );
    } else if (artists.length > 2) {
      // If more than 2, return all but the last two with commas, and the last two with "&"
      return (
        <>
          {artists.slice(0, -2).map((artist, index) => (
            <span key={artist.id}>
              <ArtistName artist={artist} /> 
              <span className="separator">, </span>
            </span>
          ))}
          <ArtistName artist={artists[artists.length - 2]} /> 
          <span className="separator"> & </span>
          <ArtistName artist={artists[artists.length - 1]} />
        </>
      );
    } else {
      // If there's only 1 artist, return just that artist
      return <ArtistName artist={artists[0]} />;
    }
  };

  return (
    <div className="album-card">
      {/* Album cover and controls */}
      <div className="image-container">
        <img className="album-image" src={album.images[1].url} alt={album.name} />

        {/* Controls - Play, Heart, Dots */}
        <div className="controls">
          <img className="heart-btn" src="/icons/heart.svg" alt="Favorite" />
          <img className="play-btn" src="/icons/play.svg" alt="Play" />
          <img className="dots-btn" src="/icons/dots.svg" alt="More options" />
        </div>
      </div>

      {/* Album name */}
      <h3>
        <a href={album.external_urls.spotify} target="_blank" rel="noreferrer">
          {album.name}
        </a>
      </h3>

      {/* Artists list with formatted commas and "&" */}
      <div className="artists">
        {formatArtistNames(album.artists)}
      </div>
    </div>
  );
};

export default Album;