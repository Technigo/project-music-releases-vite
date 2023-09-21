import data from "./data.json";
import { Header } from "./Components/Header";
import { AlbumCover } from "./Components/AlbumInfo/AlbumCover";
import { AlbumName } from "./Components/AlbumInfo/AlbumName.jsx";
import { Artist } from "./Components/AlbumInfo/Artist.jsx";

export const App = () => {
  const albumList = data.albums.items;
  return (
    <>
      <Header />
      <div className="container">
        {albumList.map((album) => {
          return (
            <div key={album.id} className="album-container">
              <AlbumCover className="album-cover" album={album} />         
              <AlbumName className="album" album={album} />
              <Artist className="artist" album={album} />
            </div>
          )
        })}
      </div>
    </>
  );  
};
