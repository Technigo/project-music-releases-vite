import data from "./data.json";
import { Header } from "./Components/Header";
import { CoverImage } from "./Components/AlbumInfo/CoverImage";
import { Album } from "./Components/AlbumInfo/Album.jsx";
import { Artist } from "./Components/AlbumInfo/Artist.jsx";

export const App = () => {
  const albumList = data.albums.items;
  console.log(albumList);
  return (
    <>
      <Header />
      <div className="container">
        {albumList.map((album) => {
          return (
            <div key={album.id} className="album-container">
              <CoverImage className="album-cover" album={album} />         
              <Album className="album" album={album} />
              <Artist className="artist" album={album} />
            </div>
          )
        })}
      </div>
    </>
  );  
};
