import "./Albums.css";
import data from "../data/albums.json";
import { AlbumName } from "./children/AlbumName";

export const Albums = () => {
  // Save data in a variabel
  const { albums } = data;

  // This is an arrow function that iterates all album items and passing them down to child components
  // Parentheses around the JSX element act as an implicit return

  /**
   * AlbumName -> name & external_urls.spotify
   * ArtistName -> artist.name, artist
   */
  const renderAlbums = albums.items.map(({ id, name, external_urls }) => (

    <AlbumName key={id} name={name} external_urls={external_urls.spotify}/>
  
  ));

  return (
      <section className="album-container">{renderAlbums}</section>
  );
};



// I apologize for any confusion. In JavaScript's arrow functions, 
// if the function body consists of a single statement, you can omit
//  the curly braces {} and the return keyword. In your case, since you have a 
//  single statement in the arrow function's body (returning the JSX element), 
//  you can simplify it like this:

// This syntax is possible because the parentheses around the JSX element 
// act as an implicit return. It's a concise way of writing the same 
// logic with less code. Feel free to use this syntax if you find it more readable.