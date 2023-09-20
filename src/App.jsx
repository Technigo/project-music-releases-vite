import data from "./data.json";
import "./app.css";
import { Header } from "./components/Header/Header.jsx";
//import { Album } from "./components/Albumsqaure/Album";

export const App = () => {
  const albums = data.albums.items;
  console.log(albums);

  const artists = albums.map(
    (album) => album.artists)
    console.log(artists)

    return (
      <>
      <Header />
      </>
    )
  }

 