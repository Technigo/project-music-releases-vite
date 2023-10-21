import { Album } from "./components/Album";
import { Header } from './components/Header';
import data from "./data.json";

export const App = () => {
  return (
    <div className="main-body">
      <Header text="New Albums & Singles"/>
      <div className="album-collection">
        {data.albums.items.map((album) => {
          return (
            <div key={album.id} className="album">
              <Album album={album} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
