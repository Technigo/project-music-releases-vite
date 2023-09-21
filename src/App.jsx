import { Header } from "./components/Header.jsx";
import { MusicCard } from "./components/MusicCard.jsx";
import data from "./data.json";

console.log(data);


const albumList = () => {
  const albumData = data.albums.items;
  return albumData.map((album) => (
    <MusicCard
      key={album.id}
      artistName={album.artists.name}
      externalUrl={album.external_urls.spotify}  //When you click on the album name and artist it should take you tp the spotify page
      imageUrl={album.images[0].url}
      albumName={album.name}
    />
  ));
};

export const App = () => {
  return (
    <>
      <Header />
      {albumList()}
    </>);
};

