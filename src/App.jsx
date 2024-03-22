import { Album } from "./components/Album";
import { Header } from "./components/Header";
import data from "./data.json";

console.log(data);

export const App = () => {
  const albumItems = data.albums.items

  return (
    <div className="container">
      <Header />
      <div>
        {albumItems.map((album) => (
          <Album albumData={album} key={album.id}/>
        ))}
      </div>
    </div>
  )
};
