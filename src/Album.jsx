import { ArtistName } from "./ArtistName";
//Component (function in react). Working with bigger amounts of code, you need to work in diffrent files (components).
export const Album = (props) => {
  return (
    <div>
      <img src={props.album.images[0].url} alt={props.album.name} />
      {/* The a element: the props is the album, we are getting the album out of the object, to get to urls. */}
      <a href={props.album.external_urls.spotify}>
        {/* And this line is to make the link as the text of the album. */}
        {props.album.name}
      </a>

      {/* Here we are rendering on album at a time, to get the array of all the artists. Its the same thing as book of books, that I did in the library project.  */}
      {props.album.artists.map((artist) => (
        // This is the component that gives back the information about the artists.
        <ArtistName artist={artist} />
      ))}
    </div>
  );
};
