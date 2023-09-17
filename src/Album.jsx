import React from 'react';
import AlbumName from './AlbumName';
import ArtistName from './ArtistName';
import CoverImage from './CoverImage';
import Header from './Header';
import './styles.css'; 

const Album = ({ albumData }) => {
  const { name, artists, images, external_urls } = albumData;

  return (
    <div className="album">
      <CoverImage images={images} />
      <Header albumName={name}/>
      <div className="artists">
        {artists.map((artist, index) => (
          <ArtistName key={index} artistData={artist} />
        ))}
      </div>
      <AlbumName albumName={name} />
      <a
        href={external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="album-link"
      >
        Listen on Spotify
      </a>
    </div>
  );
};

export default Album;