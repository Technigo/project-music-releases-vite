import "./Playlist.css";
import { playlists } from "../data/playlists.json";
import { CoverImage } from "./Album/CoverImage";
import { AlbumName } from "./Album/AlbumName";
import { AlbumDescription } from "./Album/AlbumDescription";
import { PlayIcons } from "./Album/PlayIcons";

export const Playlist = () => {
  const imageUrl = playlists.items[2].images[0].url;
  const artistName = playlists.items[2].name;

  // Mapping playlists to send data to child components
  const renderPlaylists = playlists.items.map(
    ({ id, images, name, external_urls, description }) => (
      <div className="playlist-item" key={id}>
        <CoverImage images={images[0].url} />
        <div className="playlist-info">
          <AlbumName name={name} external_urls={external_urls} />
          <AlbumDescription description={description} />
        </div>
      </div>
    )
  );

  return (
    <section className="section__playlist">
      <h2>Playlist</h2>
      <div className="playlist-container">
        <div className="playlist-items">{renderPlaylists}</div>

        <div className="new-release">
          <p className="new-music">🎧 New Music Released</p>
          <p className="artist-name">{artistName}</p>
          <img src={imageUrl} alt="Playlist Image" />
        </div>
      </div>
    </section>
  );
};
