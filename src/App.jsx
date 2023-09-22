//Imports
import data from "./data.json";
import { Album } from "./components/Album.jsx";
import { Header } from "./components/Header.jsx";

//Exporting App.jsx 
export const App = () => {
  const albums = data.albums.items; //Extracting album data

  // Rendering JSX. Map and key.
  return (
    <>
      <Header />
      <section className="album-wrapper">
        {albums.map((album) => ( //Mapping over the albums array.
          <Album album={album} key={album.id} /> //Renders Album component for each album, passes the album data as a prop and assigns a unique key.
        ))}
      </section>
    </>
  );
};