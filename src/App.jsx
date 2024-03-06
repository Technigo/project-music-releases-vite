import data from "./data.json";
// import {Header} from "./Header.jsx";
import { Album } from "./Album.jsx";

//console.log(data);

export const App = () => {
  const albums = data.albums.items;
  const renderAlbums = albums.map(({ artists, images, name }, index) => (
    <Album key={index} coverImages={images} albumName={name} artists={artists} />
  ));
  return <div>{renderAlbums}</div>;
};
