import data from "./data.json";
console.log(data);
import { Header } from "./components/Header";
import { Album } from "./components/Album";

console.log(data);

export const App = () => {
  const albumsData = data.albums.items;
  console.log(albumsData);

  return (
    <>
      <Header />
      <Album />
    </>
  );
};
