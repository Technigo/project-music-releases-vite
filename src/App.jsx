import data from "./data.json";
import { Album } from "./components/Album.jsx";
import { Header } from "./components/Header.jsx";

export const App = () => {
  const albums = data.albums.items;

  // The contents that are actually rendered via Main.jsx onto the Virtual Dom. The map-method is used here to go through each object in the array. The component Albums takes in the data and adds in the correct value into the propNames image, name and artist. Header is appended first, since I don't want this to render more than once.
  return (
    <>
      <div className="card">
        <Header />
        <div className="card-content">
          {albums.map((album) => (
            <Album album={album} key={album.id} />
          ))}
        </div>
      </div>
    </>
  );
};

