import { Playlists } from "./Playlists/Playlists.jsx";
import "./playlist.css";

export const RenderPlaylist = ({ playlistData }) => {

  return (
    <>
        <section className="playlist-section">
            <Playlists playlists={playlistData}/>
        </section>
    </>
  )
}