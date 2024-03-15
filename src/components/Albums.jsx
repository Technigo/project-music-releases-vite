import "./Albums.css";
import data from "../data/albums.json";
import { AlbumName } from "./children/AlbumName";
import { ArtistName } from "./children/ArtistName";
import { AlbumCover } from "./children/AlbumCover";

export const Albums = () => {
  // Save data in a variabel
  const { albums } = data;
  const renderAlbums = albums.items.map(
    ({ id, name, external_urls, images, artists }) => (
      <div className="album-items" key={id}>
        <AlbumCover images={images[1].url} />
        <AlbumName name={name} external_urls={external_urls.spotify} />
        <ArtistName
          name={artists[0].name}
          external_urls={artists[0].external_urls.spotify}
        />
      </div>
    )
  );
  return (
    <main>
      <section className="album-container">{renderAlbums}</section>
    </main>
  );
};
