import "./Album.css";

import { ArtistNames } from "../ArtistName/ArtistName";
import { AlbumName } from "../Album/AlbumName/AlbumName";
import { CoverImage } from "../Album/CoverImage/CoverImage";

export const Album = ({ albumsArray }) => {
  return (
    <section className="album-container">
      {albumsArray.map((MappedOutItem) => (
        <div className="album-card" key={MappedOutItem.id}>
          <AlbumName
            AlbumName={MappedOutItem.name}
            albumURL={MappedOutItem.external_urls.spotify}
          />
          <ArtistNames
            artistsArray={MappedOutItem.artists}
            artistURL={MappedOutItem.external_urls.spotify}
          />
          <CoverImage coverImage={MappedOutItem.images[0].url} />
        </div>
      ))}
    </section>
  );
};
