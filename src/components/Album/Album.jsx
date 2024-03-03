import "./Album.css";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";

export const Album = (data) => {
  const albums = data.data.albums.items;

  return (
    <section className="section__album">
      {albums &&
        albums.map((album) => (
          <div className="album__list" key={album.id}>
            <AlbumName title={album.name} />
            <ArtistName artists={album.artists} />
            {/* <CoverImage images={album.images} /> */}
          </div>
        ))}
    </section>
  );
};
