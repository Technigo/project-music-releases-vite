// Album component which is rendered using .map() and which you pass the album data into using props.

// Imports the necessary information from the other files
//Put in {  } and remove export default on the other files? And write export const...
//??
import { AlbumName } from './AlbumName/AlbumName.jsx';
import { ArtistNames } from './ArtistName/ArtistName.jsx';
import { CoverImage } from './CoverImage/CoverImage.jsx';

//HUR IMPORTERAR MAN????
import "./Album.css"
//Semikolon eller ej? '' eller ""??

// This component takes a prop called 'albumsArray', which is expected to be an array of album objects. It then detructures 'albumsArray' from the props object and maps over the array. Then it renders each album's information, creating a list of album cards including the album cover, name, and artists.
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