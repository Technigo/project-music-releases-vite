import "./AlbumList.css";
import { AlbumName } from "../AlbumContent/AlbumName";
import { ArtistName } from "../AlbumContent/ArtistName";
import { CoverImage } from "../AlbumContent/CoverImage";
import { albums } from "../../data/albums.json";

export const AlbumList = () => {
  // Seperate singles and albums in two seperate arrays
  const allSingles = albums.items.filter(
    (album) => album.album_type === "single"
  );

  const allAlbums = albums.items.filter(
    (album) => album.album_type !== "single"
  );

  const renderAlbums = (allMusic) =>
    allMusic.map(({ id, name, images, artists, external_urls }) => (
      <div key={id} className="album__list">
        <CoverImage images={images[1].url} typeOfList={"album"} />
        <AlbumName name={name} external_urls={external_urls} />
        <ArtistName artists={artists} />
      </div>
    ));

  return (
    <section className="section__album">
      <div className="single-wrapper">
        <h2>New singles</h2>
        {/* Passing single array to renderSingles */}
        <div className="single-container">{renderAlbums(allSingles)}</div>
      </div>

      <div className="album-wrapper">
        <h2>New albums</h2>
        {/* Passing album array to renderAlbums */}
        <div className="album-container">{renderAlbums(allAlbums)}</div>
      </div>
    </section>
  );
};
