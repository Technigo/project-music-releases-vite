import "./PlayList.css";
import { playlists } from "../../data/playlists.json";
import { CoverImage } from "../AlbumContent/CoverImage";
import { AlbumName } from "../AlbumContent/AlbumName";
import { AlbumDescription } from "../AlbumContent/AlbumDescription";
import { PlayIcons } from "../AlbumContent/PlayIcons";

export const PlayList = () => {
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
        <PlayIcons />
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
