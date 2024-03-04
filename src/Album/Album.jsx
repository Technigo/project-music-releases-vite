import "./Album.css";

import { ArtistNames } from "../ArtistName/ArtistName";
import { AlbumName } from "../Album/AlbumName/AlbumName";
import { CoverImage } from "../Album/CoverImage/CoverImage";

export const Album = ({ albumsArray }) => {
  return (
    <section className="album-container">
      {albumsArray.map((MappedAlbum) => (
        <div className="album-card" key={MappedAlbum.id}>
          <CoverImage coverImage={MappedAlbum.images[0].url} />
          <AlbumName
            albumName={MappedAlbum.name}
            albumURL={MappedAlbum.external_urls.spotify}
          />
          <ArtistNames
            artistsArray={MappedAlbum.artists}
            artistURL={MappedAlbum.external_urls.spotify}
          />
        </div>
      ))}
    </section>
  );
};
