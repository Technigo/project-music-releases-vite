// Imports the necessary information from the other files
import data from "./data.json";
import Header from "./components/Header/Header";
import { Album } from "./components/Album/Album";

console.log(data);

// The 'App' component is the main entry point of the application. It renders the 'Album' component, passing it an array of album objects as the 'albumsArray' prop. The div serves as a container for the content of the application.
export const App = () => {
  return (
  <div className="App">
    <Header />
    <Album albumsArray={data.albums.items} />
  </div>
  );
};
