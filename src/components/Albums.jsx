import "./Albums.css";
import data from "../data/albums.json";
import { AlbumName } from "./children/AlbumName";
import { ArtistName } from "./children/ArtistName";


export const Albums = () => {
  // Save data in a variabel
  const { albums } = data;

  // This is an arrow function that iterates all album items and passing them down to child components
  // Parentheses around the JSX element act as an implicit return
  /**
   * AlbumName -> name & external_urls.spotify
   * ArtistName -> artist.name, artist
   */
  const renderAlbums = albums.items.map(({ id, name, external_urls, artists }) => (
    // Vi behöver omsluta alla dessa element i en div med ett unikt id
    <div className="album-items" key={id}>
      <AlbumName name={name} external_urls={external_urls.spotify} />
      <ArtistName name={artists[0].name} />
    </div>

  ));

  return <section className="album-container">{renderAlbums}</section>;
};
