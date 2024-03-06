import "./Albums.css";
import data from "../data/albums.json";
import { AlbumName } from "./children/AlbumName";
import { App } from "../App";

export const Albums = () => {
  const { albums } = data;
   // det här funka
  //save data into variable
  const renderAlbums = albums.items.map(({ id, name }) => {
    console.log(name); // det här funka
    <AlbumName name={name} key={id} />;
  });

  return <div>{renderAlbums}</div>;
};
//console.log(albums);

// Get album name from albums data.json

// Send album name as a prop to child AlbumName (component)

//<div>
//  <AlbumName albumName={albums.name}/>
// </div>
