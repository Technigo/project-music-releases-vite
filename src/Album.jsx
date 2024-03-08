import { ArtistName } from "./ArtistName";
import { AlbumName } from "./AlbumName";
import { CoverImage } from "./CoverImage";
//Component (function in react). Working with bigger amounts of code, you need to work in diffrent files (components).
export const Album = (props) => {
  return (
    <div>
    <CoverImage album={props.album} />  
      {/* The a element: the props is the album, we are getting the album out of the object, to get to urls. */}
      <AlbumName album={props.album} />

      {/* Here we are rendering one album at a time, to get the array of all the artists. Its the same thing as book of books, that I did in the library project.  */}
      {props.album.artists.map((artist) => (
        // This is the component that gives back the information about the artists/prints the artist name.
        // Add another key, because console said to do so.
        <ArtistName artist={artist} key={artist.id} />
      ))}
    </div>
  );
};
