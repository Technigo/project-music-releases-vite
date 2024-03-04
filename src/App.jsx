import data from "./data.json";
import { Header } from "./Header.jsx";
import { Album } from "./Album components/Album.jsx";

console.log(data);

export const App = () => {
  return (
    <div>
      <Header />
      <Album albumType={data.albums.items[0].album_type} />
    </div>
  );
};
