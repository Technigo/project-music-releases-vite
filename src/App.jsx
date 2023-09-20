//Imports
import data from "./data.json";
import { Album } from "./components/Album.jsx";
import { Header } from "./components/Header.jsx";

//Exporting App.jsx 
export const App = () => {
  const albums = data.albums.items; //Extracting album data

  // Rendering JSX. Map method.
  return (
    <>
      <Header />
      <section className="album-wrapper">
        {albums.map((album) => (
          <Album album={album} key={album.id} />
        ))}
      </section>
    </>
  );
};