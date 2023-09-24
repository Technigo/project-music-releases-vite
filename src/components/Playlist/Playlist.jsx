import { Description } from "./Description/Description";
import { PlaylistName } from "./PlaylistName/PlaylistName";
import { PlaylistImage } from "./PlaylistImage/PlaylistImage";
import "./Playlist.css";

export const Playlist = ({ playlistData }) => {
  console.log(playlistData);

  const playlistItems = playlistData.playlists.items;
  console.log(playlistItems);

  return (
    <aside className="sidebar-wrapper">
      {playlistItems.map((playlistInfo) => {
        console.log(`Individual playlist info`, playlistInfo);
        <div className="playlist-container" key={playlistInfo.id}>
          <PlaylistImage playlistCover={playlistInfo} />
          {/* <PlaylistName playlistName={playlistInfo} />
          <Description listDescription={playlistInfo} /> */}
        </div>;
      })}
    </aside>
  );
};
