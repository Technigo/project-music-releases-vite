import "./Album.css";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";

export const Album = (data) => {
  const albums = data.data.albums.items;
  console.log(albums);
  return (
    <section className="section__album">
      {albums &&
        albums.map((album) => (
          <div className="album__list" key={album.id}>
            <CoverImage album={album} />
            <AlbumName album={album} />
            <ArtistName artists={album.artists} />
          </div>
        ))}
    </section>
  );
};
