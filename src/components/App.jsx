import data from "../data.json";
import "./app.css";
import { AlbumCard } from "./AlbumCards/Album/AlbumCard.jsx";
import { Header } from "./Hero/Header.jsx";

export const App = () => {
  const albumData = data.albums.items;
  console.log(albumData);

  // The contents that are actually rendered via Main.jsx onto the Virtual Dom. The map-method is used here to go through each object in the array. The component Albums takes in the data and adds in the correct value into the propNames image, name and artist. Header is appended first, since I don't want this to render more than once.
  return (
    <>
      <Header />
        <div className="album-card">
            {albumData.map((album) => (
              <AlbumCard fullAlbum={album} key={album.id} />
            ))}
        </div>
    </>
  );
};

