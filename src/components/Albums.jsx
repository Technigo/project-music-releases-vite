import { albums } from "../data.json";
import { AlbumCover } from "./AlbumCover.jsx";
import { Album } from "./Album.jsx"
import { Artist } from "./Artist.jsx";
import { Icons } from "./Icons.jsx";
import "./styling/Albums.css";

export const Albums = () => {
  return (
    <div className="albums-container">
      <div className="albums-grid">
        {albums.items.map(({ name, id, artists, images, external_urls }) => (
          <div key={id} className="albums-card">
            <div className="album-content">
              <AlbumCover images={images} />
              <Icons />
            </div>
            <div className="artist-content">
              <Album name={name} externalUrl={external_urls.spotify} />
              <Artist artists={artists} />
            </div>

          </div>
        ))}
      </div>
    </div >
  );
};

