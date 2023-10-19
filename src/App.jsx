import data from "./data.json";
import { CoverImage } from "./design/CoverImage.jsx";
import { Header } from "./design/Header.jsx";
import { ArtistName } from "./design/ArtistName";

export const App = () => {
  const albums = data.albums;

  const renderAlbums = () => {
    albums.items[0].artists[0].name;
    albums.items[0].artists[0].type;
  };
  return (
    <div>
      <h1>
        <Header />
        <CoverImage />
        <ArtistName />
      </h1>
    </div>
  );
};
export default App;

/*import data from "./data.json";

console.log(data);

export const App = () => {
  return <div>Find me in src/app.jsx!</div>;
};*/
