import React from 'react';
import AlbumName from './AlbumName';
import ArtistName from './ArtistName';
import CoverImage from './CoverImage';
import Header from './Header';

const Album = ({ albumName, artistNames, coverImages, externalUrls }) => {
  return (
    <div className="album">
      <CoverImage images={coverImages} />
      <Header albumName={albumName} />
      <div className="artists">
        <ArtistName artistData={{ name: artistNames, external_urls: externalUrls.artist }} />
      </div>
      <AlbumName albumName={albumName} />
      <a
        href={externalUrls.spotify}
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






