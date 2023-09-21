//The Album component to show the artist name and a link.
import PropTypes from 'prop-types';
import AlbumName from './AlbumName/AlbumName';
import ArtistNames from './ArtistName/ArtistName';
import CoverImage from './CoverImage/CoverImage';

import "./Album.css";

export const Album = ({albumsArray}) => {
    //console.log( albumsArray)
  return (
    <section className="album-container">
         {albumsArray.map((mappedOutItem) => (
             <div className="album-card" key={mappedOutItem.id}>
                <CoverImage coverImage = {mappedOutItem.images[0].url} />
                <AlbumName albumName = {mappedOutItem.name} />
                <ArtistNames artistsArray = {mappedOutItem.artists} />
             </div>
        ))}
    </section>
  )
};

Album.propTypes = {
    albumsArray: PropTypes.array.isRequired
  }