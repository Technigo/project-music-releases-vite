import data from "./data.json";
import { Header } from "./Components/Header";
import { CoverImage } from "./Components/AlbumInfo/CoverImage";
import { Album } from "./Components/AlbumInfo/Album.jsx";
import { Artist } from "./Components/AlbumInfo/Artist.jsx";

console.log(data);

export const App = () => {
  const albumList = data.albums.items;
  return (
    <>
      <Header />
      <div className="container">
        {albumList.map((album) => {
          return (
            <div key={album.id} className="album-container">
              <CoverImage className="albumCover" cover={album} />
              <Album className="album" albumName={album} />
              <Artist className="artist" artistName={album} />
            </div>
          )
        })}
      </div>
    </>
  );  
};
