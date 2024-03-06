import { ArtistName } from "./ArtistName";
//Component (function in react). Working with bigger amounts of code, you need to work in diffrent files (components).
export const Album = (props) => {
  return (
    <div>
      <p>{props.album.name}</p>
      <img src={props.album.images[0].url} alt={props.album.name} />
      {/* Here we are rendering on album at a time, to get the array of all the artists. Its the same thing as book of books, that I did in the library project.  */}
      {props.album.artists.map((artist) => (
        // This is the component that gives back the information about the artists. 
        <ArtistName artist={artist} />
      ))}
    </div>
  );
};
