import React from 'react';
import './styling/albums.css';  
import PlayOverlay from './PlayOverlay';  
import ArtistName from './ArtistName';
import Fallback from '../assets/icons/undefined.png';

const Album = ({ album }) => {
  return (
    <div className="album">
      <div className="album-cover">
      <img src={album.images.length > 0 ? album.images[0].url : Fallback} alt={album.name} className="cover-image" /> {/* When you pick out an element (e.g. the first) from an array, it's important to know for sure that the element exists. Otherwise the code can crash. If there could be albums without images, this could be a problem. What could be done is first check the length of the array, and then decide what is wanted if the array is empty. In the function I have a fallback image.*/}
        <PlayOverlay />  
      </div>
      <a href={album.external_urls.spotify} target="_blank" className="album-name">
        {album.name}
      </a>
      <ArtistName artists={album.artists} />
    </div>
  );
};

export default Album;
