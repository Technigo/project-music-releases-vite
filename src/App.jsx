import data from "./data.json";
import { Album } from "./components/Album/Album";

console.log(data);

export const App = () => {
  return (
  <div className="App">
    <Album albumsArray={data.albums.items} />
  </div>
  );
};
