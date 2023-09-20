import { CoverImage } from "./CoverImage.jsx";
import { ArtistName } from "./ArtistName.jsx";
import { AlbumName } from "./AlbumName.jsx";
import './Album.css';

export const Album = ({ items }) => {
  console.log(items.albums.items);

  let albums = items.albums.items;
  console.log(albums);
  return (
    <section className="album-wrapper">
      <div className="album-grid">
      {albums.map((singleItem) => {
        console.log("log singleItem:", singleItem);
        return (
          <div className="album" key={singleItem.id}>
            <CoverImage singleCoverItem={singleItem} />
            <AlbumName singleAlbumItem={singleItem} />
            <ArtistName singleArtistItem={singleItem} />
          </div>
        );
      })}
      </div>
    </section>
  );
};
