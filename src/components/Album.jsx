import { CoverImage } from "./CoverImage/CoverImage.jsx";
import { ArtistName } from "./ArtistName/ArtistName.jsx";
import { AlbumName } from "./AlbumName/AlbumName.jsx";
import "./Album.css";

export const Album = ({ data }) => {
  const albums = data.albums.items;
  console.log(albums);

  return (
    <main className="wrapper">
      {albums.map((eachItems) => {
        console.log(eachItems);
        return (
          <div className="album-container" key={eachItems.id}>
            <CoverImage albumCover={eachItems} />
            <AlbumName albumSingleName={eachItems} />
            <ArtistName artistNameS={eachItems} />
          </div>
        );
      })}
    </main>
  );
};
