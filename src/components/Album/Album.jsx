// Album component which is rendered using .map() and which you pass the album data into using props.

//export const Album = ({ albums }) => {
  //  return (
    //    <div ClassName="Album-info">
      //      {data.albums.map(albums => {
        //        return (
          //          <div key={items.artists.id}>
            //            <Cover Image={items.images} />
              //          <Album name={items.name} />
                //        <Artist name={items.artists.name} />
                  //  </div>
               // )
            //})
            //}
        //</div>;
    //)
//} 



//??
import PropTypes from 'prop-types';
import AlbumName from './AlbumName/AlbumName';
import ArtistNames from './ArtistName/ArtistName';
import CoverImage from './CoverImage/CoverImage';

import "./Album.css"
//Semikolon eller ej?
//Ta bort paranteser runt albumsArray precis nedanför?
export const Album = ({ albumsArray }) => {
    console.log( albumsArray)
  return (
    <section className="album-container">
         {albumsArray.map((mappedOutItem) => (
             <div className="album-card" key={mappedOutItem.id}>
                <CoverImage coverImage={mappedOutItem.images[0].url} />
                <AlbumName albumName={mappedOutItem.name} />
                <ArtistNames artistsArray={mappedOutItem.artists} />
             </div>
        ))};
    </section>
  );
};

Album.propTypes = {
    albumsArray: PropTypes.array.isRequired
  }