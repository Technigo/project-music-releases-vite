import data from "./data.json";
import { Header } from "./components/Header";
import { Album } from "./components/Album/Album";

console.log("data", data);

export const App = () => {
  // made a constant of the actual album data array and log for info
  const albumData = data.albums.items;
  console.log("albumData", albumData);

  return (
    <>
    <Header />
    {albumData.map((album) => (<Album key={album.id} {...album}></Album>))}
    </>
  );
};
