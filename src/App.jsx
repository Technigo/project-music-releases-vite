import data from "./data.json"
import { Header } from "./components/Header";
import  { Album } from "./components/Album";
import "./index.css";



console.log(data);

export const App = () => {
  const albums = data.albums.items;
  return (
  <div className="app">
    <Header/>
    <div className="albumContainer">
      {albums.map((album) => (
        <Album key={album.id} albumData={album}/>
      ))}
    </div>
  </div>
  );
};


export default App;
