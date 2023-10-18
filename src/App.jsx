import { Album } from "./components/Album";
import data from "./data.json";

export const App = () => {
  return (
    <div className="main-body">
      {/* 
      // Call Header component here
       */}
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
