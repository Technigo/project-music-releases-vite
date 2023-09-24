import { Description } from "./Description/Description";
import { PlaylistName } from "./PlaylistName/PlaylistName";
import { PlaylistImage } from "./PlaylistImage/PlaylistImage";
import "./Playlist.css";

export const Playlist = ({ playlistData }) => {
  // console.log(playlistData);

  const playlistItems = playlistData.playlists.items;
  // console.log(playlistItems);

  return (
    <>
      <h2>
        Popular playlists <br></br>
        <span>{playlistData.message}</span>
      </h2>
      <div className="playlist-wrapper">
        {playlistItems.map((playlistInfo) => {
          // console.log(`Individual playlist info`, playlistInfo);
          return (
            <div
              className="playlist-container small-card-wrapper"
              key={playlistInfo.id}
            >
              <PlaylistImage playlistCover={playlistInfo} />
              <PlaylistName playlistName={playlistInfo} />
              <Description playlistDescription={playlistInfo} />
            </div>
          );
        })}
      </div>
    </>
  );
};
