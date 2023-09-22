import playlistData from "../../stretched-goal.json";
import { EditorPicks } from "./Playlists/EditorPicks.jsx";
import { Playlists } from "./Playlists/Playlists.jsx";
import "./playlist.css";

export const RenderPlaylist = () => {
  const playlists = playlistData.playlists.items;

  return (
    <aside className="playlist-sidebar">
            <EditorPicks playlistName={playlistData.message} />
            <Playlists playlists={playlists}/>
    </aside>
  )
}